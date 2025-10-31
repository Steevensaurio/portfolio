import { useState, useEffect } from 'react'

function App() {

  const [activeSection, setActiveSection] = useState('inicio');
  const [menuOpen, setMenuOpen] = useState(false);

  const sections = [
    { id: 'inicio', title: 'Inicio' },
    { id: 'servicios', title: 'Servicios' },
    { id: 'portfolio', title: 'Portfolio' },
    { id: 'testimonios', title: 'Testimonios' },
    { id: 'contacto', title: 'Contacto' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Navegación fija */}
       <nav className="fixed top-0 left-0 right-0 bg-slate-900 shadow-md z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="text-lg sm:text-xl font-bold text-white">
              <span className='text-blue-500'>Dev </span>Steeven
            </div>

            {/* Menú Desktop */}
            <ul className="hidden md:flex space-x-1">
              {sections.map((section) => (
                <li key={section.id}>
                  <button
                    onClick={() => scrollToSection(section.id)}
                    className={`px-3 lg:px-4 py-2 rounded-lg transition-all duration-300 text-sm lg:text-base ${
                      activeSection === section.id
                        ? 'bg-cyan-500 text-white font-semibold'
                        : 'text-gray-300 hover:bg-slate-700'
                    }`}
                  >
                    {section.title}
                  </button>
                </li>
              ))}
            </ul>

            {/* Botón hamburguesa móvil */}
            <button 
              className="md:hidden text-white p-2"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Menú móvil desplegable */}
          {menuOpen && (
            <div className="md:hidden pb-4">
              <ul className="flex flex-col space-y-2">
                {sections.map((section) => (
                  <li key={section.id}>
                    <button
                      onClick={() => scrollToSection(section.id)}
                      className={`w-full text-left px-4 py-2 rounded-lg transition-all duration-300 ${
                        activeSection === section.id
                          ? 'bg-cyan-500 text-white font-semibold'
                          : 'text-gray-300 hover:bg-slate-700'
                      }`}
                    >
                      {section.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </nav>

      {/* Contenido de las secciones */}
      <div className="pt-16">
        <section id="inicio" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-950 via-slate-950 to-indigo-950">
          <div className="text-center text-white">
            <h1 className="text-6xl font-bold mb-4">BIENVENIDO A MI PORTFOLIO</h1>
            <p className="text-2xl">Steeven Maila</p>
            <img src="" alt="" />
          </div>
        </section>

        <section id="servicios" className="min-h-screen flex items-center justify-center bg-slate-900">
          <div className="max-w-4xl px-4">
            <h2 className="text-5xl font-bold text-white mb-8">Nuestros Servicios</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {['Desarrollo Web', 'Diseño UI/UX', 'Consultoría'].map((servicio, i) => (
                <div key={i} className="p-6 bg-slate-800 rounded-lg shadow-md hover:shadow-xl transition-shadow border border-slate-700">
                  <h3 className="text-xl font-semibold mb-2 text-cyan-400">{servicio}</h3>
                  <p className="text-gray-300">Soluciones profesionales adaptadas a tus necesidades.</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="portfolio" className="min-h-screen flex items-center justify-center bg-slate-950">
          <div className="max-w-4xl px-4">
            <h2 className="text-5xl font-bold text-white mb-8">Portfolio</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="bg-slate-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow border border-slate-700">
                  <div className="h-48 bg-gradient-to-br from-indigo-400 to-pink-400"></div>
                  <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2 text-white">Proyecto {item}</h3>
                    <p className="text-gray-300">Descripción del proyecto realizado con éxito.</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="testimonios" className="min-h-screen flex items-center justify-center bg-slate-900">
          <div className="max-w-4xl px-4">
            <h2 className="text-5xl font-bold text-white mb-8">Testimonios</h2>
            <div className="space-y-6">
              {['María García', 'Juan Pérez', 'Ana López'].map((nombre, i) => (
                <div key={i} className="p-6 bg-slate-800 rounded-lg border border-slate-700">
                  <p className="text-gray-300 italic mb-4">
                    "Excelente trabajo, muy profesionales y atentos a los detalles. Recomendado al 100%."
                  </p>
                  <p className="font-semibold text-cyan-400">{nombre}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contacto" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-950 to-indigo-950">
          <div className="text-center text-white px-4">
            <h2 className="text-5xl font-bold mb-8">Contáctanos</h2>
            <p className="text-xl mb-4">¿Tienes un proyecto en mente?</p>
            <button className="px-8 py-3 bg-white text-purple-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Enviar mensaje
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App

import { useMemo, useState } from 'react';
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Server,
  Terminal,
  Database,
  Zap,
  MessageSquare,
  Facebook,
  Smartphone,
  Menu,
  X,
} from 'lucide-react';
import {
  ABOUT_HIGHLIGHTS,
  HERO_SOCIAL_LINKS,
  NAV_ITEMS,
  PROJECTS,
  SKILLS,
} from './data/portfolioData';
import { usePortfolioScroll } from './hooks/usePortfolioScroll';

const ICONS = {
  Github,
  Linkedin,
  Mail,
  Server,
  Zap,
  MessageSquare,
  Facebook,
  Smartphone,
};

const SECTION_IDS = NAV_ITEMS.map((item) => item.toLowerCase());

function SectionHeading({ title, subtitle }) {
  return (
    <div className="text-center mb-12 sm:mb-16">
      <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-4 text-white tracking-tighter">{title}</h2>
      <div className="h-px w-24 bg-white mx-auto mb-4"></div>
      {subtitle ? <p className="text-gray-400 text-base sm:text-lg md:text-xl tracking-wide">{subtitle}</p> : null}
    </div>
  );
}

export default function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { activeSection, scrollY, isScrolled } = usePortfolioScroll(SECTION_IDS);

  const socialLinks = useMemo(
    () => HERO_SOCIAL_LINKS.map((item) => ({ ...item, Icon: ICONS[item.icon] })),
    [],
  );

  const aboutHighlights = useMemo(
    () => ABOUT_HIGHLIGHTS.map((item) => ({ ...item, Icon: ICONS[item.icon] })),
    [],
  );

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({ top: elementPosition, behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
      <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
            transform: `translateY(${scrollY * 0.2}px)`,
          }}
        />
      </div>

      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-20 left-10 w-64 h-64 border border-white/10 rounded-full"
          style={{ transform: `translate(${scrollY * 0.1}px, ${scrollY * 0.05}px)` }}
        />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 border border-white/10"
          style={{
            transform: `rotate(${scrollY * 0.05}deg) translate(${-scrollY * 0.1}px, ${-scrollY * 0.05}px)`,
          }}
        />
      </div>

      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-black/95 backdrop-blur-xl border-b border-white/10 py-3' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <button
              onClick={() => scrollToSection('home')}
              className="text-xl sm:text-2xl font-bold text-white hover:text-gray-300 transition-all duration-300 tracking-wider"
            >
              <span className="hidden sm:inline">&lt;</span>
              NADER
              <span className="hidden sm:inline"> /&gt;</span>
            </button>

            <div className="hidden md:flex gap-8 lg:gap-12">
              {NAV_ITEMS.map((item) => {
                const sectionId = item.toLowerCase();
                return (
                  <button
                    key={item}
                    onClick={() => scrollToSection(sectionId)}
                    className={`relative text-sm font-medium transition-all duration-300 group ${
                      activeSection === sectionId ? 'text-white' : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    {item.toUpperCase()}
                    <span
                      className={`absolute -bottom-1 left-0 h-0.5 bg-white transition-all duration-300 ${
                        activeSection === sectionId ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                    ></span>
                  </button>
                );
              })}
            </div>

            <button
              onClick={() => setMobileMenuOpen((open) => !open)}
              className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          <div className={`md:hidden transition-all duration-300 overflow-hidden ${mobileMenuOpen ? 'max-h-96 mt-4' : 'max-h-0'}`}>
            <div className="flex flex-col gap-4 py-4 border-t border-white/10">
              {NAV_ITEMS.map((item) => {
                const sectionId = item.toLowerCase();
                return (
                  <button
                    key={item}
                    onClick={() => scrollToSection(sectionId)}
                    className={`text-left px-4 py-2 rounded-lg transition-all duration-300 ${
                      activeSection === sectionId ? 'bg-white/10 text-white' : 'text-gray-400 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    {item.toUpperCase()}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 relative">
        <div className="text-center max-w-6xl relative z-10 w-full">
          <div className="mb-8 sm:mb-12">
            <div className="mb-6 sm:mb-8 inline-block relative">
              <div className="absolute inset-0 bg-white/5 blur-3xl rounded-full animate-pulse"></div>
              <Terminal className="text-white mx-auto relative" size={60} />
            </div>

            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black mb-4 sm:mb-6 text-white tracking-tighter leading-none">
              NADER
              <br className="sm:hidden" />
              <span className="sm:inline"> </span>MOHAMED
            </h1>

            <div className="h-px w-32 sm:w-48 bg-white mx-auto mb-4 sm:mb-6"></div>

            <div className="text-xl sm:text-2xl md:text-3xl mb-4 sm:mb-6 font-light tracking-widest">
              <span className="text-white">BACKEND DEVELOPER</span>
            </div>

            <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-2 sm:mb-3 font-light max-w-3xl mx-auto px-4">
              Building scalable server-side solutions with <span className="text-white font-medium">Spring Boot</span> &{' '}
              <span className="text-white font-medium">NestJS</span>
            </p>
            <p className="text-sm sm:text-base md:text-lg text-gray-500 mb-2 sm:mb-3 px-4">
              🚀 Learning <span className="text-white font-medium">Flutter</span> for mobile development
            </p>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-8 sm:mb-10 px-4">
              🎓 Computer Science Student @ Mansoura University, Egypt
            </p>
          </div>

          <div className="flex gap-3 sm:gap-4 justify-center mb-8 sm:mb-12 flex-wrap px-4">
            {socialLinks.map(({ Icon, link, label }) => (
              <a
                key={label}
                href={link}
                target={label !== 'Email' ? '_blank' : undefined}
                rel={label !== 'Email' ? 'noopener noreferrer' : undefined}
                className="p-3 sm:p-4 bg-white/5 border border-white/10 hover:bg-white hover:text-black transition-all duration-300 hover:scale-110 group"
                aria-label={label}
              >
                <Icon size={24} className="sm:w-7 sm:h-7" />
              </a>
            ))}
          </div>

          <a
            href="https://github.com/NaderMohamed325"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 sm:px-10 py-3 sm:py-4 bg-white text-black hover:bg-black hover:text-white border-2 border-white font-bold text-sm sm:text-base md:text-lg transition-all duration-300 hover:scale-105 tracking-wider"
          >
            VIEW MY WORK
          </a>
        </div>
      </section>

      <section id="about" className="min-h-screen py-20 sm:py-32 px-4 sm:px-6 lg:px-8 relative flex items-center">
        <div className="max-w-6xl mx-auto w-full relative z-10">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-12 sm:mb-16 text-center text-white tracking-tighter">
            ABOUT ME
          </h2>
          <div className="h-px w-24 bg-white mx-auto mb-12 sm:mb-16"></div>

          <div className="border border-white/20 p-6 sm:p-8 lg:p-10 bg-white/5 backdrop-blur-sm">
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 sm:mb-10 leading-relaxed font-light">
              I'm an aspiring software engineer currently studying at Mansoura University in Egypt. My passion lies in
              building robust backend systems and exploring low-level software concepts. Currently expanding my skills
              into mobile development with <span className="text-white font-medium">Flutter</span>.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
              {aboutHighlights.map(({ Icon, title, desc }) => (
                <div
                  key={title}
                  className="flex items-start gap-4 group border border-white/10 p-4 sm:p-6 hover:border-white/30 hover:bg-white/5 transition-all duration-300"
                >
                  <div className="p-2 sm:p-3 bg-white/10 border border-white/20 group-hover:bg-white group-hover:text-black transition-all duration-300 flex-shrink-0">
                    <Icon size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg sm:text-xl font-bold text-white mb-2 tracking-wide">{title.toUpperCase()}</h4>
                    <p className="text-sm sm:text-base text-gray-400 leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="min-h-screen py-20 sm:py-32 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <SectionHeading title="BACKEND PROJECTS" subtitle="Real-time applications & distributed systems" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {PROJECTS.map((project) => (
              <div
                key={project.title}
                className="border border-white/20 p-6 sm:p-8 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-white/40 transition-all duration-300 group"
              >
                <div className="flex justify-between items-start mb-6">
                  <Database className="text-white group-hover:scale-110 transition-transform" size={32} />
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 border border-white/20 hover:bg-white hover:text-black transition-all duration-300"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold mb-3 text-white tracking-wide">{project.title.toUpperCase()}</h3>
                <p className="text-gray-400 mb-6 text-sm sm:text-base leading-relaxed">{project.desc}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs sm:text-sm border border-white/20 text-white font-mono hover:bg-white hover:text-black transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="min-h-screen py-20 sm:py-32 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <SectionHeading title="TECH STACK" subtitle="Backend frameworks, languages & tools" />

          <div className="flex flex-wrap gap-3 sm:gap-4 justify-center">
            {SKILLS.map((skill) => (
              <div
                key={skill}
                className="px-4 sm:px-6 py-2 sm:py-3 border border-white/20 bg-white/5 hover:bg-white hover:text-black transition-all duration-300 hover:scale-105 cursor-pointer group"
              >
                <span className="text-sm sm:text-base font-mono font-semibold tracking-wide">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 relative">
        <div className="text-center max-w-4xl relative z-10 w-full">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 sm:mb-8 text-white tracking-tighter">
            LET'S BUILD SOMETHING
          </h2>
          <div className="h-px w-24 bg-white mx-auto mb-8 sm:mb-12"></div>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-10 sm:mb-12 leading-relaxed font-light px-4">
            Need a backend developer? Let's discuss your next project and create robust solutions together.
          </p>

          <div className="flex gap-4 sm:gap-6 justify-center flex-wrap px-4">
            <a
              href="mailto:nnader@std.mans.edu.eg"
              className="px-6 sm:px-10 py-3 sm:py-4 bg-white text-black hover:bg-black hover:text-white border-2 border-white font-bold text-sm sm:text-base md:text-lg transition-all duration-300 hover:scale-105 tracking-wider"
            >
              EMAIL ME
            </a>
            <a
              href="https://www.linkedin.com/in/nadermohamed325"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 sm:px-10 py-3 sm:py-4 border-2 border-white text-white hover:bg-white hover:text-black font-bold text-sm sm:text-base md:text-lg transition-all duration-300 hover:scale-105 tracking-wider"
            >
              LINKEDIN
            </a>
          </div>
        </div>
      </section>

      <footer className="py-8 sm:py-10 text-center border-t border-white/20 bg-black relative z-10">
        <p className="text-gray-500 text-xs sm:text-sm font-mono tracking-wider px-4">
          © 2025 NADER MOHAMED • BACKEND DEVELOPER • MANSOURA UNIVERSITY
        </p>
      </footer>
    </div>
  );
}

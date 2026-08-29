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
  ArrowRight,
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
      <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-100 tracking-tight">{title}</h2>
      <p className="mt-4 text-slate-400 text-base sm:text-lg md:text-xl">{subtitle}</p>
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
    <div className="min-h-screen text-slate-100 relative overflow-x-hidden app-background">
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-20 -left-20 h-80 w-80 rounded-full bg-fuchsia-500/20 blur-[90px]"
          style={{ transform: `translate(${scrollY * 0.08}px, ${scrollY * 0.05}px)` }}
        />
        <div
          className="absolute top-1/2 -right-24 h-96 w-96 rounded-full bg-cyan-500/20 blur-[110px]"
          style={{ transform: `translate(${-scrollY * 0.1}px, ${scrollY * 0.03}px)` }}
        />
        <div
          className="absolute -bottom-24 left-1/3 h-72 w-72 rounded-full bg-violet-500/20 blur-[100px]"
          style={{ transform: `translate(${scrollY * 0.04}px, ${-scrollY * 0.07}px)` }}
        />
      </div>

      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-slate-950/80 backdrop-blur-xl border-b border-white/10 py-3 shadow-[0_6px_30px_rgba(2,6,23,0.45)]'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <button
              onClick={() => scrollToSection('home')}
              className="text-xl sm:text-2xl font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-300 to-cyan-300"
            >
              &lt;NADER /&gt;
            </button>

            <div className="hidden md:flex gap-3 lg:gap-4 rounded-full px-3 py-2 border border-white/10 bg-white/5 backdrop-blur-xl">
              {NAV_ITEMS.map((item) => {
                const sectionId = item.toLowerCase();
                return (
                  <button
                    key={item}
                    onClick={() => scrollToSection(sectionId)}
                    className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                      activeSection === sectionId
                        ? 'bg-white text-slate-950 shadow-lg shadow-white/20'
                        : 'text-slate-300 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {item}
                  </button>
                );
              })}
            </div>

            <button
              onClick={() => setMobileMenuOpen((open) => !open)}
              className="md:hidden text-white p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

          <div className={`md:hidden transition-all duration-300 overflow-hidden ${mobileMenuOpen ? 'max-h-96 mt-4' : 'max-h-0'}`}>
            <div className="flex flex-col gap-2 py-3 border-t border-white/10">
              {NAV_ITEMS.map((item) => {
                const sectionId = item.toLowerCase();
                return (
                  <button
                    key={item}
                    onClick={() => scrollToSection(sectionId)}
                    className={`text-left px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                      activeSection === sectionId
                        ? 'bg-white text-slate-950'
                        : 'text-slate-300 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    {item}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 relative">
        <div className="text-center max-w-6xl relative z-10 w-full">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-cyan-300/20 bg-cyan-300/10 text-cyan-200 text-sm">
            <Terminal size={16} />
            Open to Backend & Full-Stack Opportunities
          </div>

          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black mb-6 tracking-tight leading-[0.95]">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-300 via-slate-100 to-cyan-300">
              NADER MOHAMED
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-slate-300 mb-2 font-light max-w-3xl mx-auto px-4">
            Building scalable server-side solutions with <span className="text-cyan-200 font-semibold">Spring Boot</span> &{' '}
            <span className="text-fuchsia-200 font-semibold">NestJS</span>
          </p>
          <p className="text-sm sm:text-base md:text-lg text-slate-400 mb-2 px-4">
            🚀 Learning <span className="text-slate-200 font-medium">Flutter</span> for mobile development
          </p>
          <p className="text-sm sm:text-base md:text-lg text-slate-500 mb-10 px-4">
            🎓 Computer Science Student @ Mansoura University, Egypt
          </p>

          <div className="flex gap-3 sm:gap-4 justify-center mb-10 flex-wrap px-4">
            {socialLinks.map(({ Icon, link, label }) => (
              <a
                key={label}
                href={link}
                target={label !== 'Email' ? '_blank' : undefined}
                rel={label !== 'Email' ? 'noopener noreferrer' : undefined}
                className="icon-pill"
                aria-label={label}
              >
                <Icon size={22} className="sm:w-6 sm:h-6" />
              </a>
            ))}
          </div>

          <a
            href="https://github.com/NaderMohamed325"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button"
          >
            View My Work <ArrowRight size={18} />
          </a>
        </div>
      </section>

      <section id="about" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto w-full relative z-10">
          <SectionHeading
            title="ABOUT ME"
            subtitle="I design resilient backend systems and keep expanding into mobile and distributed architectures."
          />

          <div className="glass-panel p-6 sm:p-8 lg:p-10">
            <p className="text-lg sm:text-xl md:text-2xl text-slate-300 mb-8 sm:mb-10 leading-relaxed font-light">
              I'm an aspiring software engineer currently studying at Mansoura University in Egypt. My passion lies in
              building robust backend systems and exploring low-level software concepts. Currently expanding my skills
              into mobile development with <span className="text-cyan-200 font-medium">Flutter</span>.
            </p>

            <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
              {aboutHighlights.map(({ Icon, title, desc }) => (
                <div key={title} className="feature-card">
                  <div className="feature-icon">
                    <Icon size={22} />
                  </div>
                  <div>
                    <h4 className="text-lg sm:text-xl font-bold text-slate-100 mb-2 tracking-wide">{title}</h4>
                    <p className="text-sm sm:text-base text-slate-400 leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <SectionHeading title="PROJECTS" subtitle="Real-time applications, APIs, and distributed backend systems." />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {PROJECTS.map((project) => (
              <div key={project.title} className="project-card">
                <div className="flex justify-between items-start mb-6">
                  <div className="feature-icon">
                    <Database size={22} />
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl border border-white/20 text-slate-200 hover:text-slate-950 hover:bg-white transition-all duration-300"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <ExternalLink size={18} />
                  </a>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold mb-3 text-slate-100">{project.title}</h3>
                <p className="text-slate-400 mb-6 text-sm sm:text-base leading-relaxed">{project.desc}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="tech-pill">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <SectionHeading title="TECH STACK" subtitle="Frameworks, languages, data stores, and tools I use in production workflows." />

          <div className="glass-panel p-6 sm:p-8 flex flex-wrap gap-3 sm:gap-4 justify-center">
            {SKILLS.map((skill) => (
              <div key={skill} className="tech-pill text-sm sm:text-base font-semibold">
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-center relative z-10 glass-panel p-8 sm:p-12">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 tracking-tight text-slate-100">Let's Build Something</h2>
          <p className="text-lg sm:text-xl md:text-2xl text-slate-300 mb-10 leading-relaxed font-light">
            Need a backend developer? Let's discuss your next project and create robust solutions together.
          </p>

          <div className="flex gap-4 sm:gap-6 justify-center flex-wrap">
            <a href="mailto:nnader@std.mans.edu.eg" className="cta-button">
              Email Me
            </a>
            <a
              href="https://www.linkedin.com/in/nadermohamed325"
              target="_blank"
              rel="noopener noreferrer"
              className="outline-button"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      <footer className="py-8 sm:py-10 text-center border-t border-white/10 bg-slate-950/40 relative z-10">
        <p className="text-slate-500 text-xs sm:text-sm font-mono tracking-wider px-4">
          © 2025 NADER MOHAMED • BACKEND DEVELOPER • MANSOURA UNIVERSITY
        </p>
      </footer>
    </div>
  );
}

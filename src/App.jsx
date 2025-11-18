import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code, Server, Terminal, Database, Zap, MessageSquare, Facebook, Smartphone } from 'lucide-react';

export default function Portfolio() {
    const [activeSection, setActiveSection] = useState('home');
    const [scrollY, setScrollY] = useState(0);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    const projects = [
        {
            title: "Social Media Platform",
            desc: "A sophisticated social media backend platform",
            tech: ["NestJS", "Socket.IO", "WebSockets", "Redis"],
            link: "https://github.com/NaderMohamed325/social_media",
            gradient: "from-purple-500/20 to-pink-500/20"
        },
        {
            title: "Neo Client",
            desc: "Neo Client is a lightweight and colorful HTTP command-line client written in Rust",
            tech: ["Rust"],
            link: "https://github.com/NaderMohamed325/neo_client",
            gradient: "from-orange-500/20 to-red-500/20"
        },
        {
            title: "Spring Boot Microservices",
            desc: "Distributed backend system with service discovery",
            tech: ["Spring Boot", "Docker", "Kubernetes", "PostgreSQL"],
            link: "https://github.com/NaderMohamed325",
            gradient: "from-green-500/20 to-emerald-500/20"
        },
        {
            title: "ALX Django Learn Lab",
            desc: "A multi-project repository showcasing Django and Django REST Framework (DRF) concepts",
            tech: ["Django", "DRF", "JWT"],
            link: "https://github.com/NaderMohamed325/Alx_DjangoLearnLab",
            gradient: "from-blue-500/20 to-cyan-500/20"
        }
    ];

    const skills = [
        { name: "Spring Boot", color: "from-green-400 to-emerald-500" },
        { name: "NestJS", color: "from-red-400 to-pink-500" },
        { name: "Node.js", color: "from-green-500 to-lime-500" },
        { name: "Express.js", color: "from-gray-400 to-slate-500" },
        { name: "Django", color: "from-green-600 to-teal-600" },
        { name: "Flutter", color: "from-blue-400 to-cyan-500" },
        { name: "Java", color: "from-orange-500 to-red-600" },
        { name: "JavaScript", color: "from-yellow-400 to-orange-500" },
        { name: "Rust", color: "from-orange-600 to-red-700" },
        { name: "C++", color: "from-blue-500 to-indigo-600" },
        { name: "PostgreSQL", color: "from-blue-600 to-indigo-700" },
        { name: "MongoDB", color: "from-green-500 to-emerald-600" },
        { name: "MySQL", color: "from-blue-400 to-sky-600" },
        { name: "Redis", color: "from-red-500 to-rose-600" },
        { name: "Docker", color: "from-blue-500 to-cyan-600" },
        { name: "Kubernetes", color: "from-blue-400 to-purple-500" },
        { name: "WebSockets", color: "from-purple-400 to-pink-500" },
        { name: "Socket.IO", color: "from-gray-700 to-slate-800" },
        { name: "Microservices", color: "from-indigo-400 to-purple-500" },
        { name: "REST APIs", color: "from-cyan-400 to-blue-500" },
        { name: "RabbitMQ", color: "from-orange-500 to-amber-600" },
        { name: "Git", color: "from-orange-600 to-red-600" }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white relative overflow-hidden">
            {/* Animated gradient orbs */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div
                    className="absolute w-96 h-96 bg-blue-500/30 rounded-full blur-3xl"
                    style={{
                        left: `${mousePosition.x / 20}px`,
                        top: `${mousePosition.y / 20}px`,
                        transition: 'all 0.3s ease-out'
                    }}
                />
                <div
                    className="absolute w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
                    style={{
                        right: `${mousePosition.x / 30}px`,
                        bottom: `${mousePosition.y / 30}px`,
                        transition: 'all 0.5s ease-out'
                    }}
                />
            </div>

            {/* Navigation */}
            <nav className="fixed top-0 w-full bg-slate-950/30 backdrop-blur-xl z-50 border-b border-white/10">
                <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                    <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                        &lt;Nader /&gt;
                    </h1>
                    <div className="flex gap-8">
                        {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item) => (
                            <button
                                key={item}
                                onClick={() => setActiveSection(item.toLowerCase())}
                                className="relative hover:text-blue-400 transition-colors text-gray-300 group"
                            >
                                {item}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 group-hover:w-full transition-all duration-300"></span>
                            </button>
                        ))}
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="min-h-screen flex items-center justify-center px-6 pt-20 relative">
                {/* Animated grid */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.5) 1px, transparent 1px)`,
                        backgroundSize: '60px 60px',
                        transform: `translateY(${scrollY * 0.5}px)`
                    }}></div>
                </div>

                <div className="text-center max-w-5xl relative z-10">
                    <div className="mb-12">
                        <div className="mb-6 inline-block relative">
                            <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full"></div>
                            <Terminal className="text-blue-400 mx-auto relative" size={80} />
                        </div>
                        <h2 className="text-7xl md:text-9xl font-black mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
                            Nader Mohamed
                        </h2>
                        <div className="text-3xl md:text-4xl mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent font-bold">
                Backend Developer
              </span>
                        </div>
                        <p className="text-xl text-gray-300 mb-3 font-light">
                            Building scalable server-side solutions with <span className="text-green-400 font-semibold">Spring Boot</span> & <span className="text-red-400 font-semibold">NestJS</span>
                        </p>
                        <p className="text-lg text-gray-400 mb-4">
                            🚀 Learning <span className="text-blue-400 font-semibold">Flutter</span> for mobile development
                        </p>
                        <p className="text-lg text-gray-500 mb-10">
                            🎓 Computer Science Student @ Mansoura University, Egypt
                        </p>
                    </div>

                    <div className="flex gap-4 justify-center mb-12">
                        {[
                            { Icon: Github, link: "https://github.com/NaderMohamed325", label: "GitHub", color: "from-gray-600 to-slate-700" },
                            { Icon: Linkedin, link: "https://www.linkedin.com/in/nadermohamed325", label: "LinkedIn", color: "from-blue-600 to-blue-700" },
                            { Icon: Facebook, link: "https://www.facebook.com/Nader3250", label: "Facebook", color: "from-blue-500 to-indigo-600" },
                            { Icon: Mail, link: "mailto:nnader@std.mans.edu.eg", label: "Email", color: "from-purple-600 to-pink-600" }
                        ].map(({ Icon, link, label, color }) => (
                            <a
                                key={label}
                                href={link}
                                target={label !== "Email" ? "_blank" : undefined}
                                rel={label !== "Email" ? "noopener noreferrer" : undefined}
                                className={`p-4 bg-gradient-to-br ${color} rounded-2xl hover:scale-110 transition-all shadow-lg hover:shadow-2xl group relative overflow-hidden`}
                                aria-label={label}
                            >
                                <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors"></div>
                                <Icon size={28} className="text-white relative z-10" />
                            </a>
                        ))}
                    </div>

                    <a
                        href="https://github.com/NaderMohamed325"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-10 py-5 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 rounded-2xl font-bold text-lg transition-all hover:scale-105 shadow-2xl hover:shadow-blue-500/50 relative overflow-hidden group"
                    >
                        <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                        <span className="relative z-10">View My Work</span>
                    </a>
                </div>
            </section>

            {/* About Section */}
            <section className="min-h-screen py-32 px-6 relative flex items-center">
                <div className="max-w-6xl mx-auto w-full">
                    <h3 className="text-6xl font-black mb-16 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                        About Me
                    </h3>

                    <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-10 border border-white/10 shadow-2xl">
                        <p className="text-2xl text-gray-200 mb-10 leading-relaxed font-light">
                            I'm an aspiring software engineer currently studying at Mansoura University in Egypt.
                            My passion lies in building robust backend systems and exploring low-level software concepts.
                            Currently expanding my skills into mobile development with <span className="text-blue-400 font-semibold">Flutter</span>.
                        </p>

                        <div className="grid md:grid-cols-2 gap-8">
                            {[
                                {
                                    Icon: Zap,
                                    title: "Real-time Systems",
                                    desc: "Experienced in building real-time applications with NestJS WebSockets & Socket.IO",
                                    color: "from-yellow-400 to-orange-500"
                                },
                                {
                                    Icon: MessageSquare,
                                    title: "Event-Driven Architecture",
                                    desc: "Implemented live notifications, chat systems, and event-driven microservices",
                                    color: "from-green-400 to-emerald-500"
                                },
                                {
                                    Icon: Server,
                                    title: "Microservices",
                                    desc: "Expanding with Spring Boot microservices & distributed backend systems",
                                    color: "from-blue-400 to-cyan-500"
                                },
                                {
                                    Icon: Smartphone,
                                    title: "Mobile Development",
                                    desc: "Currently learning Flutter to build beautiful cross-platform mobile applications",
                                    color: "from-purple-400 to-pink-500"
                                }
                            ].map(({ Icon, title, desc, color }, idx) => (
                                <div key={idx} className="flex items-start gap-4 group">
                                    <div className={`p-3 bg-gradient-to-br ${color} rounded-2xl group-hover:scale-110 transition-transform shadow-lg flex-shrink-0`}>
                                        <Icon className="text-white" size={28} />
                                    </div>
                                    <div>
                                        <h4 className="text-2xl font-bold text-white mb-2">{title}</h4>
                                        <p className="text-gray-300 leading-relaxed">{desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section className="min-h-screen py-32 px-6 relative">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h3 className="text-6xl font-black mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                            Backend Projects
                        </h3>
                        <p className="text-gray-300 text-xl">Real-time applications & distributed systems</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {projects.map((project, idx) => (
                            <div
                                key={idx}
                                className={`bg-gradient-to-br ${project.gradient} backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-white/30 transition-all hover:scale-105 shadow-2xl hover:shadow-3xl group relative overflow-hidden`}
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>

                                <div className="flex justify-between items-start mb-6 relative z-10">
                                    <Database className="text-white group-hover:scale-110 transition-transform" size={40} />
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 bg-white/10 rounded-xl hover:bg-white/20 transition-colors"
                                    >
                                        <ExternalLink size={24} className="text-white" />
                                    </a>
                                </div>

                                <h4 className="text-3xl font-bold mb-3 text-white relative z-10">{project.title}</h4>
                                <p className="text-gray-200 mb-6 text-lg relative z-10">{project.desc}</p>

                                <div className="flex flex-wrap gap-2 relative z-10">
                                    {project.tech.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-sm text-white font-semibold hover:bg-white/20 transition-colors"
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

            {/* Skills Section */}
            <section className="min-h-screen py-32 px-6 relative">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h3 className="text-6xl font-black mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                            Tech Stack
                        </h3>
                        <p className="text-gray-300 text-xl">Backend frameworks, languages & tools</p>
                    </div>

                    <div className="flex flex-wrap gap-4 justify-center">
                        {skills.map((skill, idx) => (
                            <div
                                key={idx}
                                className="group relative"
                            >
                                <div className={`absolute inset-0 bg-gradient-to-r ${skill.color} rounded-2xl blur-lg opacity-50 group-hover:opacity-100 transition-opacity`}></div>
                                <div className="relative px-6 py-4 bg-slate-900/90 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-white/30 transition-all hover:scale-110 cursor-pointer">
                  <span className={`text-lg font-bold bg-gradient-to-r ${skill.color} bg-clip-text text-transparent`}>
                    {skill.name}
                  </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="min-h-screen flex items-center justify-center px-6 relative">
                <div className="text-center max-w-3xl">
                    <h3 className="text-6xl font-black mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                        Let's Build Something
                    </h3>
                    <p className="text-2xl text-gray-200 mb-12 leading-relaxed font-light">
                        Need a backend developer ? Let's discuss your next project and create robust solutions together.
                    </p>

                    <div className="flex gap-6 justify-center flex-wrap">
                        <a
                            href="mailto:nnader@std.mans.edu.eg"
                            className="px-10 py-5 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 rounded-2xl font-bold text-lg transition-all hover:scale-105 shadow-2xl hover:shadow-blue-500/50 group relative overflow-hidden"
                        >
                            <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                            <span className="relative z-10">Email Me</span>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/nadermohamed325"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-10 py-5 bg-white/5 backdrop-blur-sm border border-white/20 hover:bg-white/10 hover:border-white/40 rounded-2xl font-bold text-lg transition-all hover:scale-105"
                        >
                            Connect on LinkedIn
                        </a>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-10 text-center border-t border-white/10 bg-slate-950/50 backdrop-blur-xl relative">
                <p className="text-gray-400 font-light">© 2025 Nader Mohamed • Backend Developer • Mansoura University</p>
            </footer>
        </div>
    );
}


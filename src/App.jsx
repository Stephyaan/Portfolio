import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Mail, ExternalLink, Download, Code, Server, Database, ChevronRight, Sparkles } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#030712] overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-primary-600/20 mix-blend-screen filter blur-[100px] animate-blob" />
        <div className="absolute top-[20%] right-[-10%] w-[35vw] h-[35vw] rounded-full bg-purple-600/20 mix-blend-screen filter blur-[100px] animate-blob animation-delay-2000" />
        <div className="absolute bottom-[-20%] left-[20%] w-[45vw] h-[45vw] rounded-full bg-indigo-600/20 mix-blend-screen filter blur-[100px] animate-blob animation-delay-4000" />
      </div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      {/* Navbar */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#030712]/80 backdrop-blur-xl border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          <a href="#" className="font-display text-2xl font-bold tracking-tighter text-white z-10 flex items-center gap-2">
            STEPHY<span className="text-primary-500">.</span>
          </a>
          <div className="hidden md:flex gap-8 text-sm font-medium text-gray-400 z-10">
            {['About', 'Experience', 'Projects', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-white transition-colors relative group">
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>
          <button className="md:hidden text-white z-10 p-2">
            <div className="space-y-1.5">
              <span className="block w-6 h-0.5 bg-current"></span>
              <span className="block w-5 h-0.5 bg-current"></span>
              <span className="block w-6 h-0.5 bg-current"></span>
            </div>
          </button>
        </div>
      </nav>

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 md:px-12 min-h-screen flex items-center">
          <div className="max-w-7xl mx-auto w-full">
            <motion.div 
              initial="hidden" animate="visible" variants={staggerContainer}
              className="max-w-4xl"
            >
              <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-sm font-medium mb-6">
                <Sparkles size={16} /> Open to Work
              </motion.div>
              
              <motion.h1 variants={fadeInUp} className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-[1.1] tracking-tight">
                Computer Science Engineer <br />
                <span className="text-gradient">Cloud Enthusiast.</span>
              </motion.h1>
              
              <motion.p variants={fadeInUp} className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl leading-relaxed font-light">
                Hi, I'm <span className="text-white font-medium">Stephy Ann Biju</span>. I bridge the gap between software development and scalable cloud architectures. Currently specializing in DevOps, Cloud Computing, and AI.
              </motion.p>
              
              <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
                <a href="#projects" className="px-8 py-4 bg-white text-black hover:bg-gray-100 font-semibold rounded-full transition-all hover:scale-105 active:scale-95 flex items-center gap-2">
                  View Work <ChevronRight size={18} />
                </a>
                <a href="#" className="px-8 py-4 glass-card hover:bg-white/10 text-white font-semibold rounded-full transition-all hover:scale-105 active:scale-95 flex items-center gap-2">
                  <Download size={18} /> Resume
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Bento Grid: About & Skills */}
        <section id="about" className="py-24 px-6 md:px-12 relative">
          <div className="max-w-7xl mx-auto">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-12 flex items-center gap-4 font-display">
                About Me.
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(200px,auto)]">
                {/* Intro Card */}
                <div className="md:col-span-2 glass-card rounded-3xl p-8 md:p-12 flex flex-col justify-center">
                  <h3 className="text-2xl font-display font-bold text-white mb-4">My Journey</h3>
                  <div className="text-gray-400 space-y-4 font-light leading-relaxed text-lg">
                    <p>
                      I am a B.Tech student at Amal Jyothi College of Engineering with a CGPA of 8.65.
                    </p>
                    <p>
                      My journey started with a fascination for how applications are deployed and scaled. Since then, I've dived deep into DevOps, AWS, and Generative AI to build intelligent and robust systems.
                    </p>
                  </div>
                </div>

                {/* Tech Stack Cards */}
                <div className="glass-card rounded-3xl p-8 flex flex-col items-start justify-center group hover:border-primary-500/50 transition-colors">
                  <div className="p-4 bg-primary-500/10 rounded-2xl mb-6 text-primary-400 group-hover:scale-110 transition-transform">
                    <Cloud size={32} />
                  </div>
                  <h4 className="text-xl font-display font-bold text-white mb-2">Cloud & DevOps</h4>
                  <p className="text-gray-400">AWS, Docker, CI/CD, Kubernetes</p>
                </div>

                <div className="glass-card rounded-3xl p-8 flex flex-col items-start justify-center group hover:border-purple-500/50 transition-colors">
                  <div className="p-4 bg-purple-500/10 rounded-2xl mb-6 text-purple-400 group-hover:scale-110 transition-transform">
                    <Code size={32} />
                  </div>
                  <h4 className="text-xl font-display font-bold text-white mb-2">Development</h4>
                  <p className="text-gray-400">Python, C, JavaScript, React</p>
                </div>

                <div className="md:col-span-2 glass-card rounded-3xl p-8 flex flex-col justify-center group hover:border-indigo-500/50 transition-colors overflow-hidden relative">
                  <div className="relative z-10 flex flex-col h-full justify-center">
                    <div className="p-4 bg-indigo-500/10 rounded-2xl w-fit mb-6 text-indigo-400 group-hover:scale-110 transition-transform">
                      <Database size={32} />
                    </div>
                    <h4 className="text-xl font-display font-bold text-white mb-2">Data & AI</h4>
                    <p className="text-gray-400 max-w-md">Specializing in SQL, Power BI, Large Language Models (LLMs), and Retrieval-Augmented Generation (RAG).</p>
                  </div>
                  <div className="absolute right-[-10%] bottom-[-20%] w-64 h-64 bg-indigo-500/10 blur-[80px] rounded-full group-hover:bg-indigo-500/20 transition-colors"></div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="py-24 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-12 flex items-center gap-4 font-display">
                Selected Works.
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    title: "Smart Pill Box",
                    category: "IoT & Healthcare",
                    desc: "I2U funded hardware/software integration to assist patients with timely medication.",
                    tech: ["IoT", "C++", "Sensors"],
                    img: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=800&auto=format&fit=crop"
                  },
                  {
                    title: "RAG AI Chatbot",
                    category: "Artificial Intelligence",
                    desc: "A conversational AI agent built using Retrieval-Augmented Generation to answer domain-specific queries.",
                    tech: ["Python", "LLMs", "LangChain"],
                    img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop"
                  },
                  {
                    title: "Data Viz Dashboard",
                    category: "Data Analytics",
                    desc: "Interactive business intelligence dashboard for tracking core metrics and deriving actionable insights.",
                    tech: ["Power BI", "Python", "SQL"],
                    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop"
                  }
                ].map((project, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ y: -10 }}
                    className="glass-card rounded-3xl overflow-hidden group flex flex-col h-full"
                  >
                    <div className="h-56 overflow-hidden relative">
                      <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent z-10 opacity-60" />
                      <img src={project.img} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                      <div className="absolute top-4 left-4 z-20">
                        <span className="px-3 py-1 bg-white/10 backdrop-blur-md text-white text-xs font-semibold tracking-wider rounded-full border border-white/20">
                          {project.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-8 flex flex-col flex-grow">
                      <h3 className="text-2xl font-bold font-display text-white mb-3 group-hover:text-primary-400 transition-colors">{project.title}</h3>
                      <p className="text-gray-400 text-sm mb-6 leading-relaxed flex-grow font-light">
                        {project.desc}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                        {project.tech.map((t, idx) => (
                          <span key={idx} className="px-3 py-1 bg-[#1f2937]/50 border border-white/5 text-gray-300 text-xs rounded-full">
                            {t}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                        <a href="#" className="flex items-center gap-2 text-sm font-medium text-white hover:text-primary-400 transition-colors">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a5.5 5.5 0 0 0-1.5-3.8 5.5 5.5 0 0 0-.1-3.8s-1.2-.4-3.9 1.4a12.8 12.8 0 0 0-7 0C6.2 1.2 5 1.6 5 1.6a5.5 5.5 0 0 0-.1 3.8A5.5 5.5 0 0 0 3 9.2c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4"/><path d="M9 18c-4.5 1.5-5-2.5-7-3"/></svg> Code
                        </a>
                        <a href="#" className="flex items-center gap-2 text-sm font-medium text-white hover:text-primary-400 transition-colors ml-auto">
                          Live Demo <ExternalLink size={18} />
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Experience Timeline */}
        <section id="experience" className="py-24 px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-16 font-display text-center">
                Experience & Education
              </h2>
              
              <div className="space-y-16 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-px before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
                
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-[#030712] bg-primary-500 text-white shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_20px_rgba(99,102,241,0.5)] z-10">
                    <Server size={16} />
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-8 glass-card rounded-3xl hover:border-primary-500/30 transition-colors">
                    <div className="inline-block px-3 py-1 bg-primary-500/10 text-primary-400 text-xs font-semibold rounded-full mb-4">Feb 2026 - Present</div>
                    <h3 className="text-xl font-display font-bold text-white mb-1">DevOps & Cloud Intern</h3>
                    <div className="text-gray-400 text-sm mb-4 font-medium">Nest Technologies</div>
                    <ul className="text-gray-400 text-sm space-y-2 list-none font-light">
                      <li className="flex items-start gap-2"><ChevronRight size={16} className="text-primary-500 shrink-0 mt-0.5" /> Mastering CI/CD pipelines</li>
                      <li className="flex items-start gap-2"><ChevronRight size={16} className="text-primary-500 shrink-0 mt-0.5" /> AWS & cloud-native workflows</li>
                    </ul>
                  </div>
                </div>

                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-[#030712] bg-[#1f2937] text-gray-400 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                    <Database size={16} />
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-8 glass-card rounded-3xl hover:border-gray-500/30 transition-colors">
                    <div className="inline-block px-3 py-1 bg-white/5 text-gray-300 text-xs font-semibold rounded-full mb-4">July 2025</div>
                    <h3 className="text-xl font-display font-bold text-white mb-1">AI & Data Analytics Intern</h3>
                    <div className="text-gray-400 text-sm mb-4 font-medium">IPSR Solutions Ltd</div>
                    <ul className="text-gray-400 text-sm space-y-2 list-none font-light">
                      <li className="flex items-start gap-2"><ChevronRight size={16} className="text-gray-500 shrink-0 mt-0.5" /> Built RAG-based chatbot</li>
                      <li className="flex items-start gap-2"><ChevronRight size={16} className="text-gray-500 shrink-0 mt-0.5" /> Data viz using Power BI</li>
                    </ul>
                  </div>
                </div>

              </div>
            </motion.div>
          </div>
        </section>

        {/* Footer / Contact */}
        <footer id="contact" className="relative py-24 border-t border-white/5 overflow-hidden">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary-600/10 filter blur-[120px] rounded-t-full pointer-events-none"></div>
          
          <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">Let's build something together.</h2>
            <p className="text-gray-400 mb-10 text-lg md:text-xl font-light max-w-2xl mx-auto">
              I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            <a href="mailto:stephyannbiju29@gmail.com" className="inline-flex items-center justify-center px-10 py-5 text-base font-semibold text-black bg-white hover:bg-gray-100 rounded-full transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(255,255,255,0.2)]">
              Say Hello <Mail className="ml-2" size={20} />
            </a>
            
            <div className="mt-20 flex justify-center gap-8">
              <a href="#" className="p-4 glass-card rounded-full text-gray-400 hover:text-white hover:border-white/20 transition-all hover:-translate-y-1">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a5.5 5.5 0 0 0-1.5-3.8 5.5 5.5 0 0 0-.1-3.8s-1.2-.4-3.9 1.4a12.8 12.8 0 0 0-7 0C6.2 1.2 5 1.6 5 1.6a5.5 5.5 0 0 0-.1 3.8A5.5 5.5 0 0 0 3 9.2c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4"/><path d="M9 18c-4.5 1.5-5-2.5-7-3"/></svg>
              </a>
              <a href="#" className="p-4 glass-card rounded-full text-gray-400 hover:text-white hover:border-white/20 transition-all hover:-translate-y-1">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
            </div>
            <p className="mt-12 text-sm text-gray-500 font-light tracking-wide">
              &copy; {new Date().getFullYear()} Stephy Ann Biju. Built with React & Tailwind.
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;

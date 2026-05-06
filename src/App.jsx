import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Mail, ExternalLink, Download, Code, Server, Database, ChevronRight, Sparkles, Cloud } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#ededed] font-sans selection:bg-white/20 selection:text-white">
      {/* Navbar */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${isScrolled ? 'bg-[#0a0a0a]/80 backdrop-blur-md border-white/10 py-4' : 'bg-transparent border-transparent py-6'}`}>
        <div className="max-w-6xl mx-auto px-6 md:px-8 flex items-center justify-between">
          <a href="#" className="font-display text-xl font-medium tracking-tight text-white z-10 hover:text-gray-300 transition-colors">
            Stephy Ann Biju
          </a>
          <div className="hidden md:flex gap-8 text-sm font-medium text-gray-400 z-10">
            {['About', 'Experience', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-white transition-colors">
                {item}
              </a>
            ))}
          </div>
          {/* Mobile Menu Icon */}
          <button className="md:hidden text-white z-10 p-2 opacity-70 hover:opacity-100 transition-opacity">
            <div className="space-y-1.5">
              <span className="block w-5 h-0.5 bg-current"></span>
              <span className="block w-5 h-0.5 bg-current"></span>
            </div>
          </button>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="relative pt-40 pb-20 md:pt-56 md:pb-32 px-6 md:px-8 flex items-center justify-center min-h-[85vh]">
          {/* Subtle top glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-[300px] bg-white/5 blur-[100px] rounded-full pointer-events-none"></div>
          
          <div className="max-w-4xl mx-auto w-full text-center relative z-10">
            <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="flex flex-col items-center">
              <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300 text-xs font-medium mb-8">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                Available for opportunities
              </motion.div>
              
              <motion.div variants={fadeInUp} className="relative mb-6">
                <div className="absolute -inset-x-8 -inset-y-8 bg-white/5 blur-3xl rounded-full -z-10 hidden md:block"></div>
                <h1 className="font-display text-6xl md:text-[6rem] lg:text-[8rem] font-extrabold text-white tracking-tighter leading-[0.9] uppercase">
                  STEPHY ANN <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-600">BIJU</span>
                </h1>
              </motion.div>
              
              <motion.div variants={fadeInUp} className="flex flex-wrap items-center justify-center gap-3 md:gap-6 text-xs md:text-sm text-gray-400 font-bold tracking-[0.2em] uppercase mb-12">
                <span>Computer Science</span>
                <span className="text-white/30 text-lg">★</span>
                <span>Cloud & DevOps</span>
                <span className="text-white/30 text-lg">★</span>
                <span>AI & Data</span>
              </motion.div>
              
              <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 justify-center">
                <a href="#about" className="px-6 py-3 bg-white text-black hover:bg-gray-200 font-medium rounded-md transition-colors flex items-center gap-2 text-sm">
                  Learn More
                </a>
                <a href="#" className="px-6 py-3 bg-transparent border border-white/20 hover:bg-white/5 text-white font-medium rounded-md transition-colors flex items-center gap-2 text-sm">
                  <Download size={16} /> Resume
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* About & Skills Grid */}
        <section id="about" className="py-24 px-6 md:px-8 bg-[#0f0f0f] border-y border-white/5">
          <div className="max-w-6xl mx-auto">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}>
              <h2 className="text-2xl md:text-3xl font-medium text-white mb-12 font-display tracking-tight">
                About & Expertise
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* About Box */}
                <div className="lg:col-span-2 bg-[#141414] border border-white/5 rounded-2xl p-8 hover:border-white/10 transition-colors">
                  <h3 className="text-xl font-display font-medium text-white mb-4">Background</h3>
                  <div className="text-gray-400 space-y-4 font-light leading-relaxed">
                    <p>
                      I am a B.Tech student at Amal Jyothi College of Engineering with a CGPA of 8.65.
                    </p>
                    <p>
                      My journey started with a fascination for how applications are deployed and scaled. Since then, I've dived deep into DevOps, AWS, and Generative AI to build intelligent and robust systems.
                    </p>
                  </div>
                </div>

                {/* Tech Cards */}
                <div className="bg-[#141414] border border-white/5 rounded-2xl p-8 hover:border-white/10 transition-colors group">
                  <Cloud size={28} className="text-gray-300 mb-6 group-hover:text-white transition-colors" />
                  <h4 className="text-lg font-display font-medium text-white mb-2">Cloud & DevOps</h4>
                  <p className="text-gray-500 text-sm">AWS, Docker, CI/CD, Kubernetes</p>
                </div>

                <div className="bg-[#141414] border border-white/5 rounded-2xl p-8 hover:border-white/10 transition-colors group">
                  <Code size={28} className="text-gray-300 mb-6 group-hover:text-white transition-colors" />
                  <h4 className="text-lg font-display font-medium text-white mb-2">Development</h4>
                  <p className="text-gray-500 text-sm">Python, C, JavaScript, React</p>
                </div>

                <div className="lg:col-span-2 bg-[#141414] border border-white/5 rounded-2xl p-8 hover:border-white/10 transition-colors group">
                  <Database size={28} className="text-gray-300 mb-6 group-hover:text-white transition-colors" />
                  <h4 className="text-lg font-display font-medium text-white mb-2">Data & AI</h4>
                  <p className="text-gray-500 text-sm">SQL, Power BI, Large Language Models (LLMs), and Retrieval-Augmented Generation (RAG).</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Selected Works - Kept minimalist */}
        <section id="projects" className="py-24 px-6 md:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
              <h2 className="text-2xl md:text-3xl font-medium text-white mb-12 font-display tracking-tight">
                Selected Projects
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    title: "Smart Pill Box",
                    desc: "Hardware/software integration to assist patients with timely medication.",
                    tech: ["IoT", "C++", "Sensors"],
                  },
                  {
                    title: "RAG AI Chatbot",
                    desc: "Conversational AI agent built using Retrieval-Augmented Generation.",
                    tech: ["Python", "LLMs", "LangChain"],
                  },
                  {
                    title: "Data Viz Dashboard",
                    desc: "Interactive BI dashboard for tracking core metrics and deriving insights.",
                    tech: ["Power BI", "Python", "SQL"],
                  }
                ].map((project, i) => (
                  <motion.div key={i} whileHover={{ y: -5 }} className="bg-[#0a0a0a] border border-white/10 rounded-2xl p-6 flex flex-col hover:border-white/30 transition-colors group">
                    <h3 className="text-lg font-medium font-display text-white mb-3">{project.title}</h3>
                    <p className="text-gray-400 text-sm mb-6 font-light flex-grow">
                      {project.desc}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((t, idx) => (
                        <span key={idx} className="px-2 py-1 bg-white/5 text-gray-400 text-xs rounded-md">
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-4 mt-auto">
                      <a href="#" className="text-gray-500 hover:text-white transition-colors">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a5.5 5.5 0 0 0-1.5-3.8 5.5 5.5 0 0 0-.1-3.8s-1.2-.4-3.9 1.4a12.8 12.8 0 0 0-7 0C6.2 1.2 5 1.6 5 1.6a5.5 5.5 0 0 0-.1 3.8A5.5 5.5 0 0 0 3 9.2c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4"/><path d="M9 18c-4.5 1.5-5-2.5-7-3"/></svg>
                      </a>
                      <a href="#" className="text-gray-500 hover:text-white transition-colors">
                        <ExternalLink size={18} />
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Experience Timeline */}
        <section id="experience" className="py-24 px-6 md:px-8 bg-[#0f0f0f] border-y border-white/5">
          <div className="max-w-4xl mx-auto">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
              <h2 className="text-2xl md:text-3xl font-medium text-white mb-16 font-display tracking-tight text-center">
                Experience
              </h2>
              
              <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-px before:bg-white/10">
                
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-[#0f0f0f] bg-white text-black shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                    <Server size={16} />
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-6 bg-[#141414] border border-white/5 rounded-2xl hover:border-white/20 transition-colors">
                    <div className="text-gray-500 text-xs font-medium mb-2 uppercase tracking-wider">Feb 2026 - Present</div>
                    <h3 className="text-lg font-display font-medium text-white mb-1">DevOps & Cloud Intern</h3>
                    <div className="text-gray-400 text-sm mb-4">Nest Technologies</div>
                    <ul className="text-gray-500 text-sm space-y-2 list-none font-light">
                      <li className="flex items-start gap-2"><span className="text-white shrink-0 mt-0.5">•</span> Mastering CI/CD pipelines</li>
                      <li className="flex items-start gap-2"><span className="text-white shrink-0 mt-0.5">•</span> AWS & cloud-native workflows</li>
                    </ul>
                  </div>
                </div>

                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-[#0f0f0f] bg-[#1f1f1f] text-gray-400 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                    <Database size={16} />
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-6 bg-[#141414] border border-white/5 rounded-2xl hover:border-white/20 transition-colors">
                    <div className="text-gray-500 text-xs font-medium mb-2 uppercase tracking-wider">July 2025</div>
                    <h3 className="text-lg font-display font-medium text-white mb-1">AI & Data Analytics Intern</h3>
                    <div className="text-gray-400 text-sm mb-4">IPSR Solutions Ltd</div>
                    <ul className="text-gray-500 text-sm space-y-2 list-none font-light">
                      <li className="flex items-start gap-2"><span className="text-gray-500 shrink-0 mt-0.5">•</span> Built RAG-based chatbot</li>
                      <li className="flex items-start gap-2"><span className="text-gray-500 shrink-0 mt-0.5">•</span> Data viz using Power BI</li>
                    </ul>
                  </div>
                </div>

              </div>
            </motion.div>
          </div>
        </section>

        {/* Footer / Contact */}
        <footer id="contact" className="py-24 px-6 md:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-display font-medium text-white mb-6 tracking-tight">Let's Connect</h2>
            <p className="text-gray-400 mb-10 text-lg font-light">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>
            <a href="mailto:stephyannbiju29@gmail.com" className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium text-black bg-white hover:bg-gray-200 rounded-md transition-colors">
              Say Hello <Mail className="ml-2" size={16} />
            </a>
            
            <div className="mt-24 flex items-center justify-between border-t border-white/10 pt-8 flex-col md:flex-row gap-4">
              <p className="text-sm text-gray-500 font-light">
                &copy; {new Date().getFullYear()} Stephy Ann Biju.
              </p>
              <div className="flex gap-6">
                <a href="https://github.com/Stephyaan" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a5.5 5.5 0 0 0-1.5-3.8 5.5 5.5 0 0 0-.1-3.8s-1.2-.4-3.9 1.4a12.8 12.8 0 0 0-7 0C6.2 1.2 5 1.6 5 1.6a5.5 5.5 0 0 0-.1 3.8A5.5 5.5 0 0 0 3 9.2c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4"/><path d="M9 18c-4.5 1.5-5-2.5-7-3"/></svg>
                </a>
                <a href="https://www.linkedin.com/in/stephyannbiju/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                </a>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;

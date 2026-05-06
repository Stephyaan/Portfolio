import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink, Download, Code, Server, Cloud, Database } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-indigo-500/30">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/50">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#" className="text-2xl font-bold tracking-tighter text-white">
            STEPHY<span className="text-indigo-500">.</span>
          </a>
          <div className="hidden md:flex gap-8 text-sm font-medium text-slate-400">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#experience" className="hover:text-white transition-colors">Experience</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <div className="space-y-1.5">
              <span className="block w-6 h-0.5 bg-current"></span>
              <span className="block w-6 h-0.5 bg-current"></span>
              <span className="block w-6 h-0.5 bg-current"></span>
            </div>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-48 md:pb-32 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial="hidden" animate="visible" variants={staggerContainer}
            className="max-w-3xl"
          >
            <motion.h2 variants={fadeInUp} className="text-indigo-400 font-medium tracking-wide mb-4">
              HI, I'M STEPHY ANN BIJU
            </motion.h2>
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              CSE Student <br />
              <span className="text-slate-500">Cloud Enthusiast.</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl leading-relaxed">
              I specialize in DevOps, Cloud Computing, and AI. Bridging the gap between software development and scalable cloud architectures.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
              <a href="#contact" className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors shadow-lg shadow-indigo-500/20">
                Get In Touch
              </a>
              <a href="#" className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white font-medium rounded-lg transition-colors border border-slate-700 flex items-center gap-2">
                <Download size={18} /> Resume
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About & Skills */}
      <section id="about" className="py-20 bg-slate-900/50 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}>
            <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-4">
              <span className="w-12 h-[2px] bg-indigo-500"></span> About Me
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="text-slate-400 space-y-4 leading-relaxed">
                <p>
                  I am a Computer Science Engineering student at Amal Jyothi College of Engineering with a CGPA of 8.65.
                </p>
                <p>
                  My journey started with a fascination for how applications are deployed and scaled. Since then, I've dived deep into DevOps, AWS, and Generative AI to build intelligent and robust systems.
                </p>
                <p>
                  I'm currently seeking internship opportunities to apply my knowledge of CI/CD, Cloud architecture, and software development in real-world environments.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-6">Core Technologies</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 hover:border-indigo-500/50 transition-colors">
                    <Cloud className="text-indigo-400 mb-2" />
                    <h4 className="text-white font-medium mb-1">Cloud & DevOps</h4>
                    <p className="text-sm text-slate-500">AWS, Docker, CI/CD</p>
                  </div>
                  <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 hover:border-indigo-500/50 transition-colors">
                    <Code className="text-indigo-400 mb-2" />
                    <h4 className="text-white font-medium mb-1">Languages</h4>
                    <p className="text-sm text-slate-500">Python, C, JavaScript</p>
                  </div>
                  <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 hover:border-indigo-500/50 transition-colors">
                    <Database className="text-indigo-400 mb-2" />
                    <h4 className="text-white font-medium mb-1">Data & AI</h4>
                    <p className="text-sm text-slate-500">SQL, Power BI, LLMs, RAG</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-4">
              <span className="w-12 h-[2px] bg-indigo-500"></span> Selected Projects
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
                  whileHover={{ y: -8 }}
                  className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden group"
                >
                  <div className="h-48 overflow-hidden relative">
                    <div className="absolute inset-0 bg-indigo-500/20 group-hover:bg-transparent transition-colors z-10" />
                    <img src={project.img} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-6">
                    <p className="text-indigo-400 text-xs font-semibold tracking-wider uppercase mb-2">{project.category}</p>
                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-slate-400 text-sm mb-6 leading-relaxed line-clamp-3">
                      {project.desc}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((t, idx) => (
                        <span key={idx} className="px-2.5 py-1 bg-slate-800 text-slate-300 text-xs rounded-md">
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-4 text-slate-400">
                      <a href="#" className="hover:text-white transition-colors"><Github size={20} /></a>
                      <a href="#" className="hover:text-white transition-colors"><ExternalLink size={20} /></a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-20 bg-slate-900/50 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-4">
              <span className="w-12 h-[2px] bg-indigo-500"></span> Experience & Education
            </h2>
            <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-700 before:to-transparent">
              
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-slate-900 bg-indigo-500 text-white shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-lg shadow-indigo-500/50 z-10">
                  <Server size={16} />
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 bg-slate-900 border border-slate-800 rounded-2xl">
                  <div className="text-indigo-400 text-sm font-semibold mb-1">Feb 2026 - Present</div>
                  <h3 className="text-lg font-bold text-white">DevOps & Cloud Intern</h3>
                  <div className="text-slate-400 text-sm mb-3">Nest Technologies</div>
                  <ul className="text-slate-400 text-sm space-y-2 list-disc list-inside">
                    <li>Mastering CI/CD pipelines</li>
                    <li>AWS & cloud-native workflows</li>
                  </ul>
                </div>
              </div>

              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-slate-900 bg-slate-800 text-slate-400 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                  <Database size={16} />
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 bg-slate-900 border border-slate-800 rounded-2xl">
                  <div className="text-indigo-400 text-sm font-semibold mb-1">July 2025</div>
                  <h3 className="text-lg font-bold text-white">AI & Data Analytics Intern</h3>
                  <div className="text-slate-400 text-sm mb-3">IPSR Solutions Ltd</div>
                  <ul className="text-slate-400 text-sm space-y-2 list-disc list-inside">
                    <li>Built RAG-based chatbot</li>
                    <li>Data viz using Power BI</li>
                  </ul>
                </div>
              </div>

            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer id="contact" className="py-12 border-t border-slate-800 bg-slate-950 text-center px-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-6">Let's Connect</h2>
          <p className="text-slate-400 mb-8">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          <a href="mailto:stephyannbiju29@gmail.com" className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg transition-colors">
            Say Hello <Mail className="ml-2" size={16} />
          </a>
          
          <div className="mt-16 flex justify-center gap-6">
            <a href="#" className="text-slate-500 hover:text-white transition-colors">
              <Github size={24} />
            </a>
            <a href="#" className="text-slate-500 hover:text-white transition-colors">
              <Linkedin size={24} />
            </a>
          </div>
          <p className="mt-8 text-sm text-slate-600">
            &copy; {new Date().getFullYear()} Stephy Ann Biju. Built with React & Tailwind.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;

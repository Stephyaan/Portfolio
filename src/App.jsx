import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Mail, ExternalLink, Download, Code, Server, Database, ChevronRight, ChevronLeft, Sparkles, Cloud, Github } from 'lucide-react';

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

const projectsData = [
  {
    title: "Hostel Maintenance & Utility Management",
    desc: "Built and developed a Dockerised, HostelHub, a full-stack web application for digital hostel maintenance management with role-based access. Dockerised the application and hosted it on AWS EC2, ensuring reliable cloud-based availability. Implemented real-time status tracking, worker assignment, and admin analytics dashboard.",
    tech: ["HTML", "CSS", "JavaScript", "Django", "SQLite"],
    repo: "https://github.com/Stephyaan/HostelHub-Hostel-Maintenance-and-Utility-WebApp",
    live: "https://hostel-hub-hostel-maintenance-and-u.vercel.app"
  },
  {
    title: "CloudBlog (MiniBlog)",
    desc: "Designed and developed a responsive blogging web application. Deployed on AWS, containerized using Docker, and managed with Git. Implemented features like blog posting and search functionality.",
    tech: ["HTML", "CSS", "JavaScript", "AWS", "Docker", "Git"],
    repo: "https://github.com/Stephyaan/MiniBlog-Website-AWS-Deployed",
    live: null
  },
  {
    title: "Smart Pill Box",
    desc: "Contributed to the design of an automated healthcare solution for medication adherence, approved for Phase II funding. (I2U 2025 Funded Project)",
    tech: ["Healthcare", "Hardware/Software", "Design"],
    repo: null,
    live: null
  },
  {
    title: "College Website / Web Dev 101",
    desc: "Built and containerized a static website using Docker, gaining hands-on experience in application packaging as a Docker Practice.",
    tech: ["HTML", "CSS", "Docker"],
    repo: "https://github.com/Stephyaan/wd101",
    live: null
  },
  {
    title: "Agricultural Yield Prediction",
    desc: "Data analysis and prediction models for agricultural yield using R programming.",
    tech: ["R", "Data Analysis", "Machine Learning"],
    repo: "https://github.com/Stephyaan/Agricultural_Yield_Prediction_R",
    live: null
  },
  {
    title: "DSA Practice Repository",
    desc: "A structured repository of Data Structures and Algorithms practice and solutions, categorized by difficulty levels.",
    tech: ["Data Structures", "Algorithms", "Problem Solving"],
    repo: "https://github.com/Stephyaan/dsa-practise",
    live: null
  },
  {
    title: "Personal Portfolio",
    desc: "A modern, highly interactive portfolio website featuring 3D animations, custom Framer Motion physics, and glassmorphism UI.",
    tech: ["React", "Vite", "Tailwind CSS", "Framer Motion"],
    repo: "https://github.com/Stephyaan/Portfolio",
    live: "https://stephyannbiju.vercel.app"
  }
];

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeProject, setActiveProject] = useState(0);

  const nextProject = () => setActiveProject((prev) => (prev + 1) % projectsData.length);
  const prevProject = () => setActiveProject((prev) => (prev - 1 + projectsData.length) % projectsData.length);

  // Autoplay functionality for projects slider
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveProject((prev) => (prev + 1) % projectsData.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [activeProject]);

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

              <motion.div variants={fadeInUp} className="flex justify-center gap-5 mt-10">
                <a href="https://github.com/Stephyaan" target="_blank" rel="noopener noreferrer" className="p-3 border border-white/10 rounded-full text-gray-400 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all hover:-translate-y-1">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a5.5 5.5 0 0 0-1.5-3.8 5.5 5.5 0 0 0-.1-3.8s-1.2-.4-3.9 1.4a12.8 12.8 0 0 0-7 0C6.2 1.2 5 1.6 5 1.6a5.5 5.5 0 0 0-.1 3.8A5.5 5.5 0 0 0 3 9.2c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4"/><path d="M9 18c-4.5 1.5-5-2.5-7-3"/></svg>
                </a>
                <a href="https://www.linkedin.com/in/stephyannbiju/" target="_blank" rel="noopener noreferrer" className="p-3 border border-white/10 rounded-full text-gray-400 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all hover:-translate-y-1">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                </a>
                <a href="mailto:stephyannbiju29@gmail.com" className="p-3 border border-white/10 rounded-full text-gray-400 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all hover:-translate-y-1">
                  <Mail size={20} />
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* About, Education & Skills */}
        <section id="about" className="py-24 px-6 md:px-8 bg-[#0f0f0f] border-y border-white/5 relative overflow-hidden">
          <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-white/5 blur-[120px] rounded-full pointer-events-none -translate-y-1/2"></div>
          
          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeInUp}>
              <div className="flex items-center gap-4 mb-12">
                <span className="px-3 py-1 bg-white/10 text-white text-xs font-mono tracking-widest uppercase rounded-full border border-white/20">&lt;about/&gt;</span>
                <h2 className="text-3xl md:text-5xl font-bold text-white font-display tracking-tight">
                  Who I Am
                </h2>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* About Text */}
                <div className="lg:col-span-2 space-y-6">
                  <h3 className="text-2xl md:text-3xl font-display text-white leading-tight">
                    Motivated Computer Science Engineering student passionate about <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-gray-500 italic font-serif">meaningful</span> digital solutions.
                  </h3>
                  <div className="text-gray-400 space-y-4 font-light leading-relaxed text-lg">
                    <p>
                      Motivated and detail oriented Computer Science Engineering student with a strong foundation in programming, data analysis and software development. 
                    </p>
                    <p>
                      Hands-on experience through internships and funded projects in Artificial Intelligence, UI/UX design and web development. Passionate about building practical, user-centric solutions and continuously enhancing technical and problem-solving skills to contribute effectively in real-world software projects.
                    </p>
                  </div>
                </div>

                {/* Quick Info Cards */}
                <div className="flex flex-col gap-4">
                  <div className="p-6 bg-[#141414] border border-white/5 rounded-2xl hover:border-white/20 transition-colors">
                    <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">B.Tech</p>
                    <h4 className="text-white font-medium text-sm">Computer Science Engineering</h4>
                    <p className="text-xs text-gray-400 mt-1">Amal Jyothi College of Engineering</p>
                    <p className="text-[10px] text-gray-500 mt-2 font-mono">2023 - 2027 | CGPA: 8.63</p>
                  </div>
                  
                  <div className="p-6 bg-[#141414] border border-white/5 rounded-2xl hover:border-white/20 transition-colors">
                    <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Higher Secondary</p>
                    <h4 className="text-white font-medium text-sm">Science</h4>
                    <p className="text-xs text-gray-400 mt-1">St. Antony's Public School</p>
                    <p className="text-[10px] text-gray-500 mt-2 font-mono">CBSE | 2023 | 89%</p>
                  </div>
                  
                  <div className="p-6 bg-[#141414] border border-white/5 rounded-2xl hover:border-white/20 transition-colors">
                    <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Secondary Education</p>
                    <h4 className="text-white font-medium text-sm">CBSE</h4>
                    <p className="text-xs text-gray-400 mt-1">St. Antony's Public School</p>
                    <p className="text-[10px] text-gray-500 mt-2 font-mono">2021 | 95%</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Skills & Tools Section */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeInUp} className="mt-24">
              <div className="flex items-center gap-4 mb-12">
                <span className="px-3 py-1 bg-white/10 text-white text-xs font-mono tracking-widest uppercase rounded-full border border-white/20">&lt;skills/&gt;</span>
                <h2 className="text-3xl md:text-5xl font-bold text-white font-display tracking-tight">
                  Tech Stack & Tools
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Languages */}
                <div className="p-8 bg-[#141414] border border-white/5 rounded-2xl">
                  <h3 className="text-xl font-display text-white mb-6 flex items-center gap-3"><Code size={20} className="text-gray-400"/> Programming & Frontend</h3>
                  <div className="flex flex-wrap gap-2">
                    {['Python', 'C', 'JavaScript', 'HTML5', 'CSS3', 'React (Basic)', 'Responsive Design'].map(skill => (
                      <span key={skill} className="px-3 py-1.5 bg-white/5 border border-white/10 text-gray-300 text-sm rounded-md hover:bg-white/10 transition-colors cursor-default">{skill}</span>
                    ))}
                  </div>
                </div>

                {/* Cloud & Data */}
                <div className="p-8 bg-[#141414] border border-white/5 rounded-2xl">
                  <h3 className="text-xl font-display text-white mb-6 flex items-center gap-3"><Database size={20} className="text-gray-400"/> Cloud, Data & Tools</h3>
                  <div className="flex flex-wrap gap-2">
                    {['AWS', 'Docker', 'SQL', 'Power BI', 'Git/GitHub', 'Figma', 'VS Code'].map(skill => (
                      <span key={skill} className="px-3 py-1.5 bg-white/5 border border-white/10 text-gray-300 text-sm rounded-md hover:bg-white/10 transition-colors cursor-default">{skill}</span>
                    ))}
                  </div>
                </div>
                
                {/* Professional Traits */}
                <div className="md:col-span-2 p-6 bg-gradient-to-r from-[#141414] to-[#0a0a0a] border border-white/5 rounded-2xl flex flex-col md:flex-row items-center gap-6">
                  <h3 className="text-lg font-display text-white whitespace-nowrap">Professional Traits:</h3>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-300">
                    <span className="flex items-center gap-1.5 px-3 py-1 bg-white/5 rounded-full border border-white/5"><Sparkles size={14} className="text-green-400"/> Continuous Learner</span>
                    <span className="flex items-center gap-1.5 px-3 py-1 bg-white/5 rounded-full border border-white/5"><Sparkles size={14} className="text-blue-400"/> Proactive Problem Solver</span>
                    <span className="flex items-center gap-1.5 px-3 py-1 bg-white/5 rounded-full border border-white/5"><Sparkles size={14} className="text-yellow-400"/> Agile & Adaptable</span>
                    <span className="flex items-center gap-1.5 px-3 py-1 bg-white/5 rounded-full border border-white/5"><Sparkles size={14} className="text-purple-400"/> Cross-functional Collaboration</span>
                    <span className="flex items-center gap-1.5 px-3 py-1 bg-white/5 rounded-full border border-white/5"><Sparkles size={14} className="text-pink-400"/> Enthusiastic Work Ethic</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Experience Timeline - Official Record Style */}
        <section id="experience" className="py-32 px-6 md:px-8 bg-[#0a0a0a]">
          <div className="max-w-4xl mx-auto">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
              <div className="flex items-center gap-4 mb-16 justify-center">
                <span className="px-3 py-1 bg-white/5 text-gray-400 text-xs font-mono tracking-widest uppercase rounded-full border border-white/10">&lt;experience/&gt;</span>
                <h2 className="text-3xl md:text-5xl font-bold text-white font-display tracking-tight">
                  Official Record
                </h2>
              </div>
              
              <div className="bg-[#0f0f0f] border border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden">
                {/* Decorative top border like a receipt */}
                <div className="absolute top-0 left-0 right-0 h-2 flex justify-between px-2 overflow-hidden opacity-20">
                  {Array.from({ length: 40 }).map((_, i) => (
                    <div key={i} className="w-2 h-2 rounded-full bg-white -mt-1"></div>
                  ))}
                </div>

                <div className="space-y-12 relative before:absolute before:inset-0 before:ml-[1.125rem] before:-translate-x-px before:h-full before:w-px before:bg-white/10 mt-4">
                  
                  {/* Experience 1: Nest Digital */}
                  <div className="relative pl-14 group">
                    <div className="absolute left-0 top-1 w-9 h-9 flex items-center justify-center bg-[#0a0a0a] rounded-full border-2 border-white/20 group-hover:border-white/50 transition-colors">
                      <div className="w-3 h-3 rounded-full bg-white/30 group-hover:bg-white/80 transition-colors"></div>
                    </div>
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-2 gap-2">
                      <h3 className="text-xl font-display font-semibold text-white">DevOps & Cloud Intern</h3>
                      <span className="text-xs font-mono text-gray-500 uppercase tracking-widest">February 2026</span>
                    </div>
                    <h4 className="text-sm font-medium text-gray-400 mb-4 tracking-wide uppercase">Nest Digital</h4>
                    <div className="p-5 bg-white/[0.02] border border-white/5 rounded-xl font-mono text-sm text-gray-400 leading-relaxed group-hover:bg-white/[0.04] transition-colors">
                      <p className="mb-2"><span className="text-gray-600 mr-2">›</span>Deployed full-stack and static web applications using AWS and GitHub Pages.</p>
                      <p className="mb-2"><span className="text-gray-600 mr-2">›</span>Applied Git workflows (branching, commits, push/pull) for efficient version control.</p>
                      <p><span className="text-gray-600 mr-2">›</span>Utilized Docker for containerization and gained hands-on experience in cloud deployment practices.</p>
                    </div>
                  </div>

                  {/* Experience 2: IPSR */}
                  <div className="relative pl-14 group">
                    <div className="absolute left-0 top-1 w-9 h-9 flex items-center justify-center bg-[#0a0a0a] rounded-full border-2 border-white/20 group-hover:border-white/50 transition-colors">
                      <div className="w-3 h-3 rounded-full bg-white/30 group-hover:bg-white/80 transition-colors"></div>
                    </div>
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-2 gap-2">
                      <h3 className="text-xl font-display font-semibold text-white">AI & Data Analytics Intern</h3>
                      <span className="text-xs font-mono text-gray-500 uppercase tracking-widest">July 2025 (1 Month)</span>
                    </div>
                    <h4 className="text-sm font-medium text-gray-400 mb-4 tracking-wide uppercase">IPSR Solutions Ltd</h4>
                    <div className="p-5 bg-white/[0.02] border border-white/5 rounded-xl font-mono text-sm text-gray-400 leading-relaxed group-hover:bg-white/[0.04] transition-colors">
                      <p className="mb-2"><span className="text-gray-600 mr-2">›</span>Worked on Generative AI concepts, Machine Learning models, and RAG-based chatbot development.</p>
                      <p className="mb-2"><span className="text-gray-600 mr-2">›</span>Applied Python and Power BI for data analysis and visualization tasks.</p>
                      <p><span className="text-gray-600 mr-2">›</span>Gained practical exposure to real-world AI workflows and model integration.</p>
                    </div>
                  </div>

                  {/* Experience 3: Cognifyz */}
                  <div className="relative pl-14 group">
                    <div className="absolute left-0 top-1 w-9 h-9 flex items-center justify-center bg-[#0a0a0a] rounded-full border-2 border-white/20 group-hover:border-white/50 transition-colors">
                      <div className="w-3 h-3 rounded-full bg-white/30 group-hover:bg-white/80 transition-colors"></div>
                    </div>
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-2 gap-2">
                      <h3 className="text-xl font-display font-semibold text-white">UI/UX Design Intern</h3>
                      <span className="text-xs font-mono text-gray-500 uppercase tracking-widest">April 2025 (2 Months)</span>
                    </div>
                    <h4 className="text-sm font-medium text-gray-400 mb-4 tracking-wide uppercase">Cognifyz Technologies</h4>
                    <div className="p-5 bg-white/[0.02] border border-white/5 rounded-xl font-mono text-sm text-gray-400 leading-relaxed group-hover:bg-white/[0.04] transition-colors">
                      <p className="mb-2"><span className="text-gray-600 mr-2">›</span>Designed user interfaces with a focus on usability and user experience enhancement.</p>
                      <p><span className="text-gray-600 mr-2">›</span>Created wireframes and improved design flow based on user-centric principles.</p>
                    </div>
                  </div>

                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Advanced 3D Projects Slider */}
        <section id="projects" className="py-32 px-6 md:px-8 bg-[#0f0f0f] border-y border-white/5 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="mb-16 text-center">
              <div className="flex items-center gap-4 justify-center mb-6">
                <span className="px-3 py-1 bg-white/5 text-gray-400 text-xs font-mono tracking-widest uppercase rounded-full border border-white/10">&lt;projects/&gt;</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 font-display tracking-tight">
                Featured Work
              </h2>
            </motion.div>
            
            {/* 3D Slider Container */}
            <motion.div 
              className="relative h-[550px] md:h-[450px] w-full max-w-5xl mx-auto flex items-center justify-center cursor-grab active:cursor-grabbing touch-pan-y" 
              style={{ perspective: '1000px' }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.1}
              onDragEnd={(e, { offset }) => {
                if (offset.x < -50) nextProject();
                else if (offset.x > 50) prevProject();
              }}
            >
              {projectsData.map((project, i) => {
                const offset = (i - activeProject + projectsData.length) % projectsData.length;
                let standardOffset = 0;
                if (offset === 0) standardOffset = 0;
                else if (offset === 1) standardOffset = 1;
                else if (offset === projectsData.length - 1) standardOffset = -1;
                else standardOffset = 2;

                const isActive = standardOffset === 0;
                const isHidden = Math.abs(standardOffset) > 1;

                return (
                  <motion.div
                    key={i}
                    className={`absolute w-full max-w-lg md:max-w-xl bg-[#0a0a0a] rounded-3xl p-8 flex flex-col overflow-hidden group transition-all duration-300 ${isActive ? 'border-2 border-white/20 hover:border-white/80 hover:shadow-[0_0_40px_rgba(255,255,255,0.2)] cursor-default' : 'border border-white/10 cursor-pointer'}`}
                    initial={false}
                    animate={{
                      scale: isActive ? 1 : 0.85,
                      x: `${standardOffset * 70}%`,
                      z: isActive ? 0 : -100,
                      opacity: isHidden ? 0 : (isActive ? 1 : 0.4),
                      zIndex: isActive ? 10 : 5,
                      filter: isActive ? 'blur(0px)' : 'blur(4px)'
                    }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    onClick={() => {
                      if (!isActive) setActiveProject(i);
                    }}
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 blur-3xl rounded-full transition-colors pointer-events-none"></div>
                    
                    <h3 className="text-2xl md:text-3xl font-semibold font-display text-white mb-4 relative z-10">{project.title}</h3>
                    <p className="text-gray-400 text-sm md:text-base mb-8 font-light flex-grow leading-relaxed relative z-10">
                      {project.desc}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-8 relative z-10">
                      {project.tech.map((t, idx) => (
                        <span key={idx} className="px-3 py-1 bg-white/5 border border-white/10 text-gray-300 text-xs rounded-full">
                          {t}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center gap-4 mt-auto pt-6 border-t border-white/5 relative z-10 min-h-[64px]">
                      {project.repo && (
                        <a href={project.repo} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors" onClick={(e) => e.stopPropagation()}>
                          <Github size={16} /> Source Code
                        </a>
                      )}
                      {project.live && (
                        <a href={project.live} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors ml-auto" onClick={(e) => e.stopPropagation()}>
                          View Live <ExternalLink size={16} />
                        </a>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* Certifications & Achievements */}
        <section id="certifications" className="py-24 px-6 md:px-8 bg-[#0a0a0a]">
          <div className="max-w-4xl mx-auto">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
              <div className="flex items-center gap-4 mb-16 justify-center">
                <span className="px-3 py-1 bg-white/5 text-gray-400 text-xs font-mono tracking-widest uppercase rounded-full border border-white/10">&lt;achievements/&gt;</span>
                <h2 className="text-2xl md:text-4xl font-bold text-white font-display tracking-tight text-center">
                  Certifications & Achievements
                </h2>
              </div>
              
              <div className="bg-[#0f0f0f] border border-white/10 rounded-3xl p-8 md:p-12">
                <ul className="space-y-6 text-gray-400 font-light text-sm md:text-base">
                  <li className="flex items-start gap-4 hover:text-white transition-colors group">
                    <span className="text-gray-600 mt-1 group-hover:text-white transition-colors">›</span>
                    <div>
                      <strong className="text-white block mb-0.5">NPTEL Online Certification</strong>
                      Database Management System (IIT Kharagpur)
                    </div>
                  </li>
                  <li className="flex items-start gap-4 hover:text-white transition-colors group">
                    <span className="text-gray-600 mt-1 group-hover:text-white transition-colors">›</span>
                    <div>
                      <strong className="text-white block mb-0.5">Oracle Java Foundation Learner's Certification</strong>
                      Oracle Academy
                    </div>
                  </li>
                  <li className="flex items-start gap-4 hover:text-white transition-colors group">
                    <span className="text-gray-600 mt-1 group-hover:text-white transition-colors">›</span>
                    <div>
                      <strong className="text-white block mb-0.5">Web Developer Bootcamp 2025</strong>
                      Udemy
                    </div>
                  </li>
                  <li className="flex items-start gap-4 hover:text-white transition-colors group">
                    <span className="text-gray-600 mt-1 group-hover:text-white transition-colors">›</span>
                    <div>
                      <strong className="text-white block mb-0.5">Complete Front-End Development Journey</strong>
                      (HTML5, CSS3, JavaScript) - Infosys Springboard
                    </div>
                  </li>
                  <li className="flex items-start gap-4 hover:text-white transition-colors group">
                    <span className="text-gray-600 mt-1 group-hover:text-white transition-colors">›</span>
                    <div>
                      <strong className="text-white block mb-0.5">AI Fundamentals</strong>
                      IBM
                    </div>
                  </li>
                  <li className="flex items-start gap-4 hover:text-white transition-colors group">
                    <span className="text-gray-600 mt-1 group-hover:text-white transition-colors">›</span>
                    <div>
                      <strong className="text-white block mb-0.5">Google Cloud GenAI Certifications</strong>
                      (Vertex AI, LLMs, MLOps, Responsible AI, Transformers)
                    </div>
                  </li>
                  <li className="flex items-start gap-4 hover:text-white transition-colors group">
                    <span className="text-gray-600 mt-1 group-hover:text-white transition-colors">›</span>
                    <div>
                      <strong className="text-white block mb-0.5">Introduction to Agile Development and Scrum</strong>
                      IBM
                    </div>
                  </li>
                  <li className="flex items-start gap-4 hover:text-white transition-colors group">
                    <span className="text-gray-600 mt-1 group-hover:text-white transition-colors">›</span>
                    <div>
                      <strong className="text-white block mb-0.5">DevOps on AWS and Project Management</strong>
                      AWS
                    </div>
                  </li>
                </ul>
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

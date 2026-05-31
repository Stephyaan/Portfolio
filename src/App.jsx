import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, ExternalLink, Download, Code, Server, Database, ChevronRight, ChevronLeft, Sparkles, Cloud, Info, X, Layers, ArrowRight } from 'lucide-react';

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
    category: "Full Stack",
    image: "https://placehold.co/800x600/6C63FF/FFF?text=HostelHub",
    desc: "Built and developed a Dockerised, HostelHub, a full-stack web application for digital hostel maintenance management with role-based access. Dockerised the application and hosted it on AWS EC2, ensuring reliable cloud-based availability. Implemented real-time status tracking, worker assignment, and admin analytics dashboard.",
    fullDescription: "HostelHub is a comprehensive full-stack solution designed to digitize and streamline the maintenance operations within university hostels. Recognizing the inefficiencies of paper-based complaint logs, I architected a role-based platform that allows students to easily log issues, wardens to assign tasks to specific workers, and workers to update task statuses in real-time.",
    features: [
      "Role-Based Access Control (RBAC) for Students, Wardens, and Maintenance Workers.",
      "Real-time status tracking pipeline (Pending -> Assigned -> In Progress -> Resolved).",
      "Interactive Admin Analytics Dashboard to monitor resolution times and pending workload.",
      "Fully containerized environment using Docker for seamless deployment."
    ],
    concepts: [
      "Full-Stack Web Architecture (Django backend + Vanilla JS frontend)",
      "Containerization & Orchestration (Docker)",
      "Cloud Deployment & Infrastructure (AWS EC2)",
      "Relational Database Design (SQLite / PostgreSQL)"
    ],
    tech: ["HTML", "CSS", "JavaScript", "Django", "SQLite", "Docker", "AWS"],
    repo: "https://github.com/Stephyaan/HostelHub-Hostel-Maintenance-and-Utility-WebApp",
    live: "https://hostel-management-ecosystem-stephyaans-projects.vercel.app/"
  },
  {
    title: "CloudBlog (MiniBlog)",
    category: "Cloud",
    image: "https://placehold.co/800x600/FF6584/FFF?text=CloudBlog",
    desc: "Designed and developed a responsive blogging web application. Deployed on AWS, containerized using Docker, and managed with Git. Implemented features like blog posting and search functionality.",
    fullDescription: "CloudBlog is an elegant, responsive platform for authors to publish and manage their articles. It features a robust backend architecture paired with an intuitive front-end, entirely deployed to the cloud. This project was a deep dive into mastering cloud deployments and setting up automated CI/CD pipelines.",
    features: [
      "Dynamic blog creation, editing, and deletion using a rich text editor.",
      "Advanced search and filtering system for finding specific content rapidly.",
      "Responsive UI designed for both mobile readers and desktop authors.",
      "Deployed to an AWS cloud instance ensuring high availability."
    ],
    concepts: [
      "Cloud Infrastructure Management (AWS)",
      "Version Control Best Practices (Git)",
      "Containerized Application Delivery (Docker)",
      "RESTful API Design & Consumption"
    ],
    tech: ["HTML", "CSS", "JavaScript", "AWS", "Docker", "Git"],
    repo: "https://github.com/Stephyaan/MiniBlog-Website-AWS-Deployed",
    live: "https://mini-blog-website-indol.vercel.app/"
  },
  {
    title: "Smart Pill Box",
    category: "IoT/Hardware",
    image: "https://placehold.co/800x600/43a047/FFF?text=Smart+Pill+Box",
    desc: "Contributed to the design of an automated healthcare solution for medication adherence, approved for Phase II funding. (I2U 2025 Funded Project)",
    fullDescription: "An innovative IoT hardware-software hybrid solution addressing the critical issue of medication adherence in elderly patients. The Smart Pill Box automatically dispenses the correct medication at precisely scheduled times, sending alerts to both the patient and their caretakers if a dose is missed. This project received Phase II funding for its high societal impact potential.",
    features: [
      "Automated dispensing mechanism synchronized with a central scheduling app.",
      "Real-time caretaker notifications and logging system.",
      "Fail-safe alerts for missed doses using visual and auditory cues.",
      "Secure, privacy-first healthcare data handling."
    ],
    concepts: [
      "Hardware-Software Integration (IoT)",
      "Healthcare UX/UI Design Principles",
      "Real-time Alert Systems",
      "Pitching & Grant Acquisition (I2U 2025 Funded)"
    ],
    tech: ["Healthcare", "Hardware/Software", "Design", "IoT"],
    repo: "https://github.com/Stephyaan",
    live: null
  },
  {
    title: "College Website / Web Dev 101",
    category: "DevOps",
    image: "https://placehold.co/800x600/00bcd4/FFF?text=Web+Dev+101",
    desc: "Built and containerized a static website using Docker, gaining hands-on experience in application packaging as a Docker Practice.",
    fullDescription: "A modern, accessible redesign of a conceptual college portal. This project served as a foundational exercise in advanced CSS layouts, semantic HTML5, and most importantly, an introduction to DevOps practices by packaging a static site into a lightweight Docker container for instant deployment anywhere.",
    features: [
      "Semantic, accessible HTML structure for screen readers.",
      "Modern CSS Grid and Flexbox layouts.",
      "Packaged as a lightweight Nginx Docker image.",
      "Optimized assets for near-instant load times."
    ],
    concepts: [
      "DevOps Basics (Dockerizing static sites)",
      "Web Accessibility (a11y)",
      "Responsive Design",
      "Web Performance Optimization"
    ],
    tech: ["HTML", "CSS", "Docker", "Nginx"],
    repo: "https://github.com/Stephyaan/wd101",
    live: null
  },
  {
    title: "Agricultural Yield Prediction",
    category: "Data Science",
    image: "https://placehold.co/800x600/f39c12/FFF?text=Yield+Prediction",
    desc: "Data analysis and prediction models for agricultural yield using R programming.",
    fullDescription: "A data science initiative to empower farmers with predictive insights regarding crop yields based on historical data, weather patterns, and soil metrics. By leveraging statistical modeling in R, the project aims to reduce uncertainty and optimize resource allocation in agriculture.",
    features: [
      "Extensive Data Cleaning and Exploratory Data Analysis (EDA).",
      "Implementation of multiple regression models to forecast yields.",
      "Interactive data visualizations to present findings to non-technical stakeholders.",
      "Model evaluation using RMSE and R-squared metrics."
    ],
    concepts: [
      "Statistical Modeling & Machine Learning",
      "Exploratory Data Analysis (EDA)",
      "Data Visualization (ggplot2)",
      "Predictive Analytics"
    ],
    tech: ["R", "Data Analysis", "Machine Learning", "ggplot2"],
    repo: "https://github.com/Stephyaan/Agricultural_Yield_Prediction_R",
    live: null
  },
  {
    title: "DSA Practice Repository",
    category: "Algorithms",
    image: "https://placehold.co/800x600/333333/FFF?text=DSA+Practice",
    desc: "A structured repository of Data Structures and Algorithms practice and solutions, categorized by difficulty levels.",
    fullDescription: "My personal compendium of algorithmic problem-solving. This repository serves as an ongoing log of my journey through complex Data Structures and Algorithms. It is strictly organized by topic and difficulty, containing heavily commented code to explain the logic and time/space complexity of each solution.",
    features: [
      "Solutions categorized by difficulty (Easy, Medium, Hard).",
      "Implementations of core Data Structures (Trees, Graphs, Hash Maps).",
      "Detailed comments explaining algorithmic approaches and complexities.",
      "Continuous integration of new problems and optimized solutions."
    ],
    concepts: [
      "Algorithmic Thinking & Optimization",
      "Big O Notation (Time & Space Complexity)",
      "Advanced Data Structures",
      "Test-Driven Problem Solving"
    ],
    tech: ["Data Structures", "Algorithms", "Problem Solving", "C++", "Java"],
    repo: "https://github.com/Stephyaan/dsa-practise",
    live: null
  },
  {
    title: "Personal Portfolio",
    category: "Frontend",
    image: "https://placehold.co/800x600/6C63FF/FFF?text=Portfolio",
    desc: "A modern, highly interactive portfolio website featuring 3D animations, custom Framer Motion physics, and glassmorphism UI.",
    fullDescription: "The website you are currently viewing! Designed to be more than just a resume, this portfolio is a testament to my capabilities in modern frontend engineering. It focuses heavily on technical artistry, utilizing advanced state management and physics-based animations to create a premium, native-app feel within a web browser.",
    features: [
      "Sleek, monochrome design system emphasizing typography and spacing.",
      "Complex state management for overlays and interactive features.",
      "Fully responsive architecture adapting perfectly to mobile and desktop."
    ],
    concepts: [
      "Advanced Animation Physics (Framer Motion)",
      "Component-Driven Architecture (React)",
      "Utility-First Styling (Tailwind CSS)",
      "UI/UX Technical Artistry"
    ],
    tech: ["React", "Vite", "Tailwind CSS", "Framer Motion"],
    repo: "https://github.com/Stephyaan/Portfolio",
    live: "https://stephyannbiju.vercel.app"
  }
];

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedProjectDetails, setSelectedProjectDetails] = useState(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-text font-sans selection:bg-primary/20 selection:text-primary-dark">
      {/* Header */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-6xl mx-auto px-6 md:px-8 flex items-center justify-between">
          <a href="#" className="font-display text-2xl font-bold tracking-tight text-text z-10 hover:opacity-80 transition-opacity">
            StephyAnn<span className="text-primary">.</span>
          </a>
          <div className="hidden md:flex gap-8 text-[0.95rem] font-semibold text-text-muted z-10">
            {['About', 'Experience', 'Projects'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-primary hover:-translate-y-0.5 transition-all">
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="relative pt-40 pb-20 md:pt-56 md:pb-32 px-6 md:px-8 bg-gradient-to-br from-primary to-secondary rounded-b-[40px] text-white text-center overflow-hidden mb-16">
          <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-[radial-gradient(circle,rgba(255,255,255,0.1)_0%,transparent_60%)] pointer-events-none"></div>
          
          <div className="max-w-4xl mx-auto w-full relative z-10">
            <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="flex flex-col items-center">
              
              <motion.div variants={fadeInUp}>
                <h1 className="font-display text-5xl md:text-7xl font-extrabold tracking-tighter mb-6">
                  Stephy Ann Biju
                </h1>
              </motion.div>
              
              <motion.div variants={fadeInUp}>
                <p className="text-lg md:text-xl opacity-90 mb-10 max-w-2xl mx-auto">
                  Motivated Computer Science Engineering student passionate about building meaningful digital solutions through code, data, and design.
                </p>
              </motion.div>
              
              <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 justify-center mt-4">
                <a href="#projects" className="px-8 py-3 bg-white text-primary hover:bg-gray-50 hover:-translate-y-1 font-bold rounded-full transition-all shadow-md">
                  View Projects
                </a>
                <a href="#" className="px-8 py-3 bg-transparent border-2 border-white/80 hover:bg-white/10 hover:border-white text-white font-bold rounded-full transition-all flex items-center gap-2">
                  <Download size={18} /> Resume
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* About, Education & Skills */}
        <section id="about" className="py-20 px-6 md:px-8 bg-background relative overflow-hidden">
          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeInUp}>
              <div className="flex items-center gap-4 mb-12">
                <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-mono tracking-widest uppercase rounded-full border border-primary/20">&lt;about/&gt;</span>
                <h2 className="text-3xl md:text-5xl font-bold text-text font-display tracking-tight">
                  Who I Am
                </h2>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* About Text */}
                <div className="lg:col-span-2 space-y-6">
                  <h3 className="text-2xl md:text-3xl font-display text-text leading-tight">
                    Motivated Computer Science Engineering student passionate about <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary italic font-serif">meaningful</span> digital solutions.
                  </h3>
                  <div className="text-text-muted space-y-4 font-light leading-relaxed text-lg">
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
                  <div className="p-6 bg-surface border border-gray-100 shadow-sm rounded-2xl hover:shadow-md transition-shadow">
                    <p className="text-xs text-primary font-bold uppercase tracking-widest mb-1">B.Tech</p>
                    <h4 className="text-text font-bold text-sm">Computer Science Engineering</h4>
                    <p className="text-xs text-text-muted mt-1">Amal Jyothi College of Engineering</p>
                    <p className="text-[10px] text-gray-400 mt-2 font-mono">2023 - 2027 | CGPA: 8.63</p>
                  </div>
                  
                  <div className="p-6 bg-surface border border-gray-100 shadow-sm rounded-2xl hover:shadow-md transition-shadow">
                    <p className="text-xs text-secondary font-bold uppercase tracking-widest mb-1">Higher Secondary</p>
                    <h4 className="text-text font-bold text-sm">Science</h4>
                    <p className="text-xs text-text-muted mt-1">St. Antony's Public School</p>
                    <p className="text-[10px] text-gray-400 mt-2 font-mono">CBSE | 2023 | 89%</p>
                  </div>
                  
                  <div className="p-6 bg-surface border border-gray-100 shadow-sm rounded-2xl hover:shadow-md transition-shadow">
                    <p className="text-xs text-accent font-bold text-yellow-700 uppercase tracking-widest mb-1">Secondary Education</p>
                    <h4 className="text-text font-bold text-sm">CBSE</h4>
                    <p className="text-xs text-text-muted mt-1">St. Antony's Public School</p>
                    <p className="text-[10px] text-gray-400 mt-2 font-mono">2021 | 95%</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Skills & Tools Section */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeInUp} className="mt-24">
              <div className="flex items-center gap-4 mb-12">
                <span className="px-3 py-1 bg-secondary/10 text-secondary text-xs font-mono tracking-widest uppercase rounded-full border border-secondary/20">&lt;skills/&gt;</span>
                <h2 className="text-3xl md:text-5xl font-bold text-text font-display tracking-tight">
                  Tech Stack & Tools
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Languages */}
                <div className="p-8 bg-surface border border-gray-100 shadow-sm rounded-2xl">
                  <h3 className="text-xl font-bold text-text mb-6 flex items-center gap-3"><Code size={20} className="text-primary"/> Programming & Frontend</h3>
                  <div className="flex flex-wrap gap-2">
                    {['Python', 'C', 'JavaScript', 'HTML5', 'CSS3', 'React (Basic)', 'Responsive Design'].map(skill => (
                      <span key={skill} className="px-3 py-1.5 bg-gray-50 border border-gray-200 text-text-muted text-sm rounded-md hover:bg-gray-100 transition-colors cursor-default">{skill}</span>
                    ))}
                  </div>
                </div>

                {/* Cloud & Data */}
                <div className="p-8 bg-surface border border-gray-100 shadow-sm rounded-2xl">
                  <h3 className="text-xl font-bold text-text mb-6 flex items-center gap-3"><Database size={20} className="text-secondary"/> Cloud, Data & Tools</h3>
                  <div className="flex flex-wrap gap-2">
                    {['AWS', 'Docker', 'SQL', 'Power BI', 'Git/GitHub', 'Figma', 'VS Code'].map(skill => (
                      <span key={skill} className="px-3 py-1.5 bg-gray-50 border border-gray-200 text-text-muted text-sm rounded-md hover:bg-gray-100 transition-colors cursor-default">{skill}</span>
                    ))}
                  </div>
                </div>
                
                {/* Professional Traits */}
                <div className="md:col-span-2 p-6 bg-gradient-to-r from-gray-50 to-white border border-gray-100 shadow-sm rounded-2xl flex flex-col md:flex-row items-center gap-6">
                  <h3 className="text-lg font-bold text-text whitespace-nowrap">Professional Traits:</h3>
                  <div className="flex flex-wrap gap-4 text-sm text-text-muted font-medium">
                    <span className="flex items-center gap-1.5 px-3 py-1 bg-white shadow-sm rounded-full border border-gray-100"><Sparkles size={14} className="text-green-500"/> Continuous Learner</span>
                    <span className="flex items-center gap-1.5 px-3 py-1 bg-white shadow-sm rounded-full border border-gray-100"><Sparkles size={14} className="text-blue-500"/> Proactive Problem Solver</span>
                    <span className="flex items-center gap-1.5 px-3 py-1 bg-white shadow-sm rounded-full border border-gray-100"><Sparkles size={14} className="text-yellow-500"/> Agile & Adaptable</span>
                    <span className="flex items-center gap-1.5 px-3 py-1 bg-white shadow-sm rounded-full border border-gray-100"><Sparkles size={14} className="text-purple-500"/> Cross-functional Collaboration</span>
                    <span className="flex items-center gap-1.5 px-3 py-1 bg-white shadow-sm rounded-full border border-gray-100"><Sparkles size={14} className="text-pink-500"/> Enthusiastic Work Ethic</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20 px-6 md:px-8 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
              <div className="flex items-center gap-4 mb-16 justify-center">
                <span className="px-3 py-1 bg-primary/10 text-primary font-bold text-xs font-mono tracking-widest uppercase rounded-full border border-primary/20">&lt;experience/&gt;</span>
                <h2 className="text-3xl md:text-5xl font-bold text-text font-display tracking-tight">
                  Official Record
                </h2>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-sm">
                {/* Decorative top border like a receipt */}
                <div className="absolute top-0 left-0 right-0 h-2 flex justify-between px-2 overflow-hidden opacity-30">
                  {Array.from({ length: 40 }).map((_, i) => (
                    <div key={i} className="w-2 h-2 rounded-full bg-gray-300 -mt-1"></div>
                  ))}
                </div>

                <div className="space-y-12 relative before:absolute before:inset-0 before:ml-[1.125rem] before:-translate-x-px before:h-full before:w-px before:bg-gray-200 mt-4">
                  
                  {/* Experience 1: Nest Digital */}
                  <div className="relative pl-14 group">
                    <div className="absolute left-0 top-1 w-9 h-9 flex items-center justify-center bg-white rounded-full border-2 border-gray-300 group-hover:border-primary transition-colors">
                      <div className="w-3 h-3 rounded-full bg-gray-200 group-hover:bg-primary transition-colors"></div>
                    </div>
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-2 gap-2">
                      <h3 className="text-xl font-display font-bold text-text">DevOps & Cloud Intern</h3>
                      <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 px-3 py-1 rounded-full">February 2026</span>
                    </div>
                    <h4 className="text-sm font-semibold text-text-muted mb-4 tracking-wide uppercase">Nest Digital</h4>
                    <div className="p-5 bg-gray-50 border border-gray-100 rounded-xl font-mono text-sm text-text-muted leading-relaxed group-hover:bg-gray-100 transition-colors shadow-sm">
                      <p className="mb-2"><span className="text-primary mr-2 font-bold">›</span>Deployed full-stack and static web applications using AWS and GitHub Pages.</p>
                      <p className="mb-2"><span className="text-primary mr-2 font-bold">›</span>Applied Git workflows (branching, commits, push/pull) for efficient version control.</p>
                      <p><span className="text-primary mr-2 font-bold">›</span>Utilized Docker for containerization and gained hands-on experience in cloud deployment practices.</p>
                    </div>
                  </div>

                  {/* Experience 2: IPSR */}
                  <div className="relative pl-14 group">
                    <div className="absolute left-0 top-1 w-9 h-9 flex items-center justify-center bg-white rounded-full border-2 border-gray-300 group-hover:border-secondary transition-colors">
                      <div className="w-3 h-3 rounded-full bg-gray-200 group-hover:bg-secondary transition-colors"></div>
                    </div>
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-2 gap-2">
                      <h3 className="text-xl font-display font-bold text-text">AI & Data Analytics Intern</h3>
                      <span className="text-xs font-bold text-secondary uppercase tracking-widest bg-secondary/10 px-3 py-1 rounded-full">July 2025 (1 Month)</span>
                    </div>
                    <h4 className="text-sm font-semibold text-text-muted mb-4 tracking-wide uppercase">IPSR Solutions Ltd</h4>
                    <div className="p-5 bg-gray-50 border border-gray-100 rounded-xl font-mono text-sm text-text-muted leading-relaxed group-hover:bg-gray-100 transition-colors shadow-sm">
                      <p className="mb-2"><span className="text-secondary mr-2 font-bold">›</span>Worked on Generative AI concepts, Machine Learning models, and RAG-based chatbot development.</p>
                      <p className="mb-2"><span className="text-secondary mr-2 font-bold">›</span>Applied Python and Power BI for data analysis and visualization tasks.</p>
                      <p><span className="text-secondary mr-2 font-bold">›</span>Gained practical exposure to real-world AI workflows and model integration.</p>
                    </div>
                  </div>

                  {/* Experience 3: Cognifyz */}
                  <div className="relative pl-14 group">
                    <div className="absolute left-0 top-1 w-9 h-9 flex items-center justify-center bg-white rounded-full border-2 border-gray-300 group-hover:border-accent transition-colors">
                      <div className="w-3 h-3 rounded-full bg-gray-200 group-hover:bg-accent transition-colors"></div>
                    </div>
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-2 gap-2">
                      <h3 className="text-xl font-display font-bold text-text">UI/UX Design Intern</h3>
                      <span className="text-xs font-bold text-yellow-700 uppercase tracking-widest bg-accent/20 px-3 py-1 rounded-full">April 2025 (2 Months)</span>
                    </div>
                    <h4 className="text-sm font-semibold text-text-muted mb-4 tracking-wide uppercase">Cognifyz Technologies</h4>
                    <div className="p-5 bg-gray-50 border border-gray-100 rounded-xl font-mono text-sm text-text-muted leading-relaxed group-hover:bg-gray-100 transition-colors shadow-sm">
                      <p className="mb-2"><span className="text-accent mr-2 font-bold">›</span>Designed user interfaces with a focus on usability and user experience enhancement.</p>
                      <p><span className="text-accent mr-2 font-bold">›</span>Created wireframes and improved design flow based on user-centric principles.</p>
                    </div>
                  </div>

                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Projects Section (Grid Layout matching MiniBlog) */}
        <section id="projects" className="py-20 px-6 md:px-8 max-w-6xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-text font-display">Featured Projects</h2>
              <p className="text-text-muted mt-4">A showcase of my recent development work</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {projectsData.map((project, i) => (
                <motion.div 
                  key={i} 
                  className="bg-surface rounded-2xl overflow-hidden border border-gray-100 flex flex-col hover:-translate-y-2 hover:shadow-lg transition-all duration-300"
                  whileHover={{ y: -10 }}
                >
                  <div className="relative h-[220px] overflow-hidden">
                    <div className="w-full h-full bg-cover bg-center transition-transform duration-700 hover:scale-110" style={{ backgroundImage: `url('${project.image}')` }}></div>
                    <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-primary shadow-sm">
                      {project.category}
                    </span>
                  </div>
                  
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex justify-between items-center text-xs font-semibold text-text-muted mb-3">
                      <span>Featured</span>
                      <span>★</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-text mb-3 leading-tight">
                      {project.title}
                    </h3>
                    
                    <p className="text-text-muted text-sm mb-6 line-clamp-3">
                      {project.desc}
                    </p>
                    
                    <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
                      <button 
                        onClick={() => setSelectedProjectDetails(i)}
                        className="text-sm font-bold text-primary hover:text-primary-dark transition-colors flex items-center gap-1"
                      >
                        Learn more <ArrowRight size={16} />
                      </button>
                      
                      <div className="flex items-center gap-3">
                        {project.live && (
                          <a href={project.live} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-text transition-colors" title="Live Preview">
                            <ExternalLink size={18} />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Footer */}
        <footer className="bg-[#1a1a1a] text-white/60 py-16 mt-20">
          <div className="max-w-6xl mx-auto px-6 md:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center border-b border-white/10 pb-12 mb-8">
              <div className="mb-8 md:mb-0 text-center md:text-left">
                <h3 className="text-2xl font-bold text-white mb-2">StephyAnn<span className="text-primary">.</span></h3>
                <p>Computer Science Engineer & Developer</p>
              </div>
              <div className="flex gap-6">
                <a href="https://github.com/Stephyaan" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a>
                <a href="https://www.linkedin.com/in/stephyannbiju/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
                <a href="mailto:stephyannbiju29@gmail.com" className="hover:text-white transition-colors">Email</a>
              </div>
            </div>
            <div className="text-center text-sm">
              <p>&copy; 2026 Stephy Ann Biju. Crafted with ❤️ for modern development.</p>
            </div>
          </div>
        </footer>
      </main>

      {/* Project Details Modal (Light Theme) */}
      <AnimatePresence>
        {selectedProjectDetails !== null && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-black/40 backdrop-blur-md"
            onClick={() => setSelectedProjectDetails(null)}
          >
            <motion.div 
              initial={{ y: 50, opacity: 0, scale: 0.95 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 20, opacity: 0, scale: 0.95 }}
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
              className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-3xl overflow-hidden flex flex-col shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 md:p-8 border-b border-gray-100">
                <h2 className="text-2xl md:text-3xl font-bold text-text font-display tracking-tight">
                  {projectsData[selectedProjectDetails].title}
                </h2>
                <button 
                  onClick={() => setSelectedProjectDetails(null)}
                  className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full text-gray-500 hover:text-text transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Content - Scrollable */}
              <div className="flex-1 overflow-y-auto p-6 md:p-8 custom-scrollbar">
                <div className="space-y-8">
                  {/* Overview */}
                  <div>
                    <h3 className="text-lg font-bold text-text mb-3 flex items-center gap-2"><Info className="text-primary" size={20} /> Overview</h3>
                    <p className="text-text-muted leading-relaxed text-[1.05rem]">
                      {projectsData[selectedProjectDetails].fullDescription || projectsData[selectedProjectDetails].desc}
                    </p>
                  </div>

                  {/* Features */}
                  {projectsData[selectedProjectDetails].features && (
                    <div>
                      <h3 className="text-lg font-bold text-text mb-4 flex items-center gap-2"><Layers className="text-primary" size={20} /> Key Features</h3>
                      <ul className="space-y-3">
                        {projectsData[selectedProjectDetails].features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-text-muted">
                            <span className="text-primary font-bold mt-0.5">›</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Concepts Learned */}
                  {projectsData[selectedProjectDetails].concepts && (
                    <div>
                      <h3 className="text-lg font-bold text-text mb-4 flex items-center gap-2"><Sparkles className="text-primary" size={20} /> Concepts & Learnings</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {projectsData[selectedProjectDetails].concepts.map((concept, idx) => (
                          <div key={idx} className="p-4 bg-gray-50 rounded-xl border border-gray-100 text-text-muted text-sm font-medium">
                            {concept}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Footer Actions */}
              <div className="p-6 md:p-8 border-t border-gray-100 bg-gray-50 flex items-center justify-between gap-4 flex-wrap">
                <div className="flex flex-wrap gap-2">
                  {projectsData[selectedProjectDetails].tech.map((t, idx) => (
                    <span key={idx} className="px-3 py-1 bg-white border border-gray-200 text-text-muted text-xs font-bold rounded-full shadow-sm">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-4 ml-auto">
                  {projectsData[selectedProjectDetails].repo && (
                    <a href={projectsData[selectedProjectDetails].repo} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-2.5 bg-white hover:bg-gray-100 text-text font-bold rounded-full transition-colors text-sm border border-gray-200 shadow-sm">
                      <Code size={16} /> GitHub
                    </a>
                  )}
                  {projectsData[selectedProjectDetails].live && (
                    <a href={projectsData[selectedProjectDetails].live} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-2.5 bg-primary hover:bg-primary-dark text-white font-bold rounded-full transition-colors text-sm shadow-md">
                      Live Preview <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;

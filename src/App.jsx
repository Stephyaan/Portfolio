import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { Link } from 'react-scroll';
import { FaLinkedin, FaGithub, FaAngleUp, FaEnvelope, FaArrowDown } from 'react-icons/fa';

const projectsData = [
  {
    title: "Hostel Maintenance & Utility Management",
    image: "https://placehold.co/800x600/6C63FF/FFF?text=HostelHub",
    desc: "HostelHub is a comprehensive full-stack solution designed to digitize and streamline the maintenance operations within university hostels. It features Role-Based Access Control (RBAC), real-time status tracking, and an interactive analytics dashboard.",
    repo: "https://github.com/Stephyaan/HostelHub-Hostel-Maintenance-and-Utility-WebApp",
    live: "https://hostel-management-ecosystem-stephyaans-projects.vercel.app/"
  },
  {
    title: "Personal Blog Website",
    image: "https://placehold.co/800x600/02aab0/FFF?text=CloudBlog",
    desc: "A scalable serverless blogging platform built with modern web technologies. This project highlights my proficiency in cloud architecture using AWS Lambda, API Gateway, and DynamoDB, along with a clean frontend using React and Tailwind CSS.",
    repo: "https://github.com/Stephyaan/MiniBlog-WebApp-using-AWS-Serverless",
    live: "https://mini-blog-website-indol.vercel.app/"
  },
  {
    title: "Personal Portfolio",
    image: "https://placehold.co/800x600/333333/FFF?text=Portfolio",
    desc: "A testament to my capabilities in modern frontend engineering. Designed to be more than just a resume, this portfolio focuses heavily on technical artistry, utilizing advanced state management and layout design.",
    repo: "https://github.com/Stephyaan/Portfolio",
    live: "https://stephyannbiju.vercel.app"
  }
];

function App() {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <div id="top" className="overflow-x-hidden font-sans text-[#333]">
      
      {/* Hero Section */}
      <section id="hero" className="relative min-h-[100vh] flex items-center bg-bg-pure px-4 md:px-0 overflow-hidden">
        {/* Subtle Background Elements for Sleek Style */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-primary/5 blur-[120px]"></div>
          <div className="absolute top-[60%] -right-[10%] w-[40%] h-[60%] rounded-full bg-secondary/5 blur-[120px]"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNlN2U1ZTQiLz48L3N2Zz4=')] opacity-30"></div>
        </div>

        <div className="container mx-auto max-w-5xl px-4 md:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-bg-pure shadow-sm border border-border-silver text-xs font-semibold tracking-wide text-darkBlue mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            Available for opportunities
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-5xl md:text-7xl font-extrabold text-darkBlue mb-6 leading-tight tracking-tight"
          >
            Hello, I'm <span className="text-color-main drop-shadow-sm">Stephy Ann Biju</span>
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="flex flex-wrap items-center gap-3 md:gap-6 text-[0.65rem] md:text-sm text-darkBlue/60 font-bold tracking-[0.25em] uppercase mb-10"
          >
            <span className="hover:text-primary transition-colors cursor-default">Computer Science</span>
            <span className="text-secondary/50 text-xs md:text-lg">★</span>
            <span className="hover:text-primary transition-colors cursor-default">Cloud & DevOps</span>
            <span className="text-secondary/50 text-xs md:text-lg">★</span>
            <span className="hover:text-primary transition-colors cursor-default">AI & Data</span>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <Link 
              to="about" 
              smooth 
              duration={1000} 
              className="cursor-pointer inline-flex items-center gap-3 px-8 py-3.5 bg-accent-text text-white rounded-full font-bold text-lg shadow-lg hover:shadow-[0_10px_30px_rgba(2,170,176,0.4)] hover:-translate-y-1 transition-all duration-300"
            >
              Know more <FaArrowDown className="animate-bounce mt-1" size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-gradient-to-r from-primary to-secondary text-white py-24 px-4 md:px-0">
        <div className="container mx-auto max-w-5xl px-4 md:px-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-[2.5rem] uppercase font-bold mb-12 text-center text-white"
          >
            About me
          </motion.h2>
          
          <div className="flex justify-center">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="w-full max-w-3xl flex flex-col items-center text-center"
            >
              <p className="text-lg md:text-xl mb-6 text-white/90 leading-relaxed font-medium">
                Motivated Computer Science Engineering student passionate about building meaningful digital solutions through code, data, and design. 
              </p>
              <p className="text-lg md:text-xl mb-10 text-white/90 leading-relaxed font-medium">
                I have hands-on experience in full-stack web development, AI & data analytics, and cloud deployment. My goal is to continuously learn and apply my skills to solve real-world problems efficiently and elegantly.
              </p>
              <div className="mt-4">
                <a 
                  rel="noreferrer" 
                  target="_blank" 
                  className="inline-block px-10 py-4 bg-transparent border-2 border-white text-white font-bold text-lg hover:bg-white hover:text-accent-text transition-colors duration-300 rounded-xl" 
                  href="/resume.pdf"
                >
                  View Resume
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Tech Stack & Tools Section */}
      <section id="skills" className="pt-24 pb-12 px-4 md:px-0 bg-bg-snow">
        <div className="container mx-auto max-w-5xl px-4 md:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-12"
          >
            <span className="bg-secondary/10 text-secondary px-4 py-1.5 rounded-full text-sm font-bold tracking-widest">
              &lt;SKILLS/&gt;
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-darkBlue">
              Tech Stack & Tools
            </h2>
          </motion.div>

          <div className="flex flex-col gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Card 1 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-bg-pure rounded-2xl p-8 shadow-sm border border-border-silver"
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-indigo-500 font-bold text-xl tracking-widest">&lt; &gt;</span>
                  <h3 className="text-xl font-extrabold text-darkBlue">Programming & Frontend</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {['Python', 'C', 'JavaScript', 'HTML5', 'CSS3', 'React (Basic)', 'Responsive Design'].map((skill) => (
                    <span key={skill} className="px-4 py-2 bg-bg-snow/50 border border-border-silver rounded-lg text-body text-sm font-medium hover:border-indigo-300 transition-colors cursor-default">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Card 2 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-bg-pure rounded-2xl p-8 shadow-sm border border-border-silver"
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-secondary font-bold text-xl tracking-widest">{`{ }`}</span>
                  <h3 className="text-xl font-extrabold text-darkBlue">Cloud, Data & Tools</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {['AWS', 'Docker', 'SQL', 'Power BI', 'Git/GitHub', 'Figma', 'VS Code'].map((skill) => (
                    <span key={skill} className="px-4 py-2 bg-bg-snow/50 border border-border-silver rounded-lg text-body text-sm font-medium hover:border-secondary transition-colors cursor-default">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Bottom Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-bg-pure rounded-2xl p-8 shadow-sm border border-border-silver flex flex-col md:flex-row md:items-center gap-6"
            >
              <h3 className="text-lg font-extrabold text-darkBlue whitespace-nowrap">Professional Traits:</h3>
              <div className="flex flex-wrap gap-3">
                {[
                  { text: 'Continuous Learner', color: 'text-green-500' },
                  { text: 'Proactive Problem Solver', color: 'text-blue-500' },
                  { text: 'Agile & Adaptable', color: 'text-yellow-500' },
                  { text: 'Cross-functional Collaboration', color: 'text-purple-500' },
                  { text: 'Enthusiastic Work Ethic', color: 'text-pink-500' },
                ].map((trait) => (
                  <span key={trait.text} className="px-4 py-2 bg-bg-pure border border-border-silver shadow-sm rounded-full text-body text-sm font-medium flex items-center gap-2 hover:shadow-md transition-shadow cursor-default">
                    <span className={`${trait.color} text-lg leading-none`}>✦</span> {trait.text}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience & Education Section */}
      <section id="experience" className="pb-24 pt-16 px-4 md:px-0 bg-bg-snow">
        <div className="container mx-auto max-w-6xl px-4 md:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center justify-center gap-4 mb-16"
          >
            <span className="bg-indigo-100 text-indigo-500 px-4 py-1.5 rounded-full text-sm font-bold tracking-widest">
              &lt;EXPERIENCE/&gt;
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-darkBlue text-center">
              Official Record
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Experience Section (Main Column) */}
            <div className="lg:col-span-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-darkBlue mb-10 border-b-2 border-border-silver pb-4">
                  Experience
                </h3>
                
                <div className="space-y-12">
                  {/* Item 1 */}
                  <div className="flex flex-col md:flex-row md:gap-6 group">
                    <div className="md:w-1/4 shrink-0 pt-1">
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em]">Feb 2026</p>
                    </div>
                    <div className="md:w-3/4">
                      <h4 className="text-xl font-extrabold text-darkBlue mb-1 group-hover:text-primary transition-colors">DevOps & Cloud Intern</h4>
                      <p className="text-primary font-semibold text-sm mb-4">Nest Digital</p>
                      <ul className="text-body text-sm space-y-2 leading-relaxed">
                        <li className="flex items-start gap-3"><span className="text-gray-300 font-bold">—</span> Deployed full-stack and static web apps using AWS.</li>
                        <li className="flex items-start gap-3"><span className="text-gray-300 font-bold">—</span> Applied advanced Git workflows for version control.</li>
                        <li className="flex items-start gap-3"><span className="text-gray-300 font-bold">—</span> Utilized Docker for application containerization.</li>
                      </ul>
                    </div>
                  </div>

                  {/* Item 2 */}
                  <div className="flex flex-col md:flex-row md:gap-6 group">
                    <div className="md:w-1/4 shrink-0 pt-1">
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em]">Jul 2025</p>
                    </div>
                    <div className="md:w-3/4">
                      <h4 className="text-xl font-extrabold text-darkBlue mb-1 group-hover:text-secondary transition-colors">AI & Data Analytics Intern</h4>
                      <p className="text-secondary font-semibold text-sm mb-4">IPSR Solutions Ltd</p>
                      <ul className="text-body text-sm space-y-2 leading-relaxed">
                        <li className="flex items-start gap-3"><span className="text-gray-300 font-bold">—</span> Worked on Generative AI and RAG chatbot development.</li>
                        <li className="flex items-start gap-3"><span className="text-gray-300 font-bold">—</span> Applied Python and Power BI for data visualization.</li>
                      </ul>
                    </div>
                  </div>

                  {/* Item 3 */}
                  <div className="flex flex-col md:flex-row md:gap-6 group">
                    <div className="md:w-1/4 shrink-0 pt-1">
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em]">Apr 2025</p>
                    </div>
                    <div className="md:w-3/4">
                      <h4 className="text-xl font-extrabold text-darkBlue mb-1 group-hover:text-darkBlue transition-colors">UI/UX Design Intern</h4>
                      <p className="text-darkBlue/70 font-semibold text-sm mb-4">Cognifyz Technologies</p>
                      <ul className="text-body text-sm space-y-2 leading-relaxed">
                        <li className="flex items-start gap-3"><span className="text-gray-300 font-bold">—</span> Designed user interfaces focusing on usability and UX.</li>
                        <li className="flex items-start gap-3"><span className="text-gray-300 font-bold">—</span> Created wireframes and improved design flows.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Education Section (Sidebar Column) */}
            <div className="lg:col-span-4 mt-16 lg:mt-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-darkBlue mb-10 border-b-2 border-border-silver pb-4">
                  Education
                </h3>
                
                <div className="flex flex-col gap-5">
                  {/* Item 1 */}
                  <div className="bg-bg-pure rounded-2xl p-6 shadow-sm border border-border-silver hover:shadow-md transition-shadow relative overflow-hidden group">
                    <div className="absolute top-0 left-0 w-1.5 h-full bg-primary transform origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-300"></div>
                    <p className="text-xs font-bold text-primary uppercase tracking-[0.1em] mb-1">2023 - 2027</p>
                    <h4 className="text-lg font-bold text-darkBlue mb-1">B.Tech in Computer Science</h4>
                    <p className="text-muted text-xs font-medium mb-3">Amal Jyothi College of Engineering</p>
                    <p className="text-darkBlue text-xs font-bold bg-primary/10 text-primary inline-block px-3 py-1 rounded-full">CGPA: 8.63</p>
                  </div>

                  {/* Item 2 */}
                  <div className="bg-bg-pure rounded-2xl p-6 shadow-sm border border-border-silver hover:shadow-md transition-shadow relative overflow-hidden group">
                    <div className="absolute top-0 left-0 w-1.5 h-full bg-secondary transform origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-300"></div>
                    <p className="text-xs font-bold text-secondary uppercase tracking-[0.1em] mb-1">2023</p>
                    <h4 className="text-lg font-bold text-darkBlue mb-1">Higher Secondary</h4>
                    <p className="text-muted text-xs font-medium mb-3">St. Antony's Public School</p>
                    <p className="text-darkBlue text-xs font-bold bg-secondary/10 text-secondary inline-block px-3 py-1 rounded-full">CBSE | 89%</p>
                  </div>

                  {/* Item 3 */}
                  <div className="bg-bg-pure rounded-2xl p-6 shadow-sm border border-border-silver hover:shadow-md transition-shadow relative overflow-hidden group">
                    <div className="absolute top-0 left-0 w-1.5 h-full bg-darkBlue transform origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-300"></div>
                    <p className="text-xs font-bold text-darkBlue uppercase tracking-[0.1em] mb-1">2021</p>
                    <h4 className="text-lg font-bold text-darkBlue mb-1">Secondary Education</h4>
                    <p className="text-muted text-xs font-medium mb-3">St. Antony's Public School</p>
                    <p className="text-darkBlue text-xs font-bold bg-gray-100 text-darkBlue inline-block px-3 py-1 rounded-full">CBSE | 95%</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-4 md:px-0 bg-bg-pure">
        <div className="container mx-auto max-w-5xl px-4 md:px-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="section-title"
          >
            Projects
          </motion.h2>

          <div className="flex flex-col gap-32 mt-20">
            {projectsData.map((project, index) => (
              <div key={index} className={`flex flex-col gap-12 lg:gap-16 lg:items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
                
                {/* Text Content */}
                <motion.div 
                  initial={{ opacity: 0, x: index % 2 === 1 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="w-full lg:w-5/12 space-y-6"
                >
                  <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase mb-2">Featured Project</div>
                  <h3 className="text-3xl lg:text-4xl font-extrabold text-darkBlue mb-4 leading-tight">{project.title}</h3>
                  <p className="text-body text-base lg:text-lg leading-relaxed">
                    {project.desc}
                  </p>
                  
                  <div className="flex flex-wrap gap-4 pt-4">
                    {project.live && (
                      <a 
                        rel="noreferrer" 
                        target="_blank" 
                        href={project.live}
                        className="group relative inline-flex items-center justify-center px-8 py-3.5 text-base font-bold text-white transition-all duration-300 bg-primary rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 hover:shadow-[0_0_20px_rgba(39,211,204,0.4)] hover:-translate-y-1"
                      >
                        See Live
                      </a>
                    )}
                    {project.repo && (
                      <a 
                        rel="noreferrer" 
                        target="_blank" 
                        href={project.repo}
                        className="inline-flex items-center justify-center px-8 py-3.5 text-base font-bold text-darkBlue transition-all duration-300 border-2 border-border-silver hover:border-darkBlue rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 hover:-translate-y-1 hover:bg-bg-snow"
                      >
                        Source Code
                      </a>
                    )}
                  </div>
                </motion.div>

                {/* Image Content */}
                <motion.div 
                  initial={{ opacity: 0, x: index % 2 === 1 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="w-full lg:w-7/12 relative group"
                >
                  <div className="absolute -inset-2 bg-gradient-to-r from-primary to-secondary rounded-2xl blur-lg opacity-20 group-hover:opacity-50 transition duration-1000 group-hover:duration-300"></div>
                  <a rel="noreferrer" href={project.live || project.repo} target="_blank" className="relative block">
                    <Tilt 
                      tiltMaxAngleX={4} 
                      tiltMaxAngleY={4} 
                      glareEnable={true} 
                      glareMaxOpacity={0.3} 
                      glarePosition="all"
                      className="rounded-2xl overflow-hidden border border-border-silver bg-bg-pure"
                    >
                      <img alt={project.title} className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700" src={project.image} />
                    </Tilt>
                  </a>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-4 md:px-0 bg-gradient-to-r from-headline to-[#3a3560] text-white text-center">
        <div className="container mx-auto max-w-5xl px-4 md:px-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-[2.5rem] uppercase font-bold mb-12"
          >
            Contact
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-xl mb-8 text-white/80">Would you like to work with me? Awesome!</p>
            <a 
              rel="noreferrer" 
              target="_blank" 
              className="inline-block px-6 py-3 bg-transparent border-2 border-white text-white font-bold text-lg hover:bg-bg-pure hover:text-headline transition-colors duration-300" 
              href="mailto:stephyannbiju29@gmail.com"
            >
              Let's Talk
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-headline text-white py-12 text-center relative mt-[-1px]">
        <div className="container mx-auto px-4">
          <Link to="top" smooth duration={1000} className="cursor-pointer text-white/60 hover:text-white transition-colors absolute top-[-20px] left-1/2 -translate-x-1/2 bg-headline w-10 h-10 flex items-center justify-center rounded-full">
            <FaAngleUp size={24} />
          </Link>
          
          <div className="flex justify-center gap-6 mb-8 mt-8">
            <a href="https://github.com/Stephyaan" target="_blank" rel="noreferrer" className="text-white/70 hover:text-white transition-colors transform hover:-translate-y-1">
              <FaGithub size={28} />
            </a>
            <a href="https://www.linkedin.com/in/stephyannbiju/" target="_blank" rel="noreferrer" className="text-white/70 hover:text-white transition-colors transform hover:-translate-y-1">
              <FaLinkedin size={28} />
            </a>
            <a href="mailto:stephyannbiju29@gmail.com" className="text-white/70 hover:text-white transition-colors transform hover:-translate-y-1">
              <FaEnvelope size={28} />
            </a>
          </div>
          
          <hr className="border-white/10 w-1/2 mx-auto mb-8" />
          
          <p className="text-white/50 text-sm">
            © {new Date().getFullYear()} - Stephy Ann Biju. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;

'use client';

import React, { useState, useEffect } from "react";
import { Mail, Github, Linkedin, Award, Briefcase, Code, Brain, GraduationCap, Phone, Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";

// Define projects data
const projects = [
  {
    title: "Automated Backup System",
    description: "Jenkins + rclone to AWS S3/Google Drive for automated and scheduled backup operations.",
    tags: ["Jenkins", "AWS S3", "rclone"]
  },
  {
    title: "AI/ML Deployment Pipeline",
    description: "CI/CD with Jenkins, Kubernetes, Docker, and Terraform for machine learning model deployment.",
    tags: ["Docker", "Kubernetes", "Terraform"]
  },
  {
    title: "Microservices CI/CD",
    description: "Docker, Kubernetes, Nexus, SonarQube, Grafana implementation for microservices architecture.",
    tags: ["Microservices", "SonarQube", "Grafana"]
  },
  {
    title: "AWS Serverless App",
    description: "API Gateway, Terraform, GitHub Actions for serverless application deployment.",
    tags: ["Serverless", "API Gateway", "GitHub Actions"]
  },
  {
    title: "Automated Cloud Infrastructure with Terraform & Ansible",
    description: "Automated deployment of AWS EC2 instances, security groups, and networking using Terraform, and seamless server configuration with Ansible.",
    tags: ["Terraform", "Ansible", "AWS EC2", "VPC", "Security Groups", "Jenkins (CI/CD)"]
  },
  {
    title: "Resource Manager - Real-time CPU Monitoring and Analysis",
    description: "A real-time CPU monitoring and analysis tool offering live visualizations, critical alerts, historical trends, and process tracking, all containerized with Docker.",
    tags: ["Python", "Docker", "Grafana"]
  },
  {
    title: "Todo App Deployment on Kubernetes",
    description: "A Todo App built with React and Firebase for real-time storage, containerized using Docker, and deployed on Docker Hub.",
    tags: ["Docker", "Kubernetes", "Docker Hub"]
  },
];

// Tag color configurations
const tagColors = [
  // { bg: 'bg-blue-100', text: 'text-blue-800', darkBg: 'dark:bg-blue-900/50', darkText: 'dark:text-blue-400' },
  { bg: 'bg-green-100', text: 'text-green-800', darkBg: 'dark:bg-green-900/50', darkText: 'dark:text-green-400' },
  // { bg: 'bg-purple-100', text: 'text-purple-800', darkBg: 'dark:bg-purple-900/50', darkText: 'dark:text-purple-400' },
  // { bg: 'bg-yellow-100', text: 'text-yellow-800', darkBg: 'dark:bg-yellow-900/50', darkText: 'dark:text-yellow-400' },
  // { bg: 'bg-red-100', text: 'text-red-800', darkBg: 'dark:bg-red-900/50', darkText: 'dark:text-red-400' },
  // { bg: 'bg-indigo-100', text: 'text-indigo-800', darkBg: 'dark:bg-indigo-900/50', darkText: 'dark:text-indigo-400' },
  // { bg: 'bg-pink-100', text: 'text-pink-800', darkBg: 'dark:bg-pink-900/50', darkText: 'dark:text-pink-400' },
  // { bg: 'bg-teal-100', text: 'text-teal-800', darkBg: 'dark:bg-teal-900/50', darkText: 'dark:text-teal-400' },
];

// Function to get color based on tag name (consistent colors for same tags)
const getTagColor = (tag) => {
  // Create a simple hash from the tag name to get consistent colors
  const hash = Array.from(tag).reduce((sum, char) => sum + char.charCodeAt(0), 0);
  const index = hash % tagColors.length;
  return tagColors[index];
};

// Animation variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.8 } }
};

const slideInFromLeft = {
  hidden: { opacity: 0, x: -50 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6 } }
};

const slideInFromRight = {
  hidden: { opacity: 0, x: 50 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6 } }
};

const scaleUp = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
};

export default function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const navItems = ["About", "Experience", "Projects", "Skills", "Education", "Contact"];

  // Check for user's preferred color scheme
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const isDark = localStorage.getItem('darkMode') === 'true' || 
                    (!('darkMode' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
      setDarkMode(isDark);
    }
  }, []);

  // Apply dark mode class to document
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('darkMode', 'true');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('darkMode', 'false');
    }
  }, [darkMode]);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/Muhammad_Anas_Naeem_CV.pdf';
    link.download = 'Muhammad_Anas_Naeem_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="bg-gradient-to-b from-blue-50 via-indigo-50 to-white min-h-screen dark:bg-gradient-to-b dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Navbar */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b shadow-md dark:bg-gray-900/90 dark:border-gray-700"
      >
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between h-16">
            <div className="font-bold text-lg text-blue-600 dark:text-blue-400">AN</div>
            
            <div className="flex items-center space-x-6">
              {/* Dark mode toggle */}
              <button 
                onClick={toggleDarkMode}
                className="p-2 rounded-full focus:outline-none"
                aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
              >
                {darkMode ? (
                  <Sun className="w-5 h-5 text-yellow-300" />
                ) : (
                  <Moon className="w-5 h-5 text-gray-700" />
                )}
              </button>
              
              {/* Desktop Navigation */}
              <div className="hidden md:flex space-x-6 text-sm font-medium">
                {navItems.map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="text-gray-700 hover:text-blue-600 transition duration-200 px-2 py-1 rounded hover:bg-blue-50 dark:text-gray-300 dark:hover:text-blue-400 dark:hover:bg-gray-800"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button 
                className="text-gray-600 p-2 dark:text-gray-300" 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
          
          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden bg-white py-2 px-4 space-y-2 border-t dark:bg-gray-800 dark:border-gray-700">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left py-2 px-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-blue-400"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </motion.nav>

      {/* Hero Section */}
      <div className="relative pt-16 pb-32 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/background.jpg" 
            alt="Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30 dark:bg-black/50"></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <motion.div 
              initial="hidden"
              animate="show"
              variants={slideInFromLeft}
              className="text-center md:text-left text-white md:w-1/2 mb-10 md:mb-0"
            >
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Muhammad Anas Naeem</h1>
              <p className="text-xl text-blue-100 mb-6">DevOps Engineer</p>
              <p className="text-blue-100 max-w-lg mb-8">
                Building scalable, automated infrastructure and optimizing deployment pipelines to power the next generation of applications.
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4">
                <button 
                  className="px-6 py-3 bg-white text-blue-600 font-medium rounded-lg shadow-md hover:bg-blue-50 transition duration-200 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
                  onClick={handleDownloadCV}
                >
                  Download CV
                </button>
                <button 
                  className="px-6 py-3 bg-blue-500 text-white font-medium rounded-lg shadow-md hover:bg-blue-400 transition duration-200 dark:bg-blue-600 dark:hover:bg-blue-500"
                  onClick={() => scrollToSection('contact')}
                >
                  Hire Me
                </button>
              </div>
            </motion.div>
            <motion.div 
              initial="hidden"
              animate="show"
              variants={slideInFromRight}
              className="md:w-2/5 flex justify-center"
            >
              <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                <img 
                  src="/profile.jpg" 
                  alt="Profile" 
                  className="w-full h-full object-cover" 
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Social Links */}
      <motion.div 
        initial="hidden"
        whileInView="show"
        variants={scaleUp}
        viewport={{ once: true }}
        className="bg-white py-6 shadow-md mb-16 dark:bg-gray-800"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center gap-8">
            <a 
              href="https://github.com/anasnaeem80" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition duration-200 dark:text-gray-300 dark:hover:text-blue-400"
            >
              <Github className="w-5 h-5" />
              <span>GitHub</span>
            </a>
            <a 
              href="https://www.linkedin.com/in/muhammad-anas-naeem-832229246" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition duration-200 dark:text-gray-300 dark:hover:text-blue-400"
            >
              <Linkedin className="w-5 h-5" />
              <span>LinkedIn</span>
            </a>
            <a 
              href="mailto:anas.naeem.998@gmail.com" 
              className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition duration-200 dark:text-gray-300 dark:hover:text-blue-400"
            >
              <Mail className="w-5 h-5" />
              <span>Email</span>
            </a>
          </div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 pb-24">
        {/* About Section */}
        <motion.section 
          id="about"
          initial="hidden"
          whileInView="show"
          variants={container}
          viewport={{ once: true, margin: "-100px" }}
          className="scroll-mt-20"
        >
          <motion.div variants={item}>
            <div className="flex items-center gap-4 mb-8">
              <div className="bg-blue-100 p-3 rounded-lg dark:bg-blue-900/50">
                <Award className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white">About Me</h2>
            </div>
          </motion.div>
          <motion.div variants={item}>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden dark:bg-gray-800">
              <div className="p-6 md:p-8">
                <p className="text-gray-700 leading-relaxed dark:text-gray-300">
                  I&apos;m an aspiring DevOps Engineer, actively building my skills in Linux OS, AWS, solution architecture, Docker, Kubernetes, Jenkins, Terraform, and CI/CD practices.
                  I&apos;m passionate about leveraging these technologies to create efficient, scalable, and resilient systems.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4 dark:text-gray-300">
                  My goal is to contribute to teams by streamlining workflows, automating processes, and enabling smoother development and deployment cycles.
                  I believe in the power of automation and infrastructure as code to solve complex operational challenges.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* Experience Section */}
        <motion.section
          id="experience"
          initial="hidden"
          whileInView="show"
          variants={container}
          viewport={{ once: true, margin: "-100px" }}
          className="scroll-mt-20"
        >
          <motion.div variants={item}>
            <div className="flex items-center gap-4 mb-8">
              <div className="bg-blue-100 p-3 rounded-lg dark:bg-blue-900/50">
                <Briefcase className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Experience</h2>
            </div>
          </motion.div>
          <motion.div variants={item}>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden dark:bg-gray-800">
              <div className="p-6 md:p-8">
                <div className="border-l-4 border-blue-500 pl-4 py-1">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white">DevOps Engineer (Projects)</h3>
                  <p className="text-gray-600 mt-1 dark:text-gray-400">Self-directed projects & hands-on learning</p>
                  <p className="text-gray-500 text-sm mt-1 dark:text-gray-500">2023 - Present</p>
                </div>
                <div className="mt-6">
                  <p className="text-gray-700 dark:text-gray-300">
                    Currently working on various hands-on projects in DevOps and Cloud deployment to build practical experience with industry-standard tools and methodologies.
                  </p>
                  <ul className="mt-4 space-y-2 text-gray-700 dark:text-gray-300">
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2 dark:text-blue-400">•</span>
                      <span>Automating infrastructure deployment with Terraform and AWS</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2 dark:text-blue-400">•</span>
                      <span>Building CI/CD pipelines with Jenkins and GitHub Actions</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2 dark:text-blue-400">•</span>
                      <span>Containerizing applications with Docker and Kubernetes</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* Projects Section */}
        <motion.section
          id="projects"
          initial="hidden"
          whileInView="show"
          variants={container}
          viewport={{ once: true }}
          className="scroll-mt-20"
        >
          <motion.div variants={item}>
            <div className="flex items-center gap-4 mb-8">
              <div className="bg-blue-100 p-3 rounded-lg dark:bg-blue-900/50">
                <Code className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Projects</h2>
            </div>
          </motion.div>
          <motion.div 
            variants={container}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {projects.map((project, index) => (
              <motion.div 
                key={index}
                variants={item}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300 dark:bg-gray-800 dark:hover:shadow-gray-700/50"
              >
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3 dark:text-white">{project.title}</h3>
                  <p className="text-gray-700 mb-4 dark:text-gray-300">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => {
                      const color = getTagColor(tag);
                      return (
                        <span 
                          key={tagIndex} 
                          className={`px-3 py-1 ${color.bg} ${color.text} rounded-full text-xs ${color.darkBg} ${color.darkText}`}
                        >
                          {tag}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Skills Section */}
        <motion.section
          id="skills"
          initial="hidden"
          whileInView="show"
          variants={container}
          viewport={{ once: true }}
          className="scroll-mt-20"
        >
          <motion.div variants={item}>
            <div className="flex items-center gap-4 mb-8">
              <div className="bg-blue-100 p-3 rounded-lg dark:bg-blue-900/50">
                <Brain className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Skills</h2>
            </div>
          </motion.div>
          <motion.div 
            variants={container}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            <motion.div variants={item} className="bg-white rounded-xl shadow-lg overflow-hidden dark:bg-gray-800">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center dark:text-white">Cloud & Infrastructure</h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  {['AWS', 'Terraform', 'Ansible', 'Linux'].map((skill, index) => {
                    const color = getTagColor(skill);
                    return (
                      <span 
                        key={index}
                        className={`px-3 py-1 ${color.bg} ${color.text} rounded-full text-xs ${color.darkBg} ${color.darkText}`}
                      >
                        {skill}
                      </span>
                    );
                  })}
                </div>
              </div>
            </motion.div>
            
            <motion.div variants={item} className="bg-white rounded-xl shadow-lg overflow-hidden dark:bg-gray-800">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center dark:text-white">Containerization</h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  {['Docker', 'Kubernetes', 'Helm'].map((skill, index) => {
                    const color = getTagColor(skill);
                    return (
                      <span 
                        key={index}
                        className={`px-3 py-1 ${color.bg} ${color.text} rounded-full text-xs ${color.darkBg} ${color.darkText}`}
                      >
                        {skill}
                      </span>
                    );
                  })}
                </div>
              </div>
            </motion.div>
            
            <motion.div variants={item} className="bg-white rounded-xl shadow-lg overflow-hidden dark:bg-gray-800">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center dark:text-white">CI/CD & Monitoring</h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  {['Jenkins', 'GitHub Actions', 'Prometheus', 'Grafana'].map((skill, index) => {
                    const color = getTagColor(skill);
                    return (
                      <span 
                        key={index}
                        className={`px-3 py-1 ${color.bg} ${color.text} rounded-full text-xs ${color.darkBg} ${color.darkText}`}
                      >
                        {skill}
                      </span>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Education Section */}
        <motion.section
          id="education"
          initial="hidden"
          whileInView="show"
          variants={container}
          viewport={{ once: true }}
          className="scroll-mt-20"
        >
          <motion.div variants={item}>
            <div className="flex items-center gap-4 mb-8">
              <div className="bg-blue-100 p-3 rounded-lg dark:bg-blue-900/50">
                <GraduationCap className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Education</h2>
            </div>
          </motion.div>
          <motion.div variants={item}>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden dark:bg-gray-800">
              <div className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white">BS Software Engineering</h3>
                    <p className="text-gray-600 mt-1 dark:text-gray-400">University of Karachi, Department of Computer Science</p>
                  </div>
                  <div className="mt-2 md:mt-0">
                    <div className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm dark:bg-blue-900/50 dark:text-blue-400">
                      2022 - Active
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <p className="text-gray-700 dark:text-gray-300">
                    Studying Software Engineering with a focus on DevOps practices, cloud computing, and modern software development methodologies.
                  </p>
                  <p className="text-gray-700 mt-2 dark:text-gray-300">
                    <strong>Location:</strong> Karachi, Pakistan
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* Contact Section */}
        <motion.section
          id="contact"
          initial="hidden"
          whileInView="show"
          variants={container}
          viewport={{ once: true }}
          className="scroll-mt-20"
        >
          <motion.div variants={item}>
            <div className="flex items-center gap-4 mb-8">
              <div className="bg-blue-100 p-3 rounded-lg dark:bg-blue-900/50">
                <Phone className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Contact</h2>
            </div>
          </motion.div>
          <motion.div 
            variants={container}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <motion.div variants={item} className="bg-white rounded-xl shadow-lg overflow-hidden dark:bg-gray-800">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4 dark:text-white">Get In Touch</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Mail className="w-5 h-5 text-blue-600 mr-3 mt-1 dark:text-blue-400" />
                    <div>
                      <p className="text-gray-600 text-sm dark:text-gray-400">Email</p>
                      <p className="text-gray-800 dark:text-gray-200">anas.naeem.998@gmail.com</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Phone className="w-5 h-5 text-blue-600 mr-3 mt-1 dark:text-blue-400" />
                    <div>
                      <p className="text-gray-600 text-sm dark:text-gray-400">Phone</p>
                      <p className="text-gray-800 dark:text-gray-200">+92 324 2009744</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 text-blue-600 mr-3 mt-1 dark:text-blue-400">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <p className="text-gray-600 text-sm dark:text-gray-400">Location</p>
                      <p className="text-gray-800 dark:text-gray-200">Karachi, Pakistan</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 text-blue-600 mr-3 mt-1 dark:text-blue-400">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                    </svg>
                    <div>
                      <p className="text-gray-600 text-sm dark:text-gray-400">Languages</p>
                      <p className="text-gray-800 dark:text-gray-200">Urdu, English</p>
                    </div>
                  </li>
                </ul>
              </div>
            </motion.div>
            
            <motion.div variants={item} className="bg-white rounded-xl shadow-lg overflow-hidden dark:bg-gray-800">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4 dark:text-white">Send Message</h3>
                <form>
                  <div className="mb-4">
                    <input 
                      type="text" 
                      placeholder="Your Name" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400" 
                    />
                  </div>
                  <div className="mb-4">
                    <input 
                      type="email" 
                      placeholder="Your Email" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400" 
                    />
                  </div>
                  <div className="mb-4">
                    <textarea 
                      placeholder="Your Message" 
                      rows="4" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400"
                    ></textarea>
                  </div>
                  <button className="w-full py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-500 transition duration-200 dark:bg-blue-700 dark:hover:bg-blue-600">
                    Send Message
                  </button>
                </form>
              </div>
            </motion.div>
          </motion.div>
        </motion.section>
      </div>

      {/* Footer */}
      <motion.footer 
        initial="hidden"
        whileInView="show"
        variants={fadeIn}
        viewport={{ once: true }}
        className="bg-gray-900 text-white"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Muhammad Anas Naeem</h3>
              <p className="text-gray-400">
                DevOps Engineer passionate about creating scalable and efficient infrastructure solutions.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {navItems.map((item) => (
                  <li key={item}>
                    <button 
                      onClick={() => scrollToSection(item.toLowerCase())}
                      className="text-gray-400 hover:text-white transition duration-200"
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Get Connected</h3>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/anasnaeem80" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition duration-200"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/muhammad-anas-naeem-832229246" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition duration-200"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a 
                  href="mailto:anas.naeem.998@gmail.com" 
                  className="text-gray-400 hover:text-white transition duration-200"
                >
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© {new Date().getFullYear()} Muhammad Anas Naeem. All rights reserved.</p>
          </div>
        </div>
      </motion.footer>
    </div>
  );
}
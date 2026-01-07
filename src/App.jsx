// App.jsx
import React, { useState, useEffect } from "react";
import profilepic from "./assets/profile.png";
// import profilepic1 from "./assets/profile1.png";
import Navbar from "./components/Navbar";
import { motion } from "framer-motion";
import one from "./assets/one.jpeg";
import two from "./assets/two.gif";
import three from "./assets/three.gif";
import four from "./assets/four.jpeg";
import Kartik_Resume from "./assets/Kartik_Resume.pdf";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const PROJECTS = [
  {
    title: "E-Learning & Certification System",
    tech: ["React", "Node.js", "Express", "MongoDB", "Stripe", "Google OAuth"],
    img: one,
    desc: "Full-stack platform for course management, enrollment, progress tracking, automated certificate generation, and face-detection attendance.",
    link: "https://www.erp.miracleitindia.com/", // replace with deployed link or repo
  },
  {
    title: "Food Delivery Web App",
    tech: ["MERN", "REST API", "Socket.io", "Stripe"],
    img: two,
    desc: "Responsive e-commerce app with cart management, real-time order updates, admin restaurant dashboard and optimized DB queries.",
    link: "#",
  },
  {
    title: "Docxito Health Service App",
    tech: ["React Native", "Node.js", "MongoDB"],
    img: three,
    desc: "Cross-platform mobile app connecting doctors & patients with appointment scheduling, push notifications and real-time chat.",
    link: "#",
  },
  {
    title: "Small Business Tools & Integrations",
    tech: ["Node.js", "Express", "MongoDB"],
    img: four,
    desc: "Utilities for internal workflows: role-based access control, file uploads, error handling and API integrations.",
    link: "#",
  },
];

const SKILLS = [
  "React.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "JavaScript (ES6+)",
  "REST APIs",
  "JWT & OAuth",
  "Stripe / Payment Integration",
  "Responsive UI",
  "Git & GitHub",
  "Docker",
  "AWS / Deployment",
];

const EXPERIENCE = [
  {
    role: "MERN Stack Developer (SDE-1)",
    company: "Mirical Infoserve IT Solution, Bhopal",
    date: "Jan 2025 – Present",
    bullets: [
      "Built full-stack MERN applications including an E-Learning Management System & Food Delivery platform.",
      "Implemented OAuth 2.0, Stripe payment integration, and role-based access control.",
      "Optimized MongoDB queries resulting in ~40% faster response times.",
      "Developed reusable React components with Hooks and Context API.",
    ],
  },
  {
    role: "Frontend / MERN Stack Developer Intern",
    company: "Docxito (Autofabrico Manufacturing), Bhopal",
    date: "Jul 2024 – Dec 2024",
    bullets: [
      "Developed React Native mobile application for healthcare services.",
      "Integrated REST APIs with Node.js backend and MongoDB.",
      "Implemented JWT authentication, form validation and secure sessions.",
      "Collaborated in Agile sprints and maintained Git workflow.",
    ],
  },
];

export default function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "dark";
  });

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    console.log("Switching theme from", theme, "to", newTheme);
    setTheme(newTheme);
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [theme]);

  return (
    <div className={`min-h-screen transition-all duration-500 ${theme === 'dark' ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-900'}`}>
      <Navbar theme={theme} toggleTheme={toggleTheme} resumeLink={Kartik_Resume} />
      <main className="pt-32">
        {/* Hero */}
        <section id="home" className="max-w-6xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-3xl md:text-4xl font-bold leading-tight">
                Hi, I'm <span className={`${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>Kartik Upadhyay</span>{" "}
                — MERN Stack Developer
              </h1>
              <p className={`mt-4 max-w-xl text-lg leading-relaxed ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
              }`}>
                I build scalable web applications and delightful user
                experiences using React, Node.js, and MongoDB. I have hands-on
                experience with authentication, payments (Stripe), REST APIs,
                and production deployments.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="#projects"
                  className={`px-5 py-2 rounded-full font-medium hover:scale-105 transition-transform ${
                    theme === 'dark' ? 'bg-white text-black hover:bg-gray-100' : 'bg-gray-900 text-white hover:bg-gray-800'
                  }`}
                >
                  View Projects
                </a>
                <a
                  href={Kartik_Resume}
                  download="Kartik_Resume.pdf"
                  className="px-5 py-2 rounded-full border border-gray-300 dark:border-gray-700"
                >
                  Download Resume
                </a>

                <a
                  href="mailto:kartikupadhyay613@gmail.com"
                  className={`px-5 py-2 rounded-full border border-transparent transition ${
                    theme === 'dark' ? 'hover:bg-gray-800 text-gray-300' : 'hover:bg-gray-100 text-gray-700'
                  }`}
                >
                  <FaEnvelope className="inline-block mr-2 -mt-1" /> Email Me
                </a>
              </div>

              <div className="mt-6 flex items-center gap-4">
                <a
                  href="https://github.com/kartik-613/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-orange-400 transition"
                >
                  <FaGithub size={22} />
                </a>
                <a
                  href="https://www.linkedin.com/in/kartik-upadhyay11/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-orange-400 transition"
                >
                  <FaLinkedin size={22} />
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 2 }}
              transition={{ duration: 0.6 }}
              className="flex justify-center lg:justify-end"
            >
              <div className="w-64 h-72 rounded-xl  opacity-90 overflow-hidden shadow-xl border border-gray-200 dark:border-gray-800">
                <img
                  src={profilepic}
                  alt="Kartik Upadhyay"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="max-w-6xl mx-auto px-6 py-10">
          <h2 className="text-2xl font-semibold mb-4">Core Skills</h2>
          <p className={`mb-6 max-w-2xl text-lg leading-relaxed ${
            theme === 'dark' ? 'text-gray-200' : 'text-gray-800'
          }`}>
            Strong background in front-end and back-end development using modern
            JavaScript tooling and cloud deployment.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {SKILLS.map((skill, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.03 }}
                className={`border rounded-xl p-4 text-sm font-medium backdrop-blur-md transition-all duration-300 hover:shadow-lg ${
                  theme === 'dark' 
                    ? 'bg-gray-800/50 border-gray-700 text-gray-200 hover:bg-gray-700/50' 
                    : 'bg-white/20 border-white/30 text-slate-800 shadow-sm hover:bg-white/30'
                }`}
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className={`py-12 ${
          theme === 'dark' ? 'bg-gray-800' : 'bg-white/60 backdrop-blur-sm'
        }`}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold">Highlighted Projects</h2>
              <a href="#projects" className="text-sm text-gray-400">
                See all projects
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {PROJECTS.map((p, idx) => (
                <motion.article
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className={`group border rounded-xl overflow-hidden shadow-2xl transition-all duration-500 backdrop-blur-xl ${
                    theme === 'dark' 
                      ? 'bg-gray-900/60 border-gray-700/50 hover:bg-gray-900/80' 
                      : 'bg-white/30 border-white/40 hover:bg-white/50 hover:shadow-3xl'
                  }`}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={p.img}
                      alt={p.title}
                      className="w-full h-32 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t transition-opacity duration-300 ${
                      theme === 'dark' 
                        ? 'from-gray-900/80 to-transparent' 
                        : 'from-black/20 to-transparent'
                    }`}></div>
                  </div>
                  
                  <div className="p-4">
                    <h3 className={`font-bold text-lg mb-2 ${
                      theme === 'dark' ? 'text-white' : 'text-slate-800'
                    }`}>{p.title}</h3>
                    
                    <p className={`text-sm leading-relaxed mb-3 ${
                      theme === 'dark' ? 'text-gray-300' : 'text-slate-600'
                    }`}>
                      {p.desc}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-3">
                      {p.tech.map((t, i) => (
                        <span
                          key={i}
                          className={`text-xs font-medium rounded-full px-3 py-1 ${
                            theme === 'dark'
                              ? 'bg-gray-700/50 text-gray-300 border border-gray-600'
                              : 'bg-gray-100 text-gray-700 border border-gray-300'
                          }`}
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <a
                        href={p.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                          theme === 'dark'
                            ? 'bg-gray-700 text-white hover:bg-gray-600'
                            : 'bg-gray-900 text-white hover:bg-gray-800'
                        }`}
                      >
                        View Live
                      </a>
                      <a
                        href="#"
                        className={`text-sm font-medium transition-colors ${
                          theme === 'dark' ? 'text-gray-400 hover:text-gray-200' : 'text-gray-600 hover:text-gray-900'
                        }`}
                      >
                        Source Code →
                      </a>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="max-w-6xl mx-auto px-6 py-12">
          <h2 className="text-2xl font-semibold mb-6">Experience</h2>

          <div className="space-y-6">
            {EXPERIENCE.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 6 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`border rounded-lg p-5 shadow-lg ${
                  theme === 'dark' 
                    ? 'bg-gray-900 border-gray-800' 
                    : 'bg-white border-slate-200'
                }`}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold text-lg">{exp.role}</h3>
                    <div className={`text-sm ${
                      theme === 'dark' ? 'text-gray-300' : 'text-slate-600'
                    }`}>
                      {exp.company}
                    </div>
                  </div>
                  <div className={`text-sm ${
                    theme === 'dark' ? 'text-gray-400' : 'text-slate-500'
                  }`}>
                    {exp.date}
                  </div>
                </div>

                <ul className={`mt-3 list-disc list-inside space-y-1 text-sm ${
                  theme === 'dark' ? 'text-gray-300' : 'text-slate-600'
                }`}>
                  {exp.bullets.map((b, j) => (
                    <li key={j}>{b}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Testimonial / Quick reference */}
        <section className={`py-10 ${
          theme === 'dark' 
            ? 'bg-gray-800' 
            : 'bg-white'
        }`}>
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h3 className="text-xl font-semibold mb-3">Client Feedback</h3>
            <p className={`italic ${
              theme === 'dark' ? 'text-gray-300' : 'text-slate-700'
            }`}>
              "Kartik was fantastic to work with. His expertise in web and app
              development, along with his attention to detail, made the project
              seamless and efficient."
            </p>
            <div className={`mt-3 text-sm font-medium ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}>
              – Parth Shah
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="max-w-4xl mx-auto px-6 py-12">
          <div className={`border rounded-lg p-6 text-center shadow-lg ${
            theme === 'dark' 
              ? 'bg-gray-900 border-gray-800' 
              : 'bg-white border-slate-200'
          }`}>
            <h2 className="text-2xl font-semibold mb-2">
              Let's build something together
            </h2>
            <p className={`mb-4 ${
              theme === 'dark' ? 'text-gray-300' : 'text-slate-600'
            }`}>
              Available for freelance & full-time roles. Open to remote work.
            </p>

            <a
              href="mailto:kartikupadhyay613@gmail.com"
              className={`inline-flex items-center gap-2 px-5 py-2 rounded-full font-medium hover:scale-105 transition-transform ${
                theme === 'dark' ? 'bg-white text-black' : 'bg-gray-900 text-white'
              }`}
            >
              <FaEnvelope /> Email Me
            </a>

            <div className={`mt-6 text-sm ${
              theme === 'dark' ? 'text-gray-400' : 'text-slate-500'
            }`}>
              Arera Hills, Bhopal (MP) • +91 7509377499
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className={`mt-12 border-t py-6 ${
        theme === 'dark' ? 'border-gray-800' : 'border-slate-200'
      }`}>
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm">
            &copy; 2025 Kartik Upadhyay. All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-sm">
            <a
              href="https://github.com/kartik-613/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-400"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/kartik-upadhyay11/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-400"
            >
              LinkedIn
            </a>
            <a
              href="/assets/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-400"
            >
              Resume
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

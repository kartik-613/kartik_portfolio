// App.jsx
import React, { useState, useEffect } from "react";
import profilipic from "./assets/profile.jpg";
import { HiMenu, HiX, HiSun, HiMoon } from "react-icons/hi";
import { motion } from "framer-motion";
import one from "./assets/one.jpeg";
import two from "./assets/two.gif";
import three from "./assets/three.gif";
import four from "./assets/four.jpeg";
import Kartik_Resume from "../public/Kartik_Resume.pdf";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const PROJECTS = [
  {
    title: "E-Learning & Certification System",
    tech: ["React", "Node.js", "Express", "MongoDB", "Stripe", "Google OAuth"],
    img: one,
    desc: "Full-stack platform for course management, enrollment, progress tracking, automated certificate generation, and face-detection attendance.",
    link: "#", // replace with deployed link or repo
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
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors">
      {/* Header */}
      <header className="fixed w-full top-0 left-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="text-2xl font-bold tracking-wide">KARTIK</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              MERN Stack Developer
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#home" className="hover:text-orange-400 transition">
              Home
            </a>
            <a href="#projects" className="hover:text-orange-400 transition">
              Projects
            </a>
            <a href="#experience" className="hover:text-orange-400 transition">
              Experience
            </a>
            <a href="#skills" className="hover:text-orange-400 transition">
              Skills
            </a>
            <a href="#contact" className="hover:text-orange-400 transition">
              Contact
            </a>
            <a
              href={Kartik_Resume}
                  download="Kartik_Resume.pdf"
              className="ml-2 px-4 py-1 rounded-md border border-gray-300 dark:border-gray-700 text-sm hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              Download Resume
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
              aria-label="Toggle theme"
              className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              {theme === "dark" ? (
                <HiSun className="w-5 h-5" />
              ) : (
                <HiMoon className="w-5 h-5" />
              )}
            </button>

            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Open menu"
                className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition"
              >
                {isOpen ? (
                  <HiX className="w-6 h-6" />
                ) : (
                  <HiMenu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile nav */}
        {isOpen && (
          <nav className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
            <div className="flex flex-col px-6 py-4 gap-3">
              {["home", "projects", "experience", "skills", "contact"].map(
                (item) => (
                  <a
                    key={item}
                    href={`#${item}`}
                    onClick={() => setIsOpen(false)}
                    className="py-2 text-sm hover:text-orange-400 transition"
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </a>
                )
              )}
              <a
                href="../public/Kartik_Resume.pdf"
                  download="Kartik_Resume.pdf"
                className="py-2 text-sm hover:text-orange-400 transition"
              >
                Download Resume
              </a>
            </div>
          </nav>
        )}
      </header>

      <main className="pt-24">
        {/* Hero */}
        <section id="home" className="max-w-6xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-3xl md:text-4xl font-bold leading-tight">
                Hi, I'm <span className="text-orange-400">Kartik Upadhyay</span>{" "}
                — MERN Stack Developer
              </h1>
              <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-xl">
                I build scalable web applications and delightful user
                experiences using React, Node.js, and MongoDB. I have hands-on
                experience with authentication, payments (Stripe), REST APIs,
                and production deployments.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="#projects"
                  className="bg-orange-400 text-black px-5 py-2 rounded-full font-medium hover:scale-105 transition-transform"
                >
                  View Projects
                </a>
                <a
                  href="../public/Kartik_Resume.pdf"
                  download="Kartik_Resume.pdf"
                  className="px-5 py-2 rounded-full border border-gray-300 dark:border-gray-700"
                >
                  Download Resume
                </a>

                <a
                  href="mailto:kartikupadhyay613@gmail.com"
                  className="px-5 py-2 rounded-full border border-transparent hover:bg-gray-100 dark:hover:bg-gray-800 transition"
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
                  src={profilipic}
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
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl">
            Strong background in front-end and back-end development using modern
            JavaScript tooling and cloud deployment.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {SKILLS.map((skill, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.03 }}
                className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-3 text-sm"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="bg-gray-50 dark:bg-gray-800 py-12">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold">Highlighted Projects</h2>
              <a href="#projects" className="text-sm text-orange-400">
                See all projects
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {PROJECTS.map((p, idx) => (
                <motion.article
                  key={idx}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-4 shadow-sm"
                >
                  <div className="flex gap-4">
                    <img
                      src={p.img}
                      alt={p.title}
                      className="w-28 h-20 object-cover rounded-md flex-shrink-0"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg">{p.title}</h3>
                      <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                        {p.desc}
                      </p>

                      <div className="mt-3 flex flex-wrap gap-2">
                        {p.tech.map((t, i) => (
                          <span
                            key={i}
                            className="text-xs border border-gray-300 dark:border-gray-700 rounded-full px-2 py-1"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      <div className="mt-3 flex items-center gap-3">
                        <a
                          href={p.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-orange-400"
                        >
                          View
                        </a>
                        <a
                          href="#"
                          className="text-sm text-gray-500 dark:text-gray-400"
                        >
                          Source
                        </a>
                      </div>
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
                className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-5"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold text-lg">{exp.role}</h3>
                    <div className="text-sm text-gray-600 dark:text-gray-300">
                      {exp.company}
                    </div>
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {exp.date}
                  </div>
                </div>

                <ul className="mt-3 list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1 text-sm">
                  {exp.bullets.map((b, j) => (
                    <li key={j}>{b}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Testimonial / Quick reference */}
        <section className="bg-gradient-to-r from-orange-50 to-white dark:from-gray-800 dark:to-gray-900 py-10">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h3 className="text-xl font-semibold mb-3">Client Feedback</h3>
            <p className="italic text-gray-700 dark:text-gray-300">
              "Kartik was fantastic to work with. His expertise in web and app
              development, along with his attention to detail, made the project
              seamless and efficient."
            </p>
            <div className="mt-3 text-sm text-orange-400 font-medium">
              – Parth Shah
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="max-w-4xl mx-auto px-6 py-12">
          <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-6 text-center">
            <h2 className="text-2xl font-semibold mb-2">
              Let's build something together
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Available for freelance & full-time roles. Open to remote work.
            </p>

            <a
              href="mailto:kartikupadhyay613@gmail.com"
              className="inline-flex items-center gap-2 bg-orange-400 text-black px-5 py-2 rounded-full font-medium hover:scale-105 transition-transform"
            >
              <FaEnvelope /> Email Me
            </a>

            <div className="mt-6 text-sm text-gray-600 dark:text-gray-400">
              Arera Hills, Bhopal (MP) • +91 7509377499
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-12 border-t border-gray-200 dark:border-gray-800 py-6">
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

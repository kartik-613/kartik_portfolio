// App.jsx
import React, { useState, useEffect } from "react";
import profilepic from "./assets/profile.png";
// import profilepic1 from "./assets/profile1.png";
import Navbar from "./components/Navbar";
import { BorderBeam } from "./components/BorderBeam";
import { motion } from "framer-motion";
import one from "./assets/one.jpeg";
import two from "./assets/two.gif";
import three from "./assets/three.gif";
import four from "./assets/four.jpeg";
import Kartik_Resume from "./assets/Kartik_Resume.pdf";
import MovingBorderButton from "./components/MovingBorderButton";
import LiquetGlassButton from "./components/LiquetGlassButton";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import SlideInView from "./components/SlideInView";

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
    link: "https://rentok.vercel.app/",
  },
  {
    title: "Docxito Health Service App",
    tech: ["React Native", "Node.js", "MongoDB"],
    img: three,
    desc: "Cross-platform mobile app connecting doctors & patients with appointment scheduling, push notifications and real-time chat.",
    link: "https://drive.google.com/drive/folders/1d1Y5_ewmYIns1ktegR_Nqo-K905ndOXj?usp=drive_link",
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
    <div
      className={`min-h-screen transition-all duration-500 ${theme === "dark"
        ? "bg-gray-900 text-gray-100"
        : "bg-gray-50 text-gray-900"
        }`}
    >
      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
        resumeLink={Kartik_Resume}
      />
      <main className="pt-32">
        {/* Hero */}
        <section id="home" className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-3xl md:text-5xl font-bold leading-[1.2] font-serif flex flex-col gap-1 tracking-tight">
                <SlideInView text="Hi, I'm Kartik Upadhyay" />
                <SlideInView text="MERN Stack Developer" delayOffset={0.6} />
              </h1>

              <p
                className={`mt-6 max-w-xl text-base md:text-lg leading-[1.6] font-serif ${theme === "dark" ? "text-gray-300" : "text-gray-700"
                  }`}
              >
                I build scalable web applications and delightful user
                experiences using React, Node.js, and MongoDB. I have hands-on
                experience with authentication, payments (Stripe), REST APIs,
                and production deployments.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="#projects"
                  className={`inline-flex items-center justify-center px-6 py-2.5 rounded-full font-serif font-medium hover:scale-105 transition-transform ${theme === "dark"
                    ? "bg-white text-black hover:bg-gray-100"
                    : "bg-gray-900 text-white hover:bg-gray-800"
                    }`}
                >
                  View Projects
                </a>
                <MovingBorderButton
                  href={Kartik_Resume}
                  download="Kartik_Resume.pdf"
                  theme={theme}
                  className="download-resume font-serif"
                >
                  Download Resume
                </MovingBorderButton>

                <LiquetGlassButton
                  href="mailto:kartikupadhyay613@gmail.com"
                  theme={theme}
                >
                  <FaEnvelope /> Email Me
                </LiquetGlassButton>
              </div>

              <div className="mt-6 flex items-center gap-4">
                <a
                  href="https://github.com/kartik-613/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-400 transition"
                >
                  <FaGithub size={22} />
                </a>
                <a
                  href="https://www.linkedin.com/in/kartik-upadhyay11/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-400 transition "
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
        <section id="skills" className="max-w-6xl mx-auto px-6 py-24">
          <h2 className="text-3xl font-bold mb-6 tracking-tight">Core Skills</h2>
          <p
            className={`mb-10 max-w-2xl text-lg leading-relaxed ${theme === "dark" ? "text-gray-300" : "text-gray-600"
              }`}
          >
            Strong background in front-end and back-end development using modern
            JavaScript tooling and cloud deployment.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {SKILLS.map((skill, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.03, y: -2 }}
                className={`border rounded-2xl p-5 text-base font-medium backdrop-blur-md transition-all duration-300 hover:shadow-xl ${theme === "dark"
                  ? "bg-gray-800/40 border-gray-700/50 text-gray-200 hover:bg-gray-700/40"
                  : "bg-white/40 border-gray-200 text-slate-800 shadow-sm hover:bg-white/60"
                  }`}
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section
          id="projects"
          className={`py-24 ${theme === "dark" ? "bg-gray-800/30" : "bg-gray-50"
            }`}
        >
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex items-center justify-between mb-12">
              <h2 className="text-3xl font-bold tracking-tight">Highlighted Projects</h2>
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
                  className={`group border rounded-xl overflow-hidden shadow-2xl transition-all duration-500 backdrop-blur-xl ${theme === "dark"
                    ? "bg-gray-900/60 border-gray-700/50 hover:bg-gray-900/80"
                    : "bg-white/30 border-white/40 hover:bg-white/50 hover:shadow-3xl"
                    }`}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={p.img}
                      alt={p.title}
                      className="w-full h-32 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-t transition-opacity duration-300 ${theme === "dark"
                        ? "from-gray-900/80 to-transparent"
                        : "from-black/20 to-transparent"
                        }`}
                    ></div>
                  </div>

                  <div className="p-6">
                    <h3
                      className={`font-bold text-xl mb-3 ${theme === "dark" ? "text-white" : "text-slate-900"
                        }`}
                    >
                      {p.title}
                    </h3>

                    <p
                      className={`text-base leading-relaxed mb-4 ${theme === "dark" ? "text-gray-300" : "text-slate-600"
                        }`}
                    >
                      {p.desc}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {p.tech.map((t, i) => (
                        <span
                          key={i}
                          className={`text-xs font-semibold rounded-full px-3 py-1 ${theme === "dark"
                            ? "bg-gray-800 text-gray-300 border border-gray-700"
                            : "bg-white text-gray-600 border border-gray-200 shadow-sm"
                            }`}
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      <a
                        href={p.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all duration-300 ${theme === "dark"
                          ? "bg-gray-700 text-white hover:bg-gray-600"
                          : "bg-gray-900 text-white hover:bg-gray-800"
                          }`}
                      >
                        View Live
                      </a>
                      <a
                        href="#"
                        className={`text-sm font-semibold transition-colors ${theme === "dark"
                          ? "text-gray-400 hover:text-white"
                          : "text-gray-500 hover:text-gray-900"
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
        <section id="experience" className="max-w-6xl mx-auto px-6 py-24">
          <h2 className="text-3xl font-bold mb-10 tracking-tight">Professional Experience</h2>

          <div className="space-y-8">
            {EXPERIENCE.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`border rounded-2xl p-8 shadow-xl transition-all hover:shadow-2xl ${theme === "dark"
                  ? "bg-gray-900 border-gray-800"
                  : "bg-white border-slate-100"
                  }`}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold text-xl">{exp.role}</h3>
                    <div
                      className={`text-sm ${theme === "dark" ? "text-gray-300" : "text-slate-600"
                        }`}
                    >
                      {exp.company}
                    </div>
                  </div>
                  <div
                    className={`text-sm ${theme === "dark" ? "text-gray-400" : "text-slate-500"
                      }`}
                  >
                    {exp.date}
                  </div>
                </div>

                <ul
                  className={`mt-3 list-disc list-inside space-y-1 text-[15px] ${theme === "dark" ? "text-gray-300" : "text-slate-600"
                    }`}
                >
                  {exp.bullets.map((b, j) => (
                    <li key={j}>{b}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Testimonial / Quick reference */}
        <section
          className={`py-24 ${theme === "dark" ? "bg-gray-800/20" : "bg-white"}`}
        >
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h3 className="text-2xl font-bold mb-6 tracking-tight">Client Feedback</h3>
            <p
              className={`italic text-xl leading-relaxed ${theme === "dark" ? "text-gray-300" : "text-slate-700"
                }`}
            >
              "Kartik was fantastic to work with. His expertise in web and app
              development, along with his attention to detail, made the project
              seamless and efficient."
            </p>
            <div
              className={`mt-6 text-base font-semibold ${theme === "dark" ? "text-gray-400" : "text-gray-600"
                }`}
            >
              – Parth Shah
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="max-w-4xl mx-auto px-6 py-24">
          <div
            className={`border rounded-3xl p-12 text-center shadow-2xl ${theme === "dark"
              ? "bg-gray-900 border-gray-800"
              : "bg-white border-slate-100"
              }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
              Let's build something together
            </h2>
            <p
              className={`mb-8 text-lg ${theme === "dark" ? "text-gray-300" : "text-slate-600"
                }`}
            >
              Available for freelance & full-time roles. Open to remote work.
            </p>

            <LiquetGlassButton
              href="mailto:kartikupadhyay613@gmail.com"
              theme={theme}
              className="mt-4"
            >
              <FaEnvelope /> Email Me
            </LiquetGlassButton>

            <div
              className={`mt-6 text-base ${theme === "dark" ? "text-gray-400" : "text-slate-500"
                }`}
            >
              Arera Hills, Bhopal (MP) • +91 7509377499
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer
        className={`mt-12 border-t py-6 ${theme === "dark" ? "border-gray-800" : "border-slate-200"
          }`}
      >
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-[15px]">
            &copy; 2025 Kartik Upadhyay. All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-sm">
            <a
              href="https://github.com/kartik-613/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/kartik-upadhyay11/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              LinkedIn
            </a>
            <a
              href="/assets/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              Resume
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

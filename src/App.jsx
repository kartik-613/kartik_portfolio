import React, { useState, useEffect } from "react";
import profilepic from "./assets/profile.png";
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
import docxitoAppVideo from "./assets/docxitoAppVideo.mp4";
import NeuralBackground from "./components/ui/flow-field-background";

// Optimization: Lazy load heavy components (bundle-dynamic-imports)
const SmokeyCursor = React.lazy(() => import("./components/SmokeyCursor"));
const Iphone = React.lazy(() => import("./components/Iphone").then(m => ({ default: m.Iphone })));

// Optimization: Memoize repeated components (rerender-memo)
const ProjectCard = React.memo(function ProjectCard({ p, theme, className = "" }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -8, scale: 1.01 }}
      className={`flex flex-col group border rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 backdrop-blur-3xl cursor-pointer ${theme === "dark"
        ? "bg-gray-900/40 border-gray-700/50 hover:bg-gray-900/60 hover:border-blue-500/50"
        : "bg-white/40 border-white/60 hover:bg-white/60 hover:shadow-3xl hover:border-blue-200"
        } ${className}`}
    >
      <div className="relative overflow-hidden shrink-0">
        <img
          src={p.img}
          alt={p.title}
          className="w-full h-44 object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <div
          className={`absolute inset-0 bg-gradient-to-t transition-opacity duration-300 ${theme === "dark"
            ? "from-gray-900/80 to-transparent"
            : "from-black/20 to-transparent"
            }`}
        ></div>
      </div>

      <div className="flex flex-col p-4">
        <div>
          <h3
            className={`font-bold text-xl mb-1 ${theme === "dark" ? "text-white" : "text-slate-900"
              }`}
          >
            {p.title}
          </h3>

          <p
            className={`text-sm leading-relaxed mb-2 ${theme === "dark" ? "text-gray-300" : "text-slate-600"
              }`}
          >
            {p.desc}
          </p>

          <div className="flex flex-wrap gap-2 mb-3">
            {p.tech.map((t, i) => (
              <span
                key={i}
                className={`text-[10px] font-bold uppercase tracking-wider rounded-full px-2.5 py-0.5 ${theme === "dark"
                  ? "bg-gray-800 text-gray-300 border border-gray-700"
                  : "bg-white text-gray-600 border border-gray-200 shadow-sm"
                  }`}
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between pt-2 border-t border-white/5 dark:border-gray-800 mt-1">
          <LiquetGlassButton
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            theme={theme}
            className="!px-4 !py-1"
          >
            Visit Live
          </LiquetGlassButton>
          <a
            href="#"
            className={`flex items-center gap-1 text-[11px] font-bold uppercase tracking-widest transition-all ${theme === "dark"
              ? "text-gray-400 hover:text-white"
              : "text-gray-500 hover:text-gray-900"
              }`}
          >
            <FaGithub size={16} />
            Code
          </a>
        </div>
      </div>
    </motion.article>
  );
});

const PROJECTS = [
  {
    title: "E-Learning & Certification System",
    tech: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
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
  { name: "React.js", level: "Expert", icon: "⚛️", className: "col-span-1 md:col-span-2 bg-blue-500/10 border-blue-500/20" },
  { name: "Node.js", level: "Expert", icon: "🟢", className: "col-span-1 bg-green-500/10 border-green-500/20" },
  { name: "MongoDB", level: "Advanced", icon: "🍃", className: "col-span-1 bg-emerald-500/10 border-emerald-500/20" },
  { name: "Express.js", level: "Expert", icon: "🚂", className: "col-span-1 bg-gray-500/10 border-gray-500/20" },
  { name: "JavaScript", level: "Expert", icon: "JS", className: "col-span-1 md:col-span-2 bg-yellow-500/10 border-yellow-500/20" },
  { name: "REST APIs", level: "Advanced", icon: "🌐", className: "col-span-1 bg-purple-500/10 border-purple-500/20" },
  { name: "Docker", level: "Beginner", icon: "🐳", className: "col-span-1 bg-cyan-500/10 border-cyan-500/20" },
  { name: "AWS", level: "Intermediate", icon: "☁️", className: "col-span-1 bg-orange-500/10 border-orange-500/20" },
  { name: "Tailwind CSS", level: "Expert", icon: "🌊", className: "col-span-1 md:col-span-2 bg-sky-400/10 border-sky-400/20" },
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

  // Optimization: Use functional setState for stable closures (rerender-functional-setstate)
  const toggleTheme = React.useCallback(() => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  }, []);

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
      <React.Suspense fallback={null}>
        <SmokeyCursor />
      </React.Suspense>
      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
        resumeLink={Kartik_Resume}
      />
      <main className="">
        {/* Hero */}
        <section id="home" className="relative overflow-hidden w-full">
          <div className="absolute inset-0 pointer-events-none opacity-30">
            <NeuralBackground
              color={theme === "dark" ? "#6366f1" : "#3b82f6"}
              backgroundColor={theme === "dark" ? "17, 24, 39" : "249, 250, 251"}
              trailOpacity={0.1}
              particleCount={400}
              speed={0.5}
            />
          </div>
          <div className="max-w-6xl mx-auto px-4 pt-32 md:pt-48 pb-10 md:pb-20 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="space-y-8 text-center lg:text-left flex flex-col items-center lg:items-start"
              >
                <h1 className="text-3xl md:text-5xl font-bold leading-[1.2] font-serif flex flex-col gap-1 tracking-tight">
                  <SlideInView text="Hi, I'm Kartik Upadhyay" />
                  <SlideInView text="MERN Stack Developer" delayOffset={0.6} />
                </h1>

                <p
                  className={`max-w-xl text-base md:text-lg leading-[1.6] font-serif ${theme === "dark" ? "text-gray-300" : "text-gray-700"
                    }`}
                >
                  I build scalable web applications and delightful user
                  experiences using React, Node.js, and MongoDB. I have hands-on
                  experience with authentication, payments (Stripe), REST APIs,
                  and production deployments.
                </p>

                <div className="flex flex-col sm:flex-row flex-wrap gap-4 w-full justify-center lg:justify-start items-center">
                  <a
                    href="#projects"
                    className={`w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-full font-serif font-semibold hover:scale-105 transition-transform text-center shadow-lg ${theme === "dark"
                      ? "bg-white text-black hover:bg-gray-100"
                      : "bg-gray-900 text-white hover:bg-gray-800 shadow-gray-900/10"
                      }`}
                  >
                    View Projects
                  </a>
                  <MovingBorderButton
                    href={Kartik_Resume}
                    download="Kartik_Resume.pdf"
                    theme={theme}
                    className="w-full sm:w-auto font-serif"
                  >
                    Download Resume
                  </MovingBorderButton>

                  <LiquetGlassButton
                    href="mailto:kartikupadhyay613@gmail.com"
                    theme={theme}
                    className="w-full sm:w-auto scale-105"
                  >
                    <FaEnvelope /> Email Me
                  </LiquetGlassButton>
                </div>

                <div className="flex items-center gap-8 justify-center lg:justify-start w-full transition-all">
                  <a
                    href="https://github.com/kartik-613/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Profile"
                    className={`hover:text-blue-500 transition-all duration-300 transform hover:scale-110 cursor-pointer ${theme === "dark" ? "text-gray-400" : "text-gray-600"
                      }`}
                  >
                    <FaGithub size={26} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/kartik-upadhyay11/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn Profile"
                    className={`hover:text-blue-600 transition-all duration-300 transform hover:scale-110 cursor-pointer ${theme === "dark" ? "text-gray-400" : "text-gray-600"
                      }`}
                  >
                    <FaLinkedin size={26} />
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="flex justify-center lg:justify-end relative"
              >
                <div className="relative w-full max-w-[300px] h-[380px] md:w-80 md:h-[420px] rounded-3xl opacity-100 overflow-hidden shadow-2xl border border-white/10 dark:border-gray-800 transition-all duration-500">
                  <img
                    src={profilepic}
                    alt="Kartik Upadhyay"
                    className="w-full h-full object-cover transition-all duration-700"
                    loading="eager"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="relative overflow-hidden w-full">
          <div className="absolute inset-0 pointer-events-none opacity-20">
            <NeuralBackground
              color={theme === "dark" ? "#6366f1" : "#3b82f6"}
              backgroundColor={theme === "dark" ? "17, 24, 39" : "249, 250, 251"}
              trailOpacity={0.1}
              particleCount={300}
              speed={0.4}
            />
          </div>
          <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 relative z-10">
            <h2 className="text-3xl font-bold mb-6 tracking-tight">Core Skills</h2>
            <p
              className={`mb-10 max-w-2xl text-lg leading-relaxed ${theme === "dark" ? "text-gray-300" : "text-gray-600"
                }`}
            >
              Strong background in front-end and back-end development using modern
              JavaScript tooling and cloud deployment.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[120px] md:auto-rows-[140px]">
              {SKILLS.map((skill, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.02, y: -4 }}
                  className={`flex flex-col justify-between p-5 rounded-3xl border backdrop-blur-md transition-all duration-300 hover:shadow-2xl cursor-pointer overflow-hidden ${skill.className} ${theme === "dark"
                    ? "hover:brightness-125"
                    : "hover:brightness-95 shadow-sm"
                    }`}
                >
                  <div className="flex justify-between items-start">
                    <span className="text-2xl">{skill.icon}</span>
                    <span className={`text-[10px] uppercase tracking-widest font-bold opacity-60 ${theme === "dark" ? "text-white" : "text-black"
                      }`}>
                      {skill.level}
                    </span>
                  </div>
                  <div>
                    <h3 className={`text-lg font-bold tracking-tight ${theme === "dark" ? "text-white" : "text-gray-900"
                      }`}>
                      {skill.name}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects */}
        <section
          id="projects"
          className={`py-16 md:py-24 overflow-hidden transition-all duration-500 ${theme === "dark" ? "bg-gray-800/30" : "bg-gray-50"
            }`}
        >
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-col md:flex-row items-baseline justify-between mb-12 gap-4">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tight">
                  Highlighted Projects
                </h2>
                <div className="h-1 w-16 bg-blue-500 rounded-full" />
              </div>
              <a href="#projects" className="group text-sm font-bold tracking-widest uppercase opacity-60 hover:opacity-100 transition-all flex items-center gap-2">
                Explore Portfolio <span className="group-hover:translate-x-2 transition-transform">&rarr;</span>
              </a>
            </div>

            {/* Projects Grid: Dynamic Layout */}
            <div className="space-y-8">
              {/* Row 1: Top Projects */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <ProjectCard p={PROJECTS[0]} theme={theme} className="h-full" />
                <ProjectCard p={PROJECTS[1]} theme={theme} className="h-full" />
              </div>

              {/* Featured: Docxito App - The Mobile Masterpiece */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className={`flex flex-col lg:flex-row items-center gap-8 p-8 rounded-3xl border transition-all duration-700 overflow-hidden relative ${theme === "dark"
                  ? "bg-gray-900/40 border-gray-800"
                  : "bg-white border-slate-100 shadow-xl shadow-blue-500/5"
                  }`}
              >
                {/* Background Accent */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px] -mr-64 -mt-64 transition-colors duration-700" />

                <div className="flex-1 space-y-4 relative z-10">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-500 text-[10px] font-bold uppercase tracking-widest">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                    </span>
                    Featured Mobile Project
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
                      {PROJECTS[2].title}
                    </h3>
                    <p className={`text-lg md:text-xl leading-relaxed max-w-lg ${theme === "dark" ? "text-gray-300" : "text-gray-600"
                      }`}>
                      {PROJECTS[2].desc}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {PROJECTS[2].tech.map((t, i) => (
                      <span key={i} className={`px-4 py-2 rounded-2xl text-sm font-bold border transition-all ${theme === "dark"
                        ? "bg-gray-800/50 border-gray-700 text-gray-300 hover:border-blue-500/50"
                        : "bg-white border-gray-100 text-gray-700 shadow-sm hover:border-blue-200"
                        }`}>
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="pt-6 flex flex-wrap gap-5 items-center">
                    <LiquetGlassButton
                      href={PROJECTS[2].link}
                      target="_blank"
                      theme={theme}
                      className="!px-7 !py-3.5 text-lg"
                    >
                      View Live
                    </LiquetGlassButton>
                    <a
                      href="#"
                      className={`flex items-center gap-2 font-bold uppercase tracking-widest text-sm transition-all ${theme === "dark" ? "text-gray-400 hover:text-white" : "text-gray-500 hover:text-gray-900"
                        }`}
                    >
                      <FaGithub size={22} />
                      Code
                    </a>
                  </div>
                </div>

                <div className="flex-1 w-full max-w-[280px] lg:max-w-[320px]">
                  <motion.div className="relative">
                    <div className="absolute inset-0 bg-blue-500/10 rounded-[3rem] blur-[50px] opacity-100" />
                    <React.Suspense fallback={<div className="h-[480px] bg-gray-800 rounded-[2.5rem] animate-pulse" />}>
                      <Iphone
                        className="shadow-[0_25px_70px_-15px_rgba(0,0,0,0.5)] border-gray-900"
                        videoSrc={docxitoAppVideo}
                      />
                    </React.Suspense>
                  </motion.div>
                </div>
              </motion.div>

              {/* Row 3: Final Project */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <ProjectCard p={PROJECTS[3]} theme={theme} className="h-full" />
                <div className={`p-8 rounded-3xl border flex items-center justify-center text-center ${theme === "dark" ? "bg-gray-900/20 border-gray-800/50" : "bg-gray-50 border-slate-100"
                  }`}>
                  <p className="opacity-40 font-bold uppercase tracking-widest text-sm">
                    More projects coming soon
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="max-w-6xl mx-auto px-6 py-16 md:py-24">
          <h2 className="text-3xl font-bold mb-10 tracking-tight">Professional Experience</h2>

          <div className="relative border-l-2 border-dashed border-gray-200 dark:border-gray-800 ml-4 md:ml-8 space-y-12">
            {EXPERIENCE.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ x: 8 }}
                className="relative pl-8 group"
              >
                {/* Timeline Dot */}
                <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-blue-500 border-4 border-white dark:border-gray-900 group-hover:scale-150 transition-transform" />

                <div className={`border rounded-3xl p-6 md:p-8 shadow-xl transition-all duration-300 hover:shadow-2xl cursor-pointer backdrop-blur-3xl ${theme === "dark"
                  ? "bg-gray-900/40 border-gray-800 hover:bg-gray-900/60"
                  : "bg-white/40 border-slate-100 hover:bg-white/60"
                  }`}
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                    <div>
                      <h3 className="font-bold text-2xl tracking-tight">{exp.role}</h3>
                      <div className={`text-base font-medium ${theme === "dark" ? "text-blue-400" : "text-blue-600"}`}>
                        {exp.company}
                      </div>
                    </div>
                    <div className={`text-sm font-mono opacity-50 ${theme === "dark" ? "text-gray-400" : "text-slate-500"}`}>
                      {exp.date}
                    </div>
                  </div>

                  <ul className={`mt-6 space-y-3 text-[15px] leading-relaxed ${theme === "dark" ? "text-gray-300" : "text-slate-600"}`}>
                    {exp.bullets.map((b, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Testimonial / Quick reference */}
        <section
          className={`py-16 md:py-24 ${theme === "dark" ? "bg-gray-800/20" : "bg-white"}`}
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
        <section id="contact" className="max-w-4xl mx-auto px-6 py-16 md:py-32">
          <div
            className={`relative border rounded-[2.5rem] p-10 md:p-20 text-center shadow-3xl overflow-hidden backdrop-blur-3xl ${theme === "dark"
              ? "bg-gray-900/40 border-gray-800"
              : "bg-white/40 border-slate-100"
              }`}
          >
            {/* Background Accent */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />

            <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight relative z-10">
              Let's build something <span className="text-blue-500">extraordinary</span>
            </h2>
            <p
              className={`mb-10 text-xl md:text-2xl font-medium relative z-10 ${theme === "dark" ? "text-gray-300" : "text-slate-600"
                }`}
            >
              Available for freelance & full-time roles.
            </p>

            <div className="flex justify-center relative z-10">
              <LiquetGlassButton
                href="mailto:kartikupadhyay613@gmail.com"
                theme={theme}
                className="scale-110"
              >
                <FaEnvelope size={20} /> Say Hello
              </LiquetGlassButton>
            </div>

            <div
              className={`mt-12 pt-8 border-t text-sm tracking-widest uppercase font-bold opacity-40 ${theme === "dark" ? "text-gray-400" : "text-slate-500"
                }`}
            >
              Arera Hills, Bhopal (MP) • +91 7509377499
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className={`relative border-t mt-12 overflow-hidden transition-all duration-500 ${theme === "dark"
        ? "bg-gray-900 border-gray-800"
        : "bg-gray-50 border-slate-200"}`}>

        {/* Subtle Decorative Gradient */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 sm:gap-16">

            {/* Branding Column */}
            <div className="md:col-span-2 space-y-6">
              <div className="space-y-2">
                <h3 className="text-3xl font-bold font-serif tracking-tight">KARTIK</h3>
                <div className="h-1 w-12 bg-blue-500 rounded-full" />
              </div>
              <p className={`text-lg leading-relaxed max-w-sm font-serif ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
                MERN Stack Developer dedicated to building scalable, high-performance web applications and exceptional user experiences.
              </p>
            </div>

            {/* Navigation Column */}
            <div className="space-y-6">
              <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-blue-500">Navigation</h4>
              <nav className="flex flex-col gap-4">
                {["Home", "Skills", "Projects", "Experience", "Contact"].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className={`text-sm font-medium transition-all hover:translate-x-1 inline-block ${theme === "dark" ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-black"}`}
                  >
                    {item}
                  </a>
                ))}
              </nav>
            </div>

            {/* Socials Column */}
            <div className="space-y-6">
              <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-blue-500">Connect</h4>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://github.com/kartik-613/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-2xl border transition-all hover:scale-110 ${theme === "dark"
                    ? "bg-gray-900/50 border-gray-800 text-gray-300 hover:border-blue-500/50 hover:text-white"
                    : "bg-gray-50 border-slate-200 text-gray-600 hover:border-blue-200 hover:text-black shadow-sm"}`}
                >
                  <FaGithub size={22} />
                </a>
                <a
                  href="https://www.linkedin.com/in/kartik-upadhyay11/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-2xl border transition-all hover:scale-110 ${theme === "dark"
                    ? "bg-gray-900/50 border-gray-800 text-gray-300 hover:border-blue-500/50 hover:text-white"
                    : "bg-gray-50 border-slate-200 text-gray-600 hover:border-blue-200 hover:text-black shadow-sm"}`}
                >
                  <FaLinkedin size={22} />
                </a>
                <a
                  href="mailto:kartikupadhyay613@gmail.com"
                  className={`p-3 rounded-2xl border transition-all hover:scale-110 ${theme === "dark"
                    ? "bg-gray-900/50 border-gray-800 text-gray-300 hover:border-blue-500/50 hover:text-white"
                    : "bg-gray-50 border-slate-200 text-gray-600 hover:border-blue-200 hover:text-black shadow-sm"}`}
                >
                  <FaEnvelope size={22} />
                </a>
              </div>
              <a
                href={Kartik_Resume}
                download="Kartik_Resume.pdf"
                className={`inline-block text-xs font-bold uppercase tracking-widest pt-4 hover:text-blue-500 transition-colors ${theme === "dark" ? "text-gray-500" : "text-gray-400"}`}
              >
                Download Resume &rarr;
              </a>
            </div>
          </div>

          <div className={`mt-16 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-6 ${theme === "dark" ? "border-gray-800 text-gray-500" : "border-slate-100 text-gray-400"}`}>
            <p className="text-sm font-medium">
              &copy; {new Date().getFullYear()} Kartik Upadhyay. All rights reserved.
            </p>
            <p className="text-xs uppercase tracking-[0.3em] font-bold">
              Designed & Developed with <span className="text-red-500 animate-pulse">❤️</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

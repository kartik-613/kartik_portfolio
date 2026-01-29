import React, { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { HiMenu, HiX, HiSun, HiMoon } from 'react-icons/hi';

const Navbar = ({ theme, toggleTheme, resumeLink }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('Home');
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const progress = Math.min(latest / 150, 1);
    setScrollProgress(progress);
    setVisible(latest > 50);

    // Determine active section based on scroll position
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    // If near bottom of page, set to Contact
    if (latest + windowHeight >= documentHeight - 100) {
      setActiveSection('Contact');
      return;
    }

    const sections = ['home', 'skills', 'projects', 'experience', 'contact'];
    const sectionElements = sections.map(id => document.getElementById(id));

    for (let i = sections.length - 1; i >= 0; i--) {
      const element = sectionElements[i];
      if (element && element.offsetTop <= latest + 200) {
        const sectionNames = ['Home', 'Skills', 'Projects', 'Experience', 'Contact'];
        setActiveSection(sectionNames[i]);
        break;
      }
    }
  });

  const navItems = [
    { name: "Home", link: "#home" },
    { name: "Skills", link: "#skills" },
    { name: "Projects", link: "#projects" },
    { name: "Experience", link: "#experience" },
    { name: "Contact", link: "#contact" }
  ];

  return (
    <motion.header
      className="fixed inset-x-0 px-4 top-6 z-50"
    >
      {/* Desktop Navigation */}
      <motion.div
        animate={{
          backdropFilter: `blur(${scrollProgress * 10}px)`,
          boxShadow: scrollProgress > 0.25
            ? "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05)"
            : "none",
          width: `${100 - scrollProgress * 40}%`,
          borderRadius: `${scrollProgress * 24}px`,
        }}
        transition={{
          duration: 0.1,
          ease: "linear",
        }}
        className={`hidden md:flex mx-auto items-center justify-between px-6 py-4 transition-all duration-300 max-w-6xl border ${theme === 'dark'
          ? visible ? 'bg-gray-900/80 border-gray-700' : 'bg-gray-900/80 border-gray-800'
          : visible ? 'bg-white/80 border-gray-200' : 'bg-white/80 border-gray-300'
          }`}
        style={{ width: "100%" }}
      >
        <div className="flex items-center gap-3">
          <div className={`text-2xl font-bold tracking-wide font-serif ${theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>KARTIK</div>
        </div>

        <nav className="flex items-center gap-8 text-[15px] relative">
          {navItems.map((item, idx) => (
            <motion.a
              key={idx}
              href={item.link}
              className={`transition relative px-3 py-1 rounded-full z-10 font-serif ${item.name === activeSection
                ? 'text-white'
                : theme === 'dark'
                  ? 'text-gray-300 hover:text-white'
                  : 'text-gray-700 hover:text-gray-900'
                }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {item.name === activeSection && (
                <motion.div
                  layoutId="activeSection"
                  className={`absolute inset-0 rounded-full ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-900'
                    }`}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative z-10">{item.name}</span>
            </motion.a>
          ))}
        </nav>

        <div className="flex items-center gap-3">

          <motion.button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className={`p-2 rounded-lg transition-all duration-200 ${theme === 'dark'
              ? 'hover:bg-gray-800 bg-gray-800/50 border border-gray-700'
              : 'hover:bg-gray-100 bg-white border border-gray-300'
              }`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {theme === "dark" ? (
              <HiSun className="w-5 h-5 text-gray-300" />
            ) : (
              <HiMoon className="w-5 h-5 text-gray-700" />
            )}
          </motion.button>
        </div>
      </motion.div>

      {/* Mobile Navigation */}
      <motion.div
        animate={{
          backdropFilter: `blur(${scrollProgress * 10}px)`,
          width: `${100 - scrollProgress * 10}%`,
          borderRadius: `${scrollProgress * 16}px`,
        }}
        transition={{
          duration: 0.1,
          ease: "linear",
        }}
        className={`md:hidden mx-auto transition-all duration-300 max-w-6xl border ${theme === 'dark'
          ? 'bg-gray-900/80 border-gray-800'
          : 'bg-white/80 border-gray-300'
          }`}
      >
        <div className="flex items-center justify-between px-4 py-4">
          <div className="flex items-center gap-3">
            <div className={`text-xl font-bold font-serif ${theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>KARTIK</div>
          </div>

          <div className="flex items-center gap-3">
            <motion.button
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-all ${theme === 'dark' ? 'hover:bg-gray-800' : 'hover:bg-gray-100'
                }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {theme === "dark" ? (
                <HiSun className="w-5 h-5 text-gray-300" />
              ) : (
                <HiMoon className="w-5 h-5 text-gray-700" />
              )}
            </motion.button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-lg transition ${theme === 'dark' ? 'hover:bg-gray-800' : 'hover:bg-gray-100'
                }`}
            >
              {isOpen ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className={`px-6 py-4 border-t ${theme === 'dark' ? 'border-gray-700 bg-gray-900/90' : 'border-gray-200 bg-white/90'
              }`}
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item, idx) => (
                <a
                  key={idx}
                  href={item.link}
                  onClick={() => setIsOpen(false)}
                  className="py-2 text-base hover:text-gray-300 transition font-serif"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </motion.nav>
        )}
      </motion.div>
    </motion.header>
  );
};

export default Navbar;
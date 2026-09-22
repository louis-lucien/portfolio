"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FiSun, FiMoon } from "react-icons/fi";
import { personal } from "@/config/portfolio";
import { useTheme } from "./ThemeProvider";

const navLinks = [
  { name: "Accueil", href: "/#hero", sections: ["hero", "about", "skills"] },
  { name: "Projets", href: "/projects", sections: [] },
  { name: "Formation", href: "/#formation", sections: ["formation", "certifications"] },
  { name: "Parcours", href: "/#experience", sections: ["experience", "contact"] },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const allSections = navLinks.flatMap((l) => l.sections);
      for (const id of [...allSections].reverse()) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 150) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "glass py-3" : "py-5"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <Link
            href="/"
            className="text-lg font-bold gradient-text hover:opacity-80 transition-opacity"
          >
            Portfolio
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isRoute = !link.href.includes("#");
              const isActive = isRoute
                ? pathname === link.href
                : link.sections.includes(activeSection);
              const Tag = isRoute ? Link : "a";

              return (
                <Tag
                  key={link.href}
                  href={link.href}
                  className={`relative px-3.5 py-2 text-sm transition-colors duration-300 rounded-full ${
                    isActive
                      ? "text-[var(--color-foreground)]"
                      : "text-[var(--color-muted)] hover:text-[var(--color-foreground)]"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-[var(--color-primary)]/10 rounded-full border border-[var(--color-primary)]/15"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </Tag>
              );
            })}
          </div>

          <div className="hidden md:flex items-center gap-3">
            {/* Theme toggle */}
            <motion.button
              onClick={toggleTheme}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-10 h-10 rounded-full flex items-center justify-center text-[var(--color-muted)] hover:text-[var(--color-primary-light)] hover:bg-[var(--color-primary)]/10 transition-all duration-300"
              aria-label="Changer de thème"
            >
              <AnimatePresence mode="wait">
                {theme === "dark" ? (
                  <motion.div key="sun" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                    <FiSun size={18} />
                  </motion.div>
                ) : (
                  <motion.div key="moon" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                    <FiMoon size={18} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>

            <motion.a
              href="/#contact"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="px-5 py-2.5 rounded-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] text-white text-sm font-semibold shadow-lg shadow-[var(--color-primary)]/10 hover:shadow-[var(--color-primary)]/20 transition-shadow"
            >
              Me contacter
            </motion.a>
          </div>

          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={toggleTheme}
              className="text-[var(--color-muted)] hover:text-[var(--color-primary-light)]"
            >
              {theme === "dark" ? <FiSun size={18} /> : <FiMoon size={18} />}
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="text-[var(--color-primary-light)] text-sm font-medium"
            >
              {mobileOpen ? "Fermer" : "Menu"}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-[var(--color-background)]/95 backdrop-blur-xl flex flex-col items-center justify-center gap-7"
          >
            {navLinks.map((link, i) => {
              const isRoute = !link.href.includes("#");
              const Tag = isRoute ? Link : motion.a;
              return (
                <Tag
                  key={link.href}
                  href={link.href}
                  {...(!isRoute && {
                    initial: { opacity: 0, y: 20 },
                    animate: { opacity: 1, y: 0 },
                    transition: { delay: i * 0.06 },
                  })}
                  onClick={() => setMobileOpen(false)}
                  className="text-xl text-[var(--color-muted)] hover:text-[var(--color-primary-light)] transition-colors"
                >
                  {link.name}
                </Tag>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const links = [
    { href: "#escuela-padres", label: "Escuela para Padres" },
    { href: "#capacidades-diferentes", label: "Capacidades Diferentes" },
  ];

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-40 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(26, 6, 24, 0.96)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(200, 164, 0, 0.12)" : "none",
        boxShadow: scrolled ? "0 4px 30px rgba(0,0,0,0.3)" : "none",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex flex-col leading-none group cursor-pointer">
          <span
            className="text-sm font-semibold tracking-wide transition-colors duration-200 group-hover:text-yellow-300"
            style={{ color: "#C8A400" }}
          >
            Mtra. Maria Guadalupe Aviña
          </span>
          <span
            className="text-[11px] font-light transition-colors duration-200"
            style={{ color: "rgba(200, 164, 0, 0.55)" }}
          >
            Diplomado en el Aula y en Familia
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative text-sm font-medium transition-colors duration-200 hover:text-yellow-300 group cursor-pointer"
              style={{ color: "rgba(245, 239, 224, 0.75)" }}
            >
              {link.label}
              {/* Animated underline */}
              <span
                className="absolute -bottom-0.5 left-0 w-0 h-px group-hover:w-full transition-all duration-300"
                style={{ background: "rgba(200, 164, 0, 0.7)" }}
              />
            </a>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden w-9 h-9 flex items-center justify-center rounded-full cursor-pointer transition-all duration-200 hover:bg-white/5 active:scale-95"
          style={{ border: "1px solid rgba(200, 164, 0, 0.25)" }}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
        >
          <AnimatePresence mode="wait" initial={false}>
            {menuOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                <X className="w-4 h-4" style={{ color: "#C8A400" }} />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                <Menu className="w-4 h-4" style={{ color: "#C8A400" }} />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22, ease: "easeInOut" }}
            className="md:hidden overflow-hidden"
            style={{
              background: "rgba(26, 6, 24, 0.98)",
              borderBottom: "1px solid rgba(200, 164, 0, 0.12)",
            }}
          >
            <div className="px-6 pt-2 pb-5 flex flex-col gap-1">
              {links.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.2 }}
                  className="text-sm font-medium py-2.5 border-b transition-colors duration-200 hover:text-yellow-300 cursor-pointer"
                  style={{
                    color: "rgba(245, 239, 224, 0.85)",
                    borderColor: "rgba(200, 164, 0, 0.08)",
                  }}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

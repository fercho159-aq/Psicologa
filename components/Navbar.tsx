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
      className="fixed top-0 left-0 right-0 z-40 transition-all duration-400"
      style={{
        background: scrolled
          ? "linear-gradient(180deg, rgba(22, 6, 20, 0.97) 0%, rgba(18, 4, 16, 0.95) 100%)"
          : "transparent",
        backdropFilter: scrolled ? "blur(20px) saturate(180%)" : "none",
        borderBottom: scrolled ? "1px solid rgba(200, 164, 0, 0.1)" : "none",
        boxShadow: scrolled ? "0 1px 40px rgba(0,0,0,0.4), 0 0 80px rgba(200,164,0,0.04)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-3 group cursor-pointer">
          {/* Gold accent mark */}
          <div
            className="w-0.5 h-8 rounded-full flex-shrink-0 transition-all duration-300 group-hover:h-10"
            style={{
              background: "linear-gradient(180deg, transparent, #C8A400, transparent)",
            }}
            aria-hidden="true"
          />
          <div className="flex flex-col leading-none">
            <span
              className="text-sm font-semibold tracking-wide transition-colors duration-200 group-hover:text-yellow-300"
              style={{ color: "#C8A400" }}
            >
              Mtra. Maria Guadalupe Aviña
            </span>
            <span
              className="text-[10px] font-light tracking-wider mt-0.5 transition-colors duration-200"
              style={{ color: "rgba(200, 164, 0, 0.45)" }}
            >
              Diplomado en el Aula y en Familia
            </span>
          </div>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative text-sm font-medium px-4 py-2 rounded-full transition-all duration-200 group cursor-pointer"
              style={{ color: "rgba(245, 239, 224, 0.7)" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.color = "#F5EFE0";
                (e.currentTarget as HTMLElement).style.background = "rgba(200,164,0,0.06)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.color = "rgba(245,239,224,0.7)";
                (e.currentTarget as HTMLElement).style.background = "transparent";
              }}
            >
              {link.label}
              {/* Animated underline */}
              <span
                className="absolute bottom-1.5 left-4 right-4 h-px scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                style={{ background: "rgba(200, 164, 0, 0.5)" }}
              />
            </a>
          ))}

          {/* CTA button */}
          <a
            href="#escuela-padres"
            className="ml-3 px-5 py-2 rounded-full text-sm font-semibold cursor-pointer transition-all duration-200 hover:scale-105 active:scale-95"
            style={{
              background: "linear-gradient(135deg, rgba(200,164,0,0.15), rgba(200,164,0,0.08))",
              border: "1px solid rgba(200,164,0,0.3)",
              color: "#C8A400",
            }}
          >
            Inscríbete
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden w-9 h-9 flex items-center justify-center rounded-full cursor-pointer transition-all duration-200 hover:bg-white/5 active:scale-95"
          style={{ border: "1px solid rgba(200, 164, 0, 0.2)" }}
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
              background: "linear-gradient(180deg, rgba(22,6,20,0.99) 0%, rgba(15,4,14,0.99) 100%)",
              borderBottom: "1px solid rgba(200, 164, 0, 0.1)",
              backdropFilter: "blur(20px)",
            }}
          >
            <div className="px-6 pt-3 pb-6 flex flex-col gap-1">
              {links.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.2 }}
                  className="text-sm font-medium py-3 px-3 rounded-xl transition-all duration-200 cursor-pointer flex items-center justify-between"
                  style={{
                    color: "rgba(245, 239, 224, 0.8)",
                    borderBottom: "1px solid rgba(200,164,0,0.06)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "rgba(200,164,0,0.05)";
                    (e.currentTarget as HTMLElement).style.color = "#F5EFE0";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "transparent";
                    (e.currentTarget as HTMLElement).style.color = "rgba(245,239,224,0.8)";
                  }}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                  <span style={{ color: "rgba(200,164,0,0.4)" }}>→</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

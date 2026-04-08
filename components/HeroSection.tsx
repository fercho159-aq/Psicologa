"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Music, VolumeX, ChevronDown } from "lucide-react";

const MUSIC_URL = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3";

export function HeroSection() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = new Audio(MUSIC_URL);
    audio.loop = true;
    audio.volume = 0.4;
    audioRef.current = audio;

    const handleUserInteraction = () => {
      if (audioRef.current && !isPlaying) {
        audioRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
      }
      document.removeEventListener("click", handleUserInteraction);
      document.removeEventListener("keydown", handleUserInteraction);
    };

    document.addEventListener("click", handleUserInteraction, { once: true });
    document.addEventListener("keydown", handleUserInteraction, { once: true });

    return () => {
      audio.pause();
      audio.src = "";
    };
  }, []);

  const toggleMusic = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #2D0A2A 0%, #4A1942 40%, #3D1438 70%, #1A0618 100%)",
      }}
    >
      {/* Decorative background orbs */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-15 blur-3xl"
          style={{ background: "radial-gradient(circle, #C8A400 0%, transparent 70%)" }}
        />
        <div
          className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full opacity-10 blur-3xl"
          style={{ background: "radial-gradient(circle, #9B59B6 0%, transparent 70%)" }}
        />
        <div
          className="absolute top-2/3 left-1/3 w-64 h-64 rounded-full opacity-8 blur-3xl"
          style={{ background: "radial-gradient(circle, #C8A400 0%, transparent 70%)" }}
        />
      </div>

      {/* Subtle dot grid texture */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage: "radial-gradient(circle, #C8A400 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Main content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Top gold line */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.1, ease: "easeOut" }}
          className="w-20 h-px mx-auto mb-8"
          style={{ background: "linear-gradient(90deg, transparent, #C8A400, transparent)" }}
        />

        {/* Kicker label */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="text-xs uppercase tracking-[0.35em] mb-5 font-medium"
          style={{ color: "#C8A400", letterSpacing: "0.35em" }}
        >
          Diplomado en el Aula y en Familia
        </motion.p>

        {/* Main heading — display font */}
        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-heading text-5xl md:text-7xl lg:text-8xl font-semibold mb-5 leading-[1.05] tracking-tight"
          style={{
            color: "#F5EFE0",
            textShadow: "0 2px 40px rgba(200, 164, 0, 0.15)",
          }}
        >
          Escuela para Padres
          <br />
          <span
            className="font-heading font-light italic"
            style={{ color: "#C8A400" }}
          >
            &amp; Capacidades
          </span>
          <br />
          <span className="font-heading font-light italic" style={{ color: "#C8A400" }}>
            Diferentes
          </span>
        </motion.h1>

        {/* Author attribution */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.75 }}
          className="flex items-center justify-center gap-4 mb-10"
        >
          <div className="h-px w-12 flex-shrink-0" style={{ background: "rgba(200,164,0,0.4)" }} />
          <p
            className="font-heading text-xl md:text-2xl font-light italic"
            style={{ color: "#D4B896" }}
          >
            por la Mtra. Maria Guadalupe Aviña
          </p>
          <div className="h-px w-12 flex-shrink-0" style={{ background: "rgba(200,164,0,0.4)" }} />
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.95 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#escuela-padres"
            className="cursor-pointer px-8 py-3.5 rounded-full font-semibold text-sm uppercase tracking-wider transition-all duration-300 hover:scale-105 hover:shadow-lg focus-visible:ring-2 focus-visible:ring-yellow-500/60"
            style={{
              background: "linear-gradient(135deg, #C8A400, #E8C200)",
              color: "#2D0A2A",
              boxShadow: "0 4px 20px rgba(200,164,0,0.3)",
            }}
          >
            Escuela para Padres
          </a>
          <a
            href="#capacidades-diferentes"
            className="cursor-pointer px-8 py-3.5 rounded-full font-semibold text-sm uppercase tracking-wider border transition-all duration-300 hover:scale-105 hover:bg-[rgba(200,164,0,0.08)]"
            style={{
              borderColor: "rgba(200, 164, 0, 0.45)",
              color: "#C8A400",
            }}
          >
            Capacidades Diferentes
          </a>
        </motion.div>

        {/* Bottom gold line */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 1.1, ease: "easeOut" }}
          className="w-20 h-px mx-auto mt-12"
          style={{ background: "linear-gradient(90deg, transparent, #C8A400, transparent)" }}
        />
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#escuela-padres"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.7 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer group"
        aria-label="Ir al contenido"
      >
        <span
          className="text-[10px] uppercase tracking-[0.25em] group-hover:text-yellow-400 transition-colors"
          style={{ color: "rgba(200, 164, 0, 0.55)" }}
        >
          Explorar
        </span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown
            className="w-4 h-4 group-hover:text-yellow-400 transition-colors"
            style={{ color: "rgba(200, 164, 0, 0.55)" }}
          />
        </motion.div>
      </motion.a>

      {/* Music toggle */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.5, type: "spring", stiffness: 220, damping: 18 }}
        onClick={toggleMusic}
        className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full flex items-center justify-center shadow-2xl cursor-pointer transition-transform hover:scale-110 active:scale-95"
        style={{
          background: "linear-gradient(135deg, #4A1942, #6B2E62)",
          border: "1.5px solid rgba(200, 164, 0, 0.35)",
          boxShadow: "0 4px 20px rgba(0,0,0,0.5)",
        }}
        aria-label={isPlaying ? "Pausar música" : "Reproducir música"}
      >
        {isPlaying ? (
          <motion.div
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
          >
            <Music className="w-5 h-5" style={{ color: "#C8A400" }} />
          </motion.div>
        ) : (
          <VolumeX className="w-5 h-5" style={{ color: "rgba(200,164,0,0.5)" }} />
        )}
      </motion.button>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { Clock } from "lucide-react";

export default function VideosPage() {
  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #2D0A2A 0%, #4A1942 40%, #3D1438 70%, #1A0618 100%)",
      }}
    >
      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage:
            "radial-gradient(circle, #C8A400 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Glow orb */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] opacity-10 blur-3xl rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, #C8A400 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 text-center max-w-3xl mx-auto">
        {/* Top line */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-16 h-px mx-auto mb-8"
          style={{
            background:
              "linear-gradient(90deg, transparent, #C8A400, transparent)",
          }}
        />

        {/* Kicker */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center justify-center gap-2 mb-6"
          style={{ color: "rgba(200,164,0,0.7)" }}
        >
          <Clock className="w-3.5 h-3.5" />
          <span className="text-xs uppercase tracking-[0.35em] font-medium">
            Contenido en camino
          </span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.35 }}
          className="font-heading font-semibold leading-none tracking-tight mb-6"
          style={{
            fontSize: "clamp(5rem, 20vw, 14rem)",
            color: "#F5EFE0",
            textShadow: "0 4px 60px rgba(200,164,0,0.18)",
          }}
        >
          Próxima
          <br />
          <span
            className="font-light italic"
            style={{ color: "#C8A400" }}
          >
            mente
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="font-heading text-xl md:text-2xl font-light italic mb-10"
          style={{ color: "rgba(245,239,224,0.5)" }}
        >
          Los videos del diplomado estarán disponibles muy pronto.
        </motion.p>

        {/* Bottom line */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
          className="w-16 h-px mx-auto"
          style={{
            background:
              "linear-gradient(90deg, transparent, #C8A400, transparent)",
          }}
        />

        {/* Author */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 1 }}
          className="mt-8 text-xs uppercase tracking-[0.3em]"
          style={{ color: "rgba(200,164,0,0.4)" }}
        >
          Mtra. Maria Guadalupe Aviña
        </motion.p>
      </div>
    </main>
  );
}

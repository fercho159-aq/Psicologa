"use client";

import { motion } from "framer-motion";
import { ScanLine, Hand } from "lucide-react";

/* ─── Placeholder QR SVG ────────────────────────────────────────────────── */
function QRPlaceholder() {
  return (
    <svg
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      aria-label="Código QR próximamente disponible"
    >
      {/* White background */}
      <rect width="200" height="200" fill="white" rx="4" />

      {/* ── Top-left position marker ── */}
      <rect x="14" y="14" width="52" height="52" rx="4" fill="#1A0618" />
      <rect x="20" y="20" width="40" height="40" rx="2" fill="white" />
      <rect x="28" y="28" width="24" height="24" rx="1" fill="#1A0618" />

      {/* ── Top-right position marker ── */}
      <rect x="134" y="14" width="52" height="52" rx="4" fill="#1A0618" />
      <rect x="140" y="20" width="40" height="40" rx="2" fill="white" />
      <rect x="148" y="28" width="24" height="24" rx="1" fill="#1A0618" />

      {/* ── Bottom-left position marker ── */}
      <rect x="14" y="134" width="52" height="52" rx="4" fill="#1A0618" />
      <rect x="20" y="140" width="40" height="40" rx="2" fill="white" />
      <rect x="28" y="148" width="24" height="24" rx="1" fill="#1A0618" />

      {/* ── Data modules (center grid pattern) ── */}
      {[
        [80, 14], [94, 14], [108, 14], [122, 14],
        [80, 28], [108, 28],
        [80, 42], [94, 42], [108, 42], [122, 42],
        [80, 56], [122, 56],
        [80, 70], [94, 70], [122, 70],

        [14, 80], [28, 80], [56, 80], [70, 80],
        [80, 80], [94, 80], [108, 80], [122, 80], [136, 80], [150, 80], [164, 80],
        [14, 94], [42, 94], [70, 94], [94, 94], [122, 94], [150, 94],
        [14, 108], [28, 108], [56, 108], [80, 108], [108, 108], [136, 108], [164, 108],
        [14, 122], [42, 122], [70, 122], [94, 122], [108, 122], [136, 122],
        [14, 136], [28, 136], [42, 136], [70, 136], [94, 136], [122, 136], [150, 136], [164, 136],

        [80, 134], [108, 134], [136, 134],
        [80, 148], [94, 148], [136, 148], [150, 148], [164, 148],
        [80, 162], [122, 162], [136, 162],
        [94, 176], [108, 176], [122, 176], [150, 176], [164, 176],
      ].map(([x, y], i) => (
        <rect key={i} x={x} y={y} width="10" height="10" rx="1" fill="#1A0618" />
      ))}

      {/* Próximamente overlay — subtle watermark */}
      <text
        x="100"
        y="196"
        textAnchor="middle"
        fontSize="7"
        fill="#9CA3AF"
        fontFamily="system-ui, sans-serif"
      >
        Próximamente disponible
      </text>
    </svg>
  );
}

/* ─── Main Section ──────────────────────────────────────────────────────── */
export function QRSection() {
  return (
    <section
      className="relative py-20 px-6 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #2D0A2A 0%, #4A1942 40%, #3D1438 70%, #1A0618 100%)",
      }}
    >
      {/* Background orbs */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] opacity-10 blur-3xl rounded-full"
          style={{ background: "radial-gradient(ellipse, #C8A400 0%, transparent 70%)" }}
        />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(circle, #C8A400 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">

          {/* ── Left: Text ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex-1 text-center md:text-left"
          >
            {/* Gold top line */}
            <div
              className="w-12 h-px mb-6 mx-auto md:mx-0"
              style={{ background: "linear-gradient(90deg, #C8A400, transparent)" }}
            />

            <p
              className="text-xs uppercase tracking-[0.3em] mb-4 font-medium"
              style={{ color: "rgba(200,164,0,0.65)" }}
            >
              Contenido bajo demanda
            </p>

            <h2
              className="font-heading text-3xl md:text-4xl font-semibold leading-snug mb-5"
              style={{ color: "#F5EFE0" }}
            >
              Si te lo perdiste,{" "}
              <span className="font-light italic" style={{ color: "#C8A400" }}>
                entra aquí
              </span>{" "}
              y velos nuevamente cuando quieras,{" "}
              <span className="font-light italic" style={{ color: "#C8A400" }}>
                las veces que quieras.
              </span>
            </h2>

            <p
              className="text-sm leading-relaxed mb-8 max-w-sm mx-auto md:mx-0"
              style={{ color: "rgba(245,239,224,0.55)" }}
            >
              Escanea el código QR para acceder al contenido grabado del diplomado en cualquier momento.
            </p>

            {/* ESCANEA AQUÍ label */}
            <motion.div
              animate={{ x: [0, 6, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
              className="inline-flex items-center gap-3"
            >
              <div
                className="flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm uppercase tracking-widest"
                style={{
                  background: "linear-gradient(135deg, #C8A400, #E8C200)",
                  color: "#2D0A2A",
                  boxShadow: "0 4px 20px rgba(200,164,0,0.35)",
                }}
              >
                <ScanLine className="w-4 h-4" />
                Escanea Aquí
              </div>
              {/* Arrow pointing right toward QR */}
              <svg
                viewBox="0 0 40 24"
                className="w-10 h-6 hidden md:block"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M2 12 C10 12 24 5 38 12"
                  stroke="#C8A400"
                  strokeWidth="2"
                  strokeLinecap="round"
                  fill="none"
                  opacity="0.7"
                />
                <path
                  d="M32 7 L38 12 L32 17"
                  stroke="#C8A400"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  opacity="0.7"
                />
              </svg>
            </motion.div>
          </motion.div>

          {/* ── Right: QR ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, type: "spring", stiffness: 120, damping: 16 }}
            className="flex-shrink-0 flex flex-col items-center gap-4"
          >
            {/* QR frame */}
            <div
              className="relative p-3 rounded-2xl"
              style={{
                background: "rgba(245,239,224,0.06)",
                border: "2px solid rgba(200,164,0,0.45)",
                boxShadow: "0 0 40px rgba(200,164,0,0.12), 0 8px 32px rgba(0,0,0,0.5)",
              }}
            >
              {/* Corner decorators */}
              {["top-0 left-0", "top-0 right-0", "bottom-0 left-0", "bottom-0 right-0"].map((pos, i) => (
                <span
                  key={i}
                  className={`absolute ${pos} w-5 h-5`}
                  style={{
                    borderColor: "#C8A400",
                    borderStyle: "solid",
                    borderTopWidth: i < 2 ? "2px" : "0",
                    borderBottomWidth: i >= 2 ? "2px" : "0",
                    borderLeftWidth: i % 2 === 0 ? "2px" : "0",
                    borderRightWidth: i % 2 !== 0 ? "2px" : "0",
                    borderRadius: i === 0 ? "6px 0 0 0" : i === 1 ? "0 6px 0 0" : i === 2 ? "0 0 0 6px" : "0 0 6px 0",
                    margin: "-2px",
                  }}
                />
              ))}

              {/* Scan line animation */}
              <div className="relative w-48 h-48 overflow-hidden rounded-lg">
                <QRPlaceholder />
                <motion.div
                  animate={{ y: ["0%", "100%", "0%"] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
                  className="absolute left-0 right-0 h-0.5 pointer-events-none"
                  style={{ background: "linear-gradient(90deg, transparent, rgba(200,164,0,0.8), transparent)" }}
                />
              </div>
            </div>

            {/* Hand + caption */}
            <motion.div
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
              className="flex items-center gap-2"
              style={{ color: "rgba(200,164,0,0.6)" }}
            >
              <Hand className="w-4 h-4" />
              <span className="text-xs font-medium uppercase tracking-widest">
                Próximamente disponible
              </span>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

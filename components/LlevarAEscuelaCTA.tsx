"use client";

import { motion } from "framer-motion";
import { School } from "lucide-react";

const WHATSAPP_NUMBER = "5215521096740";

const WA_MESSAGE =
  "Hola! Represento a una escuela y me interesa que la Mtra. Maria Guadalupe Aviña imparta el Diplomado en el Aula y en Familia en nuestro plantel. ¿Me podrías dar informes?";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

/**
 * Aviso que invita a las escuelas a llevar el diplomado a su plantel.
 * Idea de la clienta: en vez de esconder los módulos que ya se impartieron,
 * usarlos como muestra de lo que se puede llevar a cada escuela.
 */
export function LlevarAEscuelaCTA() {
  const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WA_MESSAGE)}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55 }}
      className="mt-8 rounded-2xl px-6 py-7 sm:px-8 sm:py-8 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, rgba(200,164,0,0.16) 0%, rgba(80,28,72,0.55) 45%, rgba(20,5,18,0.92) 100%)",
        border: "1px solid rgba(200, 164, 0, 0.38)",
        boxShadow: "0 8px 48px rgba(200,164,0,0.12), 0 4px 24px rgba(0,0,0,0.5)",
      }}
    >
      {/* Resplandor decorativo */}
      <div
        className="absolute -top-16 -right-16 w-56 h-56 rounded-full opacity-20 blur-3xl pointer-events-none"
        aria-hidden="true"
        style={{ background: "radial-gradient(circle, #C8A400 0%, transparent 70%)" }}
      />

      <div className="relative flex flex-col md:flex-row md:items-center gap-6">
        <div
          className="flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center mx-auto md:mx-0"
          style={{
            background: "rgba(200, 164, 0, 0.12)",
            border: "1px solid rgba(200, 164, 0, 0.35)",
          }}
        >
          <School className="w-7 h-7" style={{ color: "#C8A400" }} />
        </div>

        <div className="flex flex-col gap-2 flex-1 text-center md:text-left">
          <span
            className="text-xs font-semibold uppercase tracking-widest"
            style={{ color: "rgba(200,164,0,0.75)" }}
          >
            Para escuelas e instituciones
          </span>
          <h3
            className="font-heading text-xl sm:text-2xl font-semibold leading-snug"
            style={{ color: "#F5EFE0" }}
          >
            Llevamos el diplomado a tu escuela
          </h3>
          <p className="text-sm leading-relaxed" style={{ color: "#C8B8C8" }}>
            Estos módulos ya se impartieron, pero el diplomado completo se puede llevar a tu
            plantel: para docentes, para padres de familia o para ambos. Escríbenos y armamos
            juntos el programa según las necesidades de tu comunidad escolar.
          </p>
        </div>

        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer flex-shrink-0 flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 hover:scale-105 hover:shadow-lg active:scale-95 focus-visible:ring-2 focus-visible:ring-yellow-500/60"
          style={{
            background: "linear-gradient(135deg, #1DA851, #128C3E)",
            color: "#fff",
            boxShadow: "0 4px 20px rgba(29, 168, 81, 0.35)",
          }}
        >
          <WhatsAppIcon className="w-5 h-5 flex-shrink-0" />
          Solicitar informes
        </a>
      </div>
    </motion.div>
  );
}

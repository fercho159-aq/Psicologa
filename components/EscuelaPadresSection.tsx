"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, ArrowRight, MessageCircle } from "lucide-react";
import { escuelaPadresModules, type EscuelaPadresModule } from "@/data/content";
import { ContentModal } from "./ContentModal";
import { CapacidadesDiferentesSection } from "./CapacidadesDiferentesSection";
import { cn } from "@/lib/utils";

const WHATSAPP_NUMBER = "5215521096740";

function ModuleCard({
  module,
  index,
  onClick,
  className,
}: {
  module: EscuelaPadresModule;
  index: number;
  onClick: () => void;
  className?: string;
}) {
  const waMessage = `Hola! Me interesa el módulo *${module.title}* (${module.date}) de la Escuela para Padres. ¿Me podrías dar más información?`;
  const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(waMessage)}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      whileHover={{
        scale: 1.025,
        y: -6,
        boxShadow: "0 20px 60px rgba(200, 164, 0, 0.22), 0 4px 24px rgba(0,0,0,0.6)",
      }}
      onClick={onClick}
      className={cn(
        "cursor-pointer rounded-2xl overflow-hidden flex flex-col transition-all duration-300 group",
        className
      )}
      style={{
        background: "linear-gradient(160deg, rgba(80, 28, 72, 0.6) 0%, rgba(20, 5, 18, 0.92) 100%)",
        border: "1px solid rgba(200, 164, 0, 0.18)",
        backdropFilter: "blur(12px)",
        boxShadow: "0 4px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(200,164,0,0.08)",
      }}
    >
      {/* Thumbnail with gradient overlay */}
      {module.flierImage && (
        <div className="w-full overflow-hidden relative" style={{ height: "200px" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={module.flierImage}
            alt={module.title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
            style={{ transformOrigin: "center" }}
          />
          {/* Bottom gradient overlay for readability */}
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(to bottom, transparent 40%, rgba(20,5,18,0.7) 100%)",
            }}
          />
          {/* Date badge overlaid on image */}
          <div
            className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider"
            style={{
              background: "rgba(10,3,10,0.75)",
              border: "1px solid rgba(200, 164, 0, 0.45)",
              color: "#C8A400",
              backdropFilter: "blur(6px)",
            }}
          >
            <Calendar className="w-2.5 h-2.5" />
            {module.date}
          </div>
        </div>
      )}

      {/* Card body */}
      <div className="p-5 flex flex-col gap-3 flex-1">
        {/* Title */}
        <h3
          className="font-heading text-lg font-semibold leading-snug"
          style={{ color: "#F5EFE0" }}
        >
          {module.title}
        </h3>

        {/* Description */}
        <p className="text-sm leading-relaxed flex-1" style={{ color: "#B89AB8", lineHeight: "1.65" }}>
          {module.description}
        </p>

        {/* Divider */}
        <div className="h-px" style={{ background: "rgba(200, 164, 0, 0.08)" }} />

        {/* Actions row */}
        <div className="flex items-center justify-between gap-3">
          <div
            className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider group-hover:gap-2.5 transition-all duration-200"
            style={{ color: "#C8A400" }}
          >
            Ver detalles
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
          </div>

          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer flex-shrink-0"
            style={{
              background: "rgba(29, 168, 81, 0.12)",
              border: "1px solid rgba(29, 168, 81, 0.35)",
              color: "#2DC65A",
            }}
            aria-label="Contactar por WhatsApp"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            WhatsApp
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export function EscuelaPadresSection() {
  const [selectedModule, setSelectedModule] = useState<EscuelaPadresModule | null>(null);
  const isLastOdd = escuelaPadresModules.length % 2 !== 0;

  return (
    <section
      id="escuela-padres"
      className="relative py-24 px-6"
      style={{
        background: "linear-gradient(180deg, #1A0618 0%, #2D0A2A 45%, #1A0618 100%)",
      }}
    >
      {/* Subtle dot texture */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage:
            "radial-gradient(circle at 25% 25%, #C8A400 1px, transparent 1px), radial-gradient(circle at 75% 75%, #C8A400 1px, transparent 1px)",
          backgroundSize: "52px 52px",
        }}
      />

      {/* Top ambient glow */}
      <div
        className="absolute inset-x-0 top-0 h-px pointer-events-none"
        aria-hidden="true"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(200,164,0,0.25), transparent)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          {/* Kicker pill */}
          <div className="inline-flex items-center gap-2 mb-5">
            <div className="h-px w-8" style={{ background: "rgba(200,164,0,0.4)" }} />
            <span
              className="text-[11px] uppercase tracking-[0.35em] font-semibold px-3 py-1 rounded-full"
              style={{
                color: "rgba(200,164,0,0.9)",
                background: "rgba(200,164,0,0.08)",
                border: "1px solid rgba(200,164,0,0.18)",
              }}
            >
              Diplomado · 7 Herramientas
            </span>
            <div className="h-px w-8" style={{ background: "rgba(200,164,0,0.4)" }} />
          </div>

          <h2
            className="font-heading text-5xl md:text-6xl font-semibold mb-3 leading-tight"
            style={{
              color: "#F5EFE0",
              textShadow: "0 2px 30px rgba(200,164,0,0.1)",
            }}
          >
            Escuela para Padres
          </h2>

          <p
            className="font-heading text-xl md:text-2xl font-light italic mb-5"
            style={{ color: "#C8A400" }}
          >
            Cómo cambiar de comportamientos inadecuados a comportamientos adecuados
          </p>

          {/* Decorative divider */}
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px flex-1 max-w-20" style={{ background: "rgba(200, 164, 0, 0.15)" }} />
            <div className="w-24 h-px" style={{ background: "linear-gradient(90deg, transparent, #C8A400, transparent)" }} />
            <div
              className="w-2 h-2 rotate-45 border"
              style={{ borderColor: "rgba(200, 164, 0, 0.6)" }}
            />
            <div className="w-24 h-px" style={{ background: "linear-gradient(90deg, transparent, #C8A400, transparent)" }} />
            <div className="h-px flex-1 max-w-20" style={{ background: "rgba(200, 164, 0, 0.15)" }} />
          </div>

          <p className="text-sm max-w-md mx-auto leading-relaxed" style={{ color: "rgba(184,154,184,0.8)" }}>
            7 sesiones de formación para fortalecer el vínculo familiar y las habilidades parentales
          </p>
        </motion.div>

        {/* Main layout: flyer + modules (left) | Capacidades Diferentes (right) */}
        <div className="flex flex-col lg:flex-row lg:items-start gap-10">
          {/* Left column: flyer overview + 7 module cards */}
          <div className="flex-1 min-w-0">
            {/* Flyer overview image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-8 rounded-2xl overflow-hidden shadow-2xl"
              style={{
                border: "1px solid rgba(200,164,0,0.2)",
                boxShadow: "0 8px 48px rgba(0,0,0,0.5), 0 0 0 1px rgba(200,164,0,0.08)",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/flyer-diplomado.jpg"
                alt="Diplomado en el Aula y en Familia — 7 módulos"
                className="w-full h-auto block"
              />
            </motion.div>

            {/* 7 module cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {escuelaPadresModules.map((module, index) => {
                const isLastAndOdd =
                  isLastOdd && index === escuelaPadresModules.length - 1;
                return (
                  <ModuleCard
                    key={module.id}
                    module={module}
                    index={index}
                    onClick={() => setSelectedModule(module)}
                    className={
                      isLastAndOdd
                        ? "md:col-span-2 md:max-w-[calc(50%-10px)] md:mx-auto md:w-full"
                        : ""
                    }
                  />
                );
              })}
            </div>
          </div>

          {/* Capacidades Diferentes — right column */}
          <div className="lg:w-[380px] flex-shrink-0" id="capacidades-diferentes">
            <CapacidadesDiferentesSection compact />
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedModule && (
        <ContentModal
          isOpen={!!selectedModule}
          onClose={() => setSelectedModule(null)}
          title={selectedModule.title}
          flierImage={selectedModule.flierImage}
          youtubeUrls={selectedModule.youtubeUrls}
          badge={selectedModule.date}
          content={selectedModule.content}
          whatsappMessage={`Hola! Me interesa el módulo *${selectedModule.title}* (${selectedModule.date}) de la Escuela para Padres. ¿Me podrías dar más información?`}
        />
      )}
    </section>
  );
}

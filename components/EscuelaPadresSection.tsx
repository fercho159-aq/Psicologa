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
        scale: 1.02,
        y: -5,
        boxShadow: "0 12px 48px rgba(200, 164, 0, 0.18), 0 4px 24px rgba(0,0,0,0.5)",
      }}
      onClick={onClick}
      className={cn(
        "cursor-pointer rounded-2xl overflow-hidden flex flex-col transition-all duration-300 group",
        className
      )}
      style={{
        background: "linear-gradient(160deg, rgba(74, 25, 66, 0.55) 0%, rgba(20, 5, 18, 0.85) 100%)",
        border: "1px solid rgba(200, 164, 0, 0.2)",
        backdropFilter: "blur(12px)",
        boxShadow: "0 4px 24px rgba(0,0,0,0.35)",
      }}
    >
      {/* Thumbnail */}
      {module.flierImage && (
        <div
          className="w-full overflow-hidden"
          style={{
            height: "200px",
            borderBottom: "1px solid rgba(200, 164, 0, 0.12)",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={module.flierImage}
            alt={module.title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      )}

      {/* Card body */}
      <div className="p-6 flex flex-col gap-3 flex-1">
        {/* Date badge */}
        <div
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider w-fit"
          style={{
            background: "rgba(200, 164, 0, 0.12)",
            border: "1px solid rgba(200, 164, 0, 0.35)",
            color: "#C8A400",
          }}
        >
          <Calendar className="w-3 h-3" />
          {module.date}
        </div>

        {/* Title */}
        <h3
          className="font-heading text-xl font-semibold leading-snug"
          style={{ color: "#F5EFE0" }}
        >
          {module.title}
        </h3>

        {/* Description */}
        <p className="text-sm leading-relaxed flex-1" style={{ color: "#B89AB8", lineHeight: "1.65" }}>
          {module.description}
        </p>

        {/* Actions row */}
        <div className="flex items-center justify-between mt-1 gap-3">
          <div
            className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider group-hover:gap-2.5 transition-all duration-200"
            style={{ color: "#C8A400" }}
          >
            Ver detalles
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
          </div>

          {/* WhatsApp quick-link */}
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer flex-shrink-0"
            style={{
              background: "rgba(29, 168, 81, 0.15)",
              border: "1px solid rgba(29, 168, 81, 0.4)",
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
      className="relative py-28 px-6"
      style={{
        background: "linear-gradient(180deg, #1A0618 0%, #2D0A2A 50%, #1A0618 100%)",
      }}
    >
      {/* Subtle dot texture */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage:
            "radial-gradient(circle at 25% 25%, #C8A400 1px, transparent 1px), radial-gradient(circle at 75% 75%, #C8A400 1px, transparent 1px)",
          backgroundSize: "52px 52px",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p
            className="text-xs uppercase tracking-[0.3em] mb-3 font-medium"
            style={{ color: "rgba(200, 164, 0, 0.65)" }}
          >
            Diplomado · 7 Herramientas
          </p>
          <h2
            className="font-heading text-5xl md:text-6xl font-semibold mb-3 leading-tight"
            style={{ color: "#F5EFE0" }}
          >
            Escuela para Padres
          </h2>
          <p
            className="font-heading text-xl md:text-2xl font-light italic mb-6"
            style={{ color: "#C8A400" }}
          >
            Cómo cambiar de comportamientos inadecuados a comportamientos adecuados
          </p>
          {/* Decorative divider */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px flex-1 max-w-20" style={{ background: "rgba(200, 164, 0, 0.2)" }} />
            <div className="w-20 h-px" style={{ background: "linear-gradient(90deg, transparent, #C8A400, transparent)" }} />
            <div
              className="w-2.5 h-2.5 rotate-45 border"
              style={{ borderColor: "rgba(200, 164, 0, 0.7)" }}
            />
            <div className="w-20 h-px" style={{ background: "linear-gradient(90deg, transparent, #C8A400, transparent)" }} />
            <div className="h-px flex-1 max-w-20" style={{ background: "rgba(200, 164, 0, 0.2)" }} />
          </div>
          <p className="text-base max-w-lg mx-auto leading-relaxed" style={{ color: "#B89AB8" }}>
            7 sesiones de formación para fortalecer el vínculo familiar y las habilidades parentales
          </p>
        </motion.div>

        {/* Flyer del Diplomado */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="flex justify-center mb-12"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/flyer-diplomado.jpg"
            alt="Flyer Diplomado en el Aula y en Familia"
            className="w-full max-w-xs rounded-2xl"
            style={{
              border: "1px solid rgba(200, 164, 0, 0.3)",
              boxShadow: "0 8px 40px rgba(0,0,0,0.5), 0 0 0 1px rgba(200,164,0,0.08)",
            }}
          />
        </motion.div>

        {/* Modules grid + Capacidades Diferentes side by side */}
        <div className="flex flex-col lg:flex-row lg:items-start gap-8">
          {/* 7 module cards — left column */}
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                        ? "md:col-span-2 md:max-w-[calc(50%-12px)] md:mx-auto md:w-full"
                        : ""
                    }
                  />
                );
              })}
            </div>
          </div>

          {/* Capacidades Diferentes — right column */}
          <div className="lg:w-[360px] xl:w-[400px] flex-shrink-0" id="capacidades-diferentes">
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
          youtubeUrl={selectedModule.youtubeUrl}
          badge={selectedModule.date}
          content={selectedModule.content}
          whatsappMessage={`Hola! Me interesa el módulo *${selectedModule.title}* (${selectedModule.date}) de la Escuela para Padres. ¿Me podrías dar más información?`}
        />
      )}
    </section>
  );
}

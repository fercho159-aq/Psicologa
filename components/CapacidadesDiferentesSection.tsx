"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { capacidadesDiferentes, type CapacidadDiferente } from "@/data/content";
import { ContentModal } from "./ContentModal";
import { CardsSlider, makeWaUrl } from "@/components/ui/cards-slider-shadcnui";

const CATEGORY_MAP: Record<string, string> = {
  "cd-1": "TEA",
  "cd-2": "TDAH",
  "cd-3": "Inclusión",
  "cd-4": "Síndrome de Down",
  "cd-5": "Aprendizaje",
  "cd-6": "Emocional",
  "cd-7": "Alimentación",
  "cd-8": "Escolar",
};

function CompactCard({
  item,
  index,
  onClick,
}: {
  item: CapacidadDiferente;
  index: number;
  onClick: () => void;
}) {
  const waUrl = makeWaUrl(item.title);
  const category = CATEGORY_MAP[item.id] ?? "Recurso";

  return (
    <motion.div
      initial={{ opacity: 0, x: 16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      onClick={onClick}
      className="cursor-pointer group flex gap-3 p-3 rounded-xl transition-all duration-300"
      style={{
        background: "linear-gradient(135deg, rgba(42,122,111,0.12) 0%, rgba(10,30,28,0.5) 100%)",
        border: "1px solid rgba(75,200,184,0.16)",
        boxShadow: "0 2px 12px rgba(0,0,0,0.2)",
      }}
      whileHover={{
        background: "linear-gradient(135deg, rgba(42,122,111,0.22) 0%, rgba(10,30,28,0.7) 100%)",
        borderColor: "rgba(75,200,184,0.32)",
        boxShadow: "0 6px 24px rgba(42,122,111,0.2), 0 2px 8px rgba(0,0,0,0.4)",
        y: -2,
      }}
    >
      {/* Thumbnail */}
      <div className="flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden ring-1 ring-teal-800/30">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={item.flierImage}
          alt={item.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* Text */}
      <div className="flex-1 min-w-0 flex flex-col justify-between">
        <div>
          <span
            className="text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded"
            style={{
              color: "rgba(75,200,184,0.85)",
              background: "rgba(75,200,184,0.08)",
            }}
          >
            {category}
          </span>
          <h3
            className="font-heading text-sm font-semibold leading-snug mt-1 group-hover:text-[#4BC8B8] transition-colors duration-200"
            style={{ color: "#E8F5F3" }}
          >
            {item.title}
          </h3>
        </div>

        <div className="flex items-center justify-between mt-1.5">
          <span
            className="text-[10px] font-medium flex items-center gap-1 transition-all duration-200 group-hover:gap-1.5"
            style={{ color: "rgba(122,184,176,0.75)" }}
          >
            Ver contenido
            <span className="transition-transform duration-200 group-hover:translate-x-0.5">→</span>
          </span>
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex items-center gap-1 px-2 py-0.5 rounded-full text-[9px] font-semibold transition-all hover:scale-105 active:scale-95"
            style={{
              background: "rgba(29,168,81,0.12)",
              border: "1px solid rgba(29,168,81,0.3)",
              color: "#2DC65A",
            }}
          >
            <MessageCircle className="h-2.5 w-2.5" />
            WA
          </a>
        </div>
      </div>
    </motion.div>
  );
}

interface CapacidadesDiferentesSectionProps {
  compact?: boolean;
}

export function CapacidadesDiferentesSection({ compact = false }: CapacidadesDiferentesSectionProps) {
  const [selectedItem, setSelectedItem] = useState<CapacidadDiferente | null>(null);

  if (compact) {
    return (
      <section
        className="relative rounded-2xl py-8 px-5 overflow-hidden"
        style={{
          background: "linear-gradient(160deg, rgba(10,30,26,0.9) 0%, rgba(8,20,16,0.95) 100%)",
          border: "1px solid rgba(75,200,184,0.12)",
          boxShadow: "0 0 40px rgba(42,122,111,0.08) inset",
        }}
      >
        {/* Background glow */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div
            className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-3/4 h-40 opacity-15 blur-3xl rounded-full"
            style={{ background: "radial-gradient(ellipse, #2A7A6F 0%, transparent 70%)" }}
          />
          <div
            className="absolute top-0 right-0 w-32 h-32 opacity-8 blur-2xl rounded-full"
            style={{ background: "radial-gradient(circle, #4BC8B8 0%, transparent 70%)" }}
          />
        </div>

        <div className="relative z-10 flex flex-col">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-6"
          >
            {/* Kicker pill */}
            <div className="inline-flex items-center gap-1.5 mb-3">
              <div className="h-px w-5" style={{ background: "rgba(75,200,184,0.4)" }} />
              <span
                className="text-[9px] uppercase tracking-[0.3em] font-semibold px-2 py-0.5 rounded-full"
                style={{
                  color: "rgba(75,200,184,0.9)",
                  background: "rgba(75,200,184,0.08)",
                  border: "1px solid rgba(75,200,184,0.16)",
                }}
              >
                Adaptación Curricular
              </span>
              <div className="h-px w-5" style={{ background: "rgba(75,200,184,0.4)" }} />
            </div>

            <h2
              className="font-heading text-2xl font-semibold leading-tight mb-2"
              style={{ color: "#E8F5F3" }}
            >
              Capacidades Diferentes
            </h2>

            <div className="flex items-center justify-center gap-2 mb-2">
              <div className="h-px flex-1 max-w-10" style={{ background: "rgba(75, 200, 184, 0.15)" }} />
              <div className="w-1.5 h-1.5 rotate-45 border" style={{ borderColor: "rgba(75, 200, 184, 0.5)" }} />
              <div className="h-px flex-1 max-w-10" style={{ background: "rgba(75, 200, 184, 0.15)" }} />
            </div>

            <p className="text-xs leading-relaxed" style={{ color: "rgba(122,184,176,0.75)" }}>
              Completa el diplomado con adaptación curricular para niños con necesidades especiales
            </p>
          </motion.div>

          {/* Compact card list */}
          <div className="flex flex-col gap-2.5">
            {capacidadesDiferentes.map((item, index) => (
              <CompactCard
                key={item.id}
                item={item}
                index={index}
                onClick={() => setSelectedItem(item)}
              />
            ))}
          </div>
        </div>

        {/* Modal */}
        {selectedItem && (
          <ContentModal
            isOpen={!!selectedItem}
            onClose={() => setSelectedItem(null)}
            title={selectedItem.title}
            flierImage={selectedItem.flierImage}
            youtubeUrls={selectedItem.youtubeUrls}
            content={selectedItem.content}
            audios={selectedItem.audios}
            whatsappMessage={`Hola! Me interesa información sobre *${selectedItem.title}* del programa Capacidades Diferentes. ¿Me podrías dar más información?`}
          />
        )}
      </section>
    );
  }

  // Full-width layout (standalone)
  const sliderCards = capacidadesDiferentes.map((item) => ({
    id: item.id,
    title: item.title,
    description: item.description,
    category: CATEGORY_MAP[item.id] ?? "Recursos",
    image: item.flierImage,
    whatsappUrl: makeWaUrl(item.title),
  }));

  return (
    <section
      id="capacidades-diferentes"
      className="relative py-28 px-6"
      style={{
        background: "linear-gradient(180deg, #1A0618 0%, #0A1E1C 50%, #0A1410 100%)",
      }}
    >
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-96 opacity-12 blur-3xl"
          style={{ background: "radial-gradient(ellipse, #2A7A6F 0%, transparent 70%)" }}
        />
        <div
          className="absolute top-1/4 right-1/4 w-64 h-64 opacity-8 blur-3xl rounded-full"
          style={{ background: "radial-gradient(circle, #4BC8B8 0%, transparent 70%)" }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
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
            style={{ color: "rgba(75, 200, 184, 0.65)" }}
          >
            Recursos Especializados
          </p>
          <h2
            className="font-heading text-5xl md:text-6xl font-semibold mb-6 leading-tight"
            style={{ color: "#E8F5F3" }}
          >
            Capacidades Diferentes
          </h2>
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px flex-1 max-w-20" style={{ background: "rgba(75, 200, 184, 0.2)" }} />
            <div className="w-20 h-px" style={{ background: "linear-gradient(90deg, transparent, #2A7A6F, transparent)" }} />
            <div
              className="w-2.5 h-2.5 rotate-45 border"
              style={{ borderColor: "rgba(75, 200, 184, 0.6)" }}
            />
            <div className="w-20 h-px" style={{ background: "linear-gradient(90deg, transparent, #2A7A6F, transparent)" }} />
            <div className="h-px flex-1 max-w-20" style={{ background: "rgba(75, 200, 184, 0.2)" }} />
          </div>
          <p className="text-base max-w-lg mx-auto leading-relaxed" style={{ color: "#7AB8B0" }}>
            Información y recursos para comprender y acompañar a niños con capacidades diferentes
          </p>
        </motion.div>

        {/* Cards Slider */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <CardsSlider cards={sliderCards} />
        </motion.div>
      </div>

      {/* Modal */}
      {selectedItem && (
        <ContentModal
          isOpen={!!selectedItem}
          onClose={() => setSelectedItem(null)}
          title={selectedItem.title}
          flierImage={selectedItem.flierImage}
          youtubeUrls={selectedItem.youtubeUrls}
          content={selectedItem.content}
            audios={selectedItem.audios}
          whatsappMessage={`Hola! Me interesa información sobre *${selectedItem.title}* del programa Capacidades Diferentes. ¿Me podrías dar más información?`}
        />
      )}
    </section>
  );
}

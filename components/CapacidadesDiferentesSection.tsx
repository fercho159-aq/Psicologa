"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { capacidadesDiferentes, type CapacidadDiferente } from "@/data/content";
import { ContentModal } from "./ContentModal";
import { CardsSlider, makeWaUrl, type CardData } from "@/components/ui/cards-slider-shadcnui";

const CATEGORY_MAP: Record<string, string> = {
  "cd-1": "TEA",
  "cd-2": "TDAH",
  "cd-3": "Inclusión",
  "cd-4": "Síndrome de Down",
  "cd-5": "Aprendizaje",
  "cd-6": "Emocional",
};

export function CapacidadesDiferentesSection() {
  const [selectedItem, setSelectedItem] = useState<CapacidadDiferente | null>(null);

  const sliderCards: CardData[] = capacidadesDiferentes.map((item) => ({
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
          youtubeUrl={selectedItem.youtubeUrl}
          whatsappMessage={`Hola! Me interesa información sobre *${selectedItem.title}* del programa Capacidades Diferentes. ¿Me podrías dar más información?`}
        />
      )}
    </section>
  );
}

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Brain, Zap, Heart, Sun, BookOpen, Wind, MessageCircle } from "lucide-react";
import { capacidadesDiferentes, type CapacidadDiferente } from "@/data/content";
import { ContentModal } from "./ContentModal";

const WHATSAPP_NUMBER = "5215521096740";

const iconMap: Record<string, React.ElementType> = {
  "cd-1": Brain,
  "cd-2": Zap,
  "cd-3": Heart,
  "cd-4": Sun,
  "cd-5": BookOpen,
  "cd-6": Wind,
};

function CapacidadCard({
  item,
  index,
  onClick,
}: {
  item: CapacidadDiferente;
  index: number;
  onClick: () => void;
}) {
  const Icon = iconMap[item.id] || Heart;
  const isEmpty = !item.flierImage && !item.youtubeUrl;
  const waMessage = `Hola! Me interesa información sobre *${item.title}* del programa Capacidades Diferentes. ¿Me podrías dar más información?`;
  const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(waMessage)}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.45, delay: index * 0.07 }}
      whileHover={{
        scale: 1.03,
        y: -5,
        boxShadow: "0 12px 40px rgba(75, 200, 184, 0.15), 0 4px 24px rgba(0,0,0,0.5)",
      }}
      onClick={onClick}
      className="cursor-pointer rounded-2xl p-5 flex flex-col items-center gap-3.5 relative transition-all duration-300 group"
      style={{
        background: "linear-gradient(150deg, rgba(42, 122, 111, 0.22) 0%, rgba(15, 45, 42, 0.7) 100%)",
        border: "1px solid rgba(75, 200, 184, 0.2)",
        backdropFilter: "blur(12px)",
        boxShadow: "0 4px 24px rgba(0,0,0,0.3)",
      }}
    >
      {/* Próximamente badge */}
      {isEmpty && (
        <div
          className="absolute top-3 right-3 px-2 py-0.5 rounded-full text-[10px] font-semibold"
          style={{
            background: "rgba(42, 122, 111, 0.25)",
            border: "1px solid rgba(75, 200, 184, 0.3)",
            color: "#4BC8B8",
          }}
        >
          Próximamente
        </div>
      )}

      {/* Image or icon */}
      {item.flierImage ? (
        <div
          className="w-full overflow-hidden rounded-xl"
          style={{
            height: "150px",
            border: "1px solid rgba(75, 200, 184, 0.2)",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={item.flierImage}
            alt={item.title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      ) : (
        <div
          className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0"
          style={{
            background: "linear-gradient(135deg, rgba(42, 122, 111, 0.45), rgba(42, 180, 160, 0.2))",
            border: "1px solid rgba(75, 200, 184, 0.35)",
          }}
        >
          <Icon className="w-7 h-7" style={{ color: "#4BC8B8" }} />
        </div>
      )}

      {/* Title */}
      <h3
        className="font-heading text-lg font-semibold text-center leading-tight"
        style={{ color: "#E8F5F3" }}
      >
        {item.title}
      </h3>

      {/* Description */}
      <p
        className="text-xs text-center leading-relaxed line-clamp-3"
        style={{ color: "#7AB8B0", lineHeight: "1.6" }}
      >
        {item.description}
      </p>

      {/* WhatsApp button */}
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={(e) => e.stopPropagation()}
        className="flex items-center justify-center gap-1.5 w-full py-2 rounded-xl text-xs font-semibold transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer mt-1"
        style={{
          background: "rgba(29, 168, 81, 0.14)",
          border: "1px solid rgba(29, 168, 81, 0.35)",
          color: "#2DC65A",
        }}
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle className="w-3.5 h-3.5" />
        Más información
      </a>
    </motion.div>
  );
}

export function CapacidadesDiferentesSection() {
  const [selectedItem, setSelectedItem] = useState<CapacidadDiferente | null>(null);

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
          {/* Teal divider */}
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

        {/* Responsive grid — 2 cols on mobile, 3 cols on tablet+ */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {capacidadesDiferentes.map((item, index) => (
            <CapacidadCard
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
          youtubeUrl={selectedItem.youtubeUrl}
          whatsappMessage={`Hola! Me interesa información sobre *${selectedItem.title}* del programa Capacidades Diferentes. ¿Me podrías dar más información?`}
        />
      )}
    </section>
  );
}

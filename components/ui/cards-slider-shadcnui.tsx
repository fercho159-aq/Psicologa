"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { animate, motion, useMotionValue } from "framer-motion";
import { ChevronLeft, ChevronRight, MessageCircle } from "lucide-react";
import { useEffect, useRef } from "react";

interface CardData {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  whatsappUrl: string;
}

const WHATSAPP_NUMBER = "5215521096740";

function makeWaUrl(title: string) {
  const msg = `Hola! Me interesa información sobre *${title}* del programa Capacidades Diferentes. ¿Me podrías dar más información?`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
}

export function CardsSlider({ cards }: { cards: CardData[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const widthRef = useRef(0);
  const x = useMotionValue(0);

  useEffect(() => {
    if (containerRef.current) {
      widthRef.current =
        containerRef.current.scrollWidth - containerRef.current.offsetWidth;
    }
  }, []);

  const scrollTo = (direction: "left" | "right") => {
    const currentX = x.get();
    const containerWidth = containerRef.current?.offsetWidth || 0;
    const scrollAmount = containerWidth * 0.8;
    let newX =
      direction === "left" ? currentX + scrollAmount : currentX - scrollAmount;
    newX = Math.max(Math.min(newX, 0), -widthRef.current);
    animate(x, newX, { type: "spring", stiffness: 300, damping: 30, mass: 1 });
  };

  return (
    <div className="w-full relative group/slider">
      {/* Left arrow */}
      <div className="absolute top-1/2 -translate-y-1/2 -left-5 z-20 opacity-0 group-hover/slider:opacity-100 transition-opacity duration-300">
        <button
          onClick={() => scrollTo("left")}
          className="h-11 w-11 rounded-full bg-background/80 backdrop-blur-md border border-border/50 shadow-lg flex items-center justify-center hover:bg-background hover:scale-110 transition-all active:scale-95"
          aria-label="Scroll left"
          style={{ borderColor: "rgba(75,200,184,0.3)", color: "#4BC8B8", background: "rgba(10,30,28,0.85)" }}
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
      </div>

      {/* Right arrow */}
      <div className="absolute top-1/2 -translate-y-1/2 -right-5 z-20 opacity-0 group-hover/slider:opacity-100 transition-opacity duration-300">
        <button
          onClick={() => scrollTo("right")}
          className="h-11 w-11 rounded-full bg-background/80 backdrop-blur-md border border-border/50 shadow-lg flex items-center justify-center hover:bg-background hover:scale-110 transition-all active:scale-95"
          aria-label="Scroll right"
          style={{ borderColor: "rgba(75,200,184,0.3)", color: "#4BC8B8", background: "rgba(10,30,28,0.85)" }}
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      <motion.div
        ref={containerRef}
        className="cursor-grab active:cursor-grabbing overflow-hidden px-2 py-6 -mx-2 -my-6"
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -widthRef.current }}
          dragElastic={0.08}
          style={{ x }}
          className="flex gap-5"
          onUpdate={() => {
            if (containerRef.current) {
              widthRef.current =
                containerRef.current.scrollWidth - containerRef.current.offsetWidth;
            }
          }}
        >
          {cards.map((card) => (
            <motion.div
              key={card.id}
              className="min-w-[300px] max-w-[300px] h-[420px]"
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <Card
                className="group relative h-full overflow-hidden rounded-2xl transition-all duration-500"
                style={{
                  background: "linear-gradient(150deg, rgba(42,122,111,0.22) 0%, rgba(15,45,42,0.85) 100%)",
                  border: "1px solid rgba(75,200,184,0.2)",
                  backdropFilter: "blur(12px)",
                  boxShadow: "0 4px 24px rgba(0,0,0,0.35)",
                }}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <motion.img
                    src={card.image}
                    alt={card.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    draggable={false}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1E1C]/90 via-[#0A1E1C]/20 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-40" />

                  <div className="absolute top-3 left-3">
                    <Badge
                      className="backdrop-blur-md text-[10px] font-semibold px-2.5 py-0.5"
                      style={{
                        background: "rgba(42,122,111,0.4)",
                        border: "1px solid rgba(75,200,184,0.35)",
                        color: "#4BC8B8",
                      }}
                    >
                      {card.category}
                    </Badge>
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-[2px] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <motion.a
                      href={card.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 rounded-full px-5 py-2 text-sm font-semibold shadow-lg"
                      style={{ background: "rgba(29,168,81,0.9)", color: "#fff" }}
                    >
                      <MessageCircle className="w-4 h-4" />
                      Más información
                    </motion.a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col h-[calc(100%-12rem)] justify-between">
                  <div className="space-y-2">
                    <h3
                      className="font-heading text-lg font-semibold leading-snug tracking-tight transition-colors group-hover:text-[#4BC8B8]"
                      style={{ color: "#E8F5F3" }}
                    >
                      {card.title}
                    </h3>
                    <p
                      className="line-clamp-3 text-xs leading-relaxed"
                      style={{ color: "#7AB8B0" }}
                    >
                      {card.description}
                    </p>
                  </div>

                  <div
                    className="pt-4 mt-auto border-t flex items-center justify-between"
                    style={{ borderColor: "rgba(75,200,184,0.15)" }}
                  >
                    <div className="flex items-center gap-2">
                      <Avatar
                        className="h-7 w-7"
                        style={{ border: "1px solid rgba(75,200,184,0.3)" }}
                      >
                        <AvatarImage src="https://github.com/shadcn.png" alt="Mtra. Guadalupe" />
                        <AvatarFallback style={{ background: "rgba(42,122,111,0.4)", color: "#4BC8B8" }}>
                          MG
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex flex-col">
                        <span className="text-[11px] font-semibold" style={{ color: "#E8F5F3" }}>
                          Mtra. Guadalupe Aviña
                        </span>
                        <span className="text-[9px]" style={{ color: "#7AB8B0" }}>
                          Especialista
                        </span>
                      </div>
                    </div>
                    <a
                      href={card.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-1 text-[10px] font-semibold px-2.5 py-1 rounded-full transition-all hover:scale-105"
                      style={{
                        background: "rgba(29,168,81,0.14)",
                        border: "1px solid rgba(29,168,81,0.35)",
                        color: "#2DC65A",
                      }}
                    >
                      <MessageCircle className="h-3 w-3" />
                      WhatsApp
                    </a>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}

export { makeWaUrl };
export type { CardData };

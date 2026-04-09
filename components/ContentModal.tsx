"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Loader2, ImageOff } from "lucide-react";

const WHATSAPP_NUMBER = "5215521096740";

interface ContentModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  flierImage?: string;
  youtubeUrl?: string;
  badge?: string;
  whatsappMessage: string;
  content?: string[];
}

function getYouTubeEmbedUrl(url: string): string | null {
  if (!url) return null;
  const match = url.match(
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([A-Za-z0-9_-]{11})/
  );
  return match ? `https://www.youtube.com/embed/${match[1]}` : null;
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export function ContentModal({
  isOpen,
  onClose,
  title,
  flierImage,
  youtubeUrl,
  badge,
  whatsappMessage,
  content,
}: ContentModalProps) {
  const embedUrl = youtubeUrl ? getYouTubeEmbedUrl(youtubeUrl) : null;
  const hasContent = !!(flierImage || embedUrl || (content && content.length > 0));

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`;

  // Close on Escape
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [isOpen, onClose]);

  // Lock scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="fixed inset-0 z-50 flex items-end md:items-center justify-center p-0 md:p-6"
            style={{ backdropFilter: "blur(10px)", background: "rgba(10, 3, 10, 0.88)" }}
            onClick={onClose}
          >
            {/* Modal panel */}
            <motion.div
              key="modal"
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.96 }}
              transition={{ duration: 0.28, type: "spring", stiffness: 320, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
              className="content-modal relative w-full md:max-w-2xl overflow-hidden flex flex-col max-h-[92vh] md:max-h-[88vh]"
              style={{
                background: "linear-gradient(160deg, #2D0A2A 0%, #160413 100%)",
                border: "1px solid rgba(200, 164, 0, 0.25)",
                borderRadius: "1.25rem 1.25rem 0 0",
                boxShadow: "0 -8px 60px rgba(200, 164, 0, 0.12), 0 0 80px rgba(0,0,0,0.8)",
              }}
            >
              {/* Handle (mobile only) */}
              <div className="md:hidden flex justify-center pt-3.5 pb-1">
                <div
                  className="w-10 h-1 rounded-full"
                  style={{ background: "rgba(200, 164, 0, 0.25)" }}
                />
              </div>

              {/* Header */}
              <div
                className="flex items-start justify-between gap-4 px-6 py-4"
                style={{ borderBottom: "1px solid rgba(200, 164, 0, 0.12)" }}
              >
                <div className="flex flex-col gap-1 flex-1 min-w-0">
                  {badge && (
                    <span
                      className="text-xs font-semibold uppercase tracking-wider"
                      style={{ color: "#C8A400" }}
                    >
                      {badge}
                    </span>
                  )}
                  <h2
                    className="font-heading text-xl font-semibold leading-snug"
                    style={{ color: "#F5EFE0" }}
                  >
                    {title}
                  </h2>
                </div>
                <button
                  onClick={onClose}
                  className="cursor-pointer flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-200 hover:bg-white/10 active:scale-95"
                  style={{ border: "1px solid rgba(255,255,255,0.12)" }}
                  aria-label="Cerrar"
                >
                  <X className="w-4 h-4" style={{ color: "rgba(245,239,224,0.6)" }} />
                </button>
              </div>

              {/* Scrollable content */}
              <div className="flex-1 overflow-y-auto p-6 space-y-5">
                {!hasContent ? (
                  /* Empty state */
                  <div className="flex flex-col items-center justify-center py-12 gap-5">
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center"
                      style={{
                        background: "rgba(200, 164, 0, 0.08)",
                        border: "1px solid rgba(200, 164, 0, 0.2)",
                      }}
                    >
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 3.5, repeat: Infinity, ease: "linear" }}
                      >
                        <Loader2 className="w-7 h-7" style={{ color: "rgba(200, 164, 0, 0.5)" }} />
                      </motion.div>
                    </div>
                    <div className="text-center">
                      <p
                        className="font-heading text-xl font-semibold mb-2"
                        style={{ color: "#F5EFE0" }}
                      >
                        Contenido próximamente
                      </p>
                      <p className="text-sm leading-relaxed" style={{ color: "#B89AB8" }}>
                        Estamos preparando el material para esta sesión.
                        <br />
                        ¡Vuelve pronto!
                      </p>
                    </div>
                  </div>
                ) : (
                  <>
                    {/* Flier image */}
                    {flierImage ? (
                      <div
                        className="rounded-xl overflow-hidden"
                        style={{ border: "1px solid rgba(200, 164, 0, 0.18)" }}
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={flierImage}
                          alt={title}
                          className="w-full h-auto object-cover"
                        />
                      </div>
                    ) : (
                      <div
                        className="rounded-xl flex flex-col items-center justify-center py-10 gap-3"
                        style={{
                          background: "rgba(200, 164, 0, 0.04)",
                          border: "1px dashed rgba(200, 164, 0, 0.18)",
                        }}
                      >
                        <ImageOff className="w-8 h-8" style={{ color: "rgba(200, 164, 0, 0.28)" }} />
                        <span className="text-sm" style={{ color: "rgba(200, 164, 0, 0.45)" }}>
                          Flier próximamente
                        </span>
                      </div>
                    )}

                    {/* Text content from diplomado */}
                    {content && content.length > 0 && (
                      <div className="space-y-3">
                        <h3
                          className="font-heading text-sm font-semibold uppercase tracking-wider"
                          style={{ color: "rgba(200, 164, 0, 0.7)" }}
                        >
                          Contenido del módulo
                        </h3>
                        <div className="space-y-3">
                          {content.map((paragraph, i) => (
                            <p
                              key={i}
                              className="text-sm leading-relaxed"
                              style={{ color: "#C8B8C8" }}
                            >
                              {paragraph}
                            </p>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* YouTube embed */}
                    {embedUrl && (
                      <div
                        className="rounded-xl overflow-hidden"
                        style={{
                          position: "relative",
                          paddingBottom: "56.25%",
                          height: 0,
                          border: "1px solid rgba(200, 164, 0, 0.18)",
                        }}
                      >
                        <iframe
                          src={embedUrl}
                          title={title}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            border: 0,
                          }}
                        />
                      </div>
                    )}
                  </>
                )}
              </div>

              {/* WhatsApp CTA — always visible at bottom */}
              <div
                className="px-6 py-4 flex flex-col gap-3"
                style={{ borderTop: "1px solid rgba(200, 164, 0, 0.12)" }}
              >
                <p className="text-xs text-center" style={{ color: "rgba(184,154,184,0.65)" }}>
                  ¿Te interesa este curso? Contáctanos por WhatsApp
                </p>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer flex items-center justify-center gap-3 w-full py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 hover:scale-[1.02] hover:shadow-lg active:scale-[0.98]"
                  style={{
                    background: "linear-gradient(135deg, #1DA851, #128C3E)",
                    color: "#fff",
                    boxShadow: "0 4px 20px rgba(29, 168, 81, 0.35)",
                  }}
                >
                  <WhatsAppIcon className="w-5 h-5 flex-shrink-0" />
                  Quiero más información
                </a>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

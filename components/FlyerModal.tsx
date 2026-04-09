"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export function FlyerModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handler = () => setIsOpen(true);
    window.addEventListener("openFlyerModal", handler);
    return () => window.removeEventListener("openFlyerModal", handler);
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[200] flex items-center justify-center p-6"
          style={{ background: "rgba(8, 2, 8, 0.85)", backdropFilter: "blur(8px)" }}
          onClick={() => setIsOpen(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.88, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.88, y: 24 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute -top-3 -right-3 z-10 w-8 h-8 rounded-full flex items-center justify-center cursor-pointer transition-all hover:scale-110 active:scale-95"
              style={{
                background: "linear-gradient(135deg, #4A1942, #6B2E62)",
                border: "1.5px solid rgba(200, 164, 0, 0.5)",
                boxShadow: "0 4px 16px rgba(0,0,0,0.5)",
              }}
              aria-label="Cerrar"
            >
              <X className="w-4 h-4" style={{ color: "#C8A400" }} />
            </button>

            {/* Glow */}
            <div
              className="absolute -inset-4 rounded-3xl blur-2xl opacity-30 pointer-events-none"
              style={{ background: "radial-gradient(ellipse, rgba(200,164,0,0.4) 0%, transparent 70%)" }}
              aria-hidden="true"
            />

            {/* Flyer image */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/flyer-diplomado.jpg"
              alt="Flyer Diplomado en el Aula y en Familia"
              className="relative w-full max-w-[340px] sm:max-w-[420px] rounded-2xl"
              style={{
                border: "1px solid rgba(200, 164, 0, 0.4)",
                boxShadow: "0 24px 80px rgba(0,0,0,0.7), 0 0 0 1px rgba(200,164,0,0.08)",
              }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

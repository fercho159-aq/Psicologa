"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MessageSquare, Send, Loader2, Star } from "lucide-react";

interface Comment {
  id: number;
  nombre: string;
  comentario: string;
  rating: number;
  created_at: string;
}

function StarRating({
  value,
  onChange,
  readonly = false,
  size = "md",
}: {
  value: number;
  onChange?: (v: number) => void;
  readonly?: boolean;
  size?: "sm" | "md";
}) {
  const [hovered, setHovered] = useState(0);
  const dim = size === "sm" ? "w-3.5 h-3.5" : "w-6 h-6";

  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => {
        const filled = star <= (readonly ? value : hovered || value);
        return (
          <Star
            key={star}
            className={`${dim} transition-all duration-150 ${readonly ? "" : "cursor-pointer hover:scale-110"}`}
            style={{
              color: filled ? "#C8A400" : "rgba(200,164,0,0.2)",
              fill: filled ? "#C8A400" : "transparent",
            }}
            onMouseEnter={() => !readonly && setHovered(star)}
            onMouseLeave={() => !readonly && setHovered(0)}
            onClick={() => !readonly && onChange?.(star)}
          />
        );
      })}
    </div>
  );
}

export function CommentsSection() {
  const [comments, setComments] = useState<Comment[]>([]);
  const [nombre, setNombre] = useState("");
  const [comentario, setComentario] = useState("");
  const [rating, setRating] = useState(5);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    fetch("/api/comments")
      .then((r) => r.json())
      .then((data) => setComments(Array.isArray(data) ? data : []))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setSubmitting(true);

    try {
      const res = await fetch("/api/comments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nombre, comentario, rating, honeypot: "" }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Error al guardar comentario");
        return;
      }

      setSuccess("¡Gracias por tu comentario!");
      setComments([data, ...comments]);
      setNombre("");
      setComentario("");
      setRating(5);
      setTimeout(() => setSuccess(""), 4000);
    } catch {
      setError("Error de conexión. Intenta de nuevo.");
    } finally {
      setSubmitting(false);
    }
  };

  const formatDate = (dateStr: string) =>
    new Date(dateStr).toLocaleDateString("es-MX", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });

  return (
    <section
      className="relative py-20 px-6 overflow-hidden"
      style={{ background: "linear-gradient(135deg, #2D0A2A 0%, #1A0618 100%)" }}
    >
      {/* Ambient glow */}
      <div
        className="absolute inset-x-0 top-0 h-px pointer-events-none"
        style={{ background: "linear-gradient(90deg, transparent, rgba(200,164,0,0.2), transparent)" }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] opacity-10 blur-3xl rounded-full pointer-events-none"
        style={{ background: "radial-gradient(ellipse, #C8A400 0%, transparent 70%)" }}
      />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-px w-8" style={{ background: "rgba(200,164,0,0.4)" }} />
            <span
              className="text-[11px] uppercase tracking-[0.35em] font-semibold px-3 py-1 rounded-full"
              style={{
                color: "rgba(200,164,0,0.9)",
                background: "rgba(200,164,0,0.08)",
                border: "1px solid rgba(200,164,0,0.18)",
              }}
            >
              <MessageSquare className="w-3 h-3 inline mr-1.5" />
              Testimonios
            </span>
            <div className="h-px w-8" style={{ background: "rgba(200,164,0,0.4)" }} />
          </div>

          <h2
            className="font-heading text-4xl md:text-5xl font-semibold mb-3"
            style={{ color: "#F5EFE0" }}
          >
            ¿Qué dicen los padres?
          </h2>
          <p className="text-sm max-w-md mx-auto leading-relaxed" style={{ color: "rgba(184,154,184,0.8)" }}>
            Comparte tu experiencia y ayuda a otros padres a conocer nuestros programas
          </p>
        </motion.div>

        {/* Layout: form left / comments right */}
        <div className="flex flex-col lg:flex-row gap-8 items-start">

          {/* ── Form ── */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-[400px] flex-shrink-0 rounded-2xl p-6"
            style={{
              background: "linear-gradient(160deg, rgba(80,28,72,0.6) 0%, rgba(20,5,18,0.92) 100%)",
              border: "1px solid rgba(200,164,0,0.18)",
              backdropFilter: "blur(12px)",
            }}
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              {/* Nombre */}
              <div>
                <label className="text-sm font-semibold mb-2 block" style={{ color: "#F5EFE0" }}>
                  Tu nombre
                </label>
                <input
                  type="text"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  placeholder="Ej: María González"
                  minLength={2}
                  maxLength={255}
                  required
                  className="w-full px-4 py-3 rounded-xl text-sm focus:outline-none transition-all"
                  style={{
                    background: "rgba(245,239,224,0.06)",
                    border: "1px solid rgba(200,164,0,0.25)",
                    color: "#F5EFE0",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "rgba(200,164,0,0.6)")}
                  onBlur={(e) => (e.target.style.borderColor = "rgba(200,164,0,0.25)")}
                />
              </div>

              {/* Estrellas */}
              <div>
                <label className="text-sm font-semibold mb-2 block" style={{ color: "#F5EFE0" }}>
                  Tu calificación
                </label>
                <StarRating value={rating} onChange={setRating} />
              </div>

              {/* Comentario */}
              <div>
                <label className="text-sm font-semibold mb-2 block" style={{ color: "#F5EFE0" }}>
                  Tu comentario
                </label>
                <textarea
                  value={comentario}
                  onChange={(e) => setComentario(e.target.value)}
                  placeholder="Cuéntanos tu experiencia..."
                  minLength={5}
                  maxLength={2000}
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl text-sm focus:outline-none transition-all resize-none"
                  style={{
                    background: "rgba(245,239,224,0.06)",
                    border: "1px solid rgba(200,164,0,0.25)",
                    color: "#F5EFE0",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "rgba(200,164,0,0.6)")}
                  onBlur={(e) => (e.target.style.borderColor = "rgba(200,164,0,0.25)")}
                />
                <div className="text-xs mt-1" style={{ color: "rgba(200,164,0,0.45)" }}>
                  {comentario.length} / 2000
                </div>
              </div>

              {/* Honeypot oculto */}
              <input type="text" name="website" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />

              {error && (
                <p className="text-xs p-3 rounded-lg" style={{ background: "rgba(220,38,38,0.15)", color: "#fca5a5", border: "1px solid rgba(220,38,38,0.3)" }}>
                  {error}
                </p>
              )}
              {success && (
                <p className="text-xs p-3 rounded-lg" style={{ background: "rgba(34,197,94,0.15)", color: "#86efac", border: "1px solid rgba(34,197,94,0.3)" }}>
                  {success}
                </p>
              )}

              <button
                type="submit"
                disabled={submitting || !nombre || !comentario}
                className="flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-sm transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
                style={{
                  background: "linear-gradient(135deg, #C8A400, #E8C200)",
                  color: "#2D0A2A",
                  boxShadow: "0 4px 20px rgba(200,164,0,0.35)",
                }}
              >
                {submitting ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                {submitting ? "Enviando..." : "Enviar comentario"}
              </button>
            </form>
          </motion.div>

          {/* ── Comments list ── */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1 min-w-0"
          >
            {loading ? (
              <div className="flex items-center justify-center py-16">
                <Loader2 className="w-6 h-6 animate-spin" style={{ color: "#C8A400" }} />
              </div>
            ) : comments.length === 0 ? (
              <div className="text-center py-16" style={{ color: "rgba(184,154,184,0.6)" }}>
                <MessageSquare className="w-8 h-8 mx-auto mb-3 opacity-30" />
                <p className="text-sm">Sé el primero en dejar un comentario</p>
              </div>
            ) : (
              <>
                {/* Contador */}
                <p className="text-xs mb-4" style={{ color: "rgba(200,164,0,0.6)" }}>
                  {comments.length} {comments.length === 1 ? "comentario" : "comentarios"}
                </p>

                {/* Scrollable list */}
                <div
                  className="flex flex-col gap-3 overflow-y-auto pr-1"
                  style={{ maxHeight: "480px" }}
                >
                  {comments.map((comment, index) => (
                    <motion.div
                      key={comment.id}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index < 5 ? index * 0.07 : 0 }}
                      className="rounded-xl p-4"
                      style={{
                        background: "rgba(80,28,72,0.4)",
                        border: "1px solid rgba(200,164,0,0.1)",
                      }}
                    >
                      <div className="flex items-start justify-between gap-2 mb-1.5">
                        <div className="flex flex-col gap-0.5">
                          <h3 className="font-semibold text-sm" style={{ color: "#F5EFE0" }}>
                            {comment.nombre}
                          </h3>
                          <StarRating value={comment.rating ?? 5} readonly size="sm" />
                        </div>
                        <span className="text-xs flex-shrink-0 mt-0.5" style={{ color: "rgba(200,164,0,0.5)" }}>
                          {formatDate(comment.created_at)}
                        </span>
                      </div>
                      <p className="text-sm leading-relaxed mt-2" style={{ color: "rgba(245,239,224,0.8)" }}>
                        {comment.comentario}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
}

"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MessageSquare, Send, Loader2 } from "lucide-react";

interface Comment {
  id: number;
  nombre: string;
  comentario: string;
  created_at: string;
}

export function CommentsSection() {
  const [comments, setComments] = useState<Comment[]>([]);
  const [nombre, setNombre] = useState("");
  const [comentario, setComentario] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Fetch comments
  useEffect(() => {
    const fetchComments = async () => {
      setLoading(true);
      try {
        const res = await fetch("/api/comments");
        const data = await res.json();
        setComments(data);
      } catch (e) {
        console.error("Error fetching comments:", e);
      }
      setLoading(false);
    };

    fetchComments();
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
        body: JSON.stringify({
          nombre,
          comentario,
          honeypot: "", // Hidden field for bots
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Error al guardar comentario");
        setSubmitting(false);
        return;
      }

      setSuccess("¡Gracias por tu comentario!");
      setNombre("");
      setComentario("");

      // Add new comment to list
      setComments([data, ...comments]);

      setTimeout(() => setSuccess(""), 3000);
    } catch (e) {
      setError("Error al guardar comentario");
      console.error(e);
    }
    setSubmitting(false);
  };

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("es-ES", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <section
      className="relative py-20 px-6 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #2D0A2A 0%, #1A0618 100%)",
      }}
    >
      {/* Background orbs */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] opacity-10 blur-3xl rounded-full"
          style={{ background: "radial-gradient(ellipse, #C8A400 0%, transparent 70%)" }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <MessageSquare className="w-5 h-5" style={{ color: "#C8A400" }} />
            <span
              className="text-xs uppercase tracking-[0.3em] font-semibold"
              style={{ color: "rgba(200,164,0,0.7)" }}
            >
              Testimonios
            </span>
          </div>

          <h2
            className="font-heading text-4xl md:text-5xl font-semibold mb-3"
            style={{ color: "#F5EFE0" }}
          >
            ¿Qué dicen los padres?
          </h2>

          <p
            className="text-sm max-w-lg mx-auto leading-relaxed"
            style={{ color: "rgba(184,154,184,0.8)" }}
          >
            Comparte tu experiencia y ayuda a otros padres a descubrir nuestros programas
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl p-6"
            style={{
              background: "linear-gradient(160deg, rgba(80, 28, 72, 0.6) 0%, rgba(20, 5, 18, 0.92) 100%)",
              border: "1px solid rgba(200, 164, 0, 0.18)",
              backdropFilter: "blur(12px)",
            }}
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label
                  className="text-sm font-semibold mb-2 block"
                  style={{ color: "#F5EFE0" }}
                >
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
                  className="w-full px-4 py-3 rounded-lg text-sm transition-all duration-200 focus:outline-none"
                  style={{
                    background: "rgba(245,239,224,0.06)",
                    border: "1px solid rgba(200,164,0,0.3)",
                    color: "#F5EFE0",
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = "rgba(200,164,0,0.6)";
                    e.target.style.boxShadow = "0 0 0 3px rgba(200,164,0,0.1)";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "rgba(200,164,0,0.3)";
                    e.target.style.boxShadow = "none";
                  }}
                />
              </div>

              <div>
                <label
                  className="text-sm font-semibold mb-2 block"
                  style={{ color: "#F5EFE0" }}
                >
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
                  className="w-full px-4 py-3 rounded-lg text-sm transition-all duration-200 focus:outline-none resize-none"
                  style={{
                    background: "rgba(245,239,224,0.06)",
                    border: "1px solid rgba(200,164,0,0.3)",
                    color: "#F5EFE0",
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = "rgba(200,164,0,0.6)";
                    e.target.style.boxShadow = "0 0 0 3px rgba(200,164,0,0.1)";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "rgba(200,164,0,0.3)";
                    e.target.style.boxShadow = "none";
                  }}
                />
                <div
                  className="text-xs mt-1"
                  style={{ color: "rgba(200,164,0,0.5)" }}
                >
                  {comentario.length} / 2000
                </div>
              </div>

              {/* Honeypot field (hidden from users) */}
              <input
                type="text"
                name="website"
                style={{ display: "none" }}
                tabIndex={-1}
                autoComplete="off"
              />

              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-sm p-3 rounded-lg"
                  style={{
                    background: "rgba(220, 38, 38, 0.15)",
                    color: "#fca5a5",
                    border: "1px solid rgba(220,38,38,0.3)",
                  }}
                >
                  {error}
                </motion.div>
              )}

              {success && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-sm p-3 rounded-lg"
                  style={{
                    background: "rgba(34, 197, 94, 0.15)",
                    color: "#86efac",
                    border: "1px solid rgba(34,197,94,0.3)",
                  }}
                >
                  {success}
                </motion.div>
              )}

              <button
                type="submit"
                disabled={submitting || !nombre || !comentario}
                className="flex items-center justify-center gap-2 py-3 rounded-lg font-semibold text-sm transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
                style={{
                  background: "linear-gradient(135deg, #C8A400, #E8C200)",
                  color: "#2D0A2A",
                  boxShadow: "0 4px 20px rgba(200,164,0,0.35)",
                }}
              >
                {submitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Enviar comentario
                  </>
                )}
              </button>
            </form>
          </motion.div>

          {/* Comments List */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-4"
          >
            {loading ? (
              <div className="flex items-center justify-center py-12">
                <Loader2 className="w-6 h-6 animate-spin" style={{ color: "#C8A400" }} />
              </div>
            ) : comments.length === 0 ? (
              <div className="text-center py-12" style={{ color: "rgba(184,154,184,0.7)" }}>
                <p className="text-sm">
                  Sé el primero en dejar un comentario
                </p>
              </div>
            ) : (
              comments.map((comment, index) => (
                <motion.div
                  key={comment.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="rounded-xl p-4 backdrop-blur-sm"
                  style={{
                    background: "rgba(80, 28, 72, 0.4)",
                    border: "1px solid rgba(200, 164, 0, 0.1)",
                  }}
                >
                  <div className="flex items-start justify-between mb-2">
                    <h3
                      className="font-semibold text-sm"
                      style={{ color: "#F5EFE0" }}
                    >
                      {comment.nombre}
                    </h3>
                    <span
                      className="text-xs"
                      style={{ color: "rgba(200,164,0,0.5)" }}
                    >
                      {formatDate(comment.created_at)}
                    </span>
                  </div>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "rgba(245,239,224,0.8)" }}
                  >
                    {comment.comentario}
                  </p>
                </motion.div>
              ))
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="relative py-14 px-6 overflow-hidden"
      style={{
        background: "#080206",
        borderTop: "1px solid rgba(200, 164, 0, 0.12)",
      }}
    >
      {/* Ambient glow */}
      <div
        className="absolute inset-x-0 top-0 h-px pointer-events-none"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(200,164,0,0.3), transparent)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-2xl mx-auto flex flex-col items-center gap-5">
        {/* Decorative line */}
        <div
          className="w-12 h-px"
          style={{ background: "linear-gradient(90deg, transparent, #C8A400, transparent)" }}
        />

        {/* Name */}
        <div className="text-center">
          <p
            className="font-heading text-2xl font-semibold tracking-wide"
            style={{ color: "#C8A400" }}
          >
            Mtra. Maria Guadalupe Aviña
          </p>
          <p
            className="text-sm mt-1.5 font-light tracking-wide"
            style={{ color: "rgba(184, 154, 184, 0.65)" }}
          >
            Diplomado en el Aula y en Familia
          </p>
        </div>

        {/* Nav links */}
        <nav className="flex items-center gap-6" aria-label="Secciones">
          <a
            href="#escuela-padres"
            className="text-xs uppercase tracking-wider font-medium cursor-pointer transition-colors duration-200 hover:text-yellow-300"
            style={{ color: "rgba(200,164,0,0.5)" }}
          >
            Escuela para Padres
          </a>
          <div className="w-px h-3" style={{ background: "rgba(200,164,0,0.25)" }} />
          <a
            href="#capacidades-diferentes"
            className="text-xs uppercase tracking-wider font-medium cursor-pointer transition-colors duration-200 hover:text-yellow-300"
            style={{ color: "rgba(200,164,0,0.5)" }}
          >
            Capacidades Diferentes
          </a>
        </nav>

        {/* Bottom line */}
        <div
          className="w-12 h-px"
          style={{ background: "linear-gradient(90deg, transparent, rgba(200,164,0,0.3), transparent)" }}
        />

        {/* Copyright */}
        <p
          className="text-[11px] tracking-wide"
          style={{ color: "rgba(184, 154, 184, 0.3)" }}
        >
          © {currentYear} Todos los derechos reservados
        </p>
      </div>
    </footer>
  );
}

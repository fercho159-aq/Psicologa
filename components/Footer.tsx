export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="relative py-16 px-6 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #0D0410 0%, #080206 100%)",
        borderTop: "1px solid rgba(200, 164, 0, 0.08)",
      }}
    >
      {/* Top glow line */}
      <div
        className="absolute inset-x-0 top-0 h-px pointer-events-none"
        aria-hidden="true"
        style={{
          background: "linear-gradient(90deg, transparent 10%, rgba(200,164,0,0.35) 50%, transparent 90%)",
        }}
      />

      {/* Ambient radial glow */}
      <div
        className="absolute inset-x-0 top-0 h-40 pointer-events-none opacity-30"
        aria-hidden="true"
        style={{
          background: "radial-gradient(ellipse at 50% 0%, rgba(200,164,0,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center gap-6">
        {/* Diamond decoration */}
        <div className="flex items-center gap-3">
          <div className="h-px w-16" style={{ background: "linear-gradient(90deg, transparent, rgba(200,164,0,0.3))" }} />
          <div
            className="w-1.5 h-1.5 rotate-45"
            style={{ background: "rgba(200,164,0,0.6)" }}
          />
          <div className="h-px w-16" style={{ background: "linear-gradient(90deg, rgba(200,164,0,0.3), transparent)" }} />
        </div>

        {/* Name & subtitle */}
        <div className="text-center">
          <p
            className="font-heading text-2xl font-semibold tracking-wide mb-1"
            style={{ color: "#C8A400" }}
          >
            Mtra. Maria Guadalupe Aviña
          </p>
          <p
            className="text-xs font-light tracking-[0.2em] uppercase"
            style={{ color: "rgba(184, 154, 184, 0.5)" }}
          >
            Diplomado en el Aula y en Familia
          </p>
        </div>

        {/* Nav links */}
        <nav className="flex items-center gap-5" aria-label="Secciones">
          {[
            { href: "#escuela-padres", label: "Escuela para Padres" },
            { href: "#capacidades-diferentes", label: "Capacidades Diferentes" },
          ].map((link, i, arr) => (
            <div key={link.href} className="flex items-center gap-5">
              <a
                href={link.href}
                className="text-[11px] uppercase tracking-wider font-medium cursor-pointer transition-all duration-200 hover:text-yellow-300 hover:tracking-widest"
                style={{ color: "rgba(200,164,0,0.45)" }}
              >
                {link.label}
              </a>
              {i < arr.length - 1 && (
                <div
                  className="w-px h-3"
                  style={{ background: "rgba(200,164,0,0.2)" }}
                  aria-hidden="true"
                />
              )}
            </div>
          ))}
        </nav>

        {/* Bottom divider */}
        <div className="flex items-center gap-3">
          <div className="h-px w-16" style={{ background: "linear-gradient(90deg, transparent, rgba(200,164,0,0.2))" }} />
          <div
            className="w-1 h-1 rotate-45"
            style={{ background: "rgba(200,164,0,0.3)" }}
          />
          <div className="h-px w-16" style={{ background: "linear-gradient(90deg, rgba(200,164,0,0.2), transparent)" }} />
        </div>

        {/* Copyright */}
        <p
          className="text-[10px] tracking-widest uppercase"
          style={{ color: "rgba(184, 154, 184, 0.2)" }}
        >
          © {currentYear} Todos los derechos reservados
        </p>
      </div>
    </footer>
  );
}

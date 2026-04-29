"use client";

import { OmbuLogo } from "./OmbuLogo";

const footerLinks = {
  navegacion: [
    { label: "Inicio", href: "#inicio" },
    { label: "Artículos", href: "#articulos" },
    { label: "Mercados", href: "#mercados" },
  ],
  legal: [
    { label: "Términos y Condiciones", href: "/legal/terminos" },
    { label: "Política de Privacidad", href: "/legal/privacidad" },
    { label: "Aviso Legal", href: "/legal/aviso" },
  ],
  contacto: [
    {
      label: "contacto@ombufinanzas.com",
      href: "mailto:contacto@ombufinanzas.com",
    },
    { label: "Prensa", href: "#" },
    { label: "Publicidad", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-[#0F0F0F] text-[#FAF8F3]">
      {/* Gold Line */}
      <div className="h-[2px] bg-gradient-to-r from-transparent via-[#C9973F] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <img
              src="/Logo_Transparent.png"
              alt="Ombu Logo"
              className="h-48 w-48 object-cover"
            />
            <p className="font-sans text-sm text-[#888888] leading-relaxed mt-6">
              Información que da raíces.
              <br />
              Decisiones que generan valor.
            </p>
            <p className="font-sans text-[11px] text-[#555555] mt-6 tracking-[0.25em] uppercase">
              Análisis • Visión • Decisiones
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-sans text-xs font-bold text-[#C9973F] tracking-[0.2em] uppercase mb-6">
              Navegación
            </h4>
            <ul className="space-y-4">
              {footerLinks.navegacion.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-sans text-sm text-[#888888] hover:text-[#FAF8F3] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-sans text-xs font-bold text-[#C9973F] tracking-[0.2em] uppercase mb-6">
              Legal
            </h4>
            <ul className="space-y-4">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-sans text-sm text-[#888888] hover:text-[#FAF8F3] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-sans text-xs font-bold text-[#C9973F] tracking-[0.2em] uppercase mb-6">
              Contacto
            </h4>
            <ul className="space-y-4">
              {footerLinks.contacto.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-sans text-sm text-[#888888] hover:text-[#FAF8F3] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-20 pt-10 border-t border-[#222222]">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
            <p className="font-sans text-xs text-[#555555] tracking-wide">
              © 2026 Ombú Finanzas. Todos los derechos reservados.
            </p>
            <div className="flex items-center gap-8">
              <a
                href="#"
                className="font-sans text-xs text-[#555555] hover:text-[#C9973F] transition-colors tracking-widest uppercase"
              >
                Twitter
              </a>
              <a
                href="#"
                className="font-sans text-xs text-[#555555] hover:text-[#C9973F] transition-colors tracking-widest uppercase"
              >
                LinkedIn
              </a>
              <a
                href="#"
                className="font-sans text-xs text-[#555555] hover:text-[#C9973F] transition-colors tracking-widest uppercase"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { OmbuLogo } from "./OmbuLogo";

const navItems = [
  { label: "Inicio", href: "#inicio" },
  { label: "Artículos", href: "#articulos" },
  { label: "Mercados", href: "#mercados" },
  { label: "Suscribirse", href: "#suscribirse", highlight: true },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#FAF8F3] border-b border-[#14332A]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <img
            src="/Partial_Transparent.png"
            alt="Ombu Logo"
            className="h-20 cursor-pointer"
            onClick={() => (window.location.href = "/")}
          />
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`font-sans text-[13px] font-medium tracking-widest uppercase transition-colors ${
                  item.highlight
                    ? "bg-[#14332A] text-[#FAF8F3] px-6 py-3 hover:bg-[#1B4035]"
                    : "text-[#0F0F0F] hover:text-[#C9973F]"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-[#14332A]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-6 border-t border-[#14332A]/10">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={`font-sans text-[13px] font-medium tracking-widest uppercase transition-colors py-3 ${
                    item.highlight
                      ? "bg-[#14332A] text-[#FAF8F3] px-6 text-center mt-4"
                      : "text-[#0F0F0F] hover:text-[#C9973F] px-2"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}

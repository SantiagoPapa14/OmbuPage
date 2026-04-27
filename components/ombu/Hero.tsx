"use client";

import { ArrowRight, TrendingUp, Globe, BarChart3 } from "lucide-react";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-[#14332A] text-[#FAF8F3]"
    >
      {/* Subtle Gold Accent Line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C9973F] to-transparent" />

      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "url('/OmbuAI1.jpeg')",
            backgroundSize: "cover",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-10">
            <div className="inline-flex items-center gap-3 border border-[#C9973F]/40 text-[#C9973F] px-5 py-2 text-sm font-sans font-medium tracking-widest uppercase">
              <TrendingUp size={16} />
              <span>Información que da raíces</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold leading-[1.1] tracking-tight">
              Decisiones que{" "}
              <span className="text-[#C9973F]">generan valor</span>
            </h1>

            <p className="font-sans text-lg text-[#A8C4B8] leading-relaxed max-w-xl">
              Ombú Finanzas combina profundidad en el análisis geopolítico y
              económico con una mirada estratégica de los mercados para
              acompañar decisiones de inversión con información, contexto y
              visión.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#suscribirse"
                className="inline-flex items-center justify-center gap-3 bg-[#C9973F] text-[#0F0F0F] px-8 py-4 font-sans font-semibold tracking-wide hover:bg-[#D4A856] transition-colors"
              >
                Comenzar ahora
                <ArrowRight size={18} />
              </a>
              <a
                href="#analisis"
                className="inline-flex items-center justify-center gap-2 border border-[#FAF8F3]/20 text-[#FAF8F3] px-8 py-4 font-sans font-semibold tracking-wide hover:border-[#FAF8F3]/60 transition-colors"
              >
                Ver análisis
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-10 pt-10 border-t border-[#FAF8F3]/10">
              <div>
                <div className="font-serif text-4xl font-semibold text-[#C9973F]">
                  1.5K+
                </div>
                <div className="font-sans text-sm text-[#A8C4B8] mt-1 tracking-wide">
                  Lectores
                </div>
              </div>
              <div>
                <div className="font-serif text-4xl font-semibold text-[#C9973F]">
                  20+
                </div>
                <div className="font-sans text-sm text-[#A8C4B8] mt-1 tracking-wide">
                  Artículos
                </div>
              </div>
              <div>
                <div className="font-serif text-4xl font-semibold text-[#C9973F]">
                  4
                </div>
                <div className="font-sans text-sm text-[#A8C4B8] mt-1 tracking-wide">
                  Meses
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Feature Cards */}
          <div className="flex flex-col gap-0 border-l border-[#FAF8F3]/10 pl-8 lg:pl-12">
            <div className="py-8 border-b border-[#FAF8F3]/10 group">
              <div className="flex items-start gap-6">
                <div className="p-4 border border-[#C9973F]/30 group-hover:border-[#C9973F] group-hover:bg-[#C9973F]/10 transition-all">
                  <BarChart3 className="text-[#C9973F]" size={28} />
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-semibold mb-3">
                    Análisis Profundo
                  </h3>
                  <p className="font-sans text-[#A8C4B8] leading-relaxed">
                    Raíces profundas en el análisis. Entendemos las tendencias
                    del mercado más allá de los titulares.
                  </p>
                </div>
              </div>
            </div>

            <div className="py-8 border-b border-[#FAF8F3]/10 group">
              <div className="flex items-start gap-6">
                <div className="p-4 border border-[#C9973F]/30 group-hover:border-[#C9973F] group-hover:bg-[#C9973F]/10 transition-all">
                  <Globe className="text-[#C9973F]" size={28} />
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-semibold mb-3">
                    Visión Global
                  </h3>
                  <p className="font-sans text-[#A8C4B8] leading-relaxed">
                    Visión de largo plazo. Interpretamos eventos geopolíticos y
                    su impacto en tus inversiones.
                  </p>
                </div>
              </div>
            </div>

            <div className="py-8 group">
              <div className="flex items-start gap-6">
                <div className="p-4 border border-[#C9973F]/30 group-hover:border-[#C9973F] group-hover:bg-[#C9973F]/10 transition-all">
                  <TrendingUp className="text-[#C9973F]" size={28} />
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-semibold mb-3">
                    Crecimiento Sostenido
                  </h3>
                  <p className="font-sans text-[#A8C4B8] leading-relaxed">
                    Crecimiento sostenido. Información que te permite tomar
                    decisiones inteligentes a largo plazo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

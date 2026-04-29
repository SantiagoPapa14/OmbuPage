"use client";

import { useState } from "react";
import { Mail, CheckCircle, ArrowRight } from "lucide-react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      await fetch("https://former-production.up.railway.app/submit/ombu", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          name: "Ombu",
          message: "Subscribirse al newsletter",
        }),
      });
      setIsSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section id="suscribirse" className="py-24 bg-[#14332A] relative">
      {/* Gold accent lines */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-[#C9973F]/30" />
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#C9973F]/30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          {/* Icon */}
          <div className="inline-flex items-center justify-center p-5 border border-[#C9973F]/40 mb-8">
            <Mail className="text-[#C9973F]" size={32} />
          </div>

          {/* Content */}
          <h2 className="font-serif text-4xl sm:text-5xl font-semibold text-[#FAF8F3] mb-5">
            Recibe análisis exclusivos
          </h2>
          <p className="font-sans text-lg text-[#A8C4B8] mb-10 leading-relaxed">
            Suscríbete a nuestro newsletter semanal y recibe los mejores
            análisis de mercados, geopolítica y tendencias de inversión
            directamente en tu correo.
          </p>

          {/* Form */}
          {isSubmitted ? (
            <div className="flex items-center justify-center gap-4 border border-[#C9973F] p-8">
              <CheckCircle className="text-[#C9973F]" size={24} />
              <span className="font-sans text-[#FAF8F3] text-lg">
                ¡Gracias por suscribirte! Pronto recibirás nuestro próximo
                análisis.
              </span>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-0"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Tu correo electrónico"
                required
                className="flex-1 px-6 py-5 bg-[#1B4035] border border-[#2A5045] text-[#FAF8F3] placeholder-[#6B9080] font-sans focus:outline-none focus:border-[#C9973F] transition-colors"
              />
              <button
                type="submit"
                className="px-10 py-5 bg-[#C9973F] text-[#0F0F0F] font-sans font-semibold tracking-wide hover:bg-[#D4A856] transition-colors flex items-center justify-center gap-2"
              >
                Suscribirse
                <ArrowRight size={18} />
              </button>
            </form>
          )}

          {/* Benefits */}
          <div className="grid sm:grid-cols-3 gap-0 mt-16 border border-[#FAF8F3]/10">
            <div className="p-8 border-b sm:border-b-0 sm:border-r border-[#FAF8F3]/10">
              <div className="font-serif text-3xl font-semibold text-[#C9973F]">
                Gratis
              </div>
              <div className="font-sans text-sm text-[#A8C4B8] mt-2 tracking-wide">
                Sin costo alguno
              </div>
            </div>
            <div className="p-8 border-b sm:border-b-0 sm:border-r border-[#FAF8F3]/10">
              <div className="font-serif text-3xl font-semibold text-[#C9973F]">
                Semanal
              </div>
              <div className="font-sans text-sm text-[#A8C4B8] mt-2 tracking-wide">
                Un email por semana
              </div>
            </div>
            <div className="p-8">
              <div className="font-serif text-3xl font-semibold text-[#C9973F]">
                Exclusivo
              </div>
              <div className="font-sans text-sm text-[#A8C4B8] mt-2 tracking-wide">
                Contenido único
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

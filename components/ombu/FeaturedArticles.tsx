"use client";

import {
  Clock,
  ArrowRight,
  TrendingUp,
  Globe,
  BarChart3,
  Swords,
  Banknote,
  Landmark,
} from "lucide-react";

const articles = [
  {
    id: 1,
    category: "Conflictos",
    title: "El impacto de la guerra Americana-Irani en nuestra economía",
    excerpt:
      "Un análisis especulativo sobre cómo las decisiones bélicas de Trump afectan nuestro mercado local.",
    readTime: "8 min",
    date: "Mañana 26 Abr 2026",
    featured: true,
    image: "IranWar.webp",
    icon: Swords,
  },
  {
    id: 2,
    category: "Renta Fija",
    title: "Nueva emisión de bonos provinciales sacuden la city porteña",
    excerpt:
      "El impacto de la deuda Chanqueña y las letras del tesoro de Caputo",
    readTime: "6 min",
    date: "Mañana 26 Abr 2026",
    image: "",
    icon: Banknote,
  },
  {
    id: 3,
    category: "Análisis",
    title: "Proyecto CNV autoriza ETFs locales",
    excerpt:
      "Potencial atractivo para inversiones extranjeras en Argentina, impacto esperable por sector.",
    readTime: "5 min",
    date: "Mañana 26 Abr 2026",
    image: "",
    icon: BarChart3,
  },
  {
    id: 4,
    category: "Banca",
    title: "Nuevo sistema rompe software en ALICs",
    excerpt: "Como las ALICs estan bajo aprietos bajo nuevo sistema en BYMA",
    readTime: "7 min",
    date: "Mañana 26 Abr 2026",
    image: "",
    icon: Landmark,
  },
];

export function FeaturedArticles() {
  const featuredArticle = articles.find((a) => a.featured);
  const regularArticles = articles.filter((a) => !a.featured);

  return (
    <section id="articulos" className="py-24 bg-[#FAF8F3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-16">
          <div>
            <span className="font-sans text-xs font-semibold text-[#C9973F] tracking-[0.2em] uppercase">
              Últimos Análisis
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-semibold text-[#0F0F0F] mt-3">
              Artículos Destacados
            </h2>
          </div>
          {/*
          <a
            href="#"
            className="inline-flex items-center gap-2 font-sans text-sm font-medium text-[#14332A] hover:text-[#C9973F] transition-colors tracking-wide"
          >
            Ver todos los artículos
            <ArrowRight size={16} />
          </a>
          */}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Featured Article */}
          {featuredArticle && (
            <article
              className="group relative overflow-hidden bg-cover bg-center"
              style={{ backgroundImage: `url(${featuredArticle.image})` }}
            >
              {/* Green overlay */}
              <div className="absolute inset-0 bg-[#14332A]/60 group-hover:bg-[#14332A]/80 transition-colors" />

              <div className="absolute top-0 left-0 w-full h-[2px] bg-[#C9973F]" />

              <div className="relative p-10 h-full flex flex-col justify-end min-h-[480px]">
                <div className="inline-flex items-center gap-2 bg-[#C9973F] text-[#0F0F0F] px-4 py-1.5 text-xs font-sans font-bold tracking-widest uppercase mb-6 w-fit">
                  {featuredArticle.icon && <featuredArticle.icon size={14} />}
                  {featuredArticle.category}
                </div>

                <h3 className="font-serif text-3xl sm:text-4xl font-semibold text-[#FAF8F3] mb-5 group-hover:text-[#C9973F] transition-colors leading-tight">
                  {featuredArticle.title}
                </h3>

                <p className="font-sans text-[#A8C4B8] mb-8 leading-relaxed text-lg">
                  {featuredArticle.excerpt}
                </p>

                <div className="flex items-center gap-6 text-sm font-sans text-[#A8C4B8] tracking-wide">
                  <span>{featuredArticle.date}</span>
                  <span className="w-1 h-1 bg-[#C9973F]" />
                  <span className="flex items-center gap-2">
                    <Clock size={14} />
                    {featuredArticle.readTime}
                  </span>
                </div>
              </div>
            </article>
          )}

          {/* Regular Articles */}
          <div className="flex flex-col">
            {regularArticles.map((article, index) => (
              <article
                key={article.id}
                className={`group bg-white p-8 border-l-2 border-l-transparent hover:border-l-[#C9973F] transition-all ${
                  index !== regularArticles.length - 1
                    ? "border-b border-b-[#E5E2DB]"
                    : ""
                }`}
              >
                <div className="flex items-start gap-6">
                  <div className="p-4 border border-[#E5E2DB] group-hover:border-[#C9973F] group-hover:bg-[#C9973F]/5 transition-all">
                    {article.icon && (
                      <article.icon className="text-[#14332A]" size={24} />
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="font-sans text-xs font-bold text-[#C9973F] uppercase tracking-[0.15em]">
                        {article.category}
                      </span>
                      <span className="w-1 h-1 bg-[#555555]" />
                      <span className="font-sans text-xs text-[#555555] tracking-wide">
                        {article.date}
                      </span>
                    </div>
                    <h3 className="font-serif text-xl font-semibold text-[#0F0F0F] mb-3 group-hover:text-[#14332A] transition-colors leading-snug">
                      {article.title}
                    </h3>
                    <p className="font-sans text-sm text-[#555555] leading-relaxed">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center gap-2 mt-4 text-xs font-sans text-[#555555] tracking-wide">
                      <Clock size={12} />
                      {article.readTime}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

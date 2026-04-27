'use client'

import { Shield, Target, Globe, TrendingUp, CheckCircle } from 'lucide-react'

const values = [
  {
    icon: Shield,
    title: 'Sólida',
    description: 'Análisis fundamentado en datos y rigor metodológico.',
  },
  {
    icon: Target,
    title: 'Analítica',
    description: 'Profundidad en cada investigación y reporte.',
  },
  {
    icon: Globe,
    title: 'Global',
    description: 'Perspectiva internacional con foco regional.',
  },
  {
    icon: TrendingUp,
    title: 'Estratégica',
    description: 'Visión de largo plazo para decisiones informadas.',
  },
  {
    icon: CheckCircle,
    title: 'Confiable',
    description: 'Información verificada y fuentes transparentes.',
  },
]

export function BrandValues() {
  return (
    <section className="py-24 bg-[#FAF8F3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-sans text-xs font-semibold text-[#C9973F] tracking-[0.2em] uppercase">
            Nuestros Valores
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-semibold text-[#0F0F0F] mt-3">
            Personalidad de Marca
          </h2>
          <p className="font-sans text-[#555555] mt-5 max-w-2xl mx-auto leading-relaxed">
            Los pilares que definen nuestra forma de informar y analizar el mundo financiero.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-[1px] bg-[#E5E2DB]">
          {values.map((value) => (
            <div
              key={value.title}
              className="bg-white p-8 text-center group hover:bg-[#14332A] transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center p-4 border border-[#E5E2DB] mb-5 group-hover:border-[#C9973F] transition-colors">
                <value.icon className="text-[#14332A] group-hover:text-[#C9973F] transition-colors" size={28} />
              </div>
              <h3 className="font-serif text-xl font-semibold text-[#0F0F0F] mb-3 group-hover:text-[#FAF8F3] transition-colors">
                {value.title}
              </h3>
              <p className="font-sans text-sm text-[#555555] leading-relaxed group-hover:text-[#A8C4B8] transition-colors">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

import { Header, Footer } from "@/components/ombu";
import Image from "next/image";

export default function CNVArticle() {
  return (
    <main className="min-h-screen bg-[#FAF8F3]">
      <Header links={[]} />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="font-serif text-4xl sm:text-5xl font-semibold text-[#14332A] mb-4">
          La CNV acelera la motosierra regulatoria
        </h1>
        <div className="h-[2px] w-24 bg-[#C9973F] mb-12" />

        <div className="relative w-full aspect-video mb-12">
          <Image
            src="/CNV.webp"
            alt="CNV"
            fill
            className="object-cover rounded-lg"
          />
        </div>

        <div className="prose prose-lg max-w-none font-sans text-[#0F0F0F] leading-relaxed">
          <h2 className="font-serif text-2xl font-semibold text-[#14332A] mt-12 mb-4">
            Menos burocracia y más mercado para emitir acciones, ON, fideicomisos y fondos
          </h2>
          <p className="text-[#0F0F0F] mb-6">
            La Comisión Nacional de Valores avanzó con un <strong>nuevo paquete de
            medidas desregulatorias</strong> para simplificar el acceso al mercado de
            capitales y terminar con parte de la pesada burocracia que durante
            años encareció y demoró las emisiones en Argentina.
          </p>
          <p className="text-[#0F0F0F] mb-6">
            A través de las <strong>Resoluciones Generales 1132 a 1137</strong>, publicadas el
            30 de abril de 2026, el organismo impulsó cambios sobre acciones,
            obligaciones negociables, fideicomisos financieros, fondos comunes
            de inversión abiertos y cerrados, programas globales y tokenización
            de valores negociables.
          </p>
          <p className="text-[#0F0F0F] mb-6">
            El eje es claro: pasar de un sistema basado en <strong>autorizaciones
            previas</strong>, trámites extensos y revisión permanente del regulador, a
            un esquema de <strong>autorización automática</strong>, publicación en AIF,
            responsabilidad de los emisores y fiscalización posterior.
          </p>
          <p className="text-[#0F0F0F] mb-6">
            La medida representa un golpe directo contra la <em>lógica
            intervencionista</em> que históricamente convirtió al mercado de capitales
            argentino en un circuito lento, costoso y reservado para pocos
            jugadores. <em>En lugar de pedir permiso para cada paso</em>, las emisoras
            deberán asumir mayor responsabilidad por la información que publican,
            mientras la CNV mantiene sus facultades de control, auditoría y
            sanción.
          </p>

          <h2 className="font-serif text-2xl font-semibold text-[#14332A] mt-12 mb-4">
            Principales cambios
          </h2>
          <p className="text-[#0F0F0F] mb-6">
            Entre los principales cambios, se amplían los regímenes de oferta
            pública automática por mediano impacto, se habilita una mayor
            participación de <strong>inversores no calificados</strong> bajo ciertos supuestos y
            se incorpora un régimen ampliado para emisiones de hasta <strong>100 millones
            de UVAs</strong>. También se reducen cargas para PyME CNV Garantizadas y
            emisiones avaladas por entidades de garantía.
          </p>
          <p className="text-[#0F0F0F] mb-6">
            En fideicomisos financieros, la CNV sometió a consulta pública un
            régimen de autorización automática de mediano impacto ampliado, que
            también permitiría el ingreso de inversores no calificados,
            manteniendo exigencias informativas relevantes para proteger al
            inversor.
          </p>
          <p className="text-[#0F0F0F] mb-6">
            El paquete también impacta de lleno en los fondos comunes de
            inversión. Para los FCI abiertos, se <strong>elimina la autorización previa</strong>
            para su constitución y se traslada el procedimiento a la AIF. Para
            los FCI cerrados, se amplía el régimen de autorización automática y
            se permite su ofrecimiento al público general dentro de determinados
            límites.
          </p>

          <h2 className="font-serif text-2xl font-semibold text-[#14332A] mt-12 mb-4">
            Programas Globales y tokenización
          </h2>
          <p className="text-[#0F0F0F] mb-6">
            La CNV también apunta contra otro foco clásico de burocracia: los
            Programas Globales de Obligaciones Negociables. Las actualizaciones
            de prospecto, prórrogas, aumentos de monto y ciertas modificaciones
            pasarían a regirse por un <strong>esquema automático</strong>, siempre que se publique
            la documentación correspondiente y se pague el arancel aplicable.
            Pero con una advertencia concreta: <em>si una emisora intenta disfrazar
            modificaciones sustanciales como simples actualizaciones, el cambio
            será considerado ineficaz</em>.
          </p>
          <p className="text-[#0F0F0F] mb-6">
            Finalmente, el organismo extendió el <strong>sandbox de tokenización</strong> hasta
            el 31 de diciembre de 2027 e incorporó nuevos valores negociables al
            régimen experimental, mostrando que la CNV no quiere quedarse atrás
            frente a la digitalización del mercado.
          </p>
          <p className="text-[#0F0F0F] mb-6">
            En definitiva, el paquete marca una señal fuerte: la CNV busca un
            mercado de capitales más ágil, menos trabado por expedientes eternos
            y con mayor responsabilidad privada. <em>Menos permiso previo, más
            transparencia pública y control posterior</em>. Una fórmula bastante más
            razonable para un país que necesita financiamiento real y no más
            obstáculos regulatorios.
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}

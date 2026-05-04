import { Header, Footer } from "@/components/ombu";
import Image from "next/image";

export default function ChubutArticle() {
  return (
    <main className="min-h-screen bg-[#FAF8F3]">
      <Header links={[]} />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="font-serif text-4xl sm:text-5xl font-semibold text-[#14332A] mb-4">
          Chubut busca US$ 650 millones en Wall Street
        </h1>
        <div className="h-[2px] w-24 bg-[#C9973F] mb-12" />

        <div className="relative w-full aspect-video mb-12">
          <Image
            src="/ChubutDeuda.jpeg"
            alt="Chubut Deuda"
            fill
            className="object-cover rounded-lg"
          />
        </div>

        <div className="prose prose-lg max-w-none font-sans text-[#0F0F0F] leading-relaxed">
          <h2 className="font-serif text-2xl font-semibold text-[#14332A] mt-12 mb-4">
            Deuda nueva, tasa alta y regalías petroleras como garantía
          </h2>
          <p className="text-[#0F0F0F] mb-6">
            La provincia de Chubut salió al mercado internacional para emitir
            deuda por hasta <strong>US$ 650 millones</strong>, con vencimiento a <strong>10 años</strong>, en una
            operación que busca principalmente refinanciar pasivos heredados de
            emisiones anteriores y liberar margen financiero para obras de
            infraestructura.
          </p>
          <p className="text-[#0F0F0F] mb-6">
            El nuevo título estará regido por <strong>ley de Nueva York</strong>, una estructura
            habitual en colocaciones internacionales que ofrece mayor
            previsibilidad jurídica para los inversores. Además, pagará
            intereses trimestrales a una tasa del <strong>9,45% anual</strong>, junto con
            amortizaciones de capital en dólares estadounidenses.
          </p>
          <p className="text-[#0F0F0F] mb-6">
            La emisión estará respaldada por un <strong>fideicomiso de garantía</strong>
            integrado por regalías específicas que recibe la provincia,
            principalmente vinculadas al sector hidrocarburífero. Este punto es
            central: Chubut depende fuertemente de esos ingresos, por lo que
            cualquier caída relevante en el precio del petróleo <em>podría afectar
            su capacidad de pago</em>.
          </p>

          <h2 className="font-serif text-2xl font-semibold text-[#14332A] mt-12 mb-4">
            Recompra de títulos BOCADE
          </h2>
          <p className="text-[#0F0F0F] mb-6">
            El objetivo principal de la operación será <strong>recomprar</strong> total o
            parcialmente los títulos <strong>BOCADE</strong>, emitidos el 26 de julio de 2016,
            conforme los términos de la oferta de compra lanzada el 20 de abril
            de 2026. En términos simples, la provincia busca <em>cambiar deuda vieja
            por deuda nueva</em>, extendiendo plazos y ordenando su perfil de
            vencimientos.
          </p>
          <p className="text-[#0F0F0F] mb-6">
            Sin embargo, el costo financiero no es menor. Una tasa del 9,45% en
            dólares, incluso con garantía de regalías, muestra lo caro que sigue
            siendo para los emisores argentinos acceder al mercado
            internacional. <em>El riesgo argentino continúa pesando fuerte</em>, aun
            cuando la estructura busque dar mayor seguridad al inversor.
          </p>

          <h2 className="font-serif text-2xl font-semibold text-[#14332A] mt-12 mb-4">
            Situación fiscal y destino de los fondos
          </h2>
          <p className="text-[#0F0F0F] mb-6">
            Según la información fiscal disponible, Chubut registró en 2025 un
            déficit de <strong>$155.148,7 millones</strong>. Sus ingresos estuvieron compuestos
            en un 67,4% por recursos tributarios, tanto federales como
            provinciales; un 29,1% por ingresos no tributarios, principalmente
            regalías hidrocarburíferas; y un 3,4% por otras fuentes.
          </p>
          <p className="text-[#0F0F0F] mb-6">
            Luego de la recompra de los BOCADE, los <strong>US$ 419 millones</strong> restantes
            se destinarán al financiamiento de obras públicas prioritarias,
            entre ellas la optimización del <strong>Acueducto Regional Lago Musters–
            Comodoro Rivadavia</strong>, Rada Tilly y Caleta Olivia, y la compra de
            equipamiento para el inicio de operaciones del <strong>Hospital de Alta
            Complejidad de Trelew "María Humphreys"</strong>.
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}

import { Header, Footer } from "@/components/ombu";
import Image from "next/image";
import Link from "next/link";

export default function MileiDolaresChubutArticle() {
  return (
    <main className="min-h-screen bg-[#FAF8F3]">
      <Header links={[]} />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="font-serif text-4xl sm:text-5xl font-semibold text-[#14332A] mb-4">
          Milei consigue dólares al 5% mientras Chubut paga casi 10% y pone
          regalías petroleras
        </h1>
        <div className="h-[2px] w-24 bg-[#C9973F] mb-12" />

        <div className="relative w-full aspect-video mb-12">
          <Image
            src="/ChubutVsNacionHorizontal.jpeg"
            alt="Chubut vs Nación endeudamiento"
            className="object-cover rounded-lg"
            fill
          />
        </div>

        <div className="prose prose-lg max-w-none font-sans text-[#0F0F0F] leading-relaxed">
          <h2 className="font-serif text-2xl font-semibold text-[#14332A] mt-12 mb-4">
            El Tesoro Nacional volvió al mercado con tasas más competitivas que
            varias provincias
          </h2>
          <p className="text-[#0F0F0F] mb-6">
            El Tesoro Nacional volvió al mercado con la reapertura de los bonos{" "}
            <strong>Bonar 2027 (AO27)</strong> y{" "}
            <strong>Bonar 2028 (AO28)</strong>, en una operación que dejó una
            señal clara: hoy el Estado Nacional logra financiarse en dólares a
            tasas más competitivas que varias provincias.
          </p>
          <p className="text-[#0F0F0F] mb-6">
            La colocación, realizada el <strong>29 de abril de 2026</strong>,
            permitió captar <strong>US$ 100 millones</strong> a través del AO27,
            con una tasa nominal anual del <strong>5,04%</strong>, y otros{" "}
            <strong>US$ 48 millones</strong> mediante el AO28, a una tasa del{" "}
            <strong>8,44%</strong>. Ambos títulos fueron emitidos en dólares,
            bajo ley argentina.
          </p>
          <p className="text-[#0F0F0F] mb-6">
            El dato no es menor. El bono con vencimiento en 2027, es decir,
            dentro del actual mandato presidencial, consiguió financiamiento a
            una tasa sensiblemente más baja. En cambio, el título que vence en
            2028, ya fuera del horizonte político inmediato del Gobierno, exigió
            una tasa mayor.{" "}
            <em>
              El mercado, una vez más, marca dónde ve menos riesgo y dónde
              empieza a pedir más premio.
            </em>
          </p>

          <h2 className="font-serif text-2xl font-semibold text-[#14332A] mt-12 mb-4">
            Operación por adhesión y reforzar la caja sin emisión monetaria
          </h2>
          <p className="text-[#0F0F0F] mb-6">
            La operación se realizó bajo la modalidad de{" "}
            <strong>adhesión</strong>. Esto significa que los inversores no
            compitieron por una nueva tasa o precio, sino que suscribieron los
            títulos al precio de corte definido previamente:{" "}
            <strong>US$ 1.014</strong> para el AO27 y{" "}
            <strong>US$ 945,51</strong> para el AO28.
          </p>
          <p className="text-[#0F0F0F] mb-6">
            El objetivo del Gobierno fue reforzar la caja en dólares del Tesoro
            y atender vencimientos de corto plazo sin recurrir a emisión
            monetaria ni generar presión directa sobre la liquidez en pesos. En
            términos simples:{" "}
            <em>
              conseguir dólares sin volver a la vieja receta de imprimir pesos
              para financiar el gasto.
            </em>
          </p>

          <h2 className="font-serif text-2xl font-semibold text-[#14332A] mt-12 mb-4">
            La comparación con Chubut: casi 10% anual y regalías como garantía
          </h2>
          <p className="text-[#0F0F0F] mb-6">
            La comparación con Chubut es inevitable. Mientras el Tesoro colocó
            deuda en dólares a una tasa de <strong>5,04%</strong> para 2027 y{" "}
            <strong>8,44%</strong> para 2028, la{" "}
            <Link
              href="/articulos/deuda-chubut"
              className="text-blue-800 underline"
            >
              provincia patagónica salió a buscar hasta{" "}
              <strong>US$ 650 millones</strong> bajo ley de Nueva York, a{" "}
              <strong>10 años</strong>, con una tasa del{" "}
              <strong>9,45% anual</strong> y regalías hidrocarburíferas como
              garantía.
            </Link>
          </p>
          <p className="text-[#0F0F0F] mb-6">
            La diferencia es política y financiera. Nación busca mostrar{" "}
            <em>
              orden fiscal, menor dependencia de la emisión y una administración
              más cuidadosa de los vencimientos
            </em>
            . Chubut, en cambio, vuelve a Wall Street con una tasa más alta,
            mayor plazo y respaldo de ingresos petroleros para refinanciar deuda
            vieja.
          </p>

          <h2 className="font-serif text-2xl font-semibold text-[#14332A] mt-12 mb-4">
            El costo que pagan las provincias cuando el mercado exige una prima
            fuerte
          </h2>
          <p className="text-[#0F0F0F] mb-6">
            En definitiva, el contraste es contundente: el Gobierno nacional
            consiguió dólares más baratos y sin comprometer regalías
            específicas, mientras Chubut tuvo que ofrecer casi{" "}
            <strong>10% anual en dólares</strong> y poner recursos provinciales
            como garantía.
          </p>
          <p className="text-[#0F0F0F] mb-6">
            Una emisión sirve para reforzar caja y ordenar vencimientos; la otra
            muestra el costo que todavía pagan las provincias cuando{" "}
            <em>el mercado no les presta sin exigir una prima fuerte</em>.
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}

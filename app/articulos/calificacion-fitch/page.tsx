import { Header, Footer } from "@/components/ombu";
import Image from "next/image";

export default function FitchCalificacionArticle() {
  return (
    <main className="min-h-screen bg-[#FAF8F3]">
      <Header links={[]} />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="font-serif text-4xl sm:text-5xl font-semibold text-[#14332A] mb-4">
          Nueva Calificación de Argentina: Fitch sube la nota a B-
        </h1>
        <div className="h-[2px] w-24 bg-[#C9973F] mb-12" />

        <div className="relative w-full aspect-video mb-12">
          <Image
            src="/fitch_rating_long.png"
            alt="Fitch Ratings mejora calificación de Argentina"
            fill
            className="object-cover rounded-lg"
          />
        </div>

        <div className="prose prose-lg max-w-none font-sans text-[#0F0F0F] leading-relaxed">
          <h2 className="font-serif text-2xl font-semibold text-[#14332A] mt-12 mb-4">
            Fitch subió la calificación de CCC+ a B- con perspectiva estable
          </h2>
          <p className="text-[#0F0F0F] mb-6">
            Argentina recibió una señal positiva del mercado financiero
            internacional. <strong>Fitch Ratings</strong> subió la calificación
            del país de <strong>CCC+ a B-</strong>, con perspectiva estable. La
            noticia no resuelve todos los problemas, pero sí marca un cambio
            importante. Para una calificadora internacional, la capacidad de
            pago del Estado argentino mejoró respecto del escenario anterior.
          </p>

          <h2 className="font-serif text-2xl font-semibold text-[#14332A] mt-12 mb-4">
            ¿Qué es una calificadora de riesgo?
          </h2>
          <p className="text-[#0F0F0F] mb-6">
            Una calificadora de riesgo es una entidad que analiza qué tan
            probable es que un país, una provincia o una empresa pague sus
            deudas. Cuanto mejor es la calificación, menor es el riesgo
            percibido. Y cuanto menor es el riesgo, mejores condiciones
            (intereses, márgenes o valor) puede conseguir el emisor cuando sale
            a buscar financiamiento.
          </p>
          <p>
            En este caso, Fitch elevó la calificación de Argentina a B-, lo que
            significa que el país muestra una mejor capacidad para cumplir con
            sus obligaciones de deuda, aunque todavía sigue expuesto a shocks
            económicos, financieros o políticos. La mejora es relevante porque
            la calificación anterior, CCC+, reflejaba un escenario de mayor
            vulnerabilidad y un riesgo de incumplimiento más alto (“Default”).
            El salto a B- no elimina el riesgo argentino, pero para Fitch, la
            probabilidad de pago del país mejoró respecto del escenario previo.
          </p>

          <h2 className="font-serif text-2xl font-semibold text-[#14332A] mt-12 mb-4">
            Las razones detrás de la mejora
          </h2>
          <p className="text-[#0F0F0F] mb-6">
            La mejora de Fitch se apoya en varios puntos:{" "}
            <strong>mayor disciplina fiscal</strong>, avance de reformas
            económicas, mejora de la posición externa, acumulación de reservas y
            una expectativa más favorable sobre el repago de la deuda argentina.
            También destaca que el Gobierno mantiene el equilibrio fiscal como
            ancla central de su programa económico.
          </p>

          <h2 className="font-serif text-2xl font-semibold text-[#14332A] mt-12 mb-4">
            La confianza tiene precio
          </h2>
          <p className="text-[#0F0F0F] mb-6">
            Esto importa porque, en finanzas, <em>la confianza tiene precio</em>
            . Si el mercado cree que el Estado tiene más capacidad y voluntad de
            pago, el país puede financiarse en mejores condiciones. No
            necesariamente de forma inmediata ni automática, pero sí con una
            perspectiva más favorable para futuras emisiones de deuda.
          </p>

          <h2 className="font-serif text-2xl font-semibold text-[#14332A] mt-12 mb-4">
            Qué significa para los inversores
          </h2>
          <p className="text-[#0F0F0F] mb-6">
            Para nosotros los inversores, la mejora de calificación puede ser
            una buena señal. No significa que los bonos argentinos sean
            &ldquo;seguros&rdquo; en términos absolutos, pero sí que la
            percepción de riesgo bajó un escalón. Eso puede mejorar la
            perspectiva de pago de los títulos públicos nacionales y hacerlos
            más atractivos para quienes buscan oportunidades de inversión con
            mayor rendimiento, pero sin perder de vista el riesgo argentino.
          </p>

          <h2 className="font-serif text-2xl font-semibold text-[#14332A] mt-12 mb-4">
            Los límites que Fitch también marcó
          </h2>
          <p className="text-[#0F0F0F] mb-6">
            Fitch también marcó límites importantes. La calificadora advirtió
            que Argentina todavía tiene una{" "}
            <strong>posición de liquidez internacional débil</strong> frente a
            eventuales shocks de confianza, inflación elevada y un historial de
            inestabilidad macroeconómica. Es decir: el país mejoró, pero todavía
            no salió de la zona de riesgo.
          </p>

          <h2 className="font-serif text-2xl font-semibold text-[#14332A] mt-12 mb-4">
            El dato clave detrás del cambio
          </h2>
          <p className="text-[#0F0F0F] mb-6">
            El dato clave es que la mejora no se explica por una promesa
            aislada, sino por un conjunto de factores:{" "}
            <strong>superávit fiscal</strong>, menor emisión monetaria,
            recomposición de reservas, aumento de exportaciones energéticas y
            una estrategia para cubrir vencimientos de deuda en moneda
            extranjera.
          </p>
          <p className="text-[#0F0F0F] mb-6">
            También beneficia al propio Estado. Una mejor calificación ayuda a
            la posición negociadora del Tesoro y puede abrir la puerta a
            financiamiento más barato.
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}

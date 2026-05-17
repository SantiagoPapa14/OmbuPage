import { Header, Footer } from "@/components/ombu";
import Image from "next/image";

export default function InflacionBcraArticle() {
  return (
    <main className="min-h-screen bg-[#FAF8F3]">
      <Header links={[]} />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="font-serif text-4xl sm:text-5xl font-semibold text-[#14332A] mb-4">
          El dato que cambia el humor del mercado: baja la inflación y el BCRA
          compra dólares
        </h1>
        <div className="h-[2px] w-24 bg-[#C9973F] mb-12" />

        <div className="relative w-full aspect-video mb-12">
          <Image
            src="/inflacion-horz.png"
            alt="Inflación y BCRA"
            fill
            className="object-cover rounded-lg"
          />
        </div>

        <div className="prose prose-lg max-w-none font-sans text-[#0F0F0F] leading-relaxed">
          <p className="text-[#0F0F0F] mb-6">
            La inflación de abril dejó un dato positivo: el Índice de Precios
            del Consumidor (“IPC”) fue de <strong>2,6% mensual</strong>, por
            debajo del 3,4% de marzo. En el año acumula 12,3% y la inflación
            interanual quedó en 32,4%.
          </p>
          <p className="text-[#0F0F0F] mb-6">
            Pero lo más importante no es solo que la inflación bajó. Lo más
            relevante es en qué contexto bajó.
          </p>
          <p className="text-[#0F0F0F] mb-6">
            Mientras la inflación desaceleraba, el{" "}
            <strong>Banco Central (“BCRA”)</strong> siguió comprando dólares.
            Desde comienzos de 2026 hasta el 12 de mayo, el BCRA compró más de{" "}
            <strong>USD 7.600 millones</strong> en el mercado de cambios. Eso
            equivale a tres cuartos del piso previsto para todo 2026.
          </p>
          <p className="text-[#0F0F0F] mb-6">
            Para nosotros este dato no es menor. Cada vez que el BCRA compra
            dólares, la reacción automática suele ser pensar en más pesos, más
            inflación y más presión sobre el dólar. Esta vez, por ahora, la
            película viene siendo distinta: el BCRA compra reservas, la
            inflación baja y el dólar no salta.
          </p>
          <p className="text-[#0F0F0F] mb-6">
            Esa combinación es la que mira el mercado.
          </p>

          <h2 className="font-serif text-2xl font-semibold text-[#14332A] mt-12 mb-4">
            Abril fue mejor, pero no fue gratis
          </h2>
          <p className="text-[#0F0F0F] mb-6">
            El dato de inflación fue bueno, pero no significa que todo haya
            quedado resuelto.
          </p>
          <p className="text-[#0F0F0F] mb-6">
            En abril, los precios que más subieron fueron{" "}
            <strong>Transporte</strong> (4,4%) y <strong>Educación</strong>{" "}
            (4,2%). La presión vino principalmente por combustibles, tarifas y
            servicios. En cambio, Alimentos y bebidas no alcohólicas subió solo
            1,5%, uno de los datos más bajos del mes.
          </p>
          <p className="text-[#0F0F0F] mb-6">
            La baja de abril es una señal positiva. Pero todavía no alcanza para
            decir que la inflación dejó de ser un problema.
          </p>

          <h2 className="font-serif text-2xl font-semibold text-[#14332A] mt-12 mb-4">
            El punto clave: las reservas
          </h2>
          <p className="text-[#0F0F0F] mb-6">
            La compra de dólares del BCRA es probablemente el dato más
            importante para el mercado.
          </p>
          <p className="text-[#0F0F0F] mb-6">
            ¿Por qué? Porque Argentina no solo necesita bajar la inflación.
            También necesita acumular reservas. Sin reservas, cualquier ruido
            político o financiero puede transformarse rápidamente en presión
            sobre el dólar.
          </p>
          <p className="text-[#0F0F0F] mb-6">
            Con más reservas, el Banco Central tiene más margen. No soluciona
            todos los problemas, pero reduce parte de la fragilidad.
          </p>
          <p className="text-[#0F0F0F] mb-6">
            Y acá aparece la señal fuerte: si el BCRA puede comprar dólares sin
            que el tipo de cambio se dispare, el mercado empieza a mirar
            distinto a los activos argentinos.
          </p>

          <h2 className="font-serif text-2xl font-semibold text-[#14332A] mt-12 mb-4">
            Qué significa para el inversor
          </h2>
          <p className="text-[#0F0F0F] mb-6">
            Para el inversor común, el mensaje es simple: los pesos vuelven a
            competir, pero todavía no hay que confiarse.
          </p>
          <p className="text-[#0F0F0F] mb-6">
            Si la inflación sigue bajando y el dólar se mantiene estable, los
            instrumentos en pesos pueden volver a ser atractivos. Plazo fijo,
            cauciones, fondos money market, bonos u Obligaciones Negociables en
            pesos o instrumentos ajustados por inflación vuelven a entrar en la
            conversación.
          </p>
          <p className="text-[#0F0F0F] mb-6">
            Pero el riesgo no desapareció. Argentina sigue siendo Argentina. Un
            mal dato de inflación, una suba del dólar o una caída en la compra
            de reservas puede cambiar rápido el humor del mercado.
          </p>
          <p className="text-[#0F0F0F] mb-6">
            Por eso, la lectura correcta no es “hay que pasarse todo a pesos”.
            La lectura correcta es que el escenario mejoró y que hay que empezar
            a mirar con más atención las oportunidades en nuestra moneda.
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}

import { Header, Footer } from "@/components/ombu";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";
import Image from "next/image";

export default function PlazoFijoVsInstrumentosArticle() {
  return (
    <main className="min-h-screen bg-[#FAF8F3]">
      <Header links={[]} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="mb-6 text-sm text-[#6B6B6B] font-medium tracking-wide uppercase">
          Ombú Finanzas | Contenido educativo | NO constituye recomendación de
          inversión.
        </div>

        <h1 className="font-serif text-4xl sm:text-5xl font-semibold text-[#14332A] mb-4 leading-tight">
          Plazo Fijo 2026: por qué ya no alcanza y qué poner en su lugar
        </h1>

        <div className="h-[2px] w-24 bg-[#C9973F] mb-12" />

        <div className="relative w-full aspect-video mb-12 overflow-hidden rounded-lg bg-[#EDE7DC] border border-[#E5E2DB]">
          <Image
            src="/fijo_horz.png"
            alt="Plazo fijo vs instrumentos financieros"
            fill
            className="object-cover"
          />
        </div>

        <div className="prose prose-lg max-w-none font-sans text-[#0F0F0F] leading-relaxed prose-p:mb-6 prose-headings:font-serif prose-headings:text-[#14332A]">
          <p className="text-xl text-[#3B3B3B] leading-relaxed mb-10">
            Con números simples, sin vueltas y pensando en quien está empezando
            a mirar algo más que el banco.
          </p>

          <p>
            Durante años, el plazo fijo fue la respuesta automática de muchos
            argentinos: cobras, separas una parte y la mandás al banco por 30
            días. Fácil, conocido y sin demasiadas preguntas.
          </p>

          <p>
            El problema es que en 2026 la situación cambió. Las tasas bajaron y
            el plazo fijo tradicional empezó a quedar más justo frente a la
            inflación. No es que dejó de servir para todo, pero sí dejó de ser
            la única opción razonable para quien quiere cuidar sus ahorros.
          </p>

          <p>
            El dato central: tomando el promedio de los 10 primeros bancos, el
            plazo fijo tradicional muestra una Tasa Nominal Anual (“TNA”) de
            17,44%. Esto quiere decir que el rendimiento dejando tu plata por un
            año es de 17,44% y si lo llevamos a 30 días el rendimiento es de
            aproximadamente 1,45%.
          </p>

          <p>
            Ahora viene la parte incómoda: la inflación de abril fue 2,6%.
            Entonces, si tu plata rindió 1,45% pero los precios subieron 2,6%,
            quedaste abajo por aproximadamente 1,15%.
          </p>

          <h2 className="font-serif text-2xl font-semibold text-[#14332A] mt-14 mb-6">
            La realidad de los Plazos Fijos
          </h2>

          <div className="my-8 rounded-lg border border-[#E5E2DB] shadow-sm bg-white overflow-hidden">
            <Table className="w-full">
              <TableHeader>
                <TableRow className="border-b-2 border-[#C9973F] bg-[#F4E9D8] hover:bg-[#F4E9D8]">
                  <TableHead>Dato</TableHead>
                  <TableHead>Número Traducido</TableHead>
                  <TableHead>Lectura Ombú</TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                <TableRow className="odd:bg-[#FCF8F1] even:bg-white">
                  <TableCell className="font-medium">
                    Plazo fijo tradicional
                  </TableCell>
                  <TableCell>17,44% TNA · 1,45% aprox. en 30 días</TableCell>
                  <TableCell>Rinde, pero poco.</TableCell>
                </TableRow>

                <TableRow className="odd:bg-[#FCF8F1] even:bg-white">
                  <TableCell className="font-medium">
                    Inflación abril 2026
                  </TableCell>
                  <TableCell>
                    2,6% · Los precios subieron más que la tasa mensual
                  </TableCell>
                  <TableCell>
                    La plata ganó nominalmente, pero perdió poder de compra.
                  </TableCell>
                </TableRow>

                <TableRow className="odd:bg-[#FCF8F1] even:bg-white">
                  <TableCell className="font-medium">
                    Diferencia simple
                  </TableCell>
                  <TableCell>
                    -1,15% · Faltaron $1.150 cada $100.000 para empatar
                    inflación
                  </TableCell>
                  <TableCell>
                    Acá aparece la pregunta: ¿hay alternativas?
                  </TableCell>
                </TableRow>

                <TableRow className="odd:bg-[#FCF8F1] even:bg-white">
                  <TableCell className="font-medium">
                    Inflación acumulada 2026
                  </TableCell>
                  <TableCell>12,3% acumulado hasta abril</TableCell>
                  <TableCell>
                    El año ya trae una suba relevante de precios.
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>

          <h2 className="font-serif text-2xl font-semibold text-[#14332A] mt-14 mb-4">
            Ejemplo rápido
          </h2>

          <div className="rounded-2xl border border-[#E5E2DB] bg-white p-6 shadow-sm my-8">
            <p className="mb-0 text-[17px] leading-relaxed">
              Si ponés <strong>$100.000</strong> a 30 días en un plazo fijo que
              rinde <strong>1,45%</strong>, terminás con
              <strong> $101.450</strong>. Pero si los precios subieron
              <strong> 2,6%</strong>, necesitabas <strong>$102.600</strong> para
              mantener el mismo poder de compra.
            </p>
          </div>

          <p>
            La diferencia no te rompe la billetera en un mes, pero si lo
            acumulás en un año sí hace daño.
          </p>

          <h2 className="font-serif text-2xl font-semibold text-[#14332A] mt-14 mb-4">
            ¿Qué opciones compiten contra el plazo fijo?
          </h2>

          <p>
            Antes de realizar una mirada técnica, bajemos los instrumentos a
            tierra. Nada de esto es magia: todos tienen ventajas, riesgos y
            condiciones. La clave es entender qué estás comprando.
          </p>

          <div className="space-y-6 my-10">
            <div className="rounded-xl border border-[#E5E2DB] bg-white p-6 shadow-sm">
              <h3 className="font-serif text-xl text-[#14332A] mb-2">
                Plazo fijo UVA
              </h3>
              <p className="mb-0">
                Es un plazo fijo que busca acompañar la inflación. En lugar de
                depender solamente de una tasa fija, ajusta por UVA, que sigue
                la evolución de los precios. Puede servir para no quedar tan
                atrás frente a la inflación, pero normalmente resignás
                flexibilidad: el plazo mínimo suele ser de 90 días.
              </p>
            </div>

            <div className="rounded-xl border border-[#E5E2DB] bg-white p-6 shadow-sm">
              <h3 className="font-serif text-xl text-[#14332A] mb-2">
                Fondos Comunes de Inversión de renta fija
              </h3>
              <p className="mb-0">
                Se compone del patrimonio de inversores que comparten objetivos
                similares de rentabilidad y riesgo para que sea administrado por
                profesionales. El fondo compra distintos instrumentos de renta
                fija y vos participás según la plata que pusiste.
              </p>
            </div>

            <div className="rounded-xl border border-[#E5E2DB] bg-white p-6 shadow-sm">
              <h3 className="font-serif text-xl text-[#14332A] mb-2">
                Letras del Tesoro
              </h3>
              <p className="mb-0">
                Son instrumentos de deuda de corto plazo emitidos por el Estado.
                En simple: le prestás plata al Tesoro por un período determinado
                y recibís un interés.
              </p>
            </div>

            <div className="rounded-xl border border-[#E5E2DB] bg-white p-6 shadow-sm">
              <h3 className="font-serif text-xl text-[#14332A] mb-2">
                Bonos capitalizables
              </h3>
              <p className="mb-0">
                Son bonos donde los intereses no necesariamente se cobran mes a
                mes, sino que se acumulan al capital hasta el vencimiento.
              </p>
            </div>

            <div className="rounded-xl border border-[#E5E2DB] bg-white p-6 shadow-sm">
              <h3 className="font-serif text-xl text-[#14332A] mb-2">
                Cauciones
              </h3>
              <p className="mb-0">
                Funcionan parecido a un plazo fijo de muy corto plazo dentro del
                mercado. Suelen usarse para estacionar pesos por pocos días.
              </p>
            </div>

            <div className="rounded-xl border border-[#E5E2DB] bg-white p-6 shadow-sm">
              <h3 className="font-serif text-xl text-[#14332A] mb-2">
                Bonos a tasa variable y ON TAMAR
              </h3>
              <p className="mb-0">
                Son instrumentos cuya tasa se mueve según una referencia como
                TAMAR. En el caso de las Obligaciones Negociables, además suman
                riesgo empresario.
              </p>
            </div>
          </div>

          <h2 className="font-serif text-2xl font-semibold text-[#14332A] mt-14 mb-6">
            La comparación: cuánto dejarían $100.000
          </h2>

          <p>
            Para hacer la comparación, tomamos una muestra de cada tipo de
            instrumento y calculamos una TNA promedio. Luego, estimamos cuánto
            podría rendir una inversión de $100.000 en cada alternativa.
          </p>

          <div className="my-8 rounded-lg border border-[#E5E2DB] shadow-sm bg-white overflow-x-auto">
            <Table className="w-full min-w-[800px]">
              <TableHeader>
                <TableRow className="border-b-2 border-[#C9973F] bg-[#F4E9D8] hover:bg-[#F4E9D8]">
                  <TableHead>Instrumento</TableHead>
                  <TableHead>Rend. mensual</TableHead>
                  <TableHead>Rend. anual</TableHead>
                  <TableHead>Ganancia 30 días</TableHead>
                  <TableHead>Ganancia estimada 90 días</TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                {[
                  [
                    "Plazo fijo tradicional",
                    "1,45%",
                    "17,44%",
                    "$1.450",
                    "$4.413",
                  ],
                  [
                    "Plazo fijo UVA",
                    "2,60%*",
                    "Acompaña inflación",
                    "$2.600",
                    "$8.005",
                  ],
                  ["FCI renta fija", "1,41%", "13,79%", "$1.410", "—"],
                  ["Letras del Tesoro", "1,88%", "22,57%", "$1.880", "$5.747"],
                  [
                    "Bonos capitalizables",
                    "2,10%",
                    "26,13%",
                    "$2.100",
                    "$6.433",
                  ],
                  ["Cauciones", "1,60%", "20,00%", "$1.600", "$4.877"],
                  [
                    "Bonos tasa variable TAMAR",
                    "2,10%",
                    "25,23%",
                    "$2.100",
                    "$6.433",
                  ],
                  ["ON TAMAR + margen", "2,13%", "25,56%", "$2.130", "$6.527"],
                ].map((row) => (
                  <TableRow
                    key={row[0]}
                    className="odd:bg-[#FCF8F1] even:bg-white"
                  >
                    <TableCell className="font-medium">{row[0]}</TableCell>
                    <TableCell>{row[1]}</TableCell>
                    <TableCell>{row[2]}</TableCell>
                    <TableCell>{row[3]}</TableCell>
                    <TableCell>{row[4]}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <p className="text-sm text-[#5E5E5E] italic mt-4">
            *Para el plazo fijo UVA se toma como referencia la inflación mensual
            de abril indicada en el borrador. No implica que la inflación futura
            vaya a repetir ese número.
          </p>

          <h2 className="font-serif text-2xl font-semibold text-[#14332A] mt-14 mb-4">
            La lectura rápida de la tabla
          </h2>

          <p>
            La primera conclusión es bastante clara: si miramos solo el dato de
            abril, el plazo fijo UVA aparece como el ganador. ¿Por qué? Porque
            ajusta por inflación.
          </p>

          <p>
            Del otro lado aparecen los instrumentos vinculados a tasa, como los
            bonos TAMAR o las ON TAMAR + margen. Estos no ajustan por inflación,
            sino por tasa.
          </p>

          <p>
            También hay que tener cuidado con algo importante: la comparación a
            30 o 90 días es una simulación de rendimiento, no significa que
            todos estos instrumentos venzan en ese plazo.
          </p>

          <h2 className="font-serif text-2xl font-semibold text-[#14332A] mt-14 mb-6">
            El riesgo, explicado sin letra chica
          </h2>

          <div className="my-8 rounded-lg border border-[#E5E2DB] shadow-sm bg-white overflow-x-auto">
            <Table className="w-full min-w-[900px]">
              <TableHeader>
                <TableRow className="border-b-2 border-[#C9973F] bg-[#F4E9D8] hover:bg-[#F4E9D8]">
                  <TableHead>Instrumento</TableHead>
                  <TableHead>Nivel de dificultad</TableHead>
                  <TableHead>Principal riesgo</TableHead>
                  <TableHead>Para quién puede tener sentido</TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                {[
                  [
                    "Plazo fijo tradicional",
                    "Bajo",
                    "Perder contra inflación",
                    "Quien prioriza simpleza y previsibilidad",
                  ],
                  [
                    "Plazo fijo UVA",
                    "Bajo",
                    "Menor flexibilidad y depender de inflación futura",
                    "Quien quiere cubrirse de inflación y puede esperar",
                  ],
                  [
                    "FCI renta fija",
                    "Medio",
                    "Variación diaria de la cuotaparte",
                    "Quien quiere empezar a invertir sin elegir cada bono",
                  ],
                  [
                    "Letras del Tesoro",
                    "Medio",
                    "Riesgo de precio",
                    "Quien entiende plazos cortos y tolera movimientos",
                  ],
                  [
                    "Bonos capitalizables",
                    "Medio / alto",
                    "Precio, liquidez y duración",
                    "Quien busca más tasa y acepta volatilidad",
                  ],
                  [
                    "Cauciones",
                    "Bajo",
                    "Tasa variable y operar mercado",
                    "Quien busca colocar pesos por pocos días",
                  ],
                  [
                    "Bonos tasa variable",
                    "Medio / alto",
                    "Que la tasa baje o el bono caiga",
                    "Quien quiere exposición a tasa variable",
                  ],
                  [
                    "ON TAMAR + margen",
                    "Medio / alto",
                    "Riesgo de empresa + mercado",
                    "Quien analiza emisor y puede esperar",
                  ],
                ].map((row) => (
                  <TableRow
                    key={row[0]}
                    className="odd:bg-[#FCF8F1] even:bg-white"
                  >
                    <TableCell className="font-medium">{row[0]}</TableCell>
                    <TableCell>{row[1]}</TableCell>
                    <TableCell>{row[2]}</TableCell>
                    <TableCell>{row[3]}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <div className="rounded-2xl border-l-4 border-[#C9973F] bg-[#FFF8EC] p-6 my-12">
            <h3 className="font-serif text-2xl text-[#14332A] mb-3">
              Punto clave
            </h3>

            <p className="mb-0 text-[17px] leading-relaxed">
              Más tasa no significa automáticamente mejor inversión. A veces
              significa más riesgo, menos liquidez o tener que esperar hasta el
              vencimiento.
            </p>
          </div>

          <h2 className="font-serif text-2xl font-semibold text-[#14332A] mt-14 mb-4">
            Entonces, ¿conviene abandonar el plazo fijo?
          </h2>

          <p>
            No necesariamente. El plazo fijo puede seguir teniendo lugar para
            quien necesita máxima simpleza, no quiere mirar el mercado y
            prefiere saber exactamente cuánto va a cobrar al final del período.
          </p>

          <p>
            Pero sí hay una conclusión fuerte: si tu única estrategia es renovar
            plazo fijo todos los meses, estás jugando con una sola carta.
          </p>

          <p>
            Por eso, el verdadero cambio no es pasar del plazo fijo a “lo que
            más pague”, sino empezar a mirar los pesos como una cartera: una
            parte líquida, una parte protegida contra inflación y otra parte
            buscando mejor tasa.
          </p>

          <div className="mt-16 pt-8 border-t border-[#DDD6CA] text-sm text-[#666666] leading-relaxed">
            <p>
              Notas metodológicas: las tasas y rendimientos utilizados surgen
              del borrador de trabajo. Los cálculos son estimativos y buscan
              facilitar la comparación para lectores iniciales.
            </p>

            <p className="mb-0">
              El contenido es educativo y no constituye recomendación de
              inversión.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}

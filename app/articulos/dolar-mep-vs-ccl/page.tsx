import { Header, Footer } from "@/components/ombu";
import Image from "next/image";

import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";

export default function DolarMepVsCclArticle() {
  return (
    <main className="min-h-screen bg-[#FAF8F3]">
      <Header links={[]} />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="mb-6 text-sm text-[#6B6B6B] font-medium tracking-wide uppercase">
          Ombú Finanzas | Contenido educativo | NO constituye recomendación de
          inversión.
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl font-semibold text-[#14332A] mb-4 leading-tight">
          Dólar MEP vs CCL: la diferencia simple que cambia dónde terminan tus
          dólares
        </h1>
        <div className="h-[2px] w-24 bg-[#C9973F] mb-12" />
        {/* Hero Image (horizontal placeholder) */}
        <div className="relative w-full aspect-video mb-12 overflow-hidden rounded-lg bg-[#EDE7DC] border border-[#E5E2DB]">
          <Image
            src="/mep_ccl_horz.png"
            alt="Dólar MEP vs CCL - portada"
            fill
            className="object-cover"
          />
        </div>
        <div className="prose prose-lg max-w-none font-sans text-[#0F0F0F] leading-relaxed prose-p:mb-6 prose-headings:font-serif prose-headings:text-[#14332A] prose-table:shadow-md prose-table:border prose-table:border-[#E5E2DB] prose-table:my-8 prose-table:w-full prose-table:bg-white">
          <p className="text-xl text-[#3B3B3B] leading-relaxed mb-10">
            Los dos nacen de operaciones con bonos o activos del mercado. Pero
            no sirven para lo mismo: el MEP deja los dólares en Argentina; el
            CCL los manda al exterior.
          </p>

          <p>
            Durante años de cepo, el dólar <strong>MEP</strong> y el dólar
            contado con liquidación, más conocido como <strong>CCL</strong>, se
            volvieron dos palabras habituales para cualquiera que intentara
            cuidar sus pesos. El problema es que muchas veces se los menciona
            como si fueran lo mismo. <strong>No lo son.</strong>
          </p>
          <p>
            Ambos son “<strong>dólares financieros</strong>”, no se compran por
            ventanilla como un dólar tradicional, sino mediante una operación en
            el mercado de capitales. Se usa un <strong>activo</strong> —por
            ejemplo un bono— como puente para pasar de pesos a dólares.
          </p>

          <h2 className="font-serif text-2xl font-semibold text-[#14332A] mt-14 mb-6">
            ¿Por qué te tiene que importar?
          </h2>
          <ul>
            <li>
              Porque entender la diferencia te ayuda a leer mejor qué está
              pasando con el mercado y con tus propios ahorros. No es un
              tecnicismo para traders, es una forma simple de entender si la{" "}
              <strong>demanda de dólares</strong> se queda dentro de{" "}
              <strong>Argentina</strong> o busca salir al{" "}
              <strong>exterior</strong>.
            </li>
            <li>
              Para saber qué dólar miran muchos ahorristas cuando quieren{" "}
              <strong>dolarizarse</strong> sin pasar por el mercado oficial.
            </li>
            <li>
              Para entender por qué a veces el <strong>MEP</strong> y el{" "}
              <strong>CCL</strong> no valen lo mismo.
            </li>
            <li>
              Para distinguir entre “quiero{" "}
              <strong>dólares en Argentina</strong>” y “quiero{" "}
              <strong>dólares afuera</strong>”.
            </li>
            <li>
              Para no mezclar <strong>instrumentos</strong>,{" "}
              <strong>precios</strong> y <strong>objetivos</strong> en una misma
              bolsa.
            </li>
          </ul>

          <h2 className="font-serif text-2xl font-semibold text-[#14332A] mt-14 mb-6">
            La diferencia en una línea
          </h2>
          <p>
            Si tenés que quedarte con una sola idea, que sea esta: en el dólar{" "}
            <strong>MEP</strong> los dólares terminan en una{" "}
            <strong>cuenta local</strong>; en el <strong>CCL</strong> terminan
            en una <strong>cuenta del exterior</strong>.
          </p>

          <div className="my-8 rounded-lg border border-[#E5E2DB] shadow-sm bg-white overflow-hidden">
            <Table className="w-full">
              <TableHeader>
                <TableRow className="border-b-2 border-[#C9973F] bg-[#F4E9D8]">
                  <TableHead>Pregunta simple</TableHead>
                  <TableHead>Dólar MEP</TableHead>
                  <TableHead>Dólar CCL</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className="odd:bg-[#FCF8F1] even:bg-white">
                  <TableCell className="font-medium">
                    ¿Dónde terminan los dólares?
                  </TableCell>
                  <TableCell>En Argentina, en una cuenta local.</TableCell>
                  <TableCell>
                    En el exterior, en una cuenta extranjera.
                  </TableCell>
                </TableRow>
                <TableRow className="odd:bg-[#FCF8F1] even:bg-white">
                  <TableCell className="font-medium">
                    ¿Qué operación hacés?
                  </TableCell>
                  <TableCell>
                    Comprás un activo en pesos y lo vendés en dólares en el
                    mercado local.
                  </TableCell>
                  <TableCell>
                    Comprás un activo en pesos, lo pasás al exterior y lo vendés
                    afuera.
                  </TableCell>
                </TableRow>
                <TableRow className="odd:bg-[#FCF8F1] even:bg-white">
                  <TableCell className="font-medium">¿Qué necesitás?</TableCell>
                  <TableCell>
                    Cuenta local en dólares y una cuenta comitente (de
                    inversión).
                  </TableCell>
                  <TableCell>
                    Cuenta local, cuenta comitente y cuenta en el exterior.
                  </TableCell>
                </TableRow>
                <TableRow className="odd:bg-[#FCF8F1] even:bg-white">
                  <TableCell className="font-medium">
                    ¿Para qué suele usarse?
                  </TableCell>
                  <TableCell>
                    Para dolarizar ahorros dentro del sistema local.
                  </TableCell>
                  <TableCell>
                    Para tener dólares disponibles fuera del país.
                  </TableCell>
                </TableRow>
                <TableRow className="odd:bg-[#FCF8F1] even:bg-white">
                  <TableCell className="font-medium">¿Qué mirar?</TableCell>
                  <TableCell>
                    Precio, comisiones, liquidez y plazo de acreditación.
                  </TableCell>
                  <TableCell>
                    Todo lo anterior, más la operatoria internacional.
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>

          <h2 className="font-serif text-2xl font-semibold text-[#14332A] mt-14 mb-6">
            ¿Qué es el dólar contado con liquidación o CCL?
          </h2>
          <p>
            El <strong>CCL</strong> es una operación para convertir pesos en
            dólares que quedan depositados <strong>afuera del país</strong>. La
            idea no es “comprar dólares” directamente, sino usar un{" "}
            <strong>activo</strong> que cotiza en Argentina y también puede
            venderse en el exterior.
          </p>
          <p>
            Un ejemplo típico es <strong>comprar un bono</strong> con pesos en
            Argentina y luego <strong>vender ese bono en el exterior</strong>{" "}
            contra dólares. El resultado final es simple: arrancaste con pesos y
            terminaste con dólares acreditados en una{" "}
            <strong>cuenta extranjera</strong>.
          </p>
          {/* Esquema simplificado - imagen vertical placeholder*/}
          <div className="w-full flex justify-center mb-10">
            <Image
              src="/ccl_esquema.png"
              alt="CCL Esquema"
              width={480}
              height={530}
              className="rounded mt-4"
            />
          </div>
          <blockquote className="border-l-4 border-[#C9973F] pl-4 text-[#3B3B3B] font-serif text-lg mb-10 bg-[#F7F4ED] p-4 rounded">
            <strong>La clave:</strong> El CCL es el camino financiero para
            transformar pesos locales en dólares disponibles afuera.
          </blockquote>

          <h2 className="font-serif text-2xl font-semibold text-[#14332A] mt-14 mb-6">
            ¿Qué es el dólar MEP?
          </h2>
          <p>
            El <strong>dólar MEP</strong>, también conocido como{" "}
            <strong>dólar Bolsa</strong>, es parecido en la mecánica, pero
            cambia el destino final. Comprás un activo con pesos y lo vendés en
            dólares dentro del mercado local. Esos{" "}
            <strong>dólares quedan en Argentina</strong>, normalmente en una
            cuenta bancaria o comitente local.
          </p>
          <p>
            Por eso el MEP suele ser la opción más conocida para el{" "}
            <strong>ahorrista</strong> que quiere{" "}
            <strong>dolarizar pesos</strong>, pero{" "}
            <strong>no necesita mandar la plata al exterior</strong>.
          </p>
          {/* Esquema simplificado - imagen vertical placeholder */}
          <div className="w-full flex justify-center mb-10">
            <Image
              src="/mep_esquema.png"
              alt="MEP Esquema"
              width={480}
              height={530}
              className="rounded mt-4"
            />
          </div>

          <h2 className="font-serif text-2xl font-semibold text-[#14332A] mt-14 mb-6">
            ¿Por qué pueden tener precios distintos?
          </h2>
          <p>
            Porque no están midiendo exactamente la misma necesidad. El{" "}
            <strong>MEP</strong> refleja la demanda de{" "}
            <strong>dólares dentro del mercado local</strong>. El{" "}
            <strong>CCL</strong> refleja la demanda de{" "}
            <strong>dólares afuera</strong>. Si muchos quieren dolarizarse
            localmente, puede moverse el <strong>MEP</strong>. Si muchos quieren
            sacar o posicionar dólares en el exterior, puede moverse más el{" "}
            <strong>CCL</strong>.
          </p>
          <p>
            Ahí aparece una palabra que solemos escuchar que es la{" "}
            <strong>brecha</strong>. Si el{" "}
            <strong>CCL se despega del MEP</strong>, el mercado está diciendo
            que los dólares “afuera” valen más que los dólares “locales”. Eso
            puede ser ruido, cobertura o <strong>señal de tensión</strong>.
          </p>

          <h2 className="font-serif text-2xl font-semibold text-[#14332A] mt-14 mb-6">
            Errores comunes al mirar MEP y CCL
          </h2>
          <div className="my-8 rounded-lg border border-[#E5E2DB] shadow-sm bg-white overflow-hidden">
            <Table className="w-full">
              <TableHeader>
                <TableRow className="border-b-2 border-[#C9973F] bg-[#F4E9D8]">
                  <TableHead>Error común</TableHead>
                  <TableHead>Lectura correcta</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className="odd:bg-[#FCF8F1] even:bg-white">
                  <TableCell className="font-medium">“Son lo mismo”</TableCell>
                  <TableCell>
                    No. Los dos usan mercado, pero el destino de los dólares
                    cambia.
                  </TableCell>
                </TableRow>
                <TableRow className="odd:bg-[#FCF8F1] even:bg-white">
                  <TableCell className="font-medium">
                    “El bono es lo importante”
                  </TableCell>
                  <TableCell>
                    El bono suele ser el vehiculo. Lo importante es el
                    resultado: dólares locales o dólares afuera.
                  </TableCell>
                </TableRow>
                <TableRow className="odd:bg-[#FCF8F1] even:bg-white">
                  <TableCell className="font-medium">
                    “El precio es fijo”
                  </TableCell>
                  <TableCell>
                    No. Cambia según oferta, demanda, liquidez, comisiones y
                    condiciones del mercado.
                  </TableCell>
                </TableRow>
                <TableRow className="odd:bg-[#FCF8F1] even:bg-white">
                  <TableCell className="font-medium">
                    “Si sube el CCL, siempre es crisis”
                  </TableCell>
                  <TableCell>
                    No necesariamente. Pero sí puede mostrar más demanda por
                    dólares en el exterior.
                  </TableCell>
                </TableRow>
                <TableRow className="odd:bg-[#FCF8F1] even:bg-white">
                  <TableCell className="font-medium">
                    “MEP es solo para expertos”
                  </TableCell>
                  <TableCell>
                    No. La lógica es simple, aunque la operatoria requiere
                    entender pasos y costos.
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>

          <h2 className="font-serif text-2xl font-semibold text-[#14332A] mt-14 mb-6">
            La conclusión Ombú
          </h2>
          <p>
            El dólar <strong>MEP</strong> y el <strong>CCL</strong> son dos
            caminos financieros distintos para llegar al dólar. Uno deja los
            dólares en <strong>Argentina</strong>. El otro los lleva{" "}
            <strong>afuera</strong>.<br />
            La diferencia <strong>parece chica</strong>, pero en la práctica es{" "}
            <strong>enorme</strong>. Te dice{" "}
            <strong>qué quiere hacer el mercado</strong> con sus pesos: quedarse
            cubierto dentro del sistema local o buscar dólares fuera del país.
          </p>
        </div>
        <div className="mt-8 text-sm text-[#6B6B6B]">
          <em>
            *Contenido educativo. No constituye asesoramiento financiero ni
            recomendación de inversión.*
          </em>
        </div>
      </div>
      <Footer />
    </main>
  );
}

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

export default function CedearsNuevosArticle() {
  return (
    <main className="min-h-screen bg-[#FAF8F3]">
      <Header links={[]} />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="font-serif text-4xl sm:text-5xl font-semibold text-[#14332A] mb-4">
          Se listan nuevos CEDEARS en el Mercado Argentino
        </h1>
        <div className="h-[2px] w-24 bg-[#C9973F] mb-12" />

        <div className="relative w-full aspect-video mb-12">
          <Image
            src="/NUEVOCEDEARS_HZ.png"
            alt="Nuevos CEDEARs"
            fill
            className="rounded-lg"
          />
        </div>

        <div className="prose prose-lg max-w-none font-sans text-[#0F0F0F] leading-relaxed">
          <h2 className="font-serif text-2xl font-semibold text-[#14332A] mt-12 mb-4">
            El mercado suma alternativas
          </h2>
          <p className="mb-6">
            El mercado argentino suma 13 nuevos CEDEARs de acciones, emitidos
            por Banco Comafi y disponibles para su negociación en BYMA. Esto
            amplía el menú para inversores locales que buscan exposición a
            empresas del exterior, sin salir del mercado argentino.
          </p>

          <h2 className="font-serif text-2xl font-semibold text-[#14332A] mt-12 mb-4">
            ¿Qué es un CEDEAR?
          </h2>
          <p className="mb-6">
            Un Certificado de Depósito Argentino (el “CEDEAR”) es un instrumento
            emitido en Argentina que representa activos del exterior no listados
            directamente en el país. En términos prácticos, permite invertir
            desde el mercado local en compañías extranjeras, operando con
            instrumentos argentinos vinculados a esas acciones.
          </p>
          <p className="mb-6">
            Esto no significa que sea una inversión sin riesgo. El precio de un
            CEDEAR depende principalmente de cómo se mueve la acción en el
            exterior y cómo evoluciona el tipo de cambio implícito en Argentina.
            Por eso puede servir para diversificar, pero siempre conviene
            entender qué empresa hay detrás.
          </p>

          <h2 className="font-serif text-2xl font-semibold text-[#14332A] mt-12 mb-4">
            Las nuevas empresas que ingresan
          </h2>

          <div className="my-8 rounded-lg border border-[#E5E2DB] shadow-sm bg-white">
            <Table className="w-full">
              <TableHeader>
                <TableRow className="border-b-2 border-[#C9973F] bg-[#F4E9D8]">
                  <TableHead className="w-[130px]">Empresa</TableHead>
                  <TableHead className="w-[70px]">Ticker</TableHead>
                  <TableHead className="w-[140px]">Sector/Tema</TableHead>
                  <TableHead>Descripción</TableHead>
                  <TableHead className="w-[90px]">Origen</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className="odd:bg-[#FCF8F1] even:bg-white">
                  <TableCell>CrowdStrike</TableCell>
                  <TableCell>CRWD</TableCell>
                  <TableCell>Ciberseguridad</TableCell>
                  <TableCell>
                    Plataforma cloud-native para proteger endpoints, cargas
                    cloud, identidades y datos.
                  </TableCell>
                  <TableCell>USA</TableCell>
                </TableRow>
                <TableRow className="odd:bg-[#FCF8F1] even:bg-white">
                  <TableCell>Arista Networks</TableCell>
                  <TableCell>ANET</TableCell>
                  <TableCell>Data centers e IA</TableCell>
                  <TableCell>
                    Infraestructura de redes para grandes centros de datos,
                    cloud, campus y entornos de IA.
                  </TableCell>
                  <TableCell>USA</TableCell>
                </TableRow>
                <TableRow className="odd:bg-[#FCF8F1] even:bg-white">
                  <TableCell>Nebius Group</TableCell>
                  <TableCell>NBIS</TableCell>
                  <TableCell>IA / cloud</TableCell>
                  <TableCell>Infraestructura cloud para IA.</TableCell>
                  <TableCell>Países Bajos</TableCell>
                </TableRow>
                <TableRow className="odd:bg-[#FCF8F1] even:bg-white">
                  <TableCell>Hims & Hers Health</TableCell>
                  <TableCell>HIMS</TableCell>
                  <TableCell>Salud digital</TableCell>
                  <TableCell>
                    Plataforma de salud con foco en telemedicina y tratamientos
                    personalizados.
                  </TableCell>
                  <TableCell>USA</TableCell>
                </TableRow>
                <TableRow className="odd:bg-[#FCF8F1] even:bg-white">
                  <TableCell>ConocoPhillips</TableCell>
                  <TableCell>COP</TableCell>
                  <TableCell>Energía</TableCell>
                  <TableCell>
                    Exploración y producción de petróleo y gas.
                  </TableCell>
                  <TableCell>USA</TableCell>
                </TableRow>
                <TableRow className="odd:bg-[#FCF8F1] even:bg-white">
                  <TableCell>Fiserv</TableCell>
                  <TableCell>FISV</TableCell>
                  <TableCell>Fintech / pagos</TableCell>
                  <TableCell>
                    Soluciones de pagos, banking digital, e-commerce.
                  </TableCell>
                  <TableCell>USA</TableCell>
                </TableRow>
                <TableRow className="odd:bg-[#FCF8F1] even:bg-white">
                  <TableCell>MP Materials</TableCell>
                  <TableCell>MP</TableCell>
                  <TableCell>Tierras raras</TableCell>
                  <TableCell>
                    Producción de materiales de tierras raras, minería y
                    procesamiento.
                  </TableCell>
                  <TableCell>USA</TableCell>
                </TableRow>
                <TableRow className="odd:bg-[#FCF8F1] even:bg-white">
                  <TableCell>Realty Income</TableCell>
                  <TableCell>O</TableCell>
                  <TableCell>Real estate / REIT</TableCell>
                  <TableCell>
                    Inversiones en inmuebles comerciales y dividendos mensuales.
                  </TableCell>
                  <TableCell>USA</TableCell>
                </TableRow>
                <TableRow className="odd:bg-[#FCF8F1] even:bg-white">
                  <TableCell>Golar LNG</TableCell>
                  <TableCell>GLNG</TableCell>
                  <TableCell>Gas natural licuado</TableCell>
                  <TableCell>
                    Infraestructura marítima para transformar gas natural en
                    GNL.
                  </TableCell>
                  <TableCell>Internacional</TableCell>
                </TableRow>
                <TableRow className="odd:bg-[#FCF8F1] even:bg-white">
                  <TableCell>SanDisk</TableCell>
                  <TableCell>SNDK</TableCell>
                  <TableCell>Semiconductores/almacenamiento</TableCell>
                  <TableCell>Unidades SSD y almacenamiento flash.</TableCell>
                  <TableCell>USA</TableCell>
                </TableRow>
                <TableRow className="odd:bg-[#FCF8F1] even:bg-white">
                  <TableCell>Ondas Holdings</TableCell>
                  <TableCell>ONDS</TableCell>
                  <TableCell>Drones / redes privadas</TableCell>
                  <TableCell>
                    Sistemas autónomos, drones y soluciones inalámbricas.
                  </TableCell>
                  <TableCell>USA</TableCell>
                </TableRow>
                <TableRow className="odd:bg-[#FCF8F1] even:bg-white">
                  <TableCell>NextEra Energy</TableCell>
                  <TableCell>NEE</TableCell>
                  <TableCell>Energía / utilities</TableCell>
                  <TableCell>
                    Energía e infraestructura eléctrica en Norteamérica.
                  </TableCell>
                  <TableCell>USA</TableCell>
                </TableRow>
                <TableRow className="odd:bg-[#FCF8F1] even:bg-white">
                  <TableCell>Cameco</TableCell>
                  <TableCell>CCO</TableCell>
                  <TableCell>Uranio / energía nuclear</TableCell>
                  <TableCell>
                    Uno de los mayores proveedores globales de uranio.
                  </TableCell>
                  <TableCell>Canadá</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>

          <h2 className="font-serif text-2xl font-semibold text-[#14332A] mt-12 mb-4">
            ¿Qué mirar antes de invertir?
          </h2>
          <p className="mb-6">
            La llegada de estos CEDEARs permite acceder a sectores muy
            distintos: ciberseguridad, inteligencia artificial, energía, uranio,
            pagos digitales, salud digital, real estate y almacenamiento de
            datos. Para un inversor inicial o intermedio, esto puede ser útil
            porque amplía las alternativas más allá de los CEDEARs tradicionales
            como Apple, Microsoft, Coca-Cola o Mercado Libre.
          </p>

          <h2 className="font-serif text-2xl font-semibold text-[#14332A] mt-12 mb-4">
            Conclusión
          </h2>
          <p className="mb-6">
            La incorporación de estos 13 CEDEARs es positiva para los inversores
            porque amplía las opciones para diversificar desde el mercado local.
            Para perfiles iniciales, permite acceder de forma simple a empresas
            globales. Para perfiles agresivos, abre la puerta a sectores más
            específicos, como IA, ciberseguridad, energía nuclear, tierras raras
            o GNL.
          </p>
          <p className="mb-6">
            La clave es no comprar lo "nuevo" solo por serlo. Cada empresa tiene
            riesgos distintos: algunas más defensivas, otras volátiles, y otras
            muy ligadas a tendencias. El beneficio: más herramientas. La
            decisión sigue siendo tuya, entender qué se compra, cuánto riesgo se
            asume y qué lugar ocupa en la cartera.
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}

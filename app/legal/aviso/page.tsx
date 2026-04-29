import { Header, Footer } from "@/components/ombu";

export default function AvisoLegalPage() {
  return (
    <main className="min-h-screen bg-[#FAF8F3]">
      <Header links={[]} />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="font-serif text-4xl sm:text-5xl font-semibold text-[#14332A] mb-4">
          Aviso Legal
        </h1>
        <div className="h-[2px] w-24 bg-[#C9973F] mb-12" />

        <div className="prose prose-lg max-w-none font-sans text-[#0F0F0F] leading-relaxed">
          <h2 className="font-serif text-2xl font-semibold text-[#14332A] mt-12 mb-4">
            Propiedad intelectual e industrial
          </h2>
          <p className="text-[#0F0F0F] mb-6">
            El Sitio Web incluye contenidos, textos, documentos, material
            publicitario, dibujos, material técnico de productos o de cualquier
            otro orden, bases de datos, sonidos, programas de software,
            distintivos corporativos, signos distintivos, marcas, diseños
            gráficos, combinaciones de elementos, logotipos e imágenes, que
            están protegidos por derechos de propiedad intelectual o industrial
            de los que www.ombufinanzas.com es titular o legítima licenciataria.
            En este sentido, queda terminantemente prohibida la reproducción
            total o parcial, comunicación pública, modificación, transformación,
            copia, distribución, o cualquier otra forma de explotación y
            manipulación del Sitio Web, de sus dispositivos técnicos,
            contenidos, aplicaciones, códigos fuente, diseño, selección y forma
            de presentación de los materiales y, en general, respecto de la
            información contenida en el Sitio Web. Queda, asimismo, prohibido
            descomponer, realizar ingeniería inversiva o, en general, transmitir
            de cualquier modo o realizar obras derivadas de los programas de
            ordenador necesarios para el funcionamiento y acceso del Sitio Web y
            de los servicios aquí contenidos, así como realizar, respecto de los
            mismos cualquier acto de explotación.
          </p>

          <h2 className="font-serif text-2xl font-semibold text-[#14332A] mt-12 mb-4">
            Servicios prestados por terceros
          </h2>
          <p className="text-[#0F0F0F] mb-6">
            El Sitio Web no se responsabiliza por el uso ni por la idoneidad de
            los servicios prestados por terceros (herramientas, accesos
            digitales, estudios de mercado, entre otros siendo la enunciación
            meramente ejemplificativa y no limitativa), ni por la suspensión de
            dichos servicios, por lo que se excluye de cualquier responsabilidad
            por los daños y perjuicios de toda naturaleza que puedan deberse a
            los mismos.
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}

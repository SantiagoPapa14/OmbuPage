import { Header, Footer } from "@/components/ombu";

export default function PrivacidadPage() {
  return (
    <main className="min-h-screen bg-[#FAF8F3]">
      <Header links={[]} />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="font-serif text-4xl sm:text-5xl font-semibold text-[#14332A] mb-4">
          Política de Privacidad
        </h1>
        <div className="h-[2px] w-24 bg-[#C9973F] mb-12" />

        <div className="prose prose-lg max-w-none font-sans text-[#0F0F0F] leading-relaxed">
          <h2 className="font-serif text-2xl font-semibold text-[#14332A] mt-12 mb-4">
            Protección y conservación de los datos personales
          </h2>
          <p className="text-[#0F0F0F] mb-6">
            La información y/o datos que voluntariamente faciliten los usuarios
            a través del Sitio Web o a través de los servicios a los que
            accedan, o de las promociones en las que participen, podrán ser
            incorporados a la base de datos titularidad de www.ombufinanzas.com
            con la finalidad de realizar la gestión y el mantenimiento de las
            relaciones con tales usuarios., es decir poder enviarles información
            sobre los productos de www.ombufinanzas.com, boletines de noticias,
            publicidad, así como nuevas ofertas, promociones o concursos o para
            la realización de estudios de mercado o estadísticos. En
            cumplimiento de lo dispuesto en la Ley de Protección de Datos
            Personales ("LPDP"), los usuarios podrán ejercitar sus derechos de
            acceso, rectificación, actualización y supresión, contactándose con
            www.ombufinanzas.com, por correo electrónico
            (contacto@ombufinanzas.com), indicando en el asunto "LPDP". A tal
            fin, es necesario especificar el nombre y apellido, dirección y
            teléfono, o en su defecto, el nombre de usuario utilizado en el
            portal. Ningún tercero ajeno a www.ombufinanzas.com, salvo los
            supuestos amparados por la legislación vigente, tendrá acceso a la
            información y/o datos personales de los usuarios del Sitio Web. En
            ningún caso www.ombufinanzas.com cederá a terceros datos personales
            de menores que accedan al portal. Sus datos se conservarán mientras
            exista un interés mutuo en mantener el registro, o mientras usted no
            ejerza su derecho de supresión, oposición o limitación del
            tratamiento. Sólo conservamos sus datos personales durante el tiempo
            que los necesitemos para el propósito para el que los tratamos, para
            satisfacer sus necesidades, para la ejecución de la relación
            contractual establecida entre usted y la sociedad o para cumplir con
            nuestras obligaciones legales. Una vez finalizada su relación con
            www.ombufinanzas.com, es posible que conservemos algunos de sus
            datos personales mientras sea necesario para cumplir con nuestras
            obligaciones legales o reglamentarias, derivadas de la relación
            contractual establecida entre el usuario y la sociedad, así como
            para atender eventuales responsabilidades nacidas de su tratamiento.
          </p>

          <h2 className="font-serif text-2xl font-semibold text-[#14332A] mt-12 mb-4">
            Cookies
          </h2>
          <p className="text-[#0F0F0F] mb-6">
            Es intención de www.ombufinanzas.com ofrecer un servicio
            personalizado y un trato preferencial. Para poder utilizar todos los
            servicios que brinda www.ombufinanzas.com será necesario tener
            habilitadas las cookies. En ningún caso estos elementos servirán
            para identificar a una persona concreta, ya que su uso será
            meramente técnico, para ofrecer un mejor servicio a los usuarios y
            permitir la realización de contenidos avanzados. Estas cookies no
            servirán para la realización de estudios comerciales ni darán
            información acerca de los hábitos de navegación de los usuarios. El
            usuario podrá deshabilitar el uso de cookies a través de las
            opciones de su navegador, si bien www.ombufinanzas.com no podrá
            garantizar en este caso el correcto funcionamiento de todos los
            servicios ofrecidos en el Sitio Web.
          </p>

          <h2 className="font-serif text-2xl font-semibold text-[#14332A] mt-12 mb-4">
            Confidencialidad y seguridad en el tratamiento de los datos
            personales y en las comunicaciones electrónicas
          </h2>
          <p className="text-[#0F0F0F] mb-6">
            El Sitio Web www.ombufinanzas.com se compromete a tratar de forma
            absolutamente confidencial los datos de carácter personal del
            usuario, adoptando las medidas de seguridad de índole técnica y
            organizativas necesarias para garantizar la seguridad de los mismos
            y evitar su alteración, pérdida, tratamiento y/o acceso no
            autorizado. El Sitio Web asegura, dentro de lo posible y conforme al
            estado actual de la tecnología, la confidencialidad e integridad de
            los datos e información que los usuarios faciliten para cumplir con
            las finalidades antes indicadas. Comunicaciones comerciales no
            solicitadas. El Sitio Web no enviará comunicaciones publicitarias ni
            promocionales a través del e-mail, u otro medio de comunicación
            electrónico equivalente, si previamente no hubieran sido solicitadas
            o expresamente autorizadas por los destinatarios de las mismas. Lo
            dispuesto en el apartado anterior no será de aplicación cuando
            exista una relación contractual previa y se hubieran obtenido los
            datos de contacto del destinatario con el consentimiento expreso del
            mismo.
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}

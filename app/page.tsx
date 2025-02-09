import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
import { FaFacebook, FaInstagram } from "react-icons/fa"; // Importando iconos de react-icons
import Image from "next/image";

import { title, subtitle } from "../components/primitives";
import { siteConfig } from "../config/site";

import "../styles/AnimatedText.css"; // Asegúrate de importar el archivo CSS
import FloatingWhatsAppButton from "@/components/FloatingWhatsAppButton";

export default function Home() {
  return (
    <div className="min-h-screen px-4 py-8 md:py-10">
      {/* Sección Principal */}
        <section className="flex flex-col items-start justify-center">
        <div className="max-w-4xl text-left">
          <span className={`${title()} text-6xl md:text-7xl font-bold`}>
            In&nbsp;
          </span>
          <span
            className={`${title({ color: 'blue' })} text-6xl md:text-7xl font-bold`}
          >
            Code
            <span className="inline-block text-blue-500 text-6xl animate-bounce transform hover:scale-110 transition-all">
              🚀
            </span>
            &nbsp;
          </span>
          <br />

          <span className={`${title()} text-4xl md:text-5xl font-semibold`}>
            Desarrollo Web a Medida
          </span>
          <div className={`${subtitle({ class: 'mt-4' })} text-xl md:text-2xl`}>
            Somos expertos en diseño web, dedicados a crear sitios atractivos y
            modernos que capturan la esencia de cada negocio. Con años de
            experiencia en el sector, ofrecemos soluciones personalizadas que
            combinan funcionalidad y estética, garantizando una excelente
            experiencia de usuario.
          </div>
        </div>

        {/* Botones de Acción */}
        <div className="mt-8 flex gap-4 justify-start w-full">
          <Link
            isExternal
            className={buttonStyles({
              color: 'primary',
              radius: 'full',
              variant: 'shadow',
            })}
            href={siteConfig.links.docs}
          >
            Cotizar Ahora
          </Link>
        </div>
      </section>


      {/* Sección Redes Sociales */}
      <section className="flex flex-col items-start justify-center mt-16">
        <div className={`${subtitle({ class: "mt-4" })} text-xl md:text-2xl`}>
          Redes Sociales
        </div>
        <div className="mt-8 flex flex-wrap gap-6 justify-start w-full">
          <Link
            isExternal
            className="flex items-center gap-2 p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-all"
            href="https://www.facebook.com/share/15LEYde9e2/?mibextid=wwXIfr"
          >
            <FaFacebook size={24} />
            Facebook
          </Link>
          <Link
            isExternal
            className="flex items-center gap-2 p-2 rounded-full bg-blue-600 text-white hover:bg-pink-700 transition-all"
            href="https://www.instagram.com/incode22/"
          >
            <FaInstagram size={24} />
            Instagram
          </Link>
          <Link
            isExternal
            className="flex items-center gap-2 p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-all"
            href="https://www.tiktok.com/@incode22?_t=ZS-8sLtZrmPPWB&_r=1"
          >
            <FaInstagram size={20} />
            TikTok
          </Link>
        </div>
      </section>

      {/* Sección de Servicios */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-semibold text-center mb-12">
            Nuestros Servicios
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Carta - Sitio Institucional */}
            <div className="border-l-4 border-blue-500 pl-6 py-6 space-y-6">
              <div className="flex items-center gap-4">
                <Image
                  alt="Sitio Institucional"
                  height={48}
                  src="/Logo Incode.svg"
                  width={48}
                />
                <h3 className="text-2xl font-bold">Sitio Institucional</h3>
              </div>
              <p className="text-gray-600">
                Creamos sitios web institucionales que reflejan la identidad y
                valores de su organización. Nos aseguramos de que su sitio
                institucional comunique de manera efectiva su misión, visión y
                servicios, proporcionando una experiencia de usuario óptima.
              </p>
              <div className="text-center">
                <Link
                  className="text-blue-500 hover:text-blue-600 font-semibold"
                  href="#"
                >
                  Ver más
                </Link>
              </div>
            </div>

            {/* Carta - Landing Page */}
            <div className="border-l-4 border-blue-500 pl-6 py-6 space-y-6">
              <div className="flex items-center gap-4">
                <Image
                  alt="Landing Page"
                  height={48}
                  src="/Logo Incode.svg"
                  width={48}
                />
                <h3 className="text-2xl font-bold">Landing Page</h3>
              </div>
              <p className="text-gray-600">
                Desarrollamos páginas de aterrizaje y sitios de una sola página,
                optimizados para conversiones y campañas de marketing.
              </p>
              <div className="text-center">
                <Link
                  className="text-blue-500 hover:text-blue-600 font-semibold"
                  href="#"
                >
                  Ver más
                </Link>
              </div>
            </div>

            {/* Carta - Tienda Online */}
            <div className="border-l-4 border-blue-500 pl-6 py-6 space-y-6">
              <div className="flex items-center gap-4">
                <Image
                  alt="Tienda Online"
                  height={48}
                  src="/Logo Incode.svg"
                  width={48}
                />
                <h3 className="text-2xl font-bold">Tienda Online</h3>
              </div>
              <p className="text-gray-600">
                Soluciones completas para tiendas online y plataformas de
                ecommerce, con un enfoque en la experiencia de compra y
                seguridad.
              </p>
              <div className="text-center">
                <Link
                  className="text-blue-500 hover:text-blue-600 font-semibold"
                  href="#"
                >
                  Ver más
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección Casos de Éxito */}
      {/* Sección Casos de Éxito */}
      <section className="flex flex-col md:flex-row items-center py-16 px-4">
        {/* Texto a la izquierda */}
        <div className="flex-1 text-left pr-8">
          <h2 className="text-3xl font-bold text-blue-500 mb-4 dark:text-blue-400">
            CASOS DE ÉXITO
          </h2>
          <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
            Porfolio web
          </h3>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
            Entendemos que tu presencia en línea es crucial para el éxito de tu
            negocio. Estamos aquí para ayudarte a mejorar tu sitio web o lanzar
            uno nuevo.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
            <strong className="text-gray-900 dark:text-gray-100">
              Experiencia Comprobada:
            </strong>{' '}
            Nuestro equipo tiene años de experiencia en creación web y
            soluciones personalizadas.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
            <strong className="text-gray-900 dark:text-gray-100">
              Diseño Atractivo:
            </strong>{' '}
            Creamos diseños que mejoran la experiencia de usuario y la
            conversión de visitas.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            <strong className="text-gray-900 dark:text-gray-100">
              Optimización Constante:
            </strong>{' '}
            Nos aseguramos de mantener tu sitio optimizado y actualizado.
          </p>
          <div className="text-center">
            <Link
              className="inline-block bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 transform hover:scale-105 hover:translate-x-2 hover:shadow-lg hover:bg-blue-600"
              href="#"
            >
              Ver portfolio
            </Link>
          </div>
        </div>

        {/* Imagen del mockup a la derecha */}

        <div className="flex-1 mt-8 md:mt-0">
          <Image
            alt="Mockup"
            className="rounded-lg shadow-lg transform transition-all duration-500 ease-in-out hover:scale-105 hover:rotate-3 hover:shadow-2xl"
            height={550}
            src="/npc.png"
            width={450}
          />
        </div>
      </section>

      <section className="flex flex-col md:flex-row items-center py-16 px-4">
        {/* Texto a la izquierda */}
       <div className="flex-1 text-left pr-8">
         <div className="text-center px-4 md:px-8 lg:px-16 py-8 rounded-2xl">
  <h2 className="text-4xl md:text-5xl font-extrabold text-blue-600 dark:text-blue-400 mb-4 tracking-tight">
    Estamos en cada detalle
  </h2>
  
  <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-gray-100 mb-6">
    Nuestros clientes lo dicen
  </h3>

  <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
    Nos complace compartir algunos comentarios de nuestros clientes satisfechos.
    Con nuestra ayuda, muchas empresas han logrado mejorar su presencia en línea 
    y obtener resultados sorprendentes.
  </p>
</div>
</div>

          <br></br>

          {/* Testimonios */}
          <div className="space-y-8">
            <blockquote className="text-base text-gray-700 dark:text-gray-300">
              <p className="italic mb-2">
                “InCode transformó nuestra presencia digital. Gracias a su
                enfoque profesional y su atención al detalle, nuestra página web
                ahora refleja la calidad de nuestros servicios y hemos visto un
                aumento significativo en las consultas de clientes.”
              </p>
              <footer className="font-semibold">
                Carlos Gómez - Bogotá, Colombia
              </footer>
            </blockquote>

            <blockquote className="text-base text-gray-700 dark:text-gray-300">
              <p className="italic mb-2">
                “Trabajar con InCode fue una experiencia increíble. Nos ayudaron
                a diseñar y desarrollar una plataforma a medida que ha mejorado
                nuestra eficiencia operativa. El soporte que nos dieron siempre
                fue rápido y profesional.”
              </p>
              <footer className="font-semibold">
                Ana Martínez - Santiago, Chile
              </footer>
            </blockquote>
          </div>
        </div>

        {/* Imagen a la derecha */}
        <div className="flex-1 mt-8 md:mt-0">
          <div className="flex-1 mt-8 md:mt-0 flex justify-center">
            <Image
              alt="Mockup"
              className="rounded-lg shadow-lg transform transition-all duration-500 ease-in-out hover:scale-105 hover:rotate-3 hover:shadow-2xl"
              height={550}
              src="/npc2.png" // Usa la ruta relativa desde la raíz
              width={450} // Ajusta el tamaño según tus necesidades
            />
          </div>
        </div>
      </section>
      <FloatingWhatsAppButton />
      <div className="flex flex-col items-center space-y-2 p-4">
        <span className="text-4xl font-semibold text-gray-800 animate-pulse">
          Creamos
        </span>
        <span className="text-4xl font-semibold text-blue-600 animate-pulse">
          Tus Ideas
        </span>
      </div>
    </div>
  );
}

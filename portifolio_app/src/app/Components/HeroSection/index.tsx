import Image from "next/image"
import { montserrat_Subrayada } from "@/app/layout"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="w-full px-4 md:px-0 md:w-[80%] mx-auto text-gray-600">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center my-12">

        {/* TEXTO */}
        <div>
          <span className="block text-lg">Oi, meu nome é</span>
          <h1 className="text-3xl md:text-4xl font-bold text-blue-600">
            VINICIUS SOARES
          </h1>

          <p className="mt-6 text-lg text-gray-800">
            Sou um desenvolvedor fullstack, aficionado por programação e tecnologia.
          </p>

          {/* BOTÕES */}
          <div className="flex flex-wrap gap-4 mt-8">
            <a
              href="https://drive.google.com/..."
              className="bg-blue-600 px-6 py-3 rounded-md text-white font-semibold shadow-lg"
            >
              Ver currículo
            </a>

            <Link href="https://github.com/Vinicius-SO">
              <Image src="/github.svg" width={40} height={40} alt="GitHub" />
            </Link>

            <Link href="https://linkedin.com/in/...">
              <Image src="/linkedin.svg" width={40} height={40} alt="LinkedIn" />
            </Link>
          </div>
        </div>

        {/* IMAGEM */}
        <div className="flex justify-center">
          <Image
            src="/Ilustra.svg"
            width={260}
            height={260}
            alt="Ilustração"
            className="max-w-full h-auto"
          />
        </div>

      </div>
    </section>
  )
}

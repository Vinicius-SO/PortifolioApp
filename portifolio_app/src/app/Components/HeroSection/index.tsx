import Image from "next/image"
import { montserrat_Subrayada } from "@/app/layout"
import Link from "next/link"

export function HeroSection(){
  return(
       <main className="w-[80%] mx-auto text-xl text-gray-600">
          <section className="my-10">
            <span className="block text-xl">Oi, meu nome é</span>
            <span className={`${montserrat_Subrayada.variable} font-subrayada text-3xl tracking-tighter text-blue-600`}>Vinicius Soares</span>
          </section>
          <span className="text-2xl text-gray-800 w-80 font-medium">
            Sou um desenvolvedor fullstack, aficionado por programação e tecnologia.
          </span>
          <div className="flex justify-center mt-10">
            <Image
              src="/Ilustra.svg"
              width={181}
              height={191}
              alt="Ilustração"
            />
          </div>
          <section className="w-80 flex justify-between my-16">
            <button className="bg-blue-600 w-44 h-12 rounded-md shadow-lg hover:shadow-none">
              <Link
                className="text-white font-semibold w-full h-full"
                href="https://drive.google.com/file/d/13xssZ71gFjfoBxLVtDsfZm1xFVuoaPKA/view"
              >
                Ver curriculo
              </Link>
            </button>
            <Link
             href="https://github.com/Vinicius-SO"
             className="size-12 shadow-lg hover:shadow-none"
            >
              <Image
                src="/github.svg"
                width={181}
                height={191}
                alt="Logo"
              />
            </Link>
            <Link
             className="size-12 shadow-lg hover:shadow-none"
             href="https://www.linkedin.com/in/viniciuss-so/"
            >
              <Image
                src="/linkedin.svg"
                width={181}
                height={191}
                alt="Logo"
              />
            </Link>
          </section>
          {/* <div className="w-full flex justify-center items-center opacity-15 z-10">
            <Image
                src="/ArrowDown.svg"
                width={42}
                height={42}
                alt="Logo"
              />
          </div> */}
       </main>
   )
}
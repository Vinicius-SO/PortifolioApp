import Image from "next/image"
import { montserrat_Subrayada } from "@/app/layout"
import Link from "next/link"

export function HeroSection(){
  return(
       <main className="w-[80%] mx-auto text-xl text-gray-600">
          <div className="my-10">
            <span className="block text-xl">Oi, meu nome é</span>
            <span className={`${montserrat_Subrayada.variable} font-subrayada text-3xl tracking-tighter text-blue-500`}>Vinicius Soares</span>
          </div>
          <span className="text-2xl text-gray-800 w-80 font-medium">
            Sou um desenvolvedor fullstack, aficionado por programação e tecnologia.
          </span>
          <div className="flex justify-center mt-10">
            <Image
              src="/Ilustra.png"
              width={181}
              height={191}
              alt="Logo"
            />
          </div>
          <section className="mt-16">
            <button className="bg-blue-500 w-44 h-12 rounded-md">
              <Link
                className="text-white font-semibold w-full h-full"
                href="https://drive.google.com/file/d/13xssZ71gFjfoBxLVtDsfZm1xFVuoaPKA/view"
              >
                Ver curriculo
              </Link>
            </button>
          </section>
       </main>
   )
}
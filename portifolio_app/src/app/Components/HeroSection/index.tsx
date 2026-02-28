import Image from "next/image"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative w-full min-h-screen bg-[#104887] text-white flex items-center pb-20">
      <div className="w-full px-4 md:px-0 md:w-[80%] mx-auto z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center my-12">

          <div className="flex flex-col items-start">
            
            <div className="flex flex-wrap items-baseline gap-2 mb-2">
              <span className="text-xl md:text-2xl font-light text-blue-100">Oi, meu nome é</span>
              <h1 className="text-3xl md:text-4xl font-bold text-white tracking-wide">
                VINICIUS SOARES
              </h1>
            </div>

            <p className="mt-4 text-lg md:text-xl text-blue-100 max-w-lg leading-relaxed">
              Sou um desenvolvedor fullstack, aficionado por programação e tecnologia.
            </p>

            {/* BOTÕES */}
            <div className="flex flex-wrap items-center gap-4 mt-8">
              <a
                href="https://drive.google.com/..."
                className="bg-[#4285F4] hover:bg-blue-600 px-6 py-3 rounded-md text-white font-medium shadow-md transition-colors"
              >
                Ver currículo
              </a>

              <Link href="https://github.com/Vinicius-SO" className="bg-white rounded-md p-1.5 hover:bg-gray-200 transition-colors">
                <Image src="/github.svg" width={32} height={32} alt="GitHub" />
              </Link>

              <Link href="https://linkedin.com/in/..." className="bg-white rounded-md p-1.5 hover:bg-gray-200 transition-colors">
                <Image src="/linkedin.svg" width={32} height={32} alt="LinkedIn" />
              </Link>
            </div>


          </div>

          <div className="flex justify-center">
            <Image
              src="/Ilustra.svg"
              width={260}
              height={260}
              alt="Ilustração"
              className="max-w-full h-auto drop-shadow-lg"
            />
          </div>

        </div>
      </div>

      {/* 👇 SETA CENTRALIZADA NO FUNDO 👇 */}
      <div className="absolute bottom-16 md:bottom-24 left-1/2 transform -translate-x-1/2 z-20 animate-bounce cursor-pointer">
        <svg className="w-6 h-6 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>

      {/* 👇 DIVISOR EM CURVA (Wave INVERTIDA) NO RODAPÉ 👇 */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg 
          className="relative block w-full h-[60px] md:h-[120px]" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
        >
          {/* Path corrigido para fazer a curva afundar no meio em vez de subir */}
          <path 
            d="M0,0 Q600,120 1200,0 L1200,120 L0,120 Z" 
            fill="#ffffff" 
          />
        </svg>
      </div>
    </section>
  )
}
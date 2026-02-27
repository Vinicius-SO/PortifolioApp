import Image from "next/image"
import { importAll } from "@/lib/importAll";

interface SectionTitleProps {
  icon: 'Tecs.svg' | 'Project.svg' | 'AboutMe.svg' 
  title: string
}


export function SectionTitle ({icon,title}: SectionTitleProps){

  const images = importAll(require.context('/public/titleIcons', false, /\.(png|jpe?g|svg)$/));



  return(
    <section className="flex items-center">
      <Image
        src={images[icon].default}
        alt=""
        width={84}
        height={84}
        className="size-12 lg:size-20 "
      />

      <div className="border-b border-blue-400 ml-3">
        <h2 className="text-2xl lg:text-5xl align-center">
          <span className={`font-electrolize text-5xl lg:text-8xl leading-none inline-block mr-[-.25rem] font-normal`}>{title.split('')[0]}</span>
          <span className="font-semibold">
            {
              title.split('').splice(1)
            }
          </span>
        </h2>
      </div>
    </section>
   )
}
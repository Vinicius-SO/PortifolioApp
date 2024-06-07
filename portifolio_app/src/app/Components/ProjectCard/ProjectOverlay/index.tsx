import { serif } from "@/app/layout"
import { CardButton } from "../CardButton"

interface ProjectOverlayProps{
  title: string
  description: string
}


export function ProjectOverlay({title, description}: ProjectOverlayProps){
  return(
    <div className="absolute my-rotate-y-180 backface-hidden  bottom-0 size-full top- bg-blue-300 rounded-2xl z-30  transition duration-500">
      <div className=" w-full h-52 bg-white rounded-2xl z-20 p-5 group-hover:translate-y-0">
          <h2 className={`text-3xl font-medium text-gray-800 ${serif.variable} font-serif mb-4`}>{title}</h2>
          <span className="text-xs leading-none font-medium text-gray-500">{description}</span>
      </div>
      <div className=" flex justify-center items-center gap-4 py-9">
        <CardButton
          name="Page"
          imageURL="./page.svg"
        />
        <CardButton
          name="Online"
          imageURL="./click.svg"
        />
      </div>
    </div>
   )
}

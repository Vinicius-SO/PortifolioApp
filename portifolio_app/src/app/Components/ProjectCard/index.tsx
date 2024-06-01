import Image from "next/image"
import { ProjectOverlay } from "./ProjectOverlay"

interface ProjectCardProps {
  id:string
  title: string
  description: string
  img: string
  projectLink: string
}

const title:string = "Todo App"
const description: string = "Este é um app de organização das suas tarefas diarias por meio de uma lista da afazeres."

export function ProjectCard(){
  return(
      <div className="group perspective transition-all duration-500 w-64">
        <div className="relative w-64 h-80 flex items-end rounded-2xl bg-cover bg-center preserve-3d group-hover:my-rotate-y-180 duration-1000 group-hover:bg-transparent" style={{ backgroundImage: `url('/rocketTodo.png')`}}>
          <div className="absolute backface-hidden  w-full h-20 z-10 flex items-center px-6 rounded-2xl bg-gradient-to-t from-black/80 via-black/30 to-black/0 font-semibold text-2xl text-white ">
            {title}
          </div>
        <ProjectOverlay title={title} description={description} />
        </div>
      </div>
   )
}
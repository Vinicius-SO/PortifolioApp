import Link from "next/link"
import { CardButton } from "../CardButton"

interface ProjectOverlayProps {
  id: string
  title: string
  description: string
}

export function ProjectOverlay({ id, title, description }: ProjectOverlayProps) {
  return (
    <div
      className="
        absolute
        inset-0
        my-rotate-y-180
        backface-hidden
        w-full
        h-full
        rounded-2xl
        bg-gradient-to-br from-black/90 via-blue-950/90 to-indigo-950/90
        backdrop-blur-md
        flex
        flex-col
        justify-between
        p-6
        transition-all
        duration-700
        ease-[cubic-bezier(.4,0,.2,1)]
      "
    >
      <div>
        <h2 className="text-xl font-bold text-white tracking-tight mb-2">
          {title}
        </h2>

        <p className="text-sm text-gray-300 text-white leading-relaxed mb-4 line-clamp-6">
          {description}
        </p>
      </div>

      {/* 👇 Correção no container do botão */}
      <div className="flex mt-auto w-full">
        {/* Adicionado flex e justify-center para centralizar o CardButton */}
        <Link href={`/project/${id}`} className="w-full flex justify-center">
          <CardButton name="Ver Detalhes" imageURL="/click.svg" />
        </Link>
      </div>
    </div>
  )
}
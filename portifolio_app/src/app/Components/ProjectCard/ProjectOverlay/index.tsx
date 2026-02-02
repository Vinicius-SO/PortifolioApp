import { CardButton } from "../CardButton"

interface ProjectOverlayProps {
  title: string
  description: string
}

export function ProjectOverlay({ title, description }: ProjectOverlayProps) {
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
      <h2 className="text-xl font-semibold text-white tracking-tight mb-2">
        {title}
      </h2>

      <p className="text-xs text-gray-300 leading-relaxed mb-4 text-white">
        {description}
      </p>

      <div className="flex gap-3">
        <CardButton name="Demo" imageURL="/click.svg" />
        <CardButton name="Código" imageURL="/github.svg" />
      </div>
    </div>
  )
}
import { ProjectOverlay } from "./ProjectOverlay"

interface ProjectCardProps {
  title: string
  description: string
  img: string
}

export function ProjectCard({
  title,
  description,
  img,
}: ProjectCardProps) {
  return (
    <div className="group w-64 h-80 perspective">
      <div
        className="
          relative
          w-full
          h-full
          preserve-3d
          transition-transform
          duration-700
          ease-out
          group-hover:my-rotate-y-180
        "
      >
        {/* FRONT */}
        <div
          className="
            absolute
            inset-0
            w-full
            h-full
            backface-hidden
            rounded-2xl
            bg-cover
            bg-center
          "
          style={{ backgroundImage: `url('${img}')` }}
        >
          <div
            className="
              absolute
              bottom-0
              w-full
              h-20
              flex
              items-center
              px-6
              rounded-b-2xl
              bg-gradient-to-t
              from-black/80
              via-black/40
              to-black/0
              font-semibold
              text-2xl
              text-white
            "
          >
            {title}
          </div>
        </div>

        {/* BACK */}
        <ProjectOverlay title={title} description={description} />
      </div>
    </div>
  )
}
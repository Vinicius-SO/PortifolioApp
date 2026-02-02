import Image from "next/image"

interface TechItemProps {
  name: string
  icon: string
  category: string
}

export function TechItem({ name, icon, category }: TechItemProps) {
  return (
    <div className="group relative flex justify-center">
      {/* Glow */}
      <div
        className="
          absolute -inset-3
          rounded-xl
          bg-blue-500/20
          blur-xl
          opacity-0
          group-hover:opacity-100
          transition-opacity
          duration-500
          pointer-events-none
        "
      />

      {/* Card */}
      <div
        className="
          relative z-10
          w-16 h-16
          flex items-center justify-center
          rounded-xl
          bg-black/40
          border border-white/10
          transition-transform duration-300
          group-hover:scale-105
        "
      >
        <Image
          src={icon}
          alt={name}
          width={32}
          height={32}
          className="opacity-70 group-hover:opacity-100 transition-opacity"
        />
      </div>

      {/* Tooltip */}
      <div
        className="
          absolute -bottom-10
          text-xs text-gray-200
          bg-black/80
          px-3 py-1 rounded-md
          opacity-0 translate-y-2
          group-hover:opacity-100 group-hover:translate-y-0
          transition-all duration-300
          pointer-events-none
          whitespace-nowrap
        "
      >
        {name} · {category}
      </div>
    </div>
  )
}

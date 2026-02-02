import Image from "next/image";
import { Tech } from "@/data/techs";

interface TechCardProps {
  tech: Tech;
  index: number;
  totalDuration: number;
}

export function TechCard({ tech, index, totalDuration }: TechCardProps) {
  return (
    <div
      className="
        relative
        flex items-center justify-center
        size-20 sm:size-24
        rounded-xl
        bg-zinc-900
        transition-transform duration-2000
        hover:scale-105
      "
      style={{
        boxShadow: "0 0 6px rgba(59,130,246,0.35)",
        animation: `glow ${totalDuration}s ease-in-out infinite`,
        animationDelay: `${index * 1}s`,
      }}
    >
      <Image
        src={tech.icon}
        alt={tech.name}
        width={36}
        height={36}
        className="opacity-90"
      />
    </div>
  );
}

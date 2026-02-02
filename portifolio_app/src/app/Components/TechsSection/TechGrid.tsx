import { techs } from "@/data/techs";
import { TechCard } from "./TechCard";

const DELAY = 1;
const TOTAL = techs.length * DELAY;


export function TechGrid() {
  return (
    <div
      className="
        grid
        grid-cols-4 sm:grid-cols-6 md:grid-cols-8
        gap-6
        mt-10
      "
    >
      {techs.map((tech, index) => (
        <TechCard
          key={tech.name}
          tech={tech}
          index={index}
          totalDuration={TOTAL}
        />
      ))}
    </div>
  );
}

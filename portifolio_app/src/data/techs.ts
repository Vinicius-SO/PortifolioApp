export interface Tech {
  name: string;
  icon: string;
  category: "Frontend" | "Backend" | "Infra" | "Data";
  level?: "core" | "learning" | "future";
}

export const techs: Tech[] = [
  // Frontend
  {
    name: "React",
    icon: "/techs/react.svg",
    category: "Frontend",
    level: "core",
  },
  {
    name: "Next.js",
    icon: "/techs/next.svg",
    category: "Frontend",
    level: "core",
  },
  {
    name: "TypeScript",
    icon: "/techs/ts.svg",
    category: "Frontend",
    level: "core",
  },
  {
    name: "JavaScript",
    icon: "/techs/js.svg",
    category: "Frontend",
    level: "core",
  },
  {
    name: "Tailwind CSS",
    icon: "/techs/tailwind.svg",
    category: "Frontend",
    level: "core",
  },
  {
    name: "Sass",
    icon: "/techs/sass.svg",
    category: "Frontend",
    level: "core",
  },

  // Backend
  {
    name: "Node.js",
    icon: "/techs/node.svg",
    category: "Backend",
    level: "core",
  },
  {
    name: "NestJS",
    icon: "/techs/nest.svg",
    category: "Backend",
    level: "core",
  },
  { name: "Java", icon: "/techs/java.svg", category: "Backend", level: "core" },
  {
    name: "Spring Boot",
    icon: "/techs/spring.svg",
    category: "Backend",
    level: "core",
  },

  // Infra / DB
  {
    name: "MongoDB",
    icon: "/techs/mongodb.svg",
    category: "Infra",
    level: "core",
  },
  {
    name: "Firebase",
    icon: "/techs/firebase.svg",
    category: "Infra",
    level: "core",
  },
  {
    name: "Prisma",
    icon: "/techs/prisma.svg",
    category: "Infra",
    level: "core",
  },

  // Data / scripts
  {
    name: "Python",
    icon: "/techs/python.svg",
    category: "Data",
    level: "core",
  },

  {
    name: "Docker",
    icon: "/techs/docker.svg",
    category: "Infra",
    level: "future",
  },
  {
    name: "PostgreSQL",
    icon: "/techs/postgres.svg",
    category: "Infra",
    level: "future",
  },
  {
    name: "Redis",
    icon: "/techs/redis.svg",
    category: "Infra",
    level: "future",
  },
];

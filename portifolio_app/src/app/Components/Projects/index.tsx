import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ProjectCard } from "../ProjectCard";
import { SectionTitle } from "../SectionTitle";

interface Project {
  id: string;
  title: string;
  description: string;
  techs: string[];
  image_url: string;
  repo_url: string;
  live_url: string;
}

// Função para buscar os projetos da sua API
async function getProjects(): Promise<Project[]> {
  // Como é um Server Component, usamos a URL absoluta ou chamamos o Service diretamente
  // Aqui vamos simular a chamada para a sua rota /api/projects
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000'}/api/projects`, {
    cache: 'no-store', // Garante que os dados estejam sempre atualizados
  });

  if (!res.ok) {
    throw new Error('Falha ao carregar projetos');
  }

  return res.json();
}

export default async function Projects() {
  // Busca os dados de forma assíncrona antes de renderizar
  const projects = await getProjects();

  return (
    <div className="w-full bg-gray-200 pt-10">
      <div id="Projects" className="w-[80%] h-100 mx-auto mb-20 ">
        <SectionTitle icon="Project.svg" title="Projects"/>
      </div>

      <div className="size-full flex flex-col items-center">
        <Carousel className="w-[65%] lg:w-[70%]">
          <CarouselContent className="py-10">
            {projects.length > 0 ? (
              projects.map((project) => (
                <CarouselItem key={project.id} className="basis-full md:basis-1/2 lg:basis-1/3">
                  <ProjectCard 
                    title={project.title} 
                    description={project.description} 
                    img={project.image_url}
                    // Se o seu ProjectCard aceitar as URLs e Techs, passe-as aqui:
                    // techs={project.techs}
                    // repoUrl={project.repo_url}
                  />
                </CarouselItem>
              ))
            ) : (
              <p className="text-gray-500">Nenhum projeto encontrado.</p>
            )}
          </CarouselContent>
          <CarouselPrevious variant={"default"}/>
          <CarouselNext variant={"default"}/>
        </Carousel>

        <div className="w-[80%] border-b-2 border-gray-400 m-20"/>
      </div>
    </div>
  );
};
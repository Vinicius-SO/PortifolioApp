import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ProjectCard } from "../ProjectCard";
import { SectionTitle } from "../SectionTitle";


import { ProjectService } from "@/modules/projects/services/projectService"; 

export default async function Projects() {
  const projectService = new ProjectService();
  const projects = await projectService.getAllProjects();

  return (
    <div className="w-full pt-10 z-0">
      {/* ... restante do seu JSX continua exatamente igual ... */}
      <div id="Projects" className="w-[80%] h-100 mx-auto mb-20 ">
        <SectionTitle icon="Project.svg" title="Projects"/>
      </div>
      
      <div className="size-full flex flex-col items-center">
        <Carousel className="w-[65%] lg:w-[70%]">
          <CarouselContent className="py-10">
            {projects && projects.length > 0 ? (
              projects.map((project: any) => (
                <CarouselItem key={project.id} className="basis-full md:basis-1/2 lg:basis-1/3">
                  <ProjectCard 
                    title={project.title}
                    description={project.description}
                    img={project.image_url} 
                    id={project.id}
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
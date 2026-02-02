import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ProjectCard } from "../ProjectCard";
import { SectionTitle } from "../SectionTitle";



export default function Projects(require:any) {

  return (
    
    <div className="w-full bg-gray-200 pt-10">
      <div id="Projects" className="w-[80%] h-100 mx-auto mb-20 ">
        <SectionTitle icon="Project.svg" title="Projects"/>
      </div>

      <div className=" size-full flex flex-col  items-center">
        <Carousel className="w-[65%] lg:w-[70%]">
          <CarouselContent className="py-10 ">
            {
              Array(5).fill(0).map((index)=>{
                return(
                  <CarouselItem key={index} className="basis-full md:basis-1/2 lg:basis-1/3">
                    <ProjectCard title={"Todo App"} description={"Este é um app de organização das suas tarefas diarias por meio de uma lista da afazeres."} img={"https://cdn.dribbble.com/userupload/25351801/file/original-9f0f1c5cae059315a9ec855a1e1927e0.png?resize=1504x1128&vertical=center"}/>
                  </CarouselItem>
                )
              })
            }
          </CarouselContent>
          <CarouselPrevious variant={"default"}/>
          <CarouselNext variant={"default"}/>
        </Carousel>

        <div className="w-[80%] border-b-2 border-gray-400 m-20"/>
      </div>

    </div>
  );
};

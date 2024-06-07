import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ProjectCard } from "../ProjectCard";
import { SectionTitle } from "../SectionTitle";



export default function Projects(require:any) {

  return (
    
    <div className="w-full bg-gray-200 pt-10">
      <div className="w-[80%] mx-auto mb-20">
        <SectionTitle icon="Project.svg" title="Projects"/>
      </div>

      <div className=" size-full flex flex-col  items-center">
        <Carousel className="w-[65%] lg:w-[70%]">
          <CarouselContent >
            {
              Array(5).fill(0).map((index)=>{
                return(
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 3xl:basis-1/4">
                    <ProjectCard/>
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

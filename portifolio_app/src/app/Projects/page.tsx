import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ProjectCard } from "../Components/ProjectCard";

export default function Projects() {
  return (
    
    <div className="size-full bg-gray-200 flex flex-col justify-center items-center">
      <Carousel className="w-[70%]">
        <CarouselContent>
          {
            Array(5).fill(0).map(()=>{
              return(
                <CarouselItem className="md:basis-1/3">
                  <ProjectCard/>
                </CarouselItem>
              )
            })
          }
        </CarouselContent>
        <CarouselPrevious variant={"default"}/>
        <CarouselNext variant={"default"}/>
      </Carousel>
    </div>
  );
};

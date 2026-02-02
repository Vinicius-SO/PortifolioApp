
import { SectionTitle } from "../SectionTitle";
import { TechGrid } from "../TechsSection/TechGrid";
import { AboutSection } from "./AboutSection";


export function AboutMe(){
  
  return(
      <div className="w-full bg-gray-200">
        <div className="w-[80%] mx-auto pb-20 " >
          <SectionTitle icon="Tecs.svg" title="Techs"/>
          <TechGrid/>
          <div className="w-full border-b-2 border-gray-400 mx-auto m-20"/>
          <AboutSection/>
        </div>
      </div>
  )
}
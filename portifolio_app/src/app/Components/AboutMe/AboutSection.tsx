import { SectionTitle } from "../SectionTitle";

export function AboutSection(){
  return(
       <div>
          <SectionTitle icon="AboutMe.svg" title="Sobre mim"/>
          <div className="text-[36px] font-medium text-gray-800 w-4/5 mx-auto mt-14">
            Sou um desenvolvedor junior apaixonado por transformar ideias criativas em soluções funcionais e interativas. Estou em busca
            de uma oportunidade empolgante para iniciar minha carreira no campo do desenvolvimento, onde posso aplicar meu conhecimento 
            e minha vontade de aprender em um ambiente colaborativo.
          </div>
       </div>
   )
}
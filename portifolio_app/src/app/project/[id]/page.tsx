import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProjectService } from "@/modules/projects/services/projectService";

interface ProjectPageProps {
  params: { id: string };
}

export default async function ProjectDetails({ params }: ProjectPageProps) {
  const projectService = new ProjectService();
  const project = await projectService.getProjectById(params.id);

  if (!project) {
    notFound();
  }

  // 👇 LÓGICA DE DIVISÃO DO TEXTO 👇
  // Garante que existe um texto para não dar erro
  const contentText = project.content || ""; 
  
  // Divide o texto onde houver quebra de linha (\n) e remove espaços vazios
  const paragraphs = contentText.split('\n').filter((p: string) => p.trim() !== '');
  
  // Pega o primeiro parágrafo
  const firstParagraph = paragraphs.length > 0 ? paragraphs[0] : "";
  
  // Junta todo o resto do texto novamente, caso tenha mais de 2 parágrafos
  const remainingContent = paragraphs.length > 1 ? paragraphs.slice(1).join('\n\n') : "";

  return (
    <main className="min-h-screen bg-white font-sans text-gray-800">
      <div className="w-full px-4 md:px-0 md:w-[80%] mx-auto pt-12 pb-20">
        
        {/* ================= 1ª LINHA (Topo) ================= */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div className="bg-[#8CA8E6] p-8 rounded-md flex justify-center items-center h-[300px] md:h-[400px]">
            <Image 
              src={project.image_url || "/placeholder.png"} 
              alt={project.title} 
              width={500} 
              height={300} 
              className="object-contain max-h-full drop-shadow-2xl"
            />
          </div>
          
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-[#104887]">{project.title}</h2>
            
            {/* Exibe a description curta (gancho) um pouco mais destacada */}
            <p className="leading-relaxed text-lg font-medium text-gray-600">
              {project.description}
            </p>
            
            {/* Exibe o primeiro parágrafo do content logo abaixo */}
            {firstParagraph && (
              <p className="leading-relaxed text-lg">
                {firstParagraph}
              </p>
            )}
          </div>
        </section>

        {/* ================= 2ª LINHA (Base) ================= */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-4 flex flex-col justify-center order-2 md:order-1">
            
            {/* Exibe o resto do content. O whitespace-pre-wrap mantém as quebras de linha reais do banco */}
            {remainingContent && (
              <p className="leading-relaxed text-lg mb-6 whitespace-pre-wrap">
                {remainingContent}
              </p>
            )}
            
            {/* BOTÕES */}
            <div className="flex flex-wrap gap-4 mt-6">
              {project.repo_url && (
                <a href={project.repo_url} target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-[#4285F4] hover:bg-blue-600 text-white px-6 py-2 rounded-md font-medium transition-colors shadow-md">
                  <Image src="/github-white.svg" alt="GitHub" width={20} height={20} />
                  Github
                </a>
              )}
              {project.live_url && (
                <a href={project.live_url} target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-[#4285F4] hover:bg-blue-600 text-white px-6 py-2 rounded-md font-medium transition-colors shadow-md">
                  <Image src="/click.svg" alt="Online" width={20} height={20} className="invert" />
                  Online
                </a>
              )}
            </div>
          </div>

          <div className="bg-[#8CA8E6] p-8 rounded-md flex justify-center items-center h-[300px] md:h-[400px] order-1 md:order-2">
            <Image 
              src={project.image_url || "/placeholder.png"} 
              alt={`${project.title} versão mobile`} 
              width={200} 
              height={400} 
              className="object-contain max-h-full drop-shadow-2xl"
            />
          </div>

        </section>
      </div>
    </main>
  );
}
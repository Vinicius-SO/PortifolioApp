import { ProjectService } from "@/modules/projects/services/projectService";
import { NextResponse } from "next/server";

const projectService = new ProjectService();

// O Next.js passa os parâmetros da URL no segundo argumento
export async function GET(
  request: Request,
  { params }: { params: { id: string } },
) {
  try {
    // Pegamos o ID diretamente dos parâmetros da rota
    const id = params.id;

    const project = await projectService.getProjectById(id);

    // Se o serviço retornar null, o projeto não existe no Supabase
    if (!project) {
      return NextResponse.json(
        { error: "Projeto não encontrado" },
        { status: 404 },
      );
    }

    return NextResponse.json(project, { status: 200 });
  } catch (err) {
    console.error("ERRO AO BUSCAR PROJETO POR ID NA API:", err);

    return NextResponse.json(
      { error: "Erro interno ao buscar o projeto" },
      { status: 500 },
    );
  }
}

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const createdProject = await projectService.createProject(formData);

    return NextResponse.json(createdProject, { status: 201 });
  } catch (err) {
    return NextResponse.json(
      { error: "Erro ao criar projeto" },

      { status: 500 },
    );
  }
}

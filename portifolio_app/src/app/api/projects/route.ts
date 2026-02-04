import { ProjectService } from "@/modules/projects/services/projectService";
import { NextResponse } from "next/server";

const projectService = new ProjectService();

export async function GET() {
  try {
    const data = await projectService.getAllProjects();
    return NextResponse.json(data, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      { error: "Erro ao buscar projetos" },
      { status: 500 },
    );
  }
}

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const project = await projectService.createProject(formData);

    return NextResponse.json(project, { status: 201 });
  } catch (err: any) {
    if (err.message === "INVALID_IMAGE") {
      return NextResponse.json({ error: "Arquivo inválido" }, { status: 400 });
    }
    return NextResponse.json(
      { error: "Erro ao criar projeto" },
      { status: 500 },
    );
  }
}

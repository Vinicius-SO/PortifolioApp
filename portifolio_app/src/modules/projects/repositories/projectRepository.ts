import { supabaseServer } from "@/lib/supabaseServer";

export class ProjectsRepository {
  async create(projectData: {
    title: string;
    description: string;
    content: string;
    techs: string[];
    image_url: string;
    repo_url: string;
    live_url: string;
  }) {
    const { data, error } = await supabaseServer
      .from("projects")
      .insert([projectData])
      .select()
      .single();

    if (error) throw error;
    return data;
  }
  // Adicione isso no seu ProjectsRepository
  async findById(id: string) {
    try {
      const { data, error } = await supabaseServer // Use a sua instância local do supabase
        .from("projects")
        .select("*")
        .eq("id", id)
        .single();

      if (error) {
        console.error("Erro ao buscar projeto por ID:", error.message);
        return null;
      }

      return data;
    } catch (err) {
      console.error("Erro inesperado no repositório:", err);
      return null;
    }
  }
  async findAll() {
    const { data, error } = await supabaseServer
      .from("projects")
      .select(
        `
        id,
        title,
        description,
        techs,
        image_url,
        created_at
      `,
      )
      .order("created_at", { ascending: false });

    if (error) {
      throw error;
    }
    return data;
  }
  async uploadImage(fileName: string, file: File) {
    const { data, error } = await supabaseServer.storage
      .from("Portifolio images")
      .upload(fileName, file, { contentType: file.type });

    if (error) throw error;
    return data;
  }

  getPublicUrl(fileName: string) {
    return supabaseServer.storage
      .from("Portifolio images")
      .getPublicUrl(fileName).data.publicUrl;
  }
}

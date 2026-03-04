import { supabaseServer } from "@/lib/supabaseServer";

export class ProjectsRepository {
  async create(projectData: {
    title: string;
    description: string;
    Content: string;
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

  // No seu ProjectsRepository.ts
  async findById(id: string) {
    try {
      const { data, error } = await supabaseServer
        .from("projects")
        // Liste explicitamente. Se o banco chama "Content", use "Content".
        // Se chama "content", use "content".
        .select(
          "id, title, description, Content, techs, image_url, repo_url, live_url, created_at",
        )
        .eq("id", id)
        .single();

      if (error) {
        console.error("Erro ao buscar:", error.message);
        return null;
      }

      return data;
    } catch (err) {
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
        Content,
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

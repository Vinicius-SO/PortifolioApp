import { supabaseServer } from "@/lib/supabaseServer";

export class ProjectsRepository {
  async create(projectData: {
    title: string;
    description: string;
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

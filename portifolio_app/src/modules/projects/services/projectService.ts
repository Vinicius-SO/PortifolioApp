import { ProjectsRepository } from "../repositories/projectRepository";

const repo = new ProjectsRepository();

export class ProjectService {
  async getAllProjects() {
    return await repo.findAll();
  }

  async createProject(formData: FormData) {
    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    const techs = JSON.parse(formData.get("techs") as string);
    const live_url = formData.get("live_url") as string;
    const repo_url = formData.get("repo_url") as string;
    const image = formData.get("image") as File;

    if (!image || !image.type.startsWith("image/")) {
      throw new Error("INVALID_IMAGE");
    }

    // Lógica de negócio: Gerar nome único
    const fileName = `${Date.now()}-${image.name}`;

    // Upload da imagem no bucket e obtenção da URL
    await repo.uploadImage(fileName, image);
    const imageUrl = repo.getPublicUrl(fileName);

    // Salva no banco tudo no banco de dados
    return await repo.create({
      title,
      description,
      techs,
      image_url: imageUrl,
      live_url,
      repo_url,
    });
  }
}

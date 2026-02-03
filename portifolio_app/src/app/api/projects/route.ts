import { supabaseServer } from "@/lib/supabaseServer";
import { NextResponse } from "next/server";

export async function GET() {
  try {
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

    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    const techs = JSON.parse(formData.get("techs") as string);
    const image = formData.get("image") as File;

    if (!image || !image.type.startsWith("image/")) {
      return NextResponse.json({ error: "Arquivo inválido" }, { status: 400 });
    }

    const fileName = `${Date.now()}-${image.name}`;

    const { error: uploadError } = await supabaseServer.storage
      .from("Portifolio images")
      .upload(fileName, image, {
        contentType: image.type,
      });

    if (uploadError) {
      throw uploadError;
    }

    const { data: publicUrl } = supabaseServer.storage
      .from("Portifolio images")
      .getPublicUrl(fileName);

    const { data, error } = await supabaseServer
      .from("projects")
      .insert([
        {
          title,
          description,
          techs,
          image_url: publicUrl.publicUrl,
        },
      ])
      .select()
      .single();

    if (error) throw error;

    return NextResponse.json(data, { status: 201 });
  } catch (err) {
    return NextResponse.json(
      { error: "Erro ao criar projeto" },
      { status: 500 },
    );
  }
}

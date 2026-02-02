import { SectionTitle } from "../SectionTitle";
import { AboutCard } from "./AboutCard";

export function AboutSection() {
  return (
    <section className="w-full">
      <SectionTitle icon="AboutMe.svg" title="Sobre mim" />

      {/* Texto principal */}
      <div className="
        w-full
        lg:w-4/5
        mx-auto
        mt-14
        text-gray-700
        text-lg
        sm:text-xl
        lg:text-2xl
        leading-relaxed
        font-medium
      ">
        <p className="mb-6">
          Sou desenvolvedor fullstack em início de carreira, motivado por transformar
          ideias em soluções funcionais, bem estruturadas e de fácil manutenção.
        </p>

        <p className="mb-6">
          Tenho maior afinidade com backend, especialmente no desenvolvimento de APIs,
          organização de regras de negócio e modelagem de dados, mas também gosto de criar
          interfaces simples e responsivas que complementem bem a experiência do usuário.
        </p>

        <p>
          Atualmente busco minha primeira oportunidade profissional, onde possa aprender
          com pessoas experientes, contribuir com projetos reais e evoluir tecnicamente
          em um ambiente colaborativo e desafiador.
        </p>
      </div>

      {/* Blocos complementares */}
      <div className="
        grid
        grid-cols-1
        md:grid-cols-3
        gap-6
        w-full
        lg:w-4/5
        mx-auto
        mt-16
      ">
        <AboutCard
          title="O que eu gosto de construir"
          items={[
            "APIs REST",
            "Sistemas CRUD bem estruturados",
            "Projetos fullstack",
            "Soluções end-to-end",
          ]}
        />

        <AboutCard
          title="Como eu gosto de trabalhar"
          items={[
            "Código limpo e organizado",
            "Separação de responsabilidades",
            "Boas práticas",
            "Aprendizado contínuo",
          ]}
        />

        <AboutCard
          title="Atualmente estudando"
          items={[
            "Arquitetura de software",
            "Boas práticas de backend",
            "Integração frontend e backend",
            "Qualidade e testes de código",
          ]}
        />
      </div>
    </section>
  );
}
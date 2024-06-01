import { Header } from "./Components/Header";
import { HeroSection } from "./Components/HeroSection";
import Projects from "./Projects/page";

export default function Home() {
  return (
    <main className="w-[100vw] h-[100vh] mr-5">
      <Header/>
      <HeroSection/>
      <Projects/>
    </main>
  );
}

import { AboutMe } from "./Components/AboutMe";
import { Header } from "./Components/Header";
import { HeroSection } from "./Components/HeroSection";
import Projects from "./Components/Projects";

export default function Home() {
  return (
    <main className="w-[100vw] h-[100vh] mr-5 scroll-smooth ">
      <Header/> 
      <HeroSection/>
      <Projects/>
      <AboutMe/>
    </main>
  );
}

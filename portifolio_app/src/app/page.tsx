import { AboutMe } from "./Components/AboutMe";
import { Header } from "./Components/Header";
import { HeroSection } from "./Components/HeroSection";
import Projects from "./Components/Projects";

export default function Home() {
  return (
    <main className="min-h-screen scroll-smooth overflow-x-hidden">
      <Header/> 
      <HeroSection/>
      <Projects/>   
      <AboutMe/>
    </main>
  );
}

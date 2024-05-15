import { Header } from "./Components/Header";
import { HeroSection } from "./Components/HeroSection";

export default function Home() {
  return (
    <main className="w-[100vw] h-[100vh] mr-5">
      <Header/>
      <HeroSection/>
    </main>
  );
}

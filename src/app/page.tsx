import About from "@/sections/home/components/about";
import Hero from "@/sections/home/components/hero";
import Services from "@/sections/home/components/services";
import Projects from "@/sections/home/components/projects";
import Testimonials from "@/sections/home/components/testimonials";
import MyTools from "@/sections/home/components/tools";

export default function Home() {
  return (
    <main className="bg-background">
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Projects />
      <MyTools />
    </main>
  );
}

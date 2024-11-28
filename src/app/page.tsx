import HomeAbout from "@/sections/home/components/about";
import HomeHero from "@/sections/home/components/hero";
import HomeProjects from "@/sections/home/components/projects";
import HomeServices from "@/sections/home/components/services";
import HomeTestimonials from "@/sections/home/components/testimonials";
import HomeMyTools from "@/sections/home/components/tools";

export default function Home() {
  return (
    <main className="bg-background">
      <HomeHero />
      <HomeAbout />
      <HomeServices />
      <HomeTestimonials />
      <HomeProjects />
      <HomeMyTools />
    </main>
  );
}

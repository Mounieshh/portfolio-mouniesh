import AboutPage from "@/components/about";
import ExperiencePage from "@/components/experience";
import Hero from "@/components/hero";
import ProjectPage from "@/components/project";

export default function Home() {
  return (
    <>
    <div>
      <Hero/>
      <AboutPage/>
      <ProjectPage/>
      <ExperiencePage/>
    </div>
    </>
  );
}

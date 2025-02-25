import AboutPage from "@/components/about";
import ExperiencePage from "@/components/experience";
import Hero from "@/components/hero";
import ProjectPage from "@/components/project";
import SkillsPage from "@/components/skills";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
    <div>
      <Hero/>
      <AboutPage/>
      <ProjectPage/>
      <ExperiencePage/>
      <SkillsPage/>

      <Footer/>
    </div>
    </>
  );
}

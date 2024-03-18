import Hero from "@/components/hero";
import Skills from "@/components/skills";
import Contact from "@/components/contact";
import ProjectsPreview from "@/components/projectsPreview";

export default function Home() {
  return (
    <>
      <Hero />
      <ProjectsPreview />
      <Skills />
      <Contact />
    </>
  );
}

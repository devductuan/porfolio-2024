import Planets from "@/components/client/3d/scenes/Planets";
import About from "@/components/client/About";
import Contact from "@/components/client/Contact";
import Education from "@/components/client/Education";
import Experience from "@/components/client/Experience";
import Hobbies from "@/components/client/Hobbies";
import Home from "@/components/client/Home";
import Skills from "@/components/client/Skills";
import PageContainer from "@/components/client/container/PageContainer";

export default function HomePage() {
  return (
    <PageContainer>
      <Home />
      <About />
      <Experience />
      <Education />
      <Skills />
      <Hobbies />
      <Contact />
    </PageContainer>
  );
}

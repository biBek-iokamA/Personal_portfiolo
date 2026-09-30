import { Helmet } from "react-helmet-async";
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { EducationSection } from "@/components/EducationSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Bibek Bishwokarma | Software Developer</title>
        <meta
          name="description"
          content="Bibek Bishwokarma is a passionate software developer from Nepal, specializing in React, Vue.js, Node.js, Django, and .NET. Building dynamic web applications."
        />
        <meta
          name="keywords"
          content="Bibek Bishwokarma, Software Developer, Full Stack Developer, React, Vue.js, Node.js, Django, Nepal"
        />
        <meta property="og:title" content="Bibek Bishwokarma | Software Developer" />
        <meta
          property="og:description"
          content="Passionate software developer from Nepal, specializing in full-stack web development."
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://bibekbishwokarma.dev" />
      </Helmet>

      <div className="min-h-screen">
        <Navigation />
        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <EducationSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;

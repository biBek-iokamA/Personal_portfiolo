import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center section-padding pt-32">
      <div className="container-narrow text-center">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="w-40 h-40 rounded-full overflow-hidden mx-auto lg:mx-0 shadow-lg">
            <img
              src="profile.jpg"
              alt="Profile photo"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-6 text-center lg:text-left">
            <p
              className="font-mono text-primary animate-fade-up opacity-0"
              style={{ animationDelay: "100ms", animationFillMode: "forwards" }}
            >
              Hi, my name is
            </p>

            <h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-mono animate-fade-up opacity-0"
              style={{ animationDelay: "200ms", animationFillMode: "forwards" }}
            >
              <span className="gradient-text">Bibek Bishwokarma</span>
            </h1>

            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-semibold text-muted-foreground animate-fade-up opacity-0"
              style={{ animationDelay: "300ms", animationFillMode: "forwards" }}
            >
              Software Developer | Tech Enthusiast
            </h2>

            <p
              className="max-w-2xl mx-auto text-muted-foreground text-lg animate-fade-up opacity-0"
              style={{ animationDelay: "400ms", animationFillMode: "forwards" }}
            >
              A passionate Bachelor's student in software engineering from Jhapa, Nepal.
              I love building dynamic, scalable web applications and learning new technologies.
            </p>

            <div
              className="flex flex-wrap items-center justify-center gap-4 pt-4 animate-fade-up opacity-0"
              style={{ animationDelay: "500ms", animationFillMode: "forwards" }}
            >
              <Button variant="hero" size="lg" asChild>
                <a href="#projects">View My Work</a>
              </Button>
              <Button variant="hero-outline" size="lg" asChild>
                <a href="#contact">Get In Touch</a>
              </Button>
            </div>

            <div
              className="flex items-center justify-center gap-4 pt-8 animate-fade-up opacity-0"
              style={{ animationDelay: "600ms", animationFillMode: "forwards" }}
            >
              <a
                href="https://github.com/BibekDiyali"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary hover:bg-secondary/80 transition-all duration-200 hover:-translate-y-1"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/in/bibekdiyali"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary hover:bg-secondary/80 transition-all duration-200 hover:-translate-y-1"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:diyalibibek42@gmail.com"
                className="p-3 rounded-full bg-secondary hover:bg-secondary/80 transition-all duration-200 hover:-translate-y-1"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

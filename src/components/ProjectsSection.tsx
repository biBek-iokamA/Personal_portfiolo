import { ExternalLink, Github, Folder } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution with React frontend and Django backend. Features include user authentication, product catalog, shopping cart, and payment integration.",
    technologies: ["React", "Django", "PostgreSQL", "Stripe"],
    github: "https://github.com/BibekDiyali",
    live: "#",
  },
  {
    title: "Task Management App",
    description:
      "A collaborative task management application built with Vue.js and Node.js. Includes real-time updates, team workspaces, and progress tracking.",
    technologies: ["Vue.js", "Node.js", "MongoDB", "Socket.io"],
    github: "https://github.com/BibekDiyali",
    live: "#",
  },
  {
    title: "Portfolio Dashboard",
    description:
      "An interactive dashboard for tracking investments and financial data. Built with React and integrates with multiple financial APIs.",
    technologies: ["React", "REST APIs", "Chart.js", "Tailwind"],
    github: "https://github.com/BibekDiyali",
    live: "#",
  },
  {
    title: "Blog Platform",
    description:
      "A modern blogging platform with markdown support, user authentication, and SEO optimization. Built with .NET Core and React.",
    technologies: [".NET", "React", "SQL Server", "Azure"],
    github: "https://github.com/BibekDiyali",
    live: "#",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding bg-secondary/30">
      <div className="container-narrow">
        <h2 className="text-3xl md:text-4xl font-bold font-mono text-center mb-4">
          <span className="gradient-text">Featured Projects</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-12 rounded-full" />

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="glass-card rounded-xl overflow-hidden hover-lift group"
            >
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <Folder className="h-10 w-10 text-primary" />
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                      aria-label={`${project.title} GitHub repository`}
                    >
                      <Github className="h-5 w-5" />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                      aria-label={`${project.title} live demo`}
                    >
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  </div>
                </div>

                <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-mono rounded-full bg-primary/10 text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="hero-outline" size="lg" asChild>
            <a
              href="https://github.com/BibekDiyali"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-5 w-5 mr-2" />
              View More on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

import { Code2, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing maintainable, scalable, and well-documented code",
  },
  {
    icon: Rocket,
    title: "Fast Learner",
    description: "Quickly adapting to new technologies and frameworks",
  },
  {
    icon: Users,
    title: "Team Player",
    description: "Collaborative approach to problem-solving",
  },
];

export const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="container-narrow">
        <h2 className="text-3xl md:text-4xl font-bold font-mono text-center mb-4">
          <span className="gradient-text">About Me</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-12 rounded-full" />

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Hello! I'm <span className="text-foreground font-semibold">Bibek Bishwokarma</span>, a passionate software developer based in Jhapa, Nepal. Currently pursuing my Bachelor's degree in BIT, I'm dedicated to creating impactful digital experiences.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My journey in programming started with curiosity and has evolved into a deep passion for building web applications. I specialize in both frontend and backend development, working with modern technologies like <span className="text-primary font-medium">React, Vue.js, Node.js, and Django</span>.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or learning about software architecture patterns.
            </p>
          </div>

          <div className="grid gap-4">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="glass-card p-6 rounded-xl hover-lift"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

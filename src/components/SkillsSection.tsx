const skills = {
  Languages: ["JavaScript", "Python", "C++", "TypeScript"],
  Frontend: ["React", "Vue.js", "HTML", "CSS", "Tailwind CSS"],
  Backend: ["Node.js", "Django", ".NET", "REST APIs"],
  Tools: ["Git", "GitHub", "VS Code", "Docker"],
};

export const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="container-narrow">
        <h2 className="text-3xl md:text-4xl font-bold font-mono text-center mb-4">
          <span className="gradient-text">Skills & Technologies</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-12 rounded-full" />

        <div className="grid md:grid-cols-2 gap-6">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="glass-card p-6 rounded-xl hover-lift">
              <h3 className="font-mono font-semibold text-lg mb-4 text-primary">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 text-sm font-medium rounded-full bg-secondary text-secondary-foreground hover:bg-primary/10 hover:text-primary transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

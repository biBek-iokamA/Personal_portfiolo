import { GraduationCap, Calendar, MapPin } from "lucide-react";

const education = [
  {
    degree: "Bachelor's in Software Engineering",
    institution: " lincoln  University ",
    location: "Jhapa, Nepal",
    period: "Currently Pursuing",
    status: "Running",
    description:
      "Focusing on software development, algorithms, data structures, and modern web technologies. Actively participating in coding competitions and hackathons.",
  },
];

export const EducationSection = () => {
  return (
    <section id="education" className="section-padding">
      <div className="container-narrow">
        <h2 className="text-3xl md:text-4xl font-bold font-mono text-center mb-4">
          <span className="gradient-text">Education</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-12 rounded-full" />

        <div className="max-w-2xl mx-auto">
          {education.map((edu, index) => (
            <div
              key={edu.degree}
              className="glass-card p-8 rounded-xl relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary to-accent" />
              
              <div className="flex items-start gap-4">
                <div className="p-4 rounded-xl bg-primary/10 shrink-0">
                  <GraduationCap className="h-8 w-8 text-primary" />
                </div>
                
                <div className="space-y-3">
                  <div>
                    <h3 className="text-xl font-bold">{edu.degree}</h3>
                    <p className="text-lg text-muted-foreground">{edu.institution}</p>
                  </div>
                  
                  <div className="flex flex-wrap gap-4 text-sm">
                    <span className="flex items-center gap-1 text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      {edu.location}
                    </span>
                    <span className="flex items-center gap-1 text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      {edu.period}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-accent/20 text-accent text-xs font-medium">
                      {edu.status}
                    </span>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {edu.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

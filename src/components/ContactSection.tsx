import { Mail, Github, Linkedin, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

export const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-secondary/30">
      <div className="container-narrow">
        <h2 className="text-3xl md:text-4xl font-bold font-mono text-center mb-4">
          <span className="gradient-text">Get In Touch</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-12 rounded-full" />

        <div className="max-w-xl mx-auto text-center space-y-8">
          <p className="text-lg text-muted-foreground leading-relaxed">
            I'm currently looking for new opportunities and my inbox is always open. 
            Whether you have a question, want to discuss a project, or just want to say hi, 
            I'll try my best to get back to you!
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="lg" asChild>
              <a
                href="https://wa.me/9779824091263"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Send className="h-5 w-5 mr-2" />
                Say Hello
              </a>
            </Button>
          </div>

          <div className="pt-8 space-y-4">
            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <MapPin className="h-5 w-5 text-primary" />
              <span>Jhapa, Nepal</span>
            </div>
            
            <div className="flex items-center justify-center gap-6">
              <a
                href="mailto:diyalibibek42@gmail.com"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
              >
                <Mail className="h-5 w-5" />
                <span className="group-hover:underline">diyalibibek42@gmail.com</span>
              </a>
            </div>

            <div className="flex items-center justify-center gap-4 pt-4">
              <a
                href="https://github.com/BibekDiyali"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card hover:bg-primary/10 transition-all duration-200 hover:-translate-y-1 border border-border"
                aria-label="GitHub"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://linkedin.com/in/bibekdiyali"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card hover:bg-primary/10 transition-all duration-200 hover:-translate-y-1 border border-border"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

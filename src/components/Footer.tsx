import { Heart } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <div className="container-narrow text-center">
        <p className="text-muted-foreground text-sm flex items-center justify-center gap-1">
          Designed & Built with{" "}
          <Heart className="h-4 w-4 text-destructive fill-destructive" /> by{" "}
          <span className="font-medium text-foreground">Bibek Bishwokarma</span>
        </p>
        <p className="text-muted-foreground text-xs mt-2">
          © {currentYear} All rights reserved.
        </p>
      </div>
    </footer>
  );
};

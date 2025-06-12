import { cn, handleNavigation } from "@/lib/utils";
import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer
      className={cn(
        "relative py-5 px-4 bg-card border-t border-border mt-5 pt-4",
        "flex flex-wrap justify-between items-center"
      )}
    >
      <p className="text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} Bahaeddine Aissa. All rights reserved.
      </p>
      <a
        href="#hero"
        onClick={(e) => handleNavigation(e, "hero")}
        aria-label="Back to top"
        className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
      >
        <ArrowUp size={20} />
      </a>
    </footer>
  );
};

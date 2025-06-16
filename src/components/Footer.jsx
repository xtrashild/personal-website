import { cn } from "@/lib/utils";

export const Footer = () => {
  return (
    <footer
      className={cn(
        "relative py-5 px-4 bg-card border-t border-border mt-5 pt-4",
        "flex flex-wrap justify-center items-center"
      )}
    >
      <p className="text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} Bahaeddine Aissa. All rights reserved.
      </p>
    </footer>
  );
};

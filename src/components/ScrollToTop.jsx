import { cn, handleNavigation } from "@/lib/utils";
import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <button
      onClick={(e) => handleNavigation(e, "hero")}
      aria-label="Back to top"
      className={cn(
        "fixed bottom-16 right-3 md:right-20 z-30",
        "p-3 rounded-full bg-primary/90 hover:bg-primary text-primary-foreground",
        "shadow-lg hover:shadow-xl transition-all duration-300",
        "backdrop-blur-sm"
      )}
    >
      <ArrowUp size={20} />
    </button>
  );
};

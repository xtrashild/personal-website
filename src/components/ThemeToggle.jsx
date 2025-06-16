import { cn } from "@/lib/utils";
import { Monitor, Moon, Sun } from "lucide-react";

export const ThemeToggle = ({ className, theme, onToggle }) => {
  const getThemeIcon = () => {
    switch (theme) {
      case "light":
        return <Moon className="h-6 w-6 text-blue-900" />;
      case "dark":
        return <Sun className="h-6 w-6 text-yellow-300" />;
      default:
        return <Monitor className="h-6 w-6 text-gray-600 dark:text-white" />;
    }
  };

  return (
    <button
      onClick={onToggle}
      className={cn(
        "p-2 rounded-full transition-colors duration-300 focus:outline-hidden",
        className
      )}
    >
      {getThemeIcon()}
    </button>
  );
};

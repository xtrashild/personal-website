import { ThemeToggle } from "@/components/ThemeToggle";
import { cn, handleNavigation } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];
export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavbarMenuOpen, setIsNavbarMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav
      className={cn(
        "fixed z-40 transition-all duration-300 w-full lg:w-full",
        isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
      )}
    >
      <div className="container flex items-center justify-between">
        <a
          href="#hero"
          onClick={(e) => handleNavigation(e, "hero")}
          className="text-xl font-bold text-primary flex items-center"
        >
          <span className="relative z-10 whitespace-nowrap">
            <span className="text-glow text-foreground text-sm md:text-xl">
              Bahaeddine Aissa
            </span>{" "}
            <span className="text-sm md:text-xl">Portfolio</span>
          </span>
        </a>
        {/* desktop nav */}
        <div className="hidden md:flex space-x-8 ml-8">
          {navItems.map((item, key) => {
            return (
              <a
                href={item.href}
                onClick={(e) => handleNavigation(e, item.href.slice(1))}
                key={key}
                className="text-foreground/80 hover:text-primary transition-colors duration-300"
              >
                {item.name}
              </a>
            );
          })}
          <ThemeToggle className="max-sm:hidden" />
        </div>
        {/* mobile nav */}
        <button
          onClick={() => setIsNavbarMenuOpen((previousState) => !previousState)}
          className="md:hidden p-2 top-2 text-foreground z-50"
          aria-label={isNavbarMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isNavbarMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <div
          className={cn(
            "fixed top-0 left-0 w-screen h-screen bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
            "transition-all duration-300 md:hidden",
            isNavbarMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
        >
          <div className="flex flex-col space-y-8 text-xl">
            {navItems.map((item, key) => {
              return (
                <a
                  href={item.href}
                  key={key}
                  className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  onClick={(e) => {
                    setIsNavbarMenuOpen(false);
                    handleNavigation(e, item.href.slice(1));
                  }}
                >
                  {item.name}
                </a>
              );
            })}
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};

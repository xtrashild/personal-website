import { cn } from "@/lib/utils";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Workout Express",
    description:
      "A web application for timed home workouts, built using Vue.js.",
    image: "/projects/workout-express.png",
    demoUrl: "https://xtrashild.com/",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="relative py-24 px-4">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Featured<span className="text-primary"> Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects, each project was carefully
          crafted with attention to detail, performance and user experience.
        </p>

        <div
          className={cn(
            projects.length === 1
              ? "flex justify-center"
              : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          )}
        >
          {projects.map((project, key) => (
            <a
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
              href={project.demoUrl}
              target="_blank"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1 ">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-2">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <span className="text-foreground/80 hover:text-primary transition-colors duration-300 ">
                      <ExternalLink size={20} />
                    </span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

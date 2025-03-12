
import { useState, useEffect } from "react";
import { ExternalLink, Github, Image, Code, Layers } from "lucide-react";
import { projectsData } from "../config/portfolio";

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`page-container ${isVisible ? "entered" : ""}`}>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 animate-slide-down">Projects</h1>
        <p className="text-lg text-muted-foreground mb-10 animate-slide-up">
          Here are some of my recent projects that showcase my skills and experience
          in AI, machine learning, and software engineering.
        </p>

        <div className="space-y-12">
          {projectsData.map((project, index) => (
            <div 
              key={project.id}
              className={`glass-panel overflow-hidden hover:shadow-lg transition-all hover:translate-y-[-2px] animate-slide-up`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="md:flex">
                <div className="md:w-2/5 relative overflow-hidden h-[220px]">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent pointer-events-none" />
                  <div className="absolute bottom-4 left-4 flex gap-2">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech} 
                        className="px-2 py-1 text-xs bg-secondary/80 backdrop-blur-sm text-secondary-foreground rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="md:w-3/5 p-6">
                  <div className="flex justify-between mb-2">
                    <h2 className="text-xl font-semibold flex items-center">
                      {project.id === 1 && <Code size={18} className="mr-2 opacity-70" />}
                      {project.id === 2 && <Layers size={18} className="mr-2 opacity-70" />}
                      {project.id === 3 && <Image size={18} className="mr-2 opacity-70" />}
                      {project.title}
                    </h2>
                    <span className="text-sm text-muted-foreground">{project.date}</span>
                  </div>
                  <p className="text-muted-foreground mb-6">{project.description}</p>
                  
                  <div className="flex gap-4">
                    {project.link && (
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center text-sm hover:text-foreground/80 transition-colors"
                      >
                        <ExternalLink size={16} className="mr-1" />
                        <span>View Project</span>
                      </a>
                    )}
                    {project.githubLink && (
                      <a 
                        href={project.githubLink}
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center text-sm hover:text-foreground/80 transition-colors"
                      >
                        <Github size={16} className="mr-1" />
                        <span>View Code</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;

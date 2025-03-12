
import { useState, useEffect } from "react";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const projects = [
    {
      id: 1,
      title: "Neuralis: Personalized Multi-Agent AI Ecosystem",
      description: "Multi-agent AI system managing workflows with specialized agents including calendar, emails. Integrated 10+ APIs for effective communication, achieving 100% efficiency gains in daily tasks. Developed stateful memory, improving user task completion rates by 30%. Leveraged LLMs for context-aware note creation and knowledge extraction in document processing.",
      technologies: ["Langchain", "React", "Stateful AI"],
      date: "Jan 2025",
      link: "#",
    },
    {
      id: 2,
      title: "Warehouse SLIM Optimisation using Genetic Algorithm",
      description: "Developed evolutionary algorithm to optimize warehouse space layout, reducing storage costs. Designed fitness function evaluating travel distance, picking time, Weight and space utilization metrics. Achieved 40% improvement (WRT Baseline) in retrieval speed through optimized inventory placement. Performed a comparative analysis with Markov Decision Process and Local Search.",
      technologies: ["Python", "Blender 3d"],
      date: "Jan 2025",
      link: "#",
    },
    {
      id: 3,
      title: "T-shirt Size Estimator",
      description: "Built ML pipeline with 89% accuracy using deep learning to automate body measures of mono images. Incorporated geometric algorithms to improve accuracy from 33% to 80% versus baseline models. Integrated MediaPipe pose detection and PyTorch CNN to enable real-time size recommendations.",
      technologies: ["CNN", "Depth Estimation", "Segmentation"],
      date: "Dec 2024",
      link: "#",
    },
  ];

  return (
    <div className={`page-container ${isVisible ? "entered" : ""}`}>
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 animate-slide-down">Projects</h1>
        <p className="text-lg text-muted-foreground mb-10 animate-slide-up">
          Here are some of my recent projects that showcase my skills and experience
          in AI, machine learning, and software engineering.
        </p>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className={`glass-panel p-6 hover:shadow-lg transition-all hover:translate-y-[-2px] animate-slide-up`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex justify-between mb-2">
                <h2 className="text-xl font-semibold">{project.title}</h2>
                <span className="text-sm text-muted-foreground">{project.date}</span>
              </div>
              <p className="text-muted-foreground mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span 
                    key={tech} 
                    className="px-2 py-1 text-xs bg-secondary text-secondary-foreground rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
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
                <a 
                  href="https://github.com/1-mukesh-1" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-sm hover:text-foreground/80 transition-colors"
                >
                  <Github size={16} className="mr-1" />
                  <span>View Code</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;

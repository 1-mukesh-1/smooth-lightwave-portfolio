
import { useState, useEffect } from "react";
import { Github, Linkedin, Mail, MapPin, Calendar, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { aboutData, socialLinks } from "../config/portfolio";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`page-container ${isVisible ? "entered" : ""}`}>
      {/* Hero Section with Gradient Background */}
      <div className="relative -mt-24 mb-12 overflow-hidden rounded-b-3xl glass-panel">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/10 to-background z-0"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        
        <div className="max-w-4xl mx-auto px-6 py-24 md:py-32 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-slide-down bg-clip-text text-transparent bg-gradient-to-r from-primary to-muted-foreground">
                {aboutData.name}
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-6 animate-slide-down opacity-90 font-light">
                {aboutData.title}
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8 animate-slide-up">
                <div className="flex items-center text-sm text-muted-foreground px-3 py-1.5 rounded-full bg-secondary/40 backdrop-blur-sm">
                  <MapPin size={16} className="mr-2" />
                  <span>{aboutData.location}</span>
                </div>
                <div className="flex items-center text-sm text-muted-foreground px-3 py-1.5 rounded-full bg-secondary/40 backdrop-blur-sm">
                  <Calendar size={16} className="mr-2" />
                  <span>Available: {aboutData.availability}</span>
                </div>
              </div>
              
              <div className="flex gap-3 animate-slide-up delay-100">
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-secondary/40 hover:bg-secondary/60 backdrop-blur-sm transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-secondary/40 hover:bg-secondary/60 backdrop-blur-sm transition-colors"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
                <a
                  href={`mailto:${socialLinks.email}`}
                  className="p-2 rounded-full bg-secondary/40 hover:bg-secondary/60 backdrop-blur-sm transition-colors"
                  aria-label="Email"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
            
            <div className="relative hidden md:block">
              <div className="rounded-lg bg-gradient-to-br from-primary/20 via-accent/10 to-transparent p-1">
                <div className="rounded-lg overflow-hidden glass-panel p-2">
                  <div className="h-[260px] w-[260px] mx-auto relative overflow-hidden rounded-lg">
                    <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/30 text-lg font-light">
                      Your photo here
                    </div>
                    {/* Image placeholder - will be replaced by the user */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-secondary/10"></div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 blur-2xl"></div>
              <div className="absolute -top-4 -left-4 w-20 h-20 rounded-full bg-gradient-to-br from-secondary/30 to-primary/30 blur-xl"></div>
            </div>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
        <div className="absolute top-1/3 right-10 w-12 h-12 rounded-full bg-secondary/20 blur-xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-16 h-16 rounded-full bg-primary/20 blur-xl"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-8">
          <div className="space-y-8 animate-slide-up delay-200">
            <div>
              <h2 className="section-heading">Technical Knowledge</h2>
              <div className="glass-panel p-6 space-y-3 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/5 to-transparent rounded-bl-full"></div>
                
                {aboutData.skills.map((skill, index) => (
                  <div key={index} className="relative z-10">
                    <span className="text-sm font-medium">{skill.category}:</span>
                    <span className="text-sm text-muted-foreground ml-2">{skill.items}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="section-heading">Education</h2>
              {aboutData.education.map((edu, index) => (
                <div key={index} className="glass-panel p-6 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/30 via-secondary/20 to-transparent"></div>
                  <h3 className="font-medium">{edu.institution}</h3>
                  <p className="text-sm text-muted-foreground">{edu.degree} | {edu.period}</p>
                  <p className="text-sm mt-2">
                    Coursework: {edu.coursework}
                  </p>
                  <p className="text-sm font-medium mt-1">GPA: {edu.gpa}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="animate-slide-up delay-300">
            <h2 className="section-heading">Work Experience</h2>
            <div className="space-y-6">
              {aboutData.experience.map((exp, index) => (
                <div key={index} className="glass-panel p-6 relative overflow-hidden group hover:shadow-md transition-shadow">
                  <div className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-primary/40 to-transparent group-hover:from-primary/60 transition-colors"></div>
                  
                  <div className="flex justify-between">
                    <h3 className="font-medium">{exp.company}</h3>
                    <span className="text-sm text-muted-foreground">{exp.location}</span>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-sm text-muted-foreground">{exp.position}</p>
                    <span className="text-sm text-muted-foreground">{exp.period}</span>
                  </div>
                  <ul className="mt-3 space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="text-sm flex items-start">
                        <span className="mr-2 text-primary">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="md:col-span-1">
          <div className="sticky top-28 space-y-6">
            <div className="glass-panel p-6 animate-slide-in-right">
              <h2 className="section-heading mb-4">Connect</h2>
              <div className="flex flex-col space-y-4">
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-sm hover:text-primary transition-colors group p-2 rounded-lg hover:bg-secondary/40"
                >
                  <Linkedin size={18} className="mr-3 opacity-70 group-hover:opacity-100" />
                  <span>LinkedIn</span>
                  <ExternalLink size={14} className="ml-auto opacity-0 group-hover:opacity-70 transition-opacity" />
                </a>
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-sm hover:text-primary transition-colors group p-2 rounded-lg hover:bg-secondary/40"
                >
                  <Github size={18} className="mr-3 opacity-70 group-hover:opacity-100" />
                  <span>GitHub</span>
                  <ExternalLink size={14} className="ml-auto opacity-0 group-hover:opacity-70 transition-opacity" />
                </a>
                <a
                  href={`mailto:${socialLinks.email}`}
                  className="flex items-center text-sm hover:text-primary transition-colors group p-2 rounded-lg hover:bg-secondary/40"
                >
                  <Mail size={18} className="mr-3 opacity-70 group-hover:opacity-100" />
                  <span>Email</span>
                  <ExternalLink size={14} className="ml-auto opacity-0 group-hover:opacity-70 transition-opacity" />
                </a>
              </div>
            </div>

            <div className="glass-panel p-6 animate-slide-in-right delay-100">
              <h2 className="section-heading mb-4">Quick Links</h2>
              <div className="flex flex-col space-y-3">
                <Link
                  to="/projects"
                  className="flex items-center text-sm group p-2 rounded-lg hover:bg-secondary/40 hover:text-primary transition-colors"
                >
                  <span>View Projects</span>
                  <ExternalLink size={14} className="ml-auto opacity-0 group-hover:opacity-70 transition-opacity" />
                </Link>
                <Link
                  to="/blog"
                  className="flex items-center text-sm group p-2 rounded-lg hover:bg-secondary/40 hover:text-primary transition-colors"
                >
                  <span>Read Blog</span>
                  <ExternalLink size={14} className="ml-auto opacity-0 group-hover:opacity-70 transition-opacity" />
                </Link>
                <Link
                  to="/contact"
                  className="flex items-center text-sm group p-2 rounded-lg hover:bg-secondary/40 hover:text-primary transition-colors"
                >
                  <span>Contact Me</span>
                  <ExternalLink size={14} className="ml-auto opacity-0 group-hover:opacity-70 transition-opacity" />
                </Link>
              </div>
            </div>
            
            <div className="glass-panel p-6 animate-slide-in-right delay-200">
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-3">Resume</p>
                <a
                  href="#"
                  className="inline-block px-4 py-2 bg-primary/90 hover:bg-primary text-primary-foreground rounded-md text-sm transition-colors"
                >
                  Download PDF
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

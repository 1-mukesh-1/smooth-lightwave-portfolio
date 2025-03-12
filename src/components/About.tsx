
import { useState, useEffect } from "react";
import { Github, Linkedin, Mail, MapPin, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`page-container ${isVisible ? "entered" : ""}`}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-6">
          <div>
            <h1 className="text-3xl font-bold mb-2 animate-slide-down">Mukesh Cheemakurthi</h1>
            <p className="text-lg text-muted-foreground mb-6 animate-slide-down opacity-90">
              Master of Science in Computer Science
            </p>
            
            <div className="flex flex-wrap gap-3 mb-8 animate-slide-up">
              <div className="flex items-center text-sm text-muted-foreground">
                <MapPin size={16} className="mr-1" />
                <span>Boston, MA</span>
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <Mail size={16} className="mr-1" />
                <span>cheemakurthi.m@northeastern.edu</span>
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <Calendar size={16} className="mr-1" />
                <span>Available: May 2025 to Dec 2025</span>
              </div>
            </div>
          </div>

          <div className="space-y-4 animate-slide-up delay-100">
            <div>
              <h2 className="section-heading">Education</h2>
              <div className="glass-panel p-4">
                <h3 className="font-medium">Northeastern University | Khoury College of Computer Sciences</h3>
                <p className="text-sm text-muted-foreground">Master of Science, Computer Science | Sept 2024 – Present</p>
                <p className="text-sm mt-2">
                  Coursework: Foundations of AI, Programming Design Paradigms, Computer Vision, Algorithms
                </p>
                <p className="text-sm font-medium mt-1">GPA: 3.83</p>
              </div>
            </div>

            <div>
              <h2 className="section-heading">Technical Knowledge</h2>
              <div className="glass-panel p-4 space-y-2">
                <div>
                  <span className="text-sm font-medium">Programming:</span>
                  <span className="text-sm text-muted-foreground ml-2">Python, Java, C++, TypeScript, JavaScript, Node.js</span>
                </div>
                <div>
                  <span className="text-sm font-medium">Cloud & DevOps:</span>
                  <span className="text-sm text-muted-foreground ml-2">AWS, GCP, Azure, Terraform, GitHub, Docker, Jenkins, Airflow, Kubernetes, Helm, YAML</span>
                </div>
                <div>
                  <span className="text-sm font-medium">Backend:</span>
                  <span className="text-sm text-muted-foreground ml-2">REST APIs, Microservices, Oracle, JSON, MySQL, SOAP, MongoDB, PostgreSQL, Redis</span>
                </div>
                <div>
                  <span className="text-sm font-medium">AI/ML:</span>
                  <span className="text-sm text-muted-foreground ml-2">SciPy, LLMs, AI Agents, BERT, GANs, Embeddings, GPT, Time Series</span>
                </div>
                <div>
                  <span className="text-sm font-medium">Algorithms:</span>
                  <span className="text-sm text-muted-foreground ml-2">Monte-Carlo Search, Local Search, Stochastic modelling, Dynamic Programming</span>
                </div>
              </div>
            </div>
          </div>

          <div className="animate-slide-up delay-200">
            <h2 className="section-heading">Work Experience</h2>
            <div className="space-y-4">
              <div className="glass-panel p-4">
                <div className="flex justify-between">
                  <h3 className="font-medium">Khoury College of Computer Science</h3>
                  <span className="text-sm text-muted-foreground">Boston, MA, USA</span>
                </div>
                <div className="flex justify-between">
                  <p className="text-sm text-muted-foreground">Teaching Assistant</p>
                  <span className="text-sm text-muted-foreground">Sept 2024 – Dec 2024</span>
                </div>
                <ul className="mt-2 space-y-1">
                  <li className="text-sm flex">
                    <span className="mr-2">•</span>
                    <span>Teaching Assistant for "Programming with Data (Python)" course with 300+ students</span>
                  </li>
                  <li className="text-sm flex">
                    <span className="mr-2">•</span>
                    <span>Conduct office hours, assisting 10+ students per session with Python programming & Data science</span>
                  </li>
                </ul>
              </div>

              <div className="glass-panel p-4">
                <div className="flex justify-between">
                  <h3 className="font-medium">Walmart Global Tech</h3>
                  <span className="text-sm text-muted-foreground">Bengaluru, KA, India</span>
                </div>
                <div className="flex justify-between">
                  <p className="text-sm text-muted-foreground">Data Engineer 2</p>
                  <span className="text-sm text-muted-foreground">July 2022 – Aug 2024</span>
                </div>
                <ul className="mt-2 space-y-1">
                  <li className="text-sm flex">
                    <span className="mr-2">•</span>
                    <span>Developed real-time and large-scale ETL pipelines processing 1TB+ data using Apache Spark and Kafka</span>
                  </li>
                  <li className="text-sm flex">
                    <span className="mr-2">•</span>
                    <span>Enhanced Cloud parameters reducing pipeline runtime from 8 hours to 1 hour, cutting cloud costs</span>
                  </li>
                  <li className="text-sm flex">
                    <span className="mr-2">•</span>
                    <span>Integrated 5+ Order Management components and migrated 50+ Data Models from IBM Sterling to GCP</span>
                  </li>
                </ul>
              </div>

              <div className="glass-panel p-4">
                <div className="flex justify-between">
                  <h3 className="font-medium">Walmart Global Tech</h3>
                  <span className="text-sm text-muted-foreground">Bengaluru, KA, India</span>
                </div>
                <div className="flex justify-between">
                  <p className="text-sm text-muted-foreground">Data Scientist (Internship)</p>
                  <span className="text-sm text-muted-foreground">Jan 2022 – July 2022</span>
                </div>
                <ul className="mt-2 space-y-1">
                  <li className="text-sm flex">
                    <span className="mr-2">•</span>
                    <span>Performed Time-Series analysis to forecast demand patterns, detect seasonality to improve pricing strategy</span>
                  </li>
                  <li className="text-sm flex">
                    <span className="mr-2">•</span>
                    <span>Utilized XGBoost to predict elasticity coefficients and applied Linear Optimization for demand modelling</span>
                  </li>
                  <li className="text-sm flex">
                    <span className="mr-2">•</span>
                    <span>Accelerated system components by implementing DFS algorithm, reducing processing time by 99%</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="md:col-span-1">
          <div className="sticky top-28 space-y-6">
            <div className="glass-panel p-4 animate-slide-in-right">
              <h2 className="section-heading">Connect</h2>
              <div className="flex flex-col space-y-3 mt-3">
                <a
                  href="https://linkedin.com/in/mukesh003/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-sm hover:text-foreground/80 transition-colors"
                >
                  <Linkedin size={18} className="mr-2" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://github.com/1-mukesh-1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-sm hover:text-foreground/80 transition-colors"
                >
                  <Github size={18} className="mr-2" />
                  <span>GitHub</span>
                </a>
                <a
                  href="mailto:cheemakurthi.m@northeastern.edu"
                  className="flex items-center text-sm hover:text-foreground/80 transition-colors"
                >
                  <Mail size={18} className="mr-2" />
                  <span>Email</span>
                </a>
              </div>
            </div>

            <div className="glass-panel p-4 animate-slide-in-right delay-100">
              <h2 className="section-heading">Quick Links</h2>
              <div className="flex flex-col space-y-3 mt-3">
                <Link
                  to="/projects"
                  className="text-sm hover:text-foreground/80 transition-colors"
                >
                  View Projects
                </Link>
                <Link
                  to="/blog"
                  className="text-sm hover:text-foreground/80 transition-colors"
                >
                  Read Blog
                </Link>
                <Link
                  to="/contact"
                  className="text-sm hover:text-foreground/80 transition-colors"
                >
                  Contact Me
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

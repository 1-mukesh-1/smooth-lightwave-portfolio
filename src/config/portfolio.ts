
// Portfolio Configuration

// Social Links
export const socialLinks = {
  linkedin: "https://linkedin.com/in/mukesh003/",
  github: "https://github.com/1-mukesh-1",
  email: "cheemakurthi.m@northeastern.edu",
};

// About Data
export const aboutData = {
  name: "Mukesh Cheemakurthi",
  title: "Master of Science in Computer Science",
  location: "Boston, MA",
  email: "cheemakurthi.m@northeastern.edu",
  availability: "May 2025 to Dec 2025",
  education: [
    {
      institution: "Northeastern University | Khoury College of Computer Sciences",
      degree: "Master of Science, Computer Science",
      period: "Sept 2024 – Present",
      coursework: "Foundations of AI, Programming Design Paradigms, Computer Vision, Algorithms",
      gpa: "3.83",
    },
  ],
  skills: [
    {
      category: "Programming",
      items: "Python, Java, C++, TypeScript, JavaScript, Node.js",
    },
    {
      category: "Cloud & DevOps",
      items: "AWS, GCP, Azure, Terraform, GitHub, Docker, Jenkins, Airflow, Kubernetes, Helm, YAML",
    },
    {
      category: "Backend",
      items: "REST APIs, Microservices, Oracle, JSON, MySQL, SOAP, MongoDB, PostgreSQL, Redis",
    },
    {
      category: "AI/ML",
      items: "SciPy, LLMs, AI Agents, BERT, GANs, Embeddings, GPT, Time Series",
    },
    {
      category: "Algorithms",
      items: "Monte-Carlo Search, Local Search, Stochastic modelling, Dynamic Programming",
    },
  ],
  experience: [
    {
      company: "Khoury College of Computer Science",
      location: "Boston, MA, USA",
      position: "Teaching Assistant",
      period: "Sept 2024 – Dec 2024",
      achievements: [
        "Teaching Assistant for \"Programming with Data (Python)\" course with 300+ students",
        "Conduct office hours, assisting 10+ students per session with Python programming & Data science",
      ],
    },
    {
      company: "Walmart Global Tech",
      location: "Bengaluru, KA, India",
      position: "Data Engineer 2",
      period: "July 2022 – Aug 2024",
      achievements: [
        "Developed real-time and large-scale ETL pipelines processing 1TB+ data using Apache Spark and Kafka",
        "Enhanced Cloud parameters reducing pipeline runtime from 8 hours to 1 hour, cutting cloud costs",
        "Integrated 5+ Order Management components and migrated 50+ Data Models from IBM Sterling to GCP",
      ],
    },
    {
      company: "Walmart Global Tech",
      location: "Bengaluru, KA, India",
      position: "Data Scientist (Internship)",
      period: "Jan 2022 – July 2022",
      achievements: [
        "Performed Time-Series analysis to forecast demand patterns, detect seasonality to improve pricing strategy",
        "Utilized XGBoost to predict elasticity coefficients and applied Linear Optimization for demand modelling",
        "Accelerated system components by implementing DFS algorithm, reducing processing time by 99%",
      ],
    },
  ],
};

// Projects Data
export const projectsData = [
  {
    id: 1,
    title: "Neuralis: Personalized Multi-Agent AI Ecosystem",
    description: "Multi-agent AI system managing workflows with specialized agents including calendar, emails. Integrated 10+ APIs for effective communication, achieving 100% efficiency gains in daily tasks. Developed stateful memory, improving user task completion rates by 30%. Leveraged LLMs for context-aware note creation and knowledge extraction in document processing.",
    technologies: ["Langchain", "React", "Stateful AI"],
    date: "Jan 2025",
    link: "#",
    githubLink: "https://github.com/1-mukesh-1",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "Warehouse SLIM Optimisation using Genetic Algorithm",
    description: "Developed evolutionary algorithm to optimize warehouse space layout, reducing storage costs. Designed fitness function evaluating travel distance, picking time, Weight and space utilization metrics. Achieved 40% improvement (WRT Baseline) in retrieval speed through optimized inventory placement. Performed a comparative analysis with Markov Decision Process and Local Search.",
    technologies: ["Python", "Blender 3d"],
    date: "Jan 2025",
    link: "#",
    githubLink: "https://github.com/1-mukesh-1",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "T-shirt Size Estimator",
    description: "Built ML pipeline with 89% accuracy using deep learning to automate body measures of mono images. Incorporated geometric algorithms to improve accuracy from 33% to 80% versus baseline models. Integrated MediaPipe pose detection and PyTorch CNN to enable real-time size recommendations.",
    technologies: ["CNN", "Depth Estimation", "Segmentation"],
    date: "Dec 2024",
    link: "#",
    githubLink: "https://github.com/1-mukesh-1",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
  },
];

// Blog Data
export const blogData = [
  {
    id: 1,
    title: "The Future of AI in Personal Productivity",
    excerpt: "Exploring how AI agents can transform daily task management and productivity.",
    date: "Mar 2025",
    category: "Artificial Intelligence",
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "Understanding Large Language Models: A Deep Dive",
    excerpt: "A comprehensive exploration of how LLMs work and their applications.",
    date: "Feb 2025",
    category: "Machine Learning",
    readTime: "8 min read",
  },
  {
    id: 3,
    title: "Optimizing Data Pipelines for Scale",
    excerpt: "Best practices for building efficient and scalable data engineering solutions.",
    date: "Jan 2025",
    category: "Data Engineering",
    readTime: "6 min read",
  },
];

// Contact Information
export const contactData = {
  email: "cheemakurthi.m@northeastern.edu",
  phone: "+1 (716) 418 9488",
  location: "Boston, MA",
  formEndpoint: "#", // Replace with actual form endpoint if needed
};

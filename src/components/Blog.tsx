
import { useState, useEffect } from "react";
import { Calendar } from "lucide-react";

const Blog = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const blogPosts = [
    {
      id: 1,
      title: "Building Multi-Agent AI Systems: Lessons Learned",
      excerpt: "An in-depth look at the architecture and challenges of building multi-agent AI systems that can effectively collaborate to solve complex tasks.",
      date: "Feb 15, 2025",
      category: "AI & Machine Learning",
      readTime: "8 min read",
    },
    {
      id: 2,
      title: "Optimizing Data Pipelines at Scale",
      excerpt: "Sharing experiences from my time at Walmart Global Tech on building and optimizing data pipelines that handle terabytes of data daily.",
      date: "Jan 22, 2025",
      category: "Data Engineering",
      readTime: "6 min read",
    },
    {
      id: 3,
      title: "The Evolution of Computer Vision: From CNNs to Transformers",
      excerpt: "Exploring the rapid evolution of computer vision techniques and how they've transformed applications like size estimation from images.",
      date: "Dec 10, 2024",
      category: "Computer Vision",
      readTime: "7 min read",
    },
    {
      id: 4,
      title: "Genetic Algorithms: Nature-Inspired Optimization",
      excerpt: "A detailed explanation of how genetic algorithms can be applied to complex optimization problems in logistics and warehouse management.",
      date: "Nov 5, 2024",
      category: "Algorithms",
      readTime: "5 min read",
    },
  ];

  return (
    <div className={`page-container ${isVisible ? "entered" : ""}`}>
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 animate-slide-down">Blog</h1>
        <p className="text-lg text-muted-foreground mb-10 animate-slide-up">
          Thoughts, learnings, and insights from my experience in AI, data
          engineering, and computer science.
        </p>

        <div className="space-y-8">
          {blogPosts.map((post, index) => (
            <div
              key={post.id}
              className={`glass-panel p-6 hover:shadow-lg transition-all hover:translate-y-[-2px] cursor-pointer animate-slide-up subtle-highlight`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-3 text-sm text-muted-foreground mb-3">
                <span className="bg-primary/10 text-primary px-2 py-0.5 rounded-full text-xs">
                  {post.category}
                </span>
                <div className="flex items-center">
                  <Calendar size={14} className="mr-1" />
                  <span>{post.date}</span>
                </div>
                <span>{post.readTime}</span>
              </div>
              
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              <p className="text-muted-foreground">{post.excerpt}</p>
              
              <div className="mt-4">
                <span className="text-sm font-medium hover:text-primary transition-colors">
                  Read more →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;

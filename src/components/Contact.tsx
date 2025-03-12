
import { useState, useEffect } from "react";
import { Send, Github, Linkedin, Mail, MapPin } from "lucide-react";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormState({
        name: "",
        email: "",
        message: "",
      });
      
      // Reset submitted state after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <div className={`page-container ${isVisible ? "entered" : ""}`}>
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 animate-slide-down">Contact</h1>
        <p className="text-lg text-muted-foreground mb-10 animate-slide-up">
          Feel free to reach out for collaborations, opportunities, or just to say hello.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="animate-slide-up">
            <div className="glass-panel p-6">
              <h2 className="text-xl font-semibold mb-6">Get in Touch</h2>
              
              {submitted ? (
                <div className="bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-300 p-4 rounded-md mb-6 animate-fade-in">
                  <p>Thank you for your message! I'll get back to you soon.</p>
                </div>
              ) : null}
              
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="message" className="block text-sm font-medium mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`flex items-center justify-center w-full px-4 py-2 bg-primary text-primary-foreground rounded-md hover:opacity-90 transition-opacity ${
                    isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                  }`}
                >
                  {isSubmitting ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <Send size={16} className="mr-2" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
          
          <div className="animate-slide-in-right">
            <div className="glass-panel p-6 h-full">
              <h2 className="text-xl font-semibold mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-3">
                    Location
                  </h3>
                  <div className="flex items-start">
                    <MapPin size={20} className="mr-2 text-primary" />
                    <span>Boston, MA</span>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-3">
                    Email
                  </h3>
                  <div className="flex items-start">
                    <Mail size={20} className="mr-2 text-primary" />
                    <a 
                      href="mailto:cheemakurthi.m@northeastern.edu"
                      className="hover:text-foreground/80 transition-colors"
                    >
                      cheemakurthi.m@northeastern.edu
                    </a>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-3">
                    Connect
                  </h3>
                  <div className="flex items-center space-x-4">
                    <a
                      href="https://linkedin.com/in/mukesh003/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-secondary rounded-full hover:bg-secondary/70 transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin size={20} />
                    </a>
                    <a
                      href="https://github.com/1-mukesh-1"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-secondary rounded-full hover:bg-secondary/70 transition-colors"
                      aria-label="GitHub"
                    >
                      <Github size={20} />
                    </a>
                    <a
                      href="mailto:cheemakurthi.m@northeastern.edu"
                      className="p-2 bg-secondary rounded-full hover:bg-secondary/70 transition-colors"
                      aria-label="Email"
                    >
                      <Mail size={20} />
                    </a>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-3">
                    Availability
                  </h3>
                  <p className="text-sm">
                    <span className="font-medium">Available for opportunities:</span> May 2025 to Dec 2025
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

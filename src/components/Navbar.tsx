
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when location changes
    setIsMenuOpen(false);
  }, [location]);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md py-3 shadow-sm"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        <Link
          to="/"
          className="text-lg font-medium hover:opacity-80 transition-opacity"
        >
          Mukesh Cheemakurthi
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          <Link
            to="/"
            className={`nav-link ${isActive("/") ? "active" : ""}`}
          >
            About
          </Link>
          <Link
            to="/projects"
            className={`nav-link ${isActive("/projects") ? "active" : ""}`}
          >
            Projects
          </Link>
          <Link
            to="/blog"
            className={`nav-link ${isActive("/blog") ? "active" : ""}`}
          >
            Blog
          </Link>
          <Link
            to="/contact"
            className={`nav-link ${isActive("/contact") ? "active" : ""}`}
          >
            Contact
          </Link>
          <div className="ml-4">
            <ThemeToggle />
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="ml-2 p-2 rounded-md text-foreground"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden animate-fade-in">
          <nav className="flex flex-col items-center py-4 bg-background/95 backdrop-blur-sm">
            <Link
              to="/"
              className={`nav-link py-3 ${isActive("/") ? "active" : ""}`}
            >
              About
            </Link>
            <Link
              to="/projects"
              className={`nav-link py-3 ${
                isActive("/projects") ? "active" : ""
              }`}
            >
              Projects
            </Link>
            <Link
              to="/blog"
              className={`nav-link py-3 ${isActive("/blog") ? "active" : ""}`}
            >
              Blog
            </Link>
            <Link
              to="/contact"
              className={`nav-link py-3 ${
                isActive("/contact") ? "active" : ""
              }`}
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;

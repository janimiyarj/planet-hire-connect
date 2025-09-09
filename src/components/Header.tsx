import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">PH</span>
            </div>
            <span className="text-xl font-bold text-foreground">Planet Hire Services</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/" className="nav-link">Home</a>
            <a href="/about" className="nav-link">About</a>
            <a href="/services" className="nav-link">Services</a>
            <a href="/industries" className="nav-link">Industries</a>
            <a href="/careers" className="nav-link">Careers</a>
            <a href="/contact" className="nav-link">Contact</a>
          </nav>

          {/* CTA Buttons - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" className="btn-corporate">
              Hire Talent
            </Button>
            <Button className="btn-success">
              Explore Jobs
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg hover:bg-secondary transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              <a href="/" className="nav-link">Home</a>
              <a href="/about" className="nav-link">About</a>
              <a href="/services" className="nav-link">Services</a>
              <a href="/industries" className="nav-link">Industries</a>
              <a href="/careers" className="nav-link">Careers</a>
              <a href="/contact" className="nav-link">Contact</a>
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="outline" className="btn-corporate">
                  Hire Talent
                </Button>
                <Button className="btn-success">
                  Explore Jobs
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
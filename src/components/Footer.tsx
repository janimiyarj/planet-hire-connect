import { Mail, Phone, Globe, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm">PH</span>
                </div>
                <span className="text-lg font-bold">Planet Hire Services</span>
              </div>
              <p className="text-sm text-background/80 leading-relaxed">
                Your trusted pan-India staffing and workforce solutions partner, 
                connecting talent with opportunity across industries.
              </p>
              <div className="text-xs text-background/60">
                CIN: U74999TG2022PTC167543
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="/about" className="text-background/80 hover:text-background transition-colors">About Us</a></li>
                <li><a href="/services" className="text-background/80 hover:text-background transition-colors">Services</a></li>
                <li><a href="/industries" className="text-background/80 hover:text-background transition-colors">Industries</a></li>
                <li><a href="/careers" className="text-background/80 hover:text-background transition-colors">Careers</a></li>
                <li><a href="/contact" className="text-background/80 hover:text-background transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Our Services</h3>
              <ul className="space-y-2 text-sm">
                <li className="text-background/80">Permanent Staffing</li>
                <li className="text-background/80">Contract Staffing</li>
                <li className="text-background/80">Executive Search</li>
                <li className="text-background/80">RPO Services</li>
                <li className="text-background/80">Payroll & Compliance</li>
                <li className="text-background/80">Training & Development</li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Contact Us</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-primary" />
                  <span className="text-background/80">dummy@planethireservices.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-success" />
                  <span className="text-background/80">+91-9876543210</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Globe className="w-4 h-4 text-primary" />
                  <span className="text-background/80">Pan-India Presence</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4 pt-4">
                <a href="#" className="text-background/60 hover:text-background transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="text-background/60 hover:text-background transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-background/20 mt-12 pt-8 text-center">
            <p className="text-sm text-background/60">
              © 2024 Planet Hire Services Pvt. Ltd. All rights reserved. | Incorporated in 2022
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
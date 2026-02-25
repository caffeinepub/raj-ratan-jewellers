import { Link } from "@tanstack/react-router";
import { MapPin, Clock, Phone, Mail, Instagram } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border mt-24">
      <div className="container px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* About Column */}
          <div>
            <h3 className="font-serif text-2xl font-bold text-primary mb-4">
              Raj Ratan Jewellers
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Crafting exquisite jewellery in gold, silver, and precious gems since generations. 
              Timeless beauty meets expert craftsmanship.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://wa.me/91XXXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="WhatsApp"
              >
                <SiWhatsapp className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="font-serif text-xl font-semibold mb-4">Quick Links</h3>
            <nav className="flex flex-col space-y-3">
              <Link
                to="/"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                About Us
              </Link>
              <Link
                to="/collections"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Collections
              </Link>
              <Link
                to="/custom-jewellery"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Custom Jewellery
              </Link>
              <Link
                to="/contact"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact Info Column */}
          <div>
            <h3 className="font-serif text-xl font-semibold mb-4">Contact Info</h3>
            <div className="flex flex-col space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Pandey Gali, Roy Road, opposite Miss Universe and Raja Photo Framing, 
                  S B, Deoghar, Jharkhand 814112, India
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-primary shrink-0" />
                <p className="text-muted-foreground text-sm">
                  Open 10:00 AM onwards<br />
                  <span className="text-xs">(Closed on Tuesdays)</span>
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <p className="text-muted-foreground text-sm">+91-XXXXXXXXXX</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <p className="text-muted-foreground text-sm">info@rajratanjewellers.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © 2026. Built with love using{" "}
            <a
              href="https://caffeine.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

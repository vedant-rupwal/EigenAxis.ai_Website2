import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Mail, Phone, MapPin } from 'lucide-react';
function Footer() {
  const currentYear = new Date().getFullYear();
  return <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <span className="text-xl font-bold" style={{
            fontFamily: 'Sora'
          }}>
              EigenAxis<span className="text-accent">.ai</span>
            </span>
            <p className="mt-4 text-sm text-secondary-foreground/80 leading-relaxed">
              Secure. Scalable. Independent. That's the EigenAxis.ai Advantage.
            </p>
          </div>

          <div>
            <span className="font-semibold text-sm uppercase tracking-wider">Navigate</span>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/" className="text-sm text-secondary-foreground/80 hover:text-secondary-foreground transition-all duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="text-sm text-secondary-foreground/80 hover:text-secondary-foreground transition-all duration-200">
                  Solutions
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-secondary-foreground/80 hover:text-secondary-foreground transition-all duration-200">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-secondary-foreground/80 hover:text-secondary-foreground transition-all duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <span className="font-semibold text-sm uppercase tracking-wider">Legal</span>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/privacy" className="text-sm text-secondary-foreground/80 hover:text-secondary-foreground transition-all duration-200">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-sm text-secondary-foreground/80 hover:text-secondary-foreground transition-all duration-200">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-secondary-foreground/80 hover:text-secondary-foreground transition-all duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <span className="font-semibold text-sm uppercase tracking-wider">Connect</span>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="mailto:contact@eigenaxis.ai" className="text-sm text-secondary-foreground/80 hover:text-secondary-foreground transition-all duration-200 flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  contact@eigenaxis.ai
                </a>
              </li>
              <li>
                <a href="tel:+919100345022" className="text-sm text-secondary-foreground/80 hover:text-secondary-foreground transition-all duration-200 flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  +91 9100345022
                </a>
              </li>
              <li>
                <a href="https://linkedin.com/company/eigenaxisai" target="_blank" rel="noopener noreferrer" className="text-sm text-secondary-foreground/80 hover:text-secondary-foreground transition-all duration-200 flex items-center gap-2">
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 pt-8">
          <p className="text-sm text-secondary-foreground/70 text-center">
            Copyright © {currentYear} EigenAxis.ai LLP. All rights reserved.
          </p>
        </div>
      </div>
    </footer>;
}
export default Footer;
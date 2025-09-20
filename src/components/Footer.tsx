import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Firm Info */}
          <div className="col-span-1 lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4">The Brinton Firm</h3>
            <p className="text-gray-300 mb-6 text-lg leading-relaxed">
              Southern California's premier tenant rights law firm. We represent tenants only, never landlords. 
              Fighting for your housing rights with championship-level results.
            </p>
            <div className="flex flex-col space-y-3">
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-accent" />
                <a href="tel:+1234567890" className="text-white hover:text-accent transition-colors font-semibold">
                  (123) 456-7890
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-accent" />
                <a href="mailto:info@brintonfirm.com" className="text-white hover:text-accent transition-colors">
                  info@brintonfirm.com
                </a>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-3 text-accent" />
                <span className="text-gray-300">Los Angeles, CA</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-3 text-accent" />
                <span className="text-gray-300">Available 24/7 for Emergencies</span>
              </div>
            </div>
          </div>

          {/* Practice Areas */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Practice Areas</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/services/harassment" className="text-gray-300 hover:text-accent transition-colors">
                  Landlord Harassment
                </Link>
              </li>
              <li>
                <Link to="/services/unsafe-conditions" className="text-gray-300 hover:text-accent transition-colors">
                  Unsafe Housing
                </Link>
              </li>
              <li>
                <Link to="/services/wrongful-eviction" className="text-gray-300 hover:text-accent transition-colors">
                  Wrongful Eviction
                </Link>
              </li>
              <li>
                <Link to="/services/security-deposit" className="text-gray-300 hover:text-accent transition-colors">
                  Security Deposits
                </Link>
              </li>
              <li>
                <Link to="/services/rent-control" className="text-gray-300 hover:text-accent transition-colors">
                  Rent Control
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/results" className="text-gray-300 hover:text-accent transition-colors">
                  Case Results
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-accent transition-colors">
                  About Our Team
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-accent transition-colors">
                  Tenant Rights Guide
                </Link>
              </li>
              <li>
                <Link to="/espanol" className="text-gray-300 hover:text-accent transition-colors">
                  En Español
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-accent transition-colors">
                  Free Consultation
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 lg:mb-0">
              © 2025 The Brinton Firm. All rights reserved. | Attorney Advertising
            </div>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy" className="text-gray-400 hover:text-accent transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-accent transition-colors">
                Terms of Service
              </Link>
              <Link to="/sitemap" className="text-gray-400 hover:text-accent transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
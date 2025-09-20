import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const services = [
    { name: 'Landlord Harassment', path: '/services/harassment' },
    { name: 'Unsafe Housing Conditions', path: '/services/unsafe-conditions' },
    { name: 'Wrongful Eviction', path: '/services/wrongful-eviction' },
    { name: 'Security Deposit Recovery', path: '/services/security-deposit' },
    { name: 'Rent Control Violations', path: '/services/rent-control' },
  ];

  return (
    <>
      <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <div className="text-2xl font-bold text-primary">
                The Brinton Firm
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <Link to="/" className="text-gray-700 hover:text-primary transition-colors font-medium">
                Home
              </Link>
              
              <div className="relative">
                <button
                  className="flex items-center text-gray-700 hover:text-primary transition-colors font-medium"
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  onBlur={() => setTimeout(() => setIsServicesOpen(false), 150)}
                >
                  Practice Areas
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                
                {isServicesOpen && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-50">
                    {services.map((service, index) => (
                      <Link
                        key={index}
                        to={service.path}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors"
                        onClick={() => setIsServicesOpen(false)}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link to="/results" className="text-gray-700 hover:text-primary transition-colors font-medium">
                Results
              </Link>
              <Link to="/about" className="text-gray-700 hover:text-primary transition-colors font-medium">
                About Our Team
              </Link>
              <Link to="/blog" className="text-gray-700 hover:text-primary transition-colors font-medium">
                Tenant Rights
              </Link>
              <Link to="/espanol" className="text-gray-700 hover:text-primary transition-colors font-medium">
                Español
              </Link>
            </nav>

            {/* Contact Info & CTA */}
            <div className="hidden lg:flex items-center space-x-4">
              <a
                href="tel:+1234567890"
                className="flex items-center text-primary hover:text-accent transition-colors font-semibold"
              >
                <Phone className="h-4 w-4 mr-2" />
                (123) 456-7890
              </a>
              <button className="btn-primary">
                Get Help Now
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-100">
              <Link
                to="/"
                className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              
              {services.map((service, index) => (
                <Link
                  key={index}
                  to={service.path}
                  className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors text-sm"
                  onClick={() => setIsOpen(false)}
                >
                  {service.name}
                </Link>
              ))}

              <Link
                to="/results"
                className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                Results
              </Link>
              <Link
                to="/about"
                className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                About Our Team
              </Link>
              <Link
                to="/blog"
                className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                Tenant Rights
              </Link>
              <Link
                to="/espanol"
                className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                Español
              </Link>
              
              <div className="px-3 py-4 border-t border-gray-100">
                <a
                  href="tel:+1234567890"
                  className="flex items-center text-primary hover:text-accent transition-colors font-semibold mb-3"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  (123) 456-7890
                </a>
                <button className="btn-primary w-full">
                  Get Help Now
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Sticky Contact Button for Mobile */}
      <div className="lg:hidden fixed bottom-4 right-4 z-50">
        <a
          href="tel:+1234567890"
          className="bg-accent text-white p-4 rounded-full shadow-lg hover:bg-accent/90 transition-all transform hover:scale-105"
        >
          <Phone className="h-6 w-6" />
        </a>
      </div>
    </>
  );
};

export default Header;
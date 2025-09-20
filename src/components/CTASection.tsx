import React from 'react';
import { Phone, Clock, Shield, CheckCircle } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary via-primary to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready to Fight for Your Rights?
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Don't let landlords take advantage of you. Get the championship-level legal team 
            you deserve. Free consultation, no upfront fees, tenants only.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Contact Form */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold mb-6">Get Your Free Consultation</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:border-accent focus:bg-white/30 transition-all"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:border-accent focus:bg-white/30 transition-all"
                />
              </div>
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:border-accent focus:bg-white/30 transition-all"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:border-accent focus:bg-white/30 transition-all"
              />
              <select className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white focus:outline-none focus:border-accent focus:bg-white/30 transition-all">
                <option value="">Select Your Issue</option>
                <option value="harassment">Landlord Harassment</option>
                <option value="unsafe">Unsafe Housing</option>
                <option value="eviction">Wrongful Eviction</option>
                <option value="deposit">Security Deposit</option>
                <option value="rent-control">Rent Control</option>
                <option value="other">Other</option>
              </select>
              <textarea
                rows={4}
                placeholder="Tell us about your situation..."
                className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:border-accent focus:bg-white/30 transition-all resize-none"
              ></textarea>
              <button type="submit" className="btn-accent w-full text-lg py-4">
                Get Free Consultation
              </button>
            </form>
            <p className="text-sm text-gray-300 mt-4 text-center">
              Free consultation • No upfront fees • Confidential
            </p>
          </div>

          {/* Right Column - Benefits & Contact */}
          <div>
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-accent mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-semibold mb-2">No Upfront Fees</h4>
                  <p className="text-gray-200">We only get paid when you win. No risk to you.</p>
                </div>
              </div>

              <div className="flex items-start">
                <Shield className="h-6 w-6 text-accent mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-semibold mb-2">Tenants Only</h4>
                  <p className="text-gray-200">100% tenant advocacy. We never represent landlords.</p>
                </div>
              </div>

              <div className="flex items-start">
                <Clock className="h-6 w-6 text-accent mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-semibold mb-2">24/7 Emergency Support</h4>
                  <p className="text-gray-200">Urgent housing issues can't wait. We're here when you need us.</p>
                </div>
              </div>
            </div>

            <div className="bg-accent rounded-xl p-6 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Call Now for Immediate Help</h3>
              <a
                href="tel:+1234567890"
                className="flex items-center justify-center text-white hover:text-gray-200 transition-colors"
              >
                <Phone className="h-8 w-8 mr-3" />
                <span className="text-3xl font-bold">(123) 456-7890</span>
              </a>
              <p className="text-white/90 mt-3">Available 24/7 for housing emergencies</p>
            </div>

            <div className="mt-6 text-center">
              <p className="text-gray-300">
                <strong>Habla Español:</strong> Consulta gratis en español
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
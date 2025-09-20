import React from 'react';
import { Phone, Shield, Users, Award } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-primary via-primary to-gray-800 text-white py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Main Message */}
          <div>
            <div className="flex items-center mb-6">
              <Shield className="h-8 w-8 text-accent mr-3" />
              <span className="text-accent font-semibold text-lg">Tenants Only • No Upfront Fees</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
              Your Rights.
              <span className="text-accent block">Our Fight.</span>
            </h1>
            
            <p className="text-xl lg:text-2xl leading-relaxed mb-8 text-gray-200">
              Southern California's championship-level team fighting for tenant rights. 
              We take on landlord harassment, unsafe housing, wrongful evictions, and more.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="btn-accent text-lg px-8 py-4 flex items-center justify-center">
                <Phone className="h-5 w-5 mr-2" />
                Get Help Now - Free Consultation
              </button>
              <button className="btn-outline-white text-lg px-8 py-4">
                Learn Your Rights
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">$50M+</div>
                <div className="text-sm text-gray-300">Recovered for Tenants</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">500+</div>
                <div className="text-sm text-gray-300">Cases Won</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">15+</div>
                <div className="text-sm text-gray-300">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Right Column - Features/Benefits */}
          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-start">
                <Users className="h-8 w-8 text-accent mr-4 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Team Approach</h3>
                  <p className="text-gray-200">
                    Our collaborative team of experienced attorneys work together on every case, 
                    giving you the full power of our firm.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-start">
                <Shield className="h-8 w-8 text-accent mr-4 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Tenants Only</h3>
                  <p className="text-gray-200">
                    We never represent landlords. Our loyalty is 100% with tenants, 
                    giving you confidence in our advocacy.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-start">
                <Award className="h-8 w-8 text-accent mr-4 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Proven Results</h3>
                  <p className="text-gray-200">
                    Championship-level outcomes with millions recovered for tenants 
                    across Southern California.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
import React from 'react';
import { Users, Award, Scale, Heart } from 'lucide-react';

const TeamSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Team Image Placeholder */}
          <div className="order-2 lg:order-1">
            <div className="bg-gradient-to-br from-primary to-gray-700 rounded-2xl p-8 text-white min-h-[500px] flex items-center justify-center">
              <div className="text-center">
                <Users className="h-24 w-24 text-accent mx-auto mb-6" />
                <h3 className="text-2xl font-bold mb-4">Our Championship Team</h3>
                <p className="text-gray-200 text-lg leading-relaxed">
                  Professional team photo showcasing our collaborative approach to tenant advocacy - 
                  diverse, experienced attorneys working together for your rights.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Team Info */}
          <div className="order-1 lg:order-2">
            <div className="flex items-center mb-6">
              <Users className="h-8 w-8 text-accent mr-3" />
              <span className="text-accent font-semibold text-lg">Meet Our Team</span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
              The LA Dodgers of Law
            </h2>

            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Like a championship baseball team, we believe in the power of collaboration. 
              Every case benefits from our collective expertise, with seasoned attorneys 
              working together to achieve the best possible outcome for every client.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start">
                <Award className="h-6 w-6 text-accent mr-3 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Proven Track Record</h4>
                  <p className="text-gray-600 text-sm">15+ years of combined experience with hundreds of successful cases</p>
                </div>
              </div>

              <div className="flex items-start">
                <Scale className="h-6 w-6 text-accent mr-3 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Legal Excellence</h4>
                  <p className="text-gray-600 text-sm">Board-certified specialists in tenant rights and housing law</p>
                </div>
              </div>

              <div className="flex items-start">
                <Heart className="h-6 w-6 text-accent mr-3 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Community Focus</h4>
                  <p className="text-gray-600 text-sm">Deep roots in Southern California with multilingual support</p>
                </div>
              </div>

              <div className="flex items-start">
                <Users className="h-6 w-6 text-accent mr-3 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Team Approach</h4>
                  <p className="text-gray-600 text-sm">Multiple attorneys collaborate on every case for maximum impact</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <blockquote className="text-lg text-gray-700 italic mb-4">
                "We don't just represent individual tenants—we fight for entire communities. 
                When you hire The Brinton Firm, you get our entire team's dedication and expertise."
              </blockquote>
              <div className="font-semibold text-primary">
                — The Brinton Firm Legal Team
              </div>
            </div>

            <div className="mt-8">
              <button className="btn-primary text-lg px-8 py-4 mr-4">
                Meet the Team
              </button>
              <button className="btn-outline text-lg px-8 py-4">
                Our Approach
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
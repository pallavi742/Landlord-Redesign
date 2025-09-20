import React from 'react';
import { Link } from 'react-router-dom';
import { AlertTriangle, Home, FileX, DollarSign, Scale, ChevronRight } from 'lucide-react';

const PracticeAreasSection = () => {
  const practiceAreas = [
    {
      title: 'Landlord Harassment',
      description: 'Stop intimidation, threats, and illegal tactics used to force you out of your home.',
      icon: AlertTriangle,
      link: '/services/harassment',
      features: ['Threats & intimidation', 'Illegal entry', 'Utility shutoffs', 'Retaliation'],
    },
    {
      title: 'Unsafe Housing Conditions',
      description: 'Hold landlords accountable for mold, pests, structural damage, and health hazards.',
      icon: Home,
      link: '/services/unsafe-conditions',
      features: ['Mold & water damage', 'Pest infestations', 'Structural issues', 'Code violations'],
    },
    {
      title: 'Wrongful Eviction',
      description: 'Protect your rights when facing illegal eviction attempts or improper procedures.',
      icon: FileX,
      link: '/services/wrongful-eviction',
      features: ['Illegal notices', 'Retaliatory eviction', 'Discrimination', 'Procedural violations'],
    },
    {
      title: 'Security Deposit Recovery',
      description: 'Get your deposit back when landlords illegally withhold your money.',
      icon: DollarSign,
      link: '/services/security-deposit',
      features: ['Illegal deductions', 'No itemization', 'Excessive charges', 'Bad faith claims'],
    },
    {
      title: 'Rent Control Violations',
      description: 'Enforce rent stabilization laws and fight illegal rent increases.',
      icon: Scale,
      link: '/services/rent-control',
      features: ['Illegal increases', 'Improper notices', 'Rent stabilization', 'Ellis Act violations'],
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
            We Fight for Every Tenant Right
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From harassment to unsafe conditions, we handle every aspect of tenant law with 
            the expertise and determination your case deserves.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {practiceAreas.map((area, index) => {
            const Icon = area.icon;
            return (
              <Link
                key={index}
                to={area.link}
                className="group bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 hover:border-accent/20"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-6 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                  <Icon className="h-8 w-8 text-accent group-hover:text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-primary mb-4 group-hover:text-accent transition-colors">
                  {area.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {area.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {area.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-gray-500 flex items-center">
                      <ChevronRight className="h-4 w-4 text-accent mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="flex items-center text-accent font-semibold group-hover:text-primary transition-colors">
                  Learn More
                  <ChevronRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 mb-6">
            Don't see your specific issue? We handle all aspects of tenant law.
          </p>
          <button className="btn-primary text-lg px-8 py-4">
            Get Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default PracticeAreasSection;
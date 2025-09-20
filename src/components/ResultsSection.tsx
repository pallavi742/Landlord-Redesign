import React from 'react';
import { TrendingUp, Home, Shield, DollarSign } from 'lucide-react';

const ResultsSection = () => {
  const results = [
    {
      amount: '$2.8M',
      case: 'Unsafe Housing Settlement',
      description: 'Family exposed to toxic mold received full compensation plus relocation costs',
      icon: Home,
    },
    {
      amount: '$1.5M',
      case: 'Wrongful Eviction Victory',
      description: 'Elderly tenant wrongfully evicted wins damages and legal fees',
      icon: Shield,
    },
    {
      amount: '$950K',
      case: 'Landlord Harassment Case',
      description: 'Multiple tenants harassed for organizing - full building compensation',
      icon: TrendingUp,
    },
    {
      amount: '$750K',
      case: 'Security Deposit Class Action',
      description: 'Recovered illegally withheld deposits for 200+ tenants',
      icon: DollarSign,
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
            Championship-Level Results
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We don't just fight for tenants—we win. Here are some of our recent victories 
            that show the power of having the right team on your side.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {results.map((result, index) => {
            const Icon = result.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-accent/10 rounded-full mb-4">
                  <Icon className="h-6 w-6 text-accent" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{result.amount}</div>
                <div className="text-lg font-semibold text-gray-900 mb-3">{result.case}</div>
                <p className="text-gray-600 text-sm leading-relaxed">{result.description}</p>
              </div>
            );
          })}
        </div>

        {/* Summary Stats */}
        <div className="bg-primary rounded-2xl p-8 lg:p-12 text-white text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl lg:text-5xl font-bold text-accent mb-2">$50M+</div>
              <div className="text-lg text-gray-200">Total Recovered for Tenants</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold text-accent mb-2">98%</div>
              <div className="text-lg text-gray-200">Success Rate</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold text-accent mb-2">500+</div>
              <div className="text-lg text-gray-200">Cases Won</div>
            </div>
          </div>
          <div className="mt-8">
            <button className="btn-accent text-lg px-8 py-4">
              See All Results
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
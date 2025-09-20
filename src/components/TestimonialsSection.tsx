import React from 'react';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Maria Gonzalez',
      case: 'Unsafe Housing Victory',
      rating: 5,
      text: "My family lived with mold for months and the landlord ignored us. The Brinton Firm didn't just get us compensation—they got us a safe home and held the landlord accountable. They treated us with dignity when we felt powerless.",
      result: '$850K Settlement',
    },
    {
      name: 'James Chen',
      case: 'Wrongful Eviction Defense',
      rating: 5,
      text: "When my landlord tried to evict me illegally to raise the rent, I thought I had no chance. The team at Brinton fought hard and not only saved my home but got me damages. They actually care about tenants, not just winning cases.",
      result: 'Eviction Dismissed + $45K',
    },
    {
      name: 'Rosa Martinez',
      case: 'Landlord Harassment',
      rating: 5,
      text: "The harassment from my landlord was affecting my health and my children's wellbeing. Brinton Firm stood up to the bullying and made it stop. Now we can live in peace, and other tenants in our building are protected too.",
      result: '$320K Settlement',
    },
    {
      name: 'David Kim',
      case: 'Security Deposit Recovery',
      rating: 5,
      text: "I never thought I'd see my security deposit again after my landlord made up fake charges. The Brinton team not only got my deposit back but triple damages. They know the law inside and out.",
      result: '$12K Recovered',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
            Real Clients, Real Results
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Hear from the tenants whose lives we've changed 
            and whose rights we've protected across Southern California.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-8 hover:bg-gray-100 transition-colors duration-300 border border-gray-200 relative"
            >
              <Quote className="h-8 w-8 text-accent mb-4" />
              
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-accent fill-current" />
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed mb-6 text-lg italic">
                "{testimonial.text}"
              </p>

              <div className="border-t border-gray-300 pt-6">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="font-semibold text-primary text-lg">
                      {testimonial.name}
                    </div>
                    <div className="text-gray-600">{testimonial.case}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-accent font-bold text-lg">
                      {testimonial.result}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="bg-primary rounded-2xl p-8 lg:p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-6">Why Tenants Trust Us</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl font-bold text-accent mb-2">4.9/5</div>
              <div className="text-gray-200">Average Client Rating</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">100%</div>
              <div className="text-gray-200">Tenant-Only Practice</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">24/7</div>
              <div className="text-gray-200">Emergency Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
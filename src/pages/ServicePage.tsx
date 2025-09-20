import React from 'react';
import { useParams } from 'react-router-dom';
import { AlertTriangle, Home, FileX, DollarSign, Scale, Phone, CheckCircle, ChevronRight } from 'lucide-react';

const ServicePage = () => {
  const { serviceType } = useParams();

  const serviceData = {
    'harassment': {
      title: 'Landlord Harassment',
      icon: AlertTriangle,
      hero: 'Stop Landlord Intimidation & Harassment',
      description: 'Landlords have no right to threaten, intimidate, or harass you. We hold them accountable and protect your peace of mind.',
      issues: [
        'Threats and intimidation tactics',
        'Illegal entry into your home',
        'Shutting off utilities to force you out',
        'Harassment for organizing with other tenants',
        'Retaliation for requesting repairs',
        'Discriminatory treatment',
      ],
      results: [
        { case: 'Family Harassment Case', amount: '$750K', description: 'Landlord harassed family for organizing tenant union' },
        { case: 'Utility Shutoff Victory', amount: '$425K', description: 'Elderly tenant had power shut off illegally' },
        { case: 'Retaliation Settlement', amount: '$280K', description: 'Harassment after requesting mold remediation' },
      ],
      faqs: [
        {
          question: 'What counts as landlord harassment?',
          answer: 'Harassment includes threats, intimidation, excessive phone calls, illegal entry, utility shutoffs, and any behavior designed to make you move out or stop exercising your tenant rights.'
        },
        {
          question: 'Can my landlord enter my apartment whenever they want?',
          answer: 'No. Landlords must give proper notice (usually 24 hours) except for emergencies. Repeated illegal entries constitute harassment.'
        },
        {
          question: 'What if my landlord is retaliating against me for complaining?',
          answer: 'Retaliation is illegal. If a landlord harasses you after you complain about conditions or exercise tenant rights, you have a strong case for damages.'
        },
      ],
    },
    'unsafe-conditions': {
      title: 'Unsafe Housing Conditions',
      icon: Home,
      hero: 'Fight Back Against Dangerous Living Conditions',
      description: 'You deserve a safe, healthy home. We force negligent landlords to fix problems and compensate you for the harm caused.',
      issues: [
        'Toxic mold and water damage',
        'Pest infestations (rats, roaches, bedbugs)',
        'Structural damage and safety hazards',
        'Broken heating, plumbing, or electrical systems',
        'Lead paint exposure',
        'Building code violations',
      ],
      results: [
        { case: 'Mold Exposure Settlement', amount: '$2.8M', description: 'Family suffered health issues from toxic mold exposure' },
        { case: 'Structural Damage Victory', amount: '$1.2M', description: 'Ceiling collapse injured tenant' },
        { case: 'Pest Infestation Case', amount: '$650K', description: 'Severe bedbug infestation affected entire building' },
      ],
      faqs: [
        {
          question: 'How long does my landlord have to fix problems?',
          answer: 'Emergency repairs (no heat, water, electricity) must be fixed immediately. Other repairs typically have 30 days, but serious health hazards require faster action.'
        },
        {
          question: 'Can I withhold rent for unsafe conditions?',
          answer: 'California law allows rent withholding for uninhabitable conditions, but it must be done properly. We guide you through the legal process to protect your rights.'
        },
        {
          question: 'What compensation can I get for unsafe conditions?',
          answer: 'You may recover damages for health problems, temporary housing costs, damaged belongings, reduced rent value, and pain and suffering.'
        },
      ],
    },
    'wrongful-eviction': {
      title: 'Wrongful Eviction Defense',
      icon: FileX,
      hero: 'Protect Your Home from Illegal Evictions',
      description: 'Many evictions violate tenant rights. We fight improper eviction attempts and help you stay in your home or recover damages.',
      issues: [
        'Improper notice or eviction procedures',
        'Retaliatory evictions for complaining',
        'Discrimination-based evictions',
        'Ellis Act abuse and wrongful owner move-ins',
        'Rent control violations',
        'Evictions without just cause',
      ],
      results: [
        { case: 'Retaliatory Eviction Victory', amount: '$1.5M', description: 'Elderly tenant wrongfully evicted for organizing' },
        { case: 'Discrimination Case', amount: '$875K', description: 'Family evicted due to children and ethnicity' },
        { case: 'Ellis Act Violation', amount: '$550K', description: 'Fake owner move-in to raise rent' },
      ],
      faqs: [
        {
          question: 'Can my landlord evict me without cause?',
          answer: 'In rent-controlled areas and under AB 1482, landlords need "just cause" to evict tenants. No-cause evictions are often illegal and we can fight them.'
        },
        {
          question: 'What if I received an eviction notice but think it\'s wrong?',
          answer: 'Don\'t ignore it, but don\'t panic. Many eviction notices are legally defective. We can review your notice and help you respond properly.'
        },
        {
          question: 'Can I get compensation if I was wrongfully evicted?',
          answer: 'Yes. Wrongful eviction can result in damages for moving costs, rent increases, emotional distress, and even punitive damages.'
        },
      ],
    },
    'security-deposit': {
      title: 'Security Deposit Recovery',
      icon: DollarSign,
      hero: 'Get Your Security Deposit Back',
      description: 'Landlords routinely steal security deposits through fake charges and illegal deductions. We recover your money and more.',
      issues: [
        'Illegal deductions for normal wear and tear',
        'Failure to provide itemized deduction list',
        'Excessive or fabricated repair charges',
        'Not returning deposits within 21 days',
        'Bad faith deposit retention',
        'Charging for pre-existing damage',
      ],
      results: [
        { case: 'Class Action Settlement', amount: '$950K', description: 'Recovered deposits for 200+ tenants illegally charged' },
        { case: 'Bad Faith Retention', amount: '$175K', description: 'Landlord kept deposit for normal wear and tear' },
        { case: 'Excessive Charges Case', amount: '$85K', description: 'Tenant charged 10x actual repair costs' },
      ],
      faqs: [
        {
          question: 'How long does my landlord have to return my deposit?',
          answer: 'California law requires landlords to return deposits within 21 days, along with an itemized list of any deductions.'
        },
        {
          question: 'What can landlords legally deduct from my deposit?',
          answer: 'Only unpaid rent and repair costs beyond normal wear and tear. They cannot charge for painting after 3 years or carpet replacement after 10 years.'
        },
        {
          question: 'What if my landlord won\'t return my deposit?',
          answer: 'If your landlord illegally withholds your deposit, you may be entitled to up to three times the deposit amount plus attorney fees.'
        },
      ],
    },
    'rent-control': {
      title: 'Rent Control & Stabilization',
      icon: Scale,
      hero: 'Enforce Rent Control Laws',
      description: 'Rent control protects tenants from excessive increases. We ensure landlords follow the law and recover illegal overcharges.',
      issues: [
        'Illegal rent increases above allowed amounts',
        'Improper rent increase notices',
        'Capital improvement passthrough violations',
        'Costa-Hawkins Act violations',
        'Ellis Act abuse and wrongful relocations',
        'Rent overcharges and recovery',
      ],
      results: [
        { case: 'Rent Overcharge Recovery', amount: '$425K', description: 'Illegal increases collected over 5 years' },
        { case: 'Ellis Act Violation', amount: '$350K', description: 'Fake condo conversion to avoid rent control' },
        { case: 'Capital Improvement Fraud', amount: '$200K', description: 'Illegal charges for cosmetic improvements' },
      ],
      faqs: [
        {
          question: 'How much can my landlord raise my rent?',
          answer: 'It depends on local rent control laws and AB 1482. Increases are typically limited to 5-10% per year, with 30-60 day notice required.'
        },
        {
          question: 'What is the Ellis Act and how does it affect me?',
          answer: 'The Ellis Act allows landlords to evict all tenants to go out of the rental business, but it\'s often abused. We can help determine if your Ellis Act eviction is legitimate.'
        },
        {
          question: 'Can I get money back for illegal rent increases?',
          answer: 'Yes. If you paid illegal rent increases, you can recover the overcharges plus interest and attorney fees going back several years.'
        },
      ],
    },
  };

  const service = serviceData[serviceType as keyof typeof serviceData];

  if (!service) {
    return <div>Service not found</div>;
  }

  const Icon = service.icon;

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary to-gray-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <Icon className="h-8 w-8 text-accent mr-3" />
                <span className="text-accent font-semibold text-lg">{service.title}</span>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
                {service.hero}
              </h1>
              
              <p className="text-xl leading-relaxed mb-8 text-gray-200">
                {service.description}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="btn-accent text-lg px-8 py-4 flex items-center justify-center">
                  <Phone className="h-5 w-5 mr-2" />
                  Free Consultation
                </button>
                <button className="btn-outline-white text-lg px-8 py-4">
                  See Our Results
                </button>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-6">Common Issues We Handle</h3>
              <ul className="space-y-3">
                {service.issues.map((issue, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-200">{issue}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
              Recent {service.title} Results
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These victories show what's possible when you have the right legal team fighting for you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {service.results.map((result, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-3xl font-bold text-primary mb-3">{result.amount}</div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">{result.case}</h4>
                <p className="text-gray-600">{result.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Get answers to common questions about {service.title.toLowerCase()}.
            </p>
          </div>

          <div className="space-y-8">
            {service.faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-8">
                <h3 className="text-xl font-semibold text-primary mb-4 flex items-start">
                  <ChevronRight className="h-6 w-6 text-accent mr-2 mt-0.5 flex-shrink-0" />
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg pl-8">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Fight Back?
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Don't let landlords take advantage of you. Get the legal help you deserve.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-accent text-lg px-8 py-4">
              Get Free Consultation
            </button>
            <a
              href="tel:+1234567890"
              className="btn-outline-white text-lg px-8 py-4 flex items-center justify-center"
            >
              <Phone className="h-5 w-5 mr-2" />
              Call (123) 456-7890
            </a>
          </div>
          
          <p className="text-gray-300 mt-6">
            No upfront fees • Tenants only • Available 24/7
          </p>
        </div>
      </section>
    </div>
  );
};

export default ServicePage;
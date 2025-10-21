import { Check, Sparkles, Zap, Crown } from 'lucide-react';
import Footer from '../components/Footer';

export default function PricingPage() {
  const plans = [
    {
      name: 'Free',
      price: '$0',
      period: '/month',
      description: 'Perfect for getting started with basic maternal care',
      icon: <Sparkles className="w-8 h-8" />,
      features: [
        'Basic embryo tracking',
        'Health monitoring dashboard',
        'AI chatbot access (limited)',
        'Weekly newsletter',
        'Email support',
        'Mobile app access',
        'Community forum access',
      ],
      color: 'from-gray-400 to-gray-500',
      bgGradient: 'from-gray-50 to-gray-100',
      popular: false,
    },
    {
      name: 'Standard',
      price: '$29',
      period: '/month',
      description: 'Most popular for comprehensive maternal support',
      icon: <Zap className="w-8 h-8" />,
      features: [
        'All Free features',
        'Unlimited AI chatbot access',
        'Telemedicine consultations (2/month)',
        'Chat with doctor messaging',
        'Advanced health analytics',
        'Calendar & reminder system',
        'Personalized music playlists',
        'Medicine & vaccine tracker',
        'Priority email support',
        '1 family member account',
      ],
      color: 'from-rose-500 to-pink-500',
      bgGradient: 'from-rose-50 to-pink-50',
      popular: true,
    },
    {
      name: 'Premium',
      price: '$59',
      period: '/month',
      description: 'Complete care with unlimited access to all features',
      icon: <Crown className="w-8 h-8" />,
      features: [
        'All Standard features',
        'Unlimited telemedicine consultations',
        'IoT device integration',
        'Advanced data analysis & reports',
        'Personalized care plan',
        'Dedicated care coordinator',
        '24/7 priority support',
        'Up to 5 family member accounts',
        'Export health records',
        'Early access to new features',
        'Monthly wellness webinars',
      ],
      color: 'from-purple-500 to-pink-500',
      bgGradient: 'from-purple-50 to-pink-50',
      popular: false,
    },
  ];

  const faqs = [
    {
      question: 'Can I switch plans later?',
      answer:
        'Yes! You can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.',
    },
    {
      question: 'Is there a free trial?',
      answer:
        'All paid plans come with a 14-day free trial. No credit card required to start.',
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, debit cards, and PayPal.',
    },
    {
      question: 'Can I cancel anytime?',
      answer:
        'Absolutely! You can cancel your subscription at any time with no cancellation fees.',
    },
    {
      question: 'Do you offer refunds?',
      answer:
        'We offer a 30-day money-back guarantee if you are not satisfied with our service.',
    },
    {
      question: 'Are family member accounts included?',
      answer:
        'Free plan includes 1 account, Standard includes 1 additional family member, and Premium includes up to 5 family members.',
    },
  ];

  return (
    <div className="pt-20">
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-100/50 via-rose-100/30 to-purple-100/50 dark:from-pink-900/20 dark:via-rose-900/10 dark:to-purple-900/20"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-2 bg-rose-100 dark:bg-rose-900/30 rounded-full">
              <span className="text-rose-600 dark:text-rose-400 font-semibold text-sm">
                Flexible Pricing
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Choose Your <span className="text-gradient">Perfect Plan</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Simple, transparent pricing that grows with your needs. All plans include our core
              features.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`bg-white dark:bg-gray-800 rounded-3xl p-8 card-shadow hover-lift relative ${
                  plan.popular ? 'ring-2 ring-rose-500 md:scale-105 md:-mt-4 md:mb-4' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-rose-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${plan.color} rounded-2xl flex items-center justify-center mx-auto mb-4 text-white shadow-lg`}
                  >
                    {plan.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
                    {plan.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-6">
                    {plan.description}
                  </p>
                  <div className="flex items-end justify-center mb-2">
                    <span className="text-5xl font-bold text-gradient">{plan.price}</span>
                    <span className="text-gray-600 dark:text-gray-400 ml-2 mb-2">
                      {plan.period}
                    </span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <div
                        className={`w-5 h-5 bg-gradient-to-br ${plan.color} rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-0.5`}
                      >
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-gray-600 dark:text-gray-400 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-4 rounded-full font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-rose-500 to-pink-500 text-white hover:shadow-xl hover-lift'
                      : 'bg-gradient-to-br ' +
                        plan.bgGradient +
                        ' text-gray-900 dark:text-white hover:shadow-lg'
                  }`}
                >
                  {plan.price === '$0' ? 'Get Started Free' : 'Start Free Trial'}
                </button>
              </div>
            ))}
          </div>

          <div className="text-center mb-16">
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              All paid plans include a 14-day free trial • No credit card required • Cancel anytime
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500 dark:text-gray-500">
              <div className="flex items-center">
                <Check className="w-4 h-4 mr-2 text-rose-500" />
                30-day money-back guarantee
              </div>
              <div className="flex items-center">
                <Check className="w-4 h-4 mr-2 text-rose-500" />
                HIPAA compliant
              </div>
              <div className="flex items-center">
                <Check className="w-4 h-4 mr-2 text-rose-500" />
                24/7 customer support
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-rose-50 to-pink-50 dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Everything you need to know about our pricing
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 card-shadow hover-lift"
              >
                <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">
                  {faq.question}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 dark:text-gray-400 mb-4">Still have questions?</p>
            <button className="px-8 py-3 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-full hover:shadow-xl transition-all duration-300 font-semibold hover-lift">
              Contact Our Team
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

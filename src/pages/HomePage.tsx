import {
  Heart,
  Activity,
  Bot,
  Video,
  MessageCircle,
  Calendar,
  Mail,
  Music,
  Pill,
  BarChart3,
  Cpu,
  Baby,
  Shield,
  Users,
  Award,
  ArrowRight,
} from 'lucide-react';
import Footer from '../components/Footer';

type Page = 'landing' | 'home' | 'about' | 'features' | 'pricing' | 'signin' | 'signup' | 'dashboard';

interface HomePageProps {
  onNavigate: (page: Page) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  const features = [
    {
      icon: <Baby className="w-8 h-8" />,
      title: 'Embryo Tracking',
      description: 'Monitor your baby development with precision tracking and milestone alerts',
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: 'Health Monitoring',
      description: 'Track vital signs, weight, and wellness metrics throughout your journey',
    },
    {
      icon: <Bot className="w-8 h-8" />,
      title: 'AI Chatbot',
      description: '24/7 intelligent assistant for instant answers to your pregnancy questions',
    },
    {
      icon: <Video className="w-8 h-8" />,
      title: 'Telemedicine',
      description: 'Connect with healthcare providers through secure video consultations',
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: 'Chat with Doctor',
      description: 'Direct messaging with your healthcare team for quick medical advice',
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: 'Calendar System',
      description: 'Organize appointments, medication schedules, and important dates',
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: 'Newsletter',
      description: 'Weekly updates with personalized tips, insights, and health information',
    },
    {
      icon: <Music className="w-8 h-8" />,
      title: 'Music for Baby',
      description: 'Curated playlists to support baby cognitive and emotional development',
    },
    {
      icon: <Pill className="w-8 h-8" />,
      title: 'Medicine Tracker',
      description: 'Track vaccinations, medications, and post-baby care schedules',
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: 'Data Analysis',
      description: 'Comprehensive insights and trends from your health data',
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: 'IoT Integration',
      description: 'Connect wearable devices for real-time health monitoring',
    },
  ];

  const stats = [
    { number: '50K+', label: 'Happy Mothers' },
    { number: '98%', label: 'Satisfaction Rate' },
    { number: '24/7', label: 'Support Available' },
    { number: '100+', label: 'Healthcare Partners' },
  ];

  const pricingPlans = [
    {
      name: 'Free',
      price: '$0',
      period: '/month',
      features: ['Basic embryo tracking', 'Health monitoring', 'AI chatbot access', 'Email support'],
      color: 'from-gray-400 to-gray-500',
    },
    {
      name: 'Standard',
      price: '$29',
      period: '/month',
      features: [
        'All Free features',
        'Telemedicine consultations',
        'Doctor messaging',
        'Calendar system',
        'Priority support',
      ],
      color: 'from-rose-500 to-pink-500',
      popular: true,
    },
    {
      name: 'Premium',
      price: '$59',
      period: '/month',
      features: [
        'All Standard features',
        'Unlimited consultations',
        'IoT device integration',
        'Advanced analytics',
        'Personalized care plan',
        '24/7 premium support',
      ],
      color: 'from-purple-500 to-pink-500',
    },
  ];

  return (
    <div className="pt-20">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-100/50 via-rose-100/30 to-purple-100/50 dark:from-pink-900/20 dark:via-rose-900/10 dark:to-purple-900/20"></div>
        <div className="container mx-auto px-6 py-24 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-block mb-4 px-4 py-2 bg-rose-100 dark:bg-rose-900/30 rounded-full">
                <span className="text-rose-600 dark:text-rose-400 font-semibold text-sm">
                  Your Smart Maternal Companion
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                <span className="text-gray-900 dark:text-white">Welcome to </span>
                <span className="text-gradient">MOMIQ</span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl">
                Empowering your maternal journey with intelligent monitoring, personalized care, and
                expert support. Experience peace of mind every step of the way.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button
                  onClick={() => onNavigate('signup')}
                  className="px-8 py-4 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-full hover:shadow-2xl transition-all duration-300 font-semibold flex items-center justify-center space-x-2 hover-lift"
                >
                  <span>Get Started Free</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button
                  onClick={() => onNavigate('features')}
                  className="px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-full hover:shadow-xl transition-all duration-300 font-semibold border-2 border-gray-200 dark:border-gray-700 hover-lift"
                >
                  Explore Features
                </button>
              </div>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 bg-gradient-to-br from-rose-300 to-pink-400 rounded-full opacity-20 absolute -top-10 -right-10 blur-3xl"></div>
                <div className="w-80 h-80 bg-gradient-to-br from-purple-300 to-pink-300 rounded-full opacity-20 absolute -bottom-10 -left-10 blur-3xl"></div>
                <div className="relative z-10 bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-2xl">
                  <Heart className="w-64 h-64 text-rose-500 fill-rose-100 dark:fill-rose-900/30" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white/50 dark:bg-gray-800/50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 dark:text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-24 scroll-mt-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="text-gradient">MOMIQ</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              MOMIQ combines cutting-edge technology with compassionate care to support mothers
              throughout their pregnancy journey and beyond.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl card-shadow hover-lift">
              <Shield className="w-12 h-12 text-rose-500 mb-4" />
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Our Mission</h3>
              <p className="text-gray-600 dark:text-gray-400">
                To empower every mother with intelligent tools and expert support for a healthier,
                more confident maternal journey.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl card-shadow hover-lift">
              <Users className="w-12 h-12 text-rose-500 mb-4" />
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Our Team</h3>
              <p className="text-gray-600 dark:text-gray-400">
                A dedicated group of healthcare professionals, engineers, and mothers working together
                to revolutionize maternal care.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl card-shadow hover-lift">
              <Award className="w-12 h-12 text-rose-500 mb-4" />
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Our Vision</h3>
              <p className="text-gray-600 dark:text-gray-400">
                A world where every mother has access to personalized, data-driven healthcare support
                throughout their journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="py-24 bg-gradient-to-br from-rose-50 to-pink-50 dark:from-gray-800 dark:to-gray-900 scroll-mt-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Powerful <span className="text-gradient">Features</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Everything you need for a comprehensive maternal health experience
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-8 rounded-2xl card-shadow hover-lift group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-rose-100 to-pink-100 dark:from-rose-900/30 dark:to-pink-900/30 rounded-2xl flex items-center justify-center mb-6 text-rose-500 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-24 scroll-mt-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Simple <span className="text-gradient">Pricing</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Choose the plan that best fits your needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`bg-white dark:bg-gray-800 rounded-3xl p-8 card-shadow hover-lift relative ${
                  plan.popular ? 'ring-2 ring-rose-500 scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-rose-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                    {plan.name}
                  </h3>
                  <div className="flex items-end justify-center mb-2">
                    <span className="text-5xl font-bold text-gradient">{plan.price}</span>
                    <span className="text-gray-600 dark:text-gray-400 ml-2">{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <div className="w-5 h-5 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                        <span className="text-white text-xs">✓</span>
                      </div>
                      <span className="text-gray-600 dark:text-gray-400">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => onNavigate('signup')}
                  className={`w-full py-3 rounded-full font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-rose-500 to-pink-500 text-white hover:shadow-xl'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600'
                  }`}
                >
                  Choose Plan
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

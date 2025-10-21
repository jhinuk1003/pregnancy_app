import {
  Baby,
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
  Sparkles,
} from 'lucide-react';
import Footer from '../components/Footer';

export default function FeaturesPage() {
  const features = [
    {
      icon: <Baby className="w-12 h-12" />,
      title: 'Embryo Tracking',
      description:
        'Monitor your baby development with precision tracking and milestone alerts. Get detailed insights into growth patterns, developmental stages, and important milestones throughout your pregnancy.',
      highlights: [
        'Week-by-week development updates',
        'Growth milestone notifications',
        '3D visualization of baby development',
        'Personalized development insights',
      ],
      color: 'from-pink-500 to-rose-500',
    },
    {
      icon: <Activity className="w-12 h-12" />,
      title: 'Health Monitoring',
      description:
        'Track vital signs, weight, and wellness metrics throughout your journey. Our comprehensive monitoring system helps you stay on top of your health with real-time data and insights.',
      highlights: [
        'Blood pressure tracking',
        'Weight gain monitoring',
        'Glucose level tracking',
        'Activity and sleep monitoring',
      ],
      color: 'from-rose-500 to-pink-500',
    },
    {
      icon: <Bot className="w-12 h-12" />,
      title: 'AI Chatbot',
      description:
        '24/7 intelligent assistant for instant answers to your pregnancy questions. Our AI is trained on medical literature and provides reliable, evidence-based responses.',
      highlights: [
        'Instant answers anytime',
        'Evidence-based information',
        'Multi-language support',
        'Personalized recommendations',
      ],
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: <Video className="w-12 h-12" />,
      title: 'Telemedicine',
      description:
        'Connect with healthcare providers through secure video consultations. No need to travel - get expert medical advice from the comfort of your home.',
      highlights: [
        'HD video consultations',
        'Screen sharing capabilities',
        'Secure and HIPAA compliant',
        'Appointment scheduling',
      ],
      color: 'from-teal-500 to-cyan-500',
    },
    {
      icon: <MessageCircle className="w-12 h-12" />,
      title: 'Chat with Doctor',
      description:
        'Direct messaging with your healthcare team for quick medical advice. Get answers to non-urgent questions without waiting for an appointment.',
      highlights: [
        'Real-time messaging',
        'Image and file sharing',
        'Message history access',
        'Priority response for urgent matters',
      ],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: <Calendar className="w-12 h-12" />,
      title: 'Calendar System',
      description:
        'Organize appointments, medication schedules, and important dates. Never miss a checkup or medication with our smart reminder system.',
      highlights: [
        'Appointment scheduling',
        'Medication reminders',
        'Sync with device calendar',
        'Family event tracking',
      ],
      color: 'from-orange-500 to-rose-500',
    },
    {
      icon: <Mail className="w-12 h-12" />,
      title: 'Newsletter',
      description:
        'Weekly updates with personalized tips, insights, and health information. Stay informed about your pregnancy journey with curated content.',
      highlights: [
        'Personalized content',
        'Expert health tips',
        'Latest research updates',
        'Community stories',
      ],
      color: 'from-pink-500 to-purple-500',
    },
    {
      icon: <Music className="w-12 h-12" />,
      title: 'Personalized Music for Baby',
      description:
        'Curated playlists to support baby cognitive and emotional development. Music therapy designed specifically for prenatal and postnatal care.',
      highlights: [
        'Classical music for development',
        'Nature sounds for relaxation',
        'Lullabies for sleep',
        'Age-appropriate playlists',
      ],
      color: 'from-violet-500 to-pink-500',
    },
    {
      icon: <Pill className="w-12 h-12" />,
      title: 'Medicine Tracker',
      description:
        'Track vaccinations, medications, and post-baby care schedules. Comprehensive tracking system for both prenatal and postnatal medication management.',
      highlights: [
        'Vaccination schedule tracking',
        'Medication reminders',
        'Dosage tracking',
        'Pharmacy integration',
      ],
      color: 'from-green-500 to-teal-500',
    },
    {
      icon: <BarChart3 className="w-12 h-12" />,
      title: 'Data Analysis',
      description:
        'Comprehensive insights and trends from your health data. Advanced analytics help you understand patterns and make informed decisions.',
      highlights: [
        'Visual health dashboards',
        'Trend analysis',
        'Predictive insights',
        'Exportable reports',
      ],
      color: 'from-cyan-500 to-blue-500',
    },
    {
      icon: <Cpu className="w-12 h-12" />,
      title: 'IoT Integration',
      description:
        'Connect wearable devices for real-time health monitoring. Seamlessly integrate with popular fitness trackers and health devices.',
      highlights: [
        'Wearable device sync',
        'Real-time data updates',
        'Multiple device support',
        'Automatic data collection',
      ],
      color: 'from-slate-500 to-gray-500',
    },
  ];

  return (
    <div className="pt-20">
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-100/50 via-rose-100/30 to-purple-100/50 dark:from-pink-900/20 dark:via-rose-900/10 dark:to-purple-900/20"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 mb-6">
              <Sparkles className="w-6 h-6 text-rose-500" />
              <span className="text-rose-600 dark:text-rose-400 font-semibold">All Features</span>
              <Sparkles className="w-6 h-6 text-rose-500" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Everything You Need for a{' '}
              <span className="text-gradient">Healthy Journey</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Comprehensive tools and features designed to support you every step of the way
            </p>
          </div>

          <div className="space-y-12">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`bg-white dark:bg-gray-800 rounded-3xl p-8 md:p-12 card-shadow hover-lift ${
                  index % 2 === 0 ? '' : ''
                }`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div
                      className={`w-20 h-20 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center text-white mb-6 shadow-xl`}
                    >
                      {feature.icon}
                    </div>
                    <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                      {feature.title}
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                      {feature.description}
                    </p>
                    <ul className="space-y-3">
                      {feature.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-center">
                          <div
                            className={`w-6 h-6 bg-gradient-to-br ${feature.color} rounded-full flex items-center justify-center mr-3 flex-shrink-0`}
                          >
                            <span className="text-white text-xs">✓</span>
                          </div>
                          <span className="text-gray-700 dark:text-gray-300">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <div className="relative">
                      <div
                        className={`w-full h-80 bg-gradient-to-br ${feature.color} rounded-3xl opacity-20 absolute blur-3xl`}
                      ></div>
                      <div className="relative z-10 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 rounded-3xl p-12 flex items-center justify-center h-80">
                        <div className={`text-gray-400 dark:text-gray-500`}>
                          {feature.icon && (
                            <div className="scale-[4]">{feature.icon}</div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-rose-50 to-pink-50 dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            Join thousands of mothers who trust MOMIQ for their maternal health journey
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-full hover:shadow-2xl transition-all duration-300 font-semibold hover-lift">
            Start Your Free Trial
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}

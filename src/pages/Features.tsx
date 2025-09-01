import React from 'react';
import { motion } from 'framer-motion';
import { Brain, BarChart3, Globe, Moon, Navigation, Users } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      title: 'Adaptive Learning Paths',
      description: 'Personalized learning experiences that adapt to your pace and preferences',
      icon: Brain,
      color: 'bg-gradient-to-br from-hotpink-100 to-pink-100 dark:from-hotpink-900 dark:to-pink-900',
      iconColor: 'text-hotpink-600 dark:text-hotpink-400',
    },
    {
      title: 'Real-time Analytics',
      description: 'Track your progress with detailed analytics and performance insights',
      icon: BarChart3,
      color: 'bg-green-100 dark:bg-green-900',
      iconColor: 'text-green-600 dark:text-green-400',
    },
    {
      title: 'Multilingual Interface',
      description: 'Learn in your preferred language with support for multiple languages',
      icon: Globe,
      color: 'bg-gradient-to-br from-pink-100 to-hotpink-100 dark:from-pink-900 dark:to-hotpink-900',
      iconColor: 'text-pink-600 dark:text-pink-400',
    },
    {
      title: 'Dark/Light Mode',
      description: 'Comfortable learning experience with customizable themes',
      icon: Moon,
      color: 'bg-gray-100 dark:bg-gray-800',
      iconColor: 'text-gray-600 dark:text-gray-400',
    },
    {
      title: 'Easy Navigation',
      description: 'Intuitive interface designed for seamless user experience',
      icon: Navigation,
      color: 'bg-orange-100 dark:bg-orange-900',
      iconColor: 'text-orange-600 dark:text-orange-400',
    },
    {
      title: 'Community Support',
      description: 'Connect with learners worldwide and get help from the community',
      icon: Users,
      color: 'bg-teal-100 dark:bg-teal-900',
      iconColor: 'text-teal-600 dark:text-teal-400',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
          >
            Features
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            Discover the powerful features that make MOMIQ the perfect platform for your learning journey
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-200"
              >
                <div className={`flex items-center justify-center w-16 h-16 ${feature.color} rounded-2xl mb-6`}>
                  <Icon size={32} className={feature.iconColor} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Features;
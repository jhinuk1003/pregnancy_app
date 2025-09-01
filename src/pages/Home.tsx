import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, BarChart3, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Home: React.FC = () => {
  const { translations } = useLanguage();

  const highlights = [
    {
      title: 'Accessible Anywhere',
      description: 'Learn on any device, anywhere in the world',
      icon: Smartphone,
    },
    {
      title: 'Personalized Dashboard',
      description: 'Track your progress and achievements',
      icon: BarChart3,
    },
    {
      title: 'Multilingual Support',
      description: 'Learn in your preferred language',
      icon: Globe,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-hotpink-50 to-pink-100 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Background maternal imagery */}
      <div className="absolute top-20 right-10 opacity-10">
        <img 
          src="https://images.pexels.com/photos/1257110/pexels-photo-1257110.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop" 
          alt="Mother and baby" 
          className="w-32 h-32 rounded-full object-cover"
        />
      </div>
      <div className="absolute bottom-20 left-10 opacity-10">
        <img 
          src="https://images.pexels.com/photos/1648375/pexels-photo-1648375.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop" 
          alt="Happy baby" 
          className="w-28 h-28 rounded-full object-cover"
        />
      </div>
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center items-center space-x-3 mb-6">
            <img 
              src="https://images.pexels.com/photos/1257110/pexels-photo-1257110.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop" 
              alt="Mother and baby" 
              className="w-16 h-16 rounded-full object-cover border-3 border-hotpink-300 shadow-lg"
            />
            <span className="text-3xl">💕</span>
            <img 
              src="https://images.pexels.com/photos/1648375/pexels-photo-1648375.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop" 
              alt="Happy baby" 
              className="w-16 h-16 rounded-full object-cover border-3 border-pink-300 shadow-lg"
            />
          </div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-hotpink-600 via-pink-500 to-hotpink-500 bg-clip-text text-transparent mb-6"
          >
            {translations.heroTitle}
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto"
          >
            {translations.heroSubtitle}
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-hotpink-500 to-pink-500 hover:from-hotpink-600 hover:to-pink-600 text-white font-semibold py-4 px-8 rounded-2xl text-lg shadow-lg hover:shadow-xl transition-all duration-200 animate-pulse-pink"
          >
            {translations.getStarted}
          </motion.button>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <motion.div
                  key={highlight.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-200"
                >
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-hotpink-100 to-pink-100 dark:from-hotpink-900 dark:to-pink-900 rounded-2xl mb-6 mx-auto">
                    <Icon size={32} className="text-hotpink-600 dark:text-hotpink-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 text-center">
                    {highlight.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-center leading-relaxed">
                    {highlight.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
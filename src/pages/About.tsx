import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About MOMIQ
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg"
        >
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
            MOMIQ (Maternal Observation and Intelligent Quotient) is a modern platform designed to support maternal health and child development through intelligent monitoring and personalized care. 
            Built with cutting-edge technology, MOMIQ empowers mothers and healthcare professionals to ensure optimal maternal and child wellness.
          </p>
          
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
            Our platform combines the power of artificial intelligence with intuitive design to create 
            personalized maternal care experiences that adapt to each mother's unique needs and circumstances. 
            Whether you're an expecting mother, a new parent, or a healthcare provider, MOMIQ provides the tools 
            and insights you need to ensure the best outcomes for both mother and child.
          </p>
          
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            With support for multiple languages, comfortable viewing modes, and comprehensive analytics to track 
            maternal and child health metrics, MOMIQ is committed to making quality maternal healthcare 
            accessible to everyone, everywhere.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
        >
          <div className="text-center">
            <div className="bg-gradient-to-br from-hotpink-100 to-pink-100 dark:from-hotpink-900 dark:to-pink-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-hotpink-600 dark:text-hotpink-400">10K+</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Active Mothers</h3>
            <p className="text-gray-600 dark:text-gray-300">Mothers and families using our platform</p>
          </div>
          
          <div className="text-center">
            <div className="bg-gradient-to-br from-pink-100 to-hotpink-100 dark:from-pink-900 dark:to-hotpink-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-pink-600 dark:text-pink-400">50+</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Health Metrics</h3>
            <p className="text-gray-600 dark:text-gray-300">Comprehensive tracking across maternal health indicators</p>
          </div>
          
          <div className="text-center">
            <div className="bg-gradient-to-br from-hotpink-100 to-pink-100 dark:from-hotpink-900 dark:to-pink-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-hotpink-600 dark:text-hotpink-400">95%</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Satisfaction Rate</h3>
            <p className="text-gray-600 dark:text-gray-300">Mothers satisfied with their care experience</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
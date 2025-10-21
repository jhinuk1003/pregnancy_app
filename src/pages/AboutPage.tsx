import { Heart, Target, Users, Award, Shield, Lightbulb, TrendingUp, Globe } from 'lucide-react';
import Footer from '../components/Footer';

export default function AboutPage() {
  const values = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Compassionate Care',
      description: 'We put mothers and babies first in everything we do',
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Data Privacy',
      description: 'Your health data is encrypted and completely secure',
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: 'Innovation',
      description: 'Cutting-edge technology meets maternal healthcare',
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Accessibility',
      description: 'Quality healthcare support available to everyone',
    },
  ];

  return (
    <div className="pt-20">
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About <span className="text-gradient">MOMIQ</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Revolutionizing maternal healthcare through intelligent technology and compassionate
              support
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Our Story</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                MOMIQ was born from a simple yet powerful idea: every mother deserves access to
                world-class healthcare support throughout their pregnancy journey and beyond.
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Founded by a team of healthcare professionals, technology experts, and mothers who
                experienced firsthand the challenges of navigating pregnancy, we've created a
                comprehensive platform that combines cutting-edge technology with human compassion.
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                Today, MOMIQ serves thousands of families worldwide, providing them with the tools,
                insights, and support they need for a healthier, more confident maternal journey.
              </p>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-rose-200 to-pink-300 rounded-3xl opacity-20 absolute blur-3xl"></div>
              <div className="relative z-10 bg-white dark:bg-gray-800 p-12 rounded-3xl shadow-2xl">
                <Heart className="w-full h-full text-rose-500 fill-rose-100 dark:fill-rose-900/30" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
            <div className="text-center bg-white dark:bg-gray-800 p-8 rounded-2xl card-shadow">
              <Target className="w-16 h-16 text-rose-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Our Mission</h3>
              <p className="text-gray-600 dark:text-gray-400">
                To empower every mother with intelligent tools, expert guidance, and compassionate
                support throughout their maternal journey, ensuring healthier outcomes for both
                mother and baby.
              </p>
            </div>
            <div className="text-center bg-white dark:bg-gray-800 p-8 rounded-2xl card-shadow">
              <Users className="w-16 h-16 text-rose-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Our Team</h3>
              <p className="text-gray-600 dark:text-gray-400">
                A diverse team of obstetricians, pediatricians, data scientists, software engineers,
                and UX designers united by a passion for improving maternal healthcare globally.
              </p>
            </div>
            <div className="text-center bg-white dark:bg-gray-800 p-8 rounded-2xl card-shadow">
              <Award className="w-16 h-16 text-rose-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Our Vision</h3>
              <p className="text-gray-600 dark:text-gray-400">
                A world where every mother, regardless of location or circumstances, has access to
                personalized, data-driven healthcare support that ensures the best possible outcomes.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-rose-50 to-pink-50 dark:from-gray-800 dark:to-gray-900 rounded-3xl p-12 mb-24">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">
              Our Core Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-white dark:bg-gray-800 rounded-2xl flex items-center justify-center mx-auto mb-4 text-rose-500 shadow-lg">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-3xl p-12 card-shadow">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="text-center">
                <TrendingUp className="w-12 h-12 text-rose-500 mx-auto mb-4" />
                <div className="text-4xl font-bold text-gradient mb-2">50,000+</div>
                <p className="text-gray-600 dark:text-gray-400">Mothers Supported</p>
              </div>
              <div className="text-center">
                <Award className="w-12 h-12 text-rose-500 mx-auto mb-4" />
                <div className="text-4xl font-bold text-gradient mb-2">98%</div>
                <p className="text-gray-600 dark:text-gray-400">Satisfaction Rate</p>
              </div>
              <div className="text-center">
                <Globe className="w-12 h-12 text-rose-500 mx-auto mb-4" />
                <div className="text-4xl font-bold text-gradient mb-2">45+</div>
                <p className="text-gray-600 dark:text-gray-400">Countries Served</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

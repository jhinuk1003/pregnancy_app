import { Heart, Mail, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-rose-50 to-pink-50 dark:from-gray-800 dark:to-gray-900 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Heart className="w-8 h-8 text-rose-500 fill-rose-500" />
              <span className="text-2xl font-bold text-gradient">MOMIQ</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md">
              Your intelligent companion for a healthier maternal journey. Empowering mothers with
              smart monitoring, personalized care, and expert support.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="p-2 bg-white dark:bg-gray-700 rounded-full hover:bg-rose-100 dark:hover:bg-rose-900 transition-colors"
              >
                <Facebook className="w-5 h-5 text-rose-500" />
              </a>
              <a
                href="#"
                className="p-2 bg-white dark:bg-gray-700 rounded-full hover:bg-rose-100 dark:hover:bg-rose-900 transition-colors"
              >
                <Twitter className="w-5 h-5 text-rose-500" />
              </a>
              <a
                href="#"
                className="p-2 bg-white dark:bg-gray-700 rounded-full hover:bg-rose-100 dark:hover:bg-rose-900 transition-colors"
              >
                <Instagram className="w-5 h-5 text-rose-500" />
              </a>
              <a
                href="#"
                className="p-2 bg-white dark:bg-gray-700 rounded-full hover:bg-rose-100 dark:hover:bg-rose-900 transition-colors"
              >
                <Linkedin className="w-5 h-5 text-rose-500" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-gray-900 dark:text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-rose-500">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-rose-500">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-rose-500">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-rose-500">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-gray-900 dark:text-white mb-4">Newsletter</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
              Subscribe for updates and maternal health tips
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 rounded-l-full border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white focus:outline-none focus:border-rose-500"
              />
              <button className="px-6 py-2 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-r-full hover:shadow-lg transition-all">
                <Mail className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              © 2025 MOMIQ. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-rose-500 text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-rose-500 text-sm">
                Terms of Service
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-rose-500 text-sm">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

import { Moon, Sun, Globe, Heart } from 'lucide-react';

type Page = 'landing' | 'home' | 'about' | 'features' | 'pricing' | 'signin' | 'signup' | 'dashboard';

interface NavbarProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
  language: 'en' | 'es';
  onToggleLanguage: () => void;
}

export default function Navbar({
  currentPage,
  onNavigate,
  isDarkMode,
  onToggleDarkMode,
  language,
  onToggleLanguage,
}: NavbarProps) {
  const navLinks = [
    { id: 'home', label: language === 'en' ? 'Home' : 'Inicio' },
    { id: 'about', label: language === 'en' ? 'About' : 'Acerca de' },
    { id: 'features', label: language === 'en' ? 'Features' : 'Características' },
    { id: 'pricing', label: language === 'en' ? 'Pricing' : 'Precios' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => onNavigate('home')}
          >
            <Heart className="w-8 h-8 text-rose-500 fill-rose-500" />
            <span className="text-2xl font-bold text-gradient">MOMIQ</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => onNavigate(link.id as Page)}
                className={`font-medium transition-colors ${
                  currentPage === link.id
                    ? 'text-rose-500'
                    : 'text-gray-700 dark:text-gray-300 hover:text-rose-500'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={onToggleLanguage}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle language"
            >
              <Globe className="w-5 h-5 text-gray-700 dark:text-gray-300" />
            </button>

            <button
              onClick={onToggleDarkMode}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
                <Sun className="w-5 h-5 text-yellow-500" />
              ) : (
                <Moon className="w-5 h-5 text-gray-700" />
              )}
            </button>

            <button
              onClick={() => onNavigate('signin')}
              className="px-6 py-2 text-gray-700 dark:text-gray-300 hover:text-rose-500 font-medium transition-colors"
            >
              {language === 'en' ? 'Sign In' : 'Iniciar sesión'}
            </button>

            <button
              onClick={() => onNavigate('signup')}
              className="px-6 py-2 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-full hover:shadow-lg transition-all duration-300 font-medium"
            >
              {language === 'en' ? 'Sign Up' : 'Registrarse'}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

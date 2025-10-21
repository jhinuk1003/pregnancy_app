import { useState } from 'react';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import FeaturesPage from './pages/FeaturesPage';
import PricingPage from './pages/PricingPage';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import DashboardPage from './pages/DashboardPage';

type Page = 'landing' | 'home' | 'about' | 'features' | 'pricing' | 'signin' | 'signup' | 'dashboard';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('landing');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [language, setLanguage] = useState<'en' | 'es'>('en');

  const renderPage = () => {
    switch (currentPage) {
      case 'landing':
        return <LandingPage onNavigate={setCurrentPage} />;
      case 'home':
        return <HomePage onNavigate={setCurrentPage} />;
      case 'about':
        return <AboutPage />;
      case 'features':
        return <FeaturesPage />;
      case 'pricing':
        return <PricingPage />;
      case 'signin':
        return <SignInPage onNavigate={setCurrentPage} />;
      case 'signup':
        return <SignUpPage onNavigate={setCurrentPage} />;
      case 'dashboard':
        return <DashboardPage onNavigate={setCurrentPage} />;
      default:
        return <LandingPage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className={isDarkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
        {currentPage !== 'dashboard' && currentPage !== 'landing' && (
          <Navbar
            currentPage={currentPage}
            onNavigate={setCurrentPage}
            isDarkMode={isDarkMode}
            onToggleDarkMode={() => setIsDarkMode(!isDarkMode)}
            language={language}
            onToggleLanguage={() => setLanguage(language === 'en' ? 'es' : 'en')}
          />
        )}
        {renderPage()}
      </div>
    </div>
  );
}

export default App;

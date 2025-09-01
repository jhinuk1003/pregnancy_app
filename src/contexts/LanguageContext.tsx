import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'hi' | 'bn';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  translations: Record<string, string>;
}

const translations = {
  en: {
    home: 'Home',
    features: 'Features',
    dashboard: 'Dashboard',
    about: 'About',
    contact: 'Contact',
    heroTitle: 'MOMIQ – Smart Learning, Smarter Growth',
    heroTitle: 'MOMIQ – Smart Maternal Care, Smarter Growth',
    heroSubtitle: 'Your personalised platform for maternal observation and intelligent quotient development.',
    getStarted: 'Get Started',
    overview: 'Overview',
    analytics: 'Analytics',
    settings: 'Settings',
    profile: 'Profile',
    logout: 'Logout',
  },
  hi: {
    home: 'होम',
    features: 'फीचर्स',
    dashboard: 'डैशबोर्ड',
    about: 'हमारे बारे में',
    contact: 'संपर्क',
    heroTitle: 'MOMIQ – स्मार्ट लर्निंग, स्मार्टर ग्रोथ',
    heroTitle: 'MOMIQ – स्मार्ट मातृत्व देखभाल, स्मार्टर ग्रोथ',
    heroSubtitle: 'मातृत्व अवलोकन और बुद्धिमत्ता विकास के लिए आपका व्यक्तिगत प्लेटफॉर्म।',
    getStarted: 'शुरू करें',
    overview: 'अवलोकन',
    analytics: 'विश्लेषण',
    settings: 'सेटिंग्स',
    profile: 'प्रोफाइल',
    logout: 'लॉगआउट',
  },
  bn: {
    home: 'হোম',
    features: 'বৈশিষ্ট্য',
    dashboard: 'ড্যাশবোর্ড',
    about: 'সম্পর্কে',
    contact: 'যোগাযোগ',
    heroTitle: 'MOMIQ – স্মার্ট শেখা, স্মার্ট বৃদ্ধি',
    heroTitle: 'MOMIQ – স্মার্ট মাতৃত্ব যত্ন, স্মার্ট বৃদ্ধি',
    heroSubtitle: 'মাতৃত্ব পর্যবেক্ষণ এবং বুদ্ধিমত্তা বিকাশের জন্য আপনার ব্যক্তিগত প্ল্যাটফর্ম।',
    getStarted: 'শুরু করুন',
    overview: 'সংক্ষিপ্ত বিবরণ',
    analytics: 'বিশ্লেষণ',
    settings: 'সেটিংস',
    profile: 'প্রোফাইল',
    logout: 'লগআউট',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  return (
    <LanguageContext.Provider value={{ 
      language, 
      setLanguage, 
      translations: translations[language] 
    }}>
      {children}
    </LanguageContext.Provider>
  );
};
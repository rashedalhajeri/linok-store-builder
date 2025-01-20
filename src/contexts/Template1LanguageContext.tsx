import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'ar';

interface Template1LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    search: "Search",
    category: "Category",
    status: "Status",
    location: "Location",
    new: "New",
    used: "Used",
    capital: "Capital",
    hawally: "Hawally",
    salmiya: "Salmiya",
    // ... add more translations as needed
  },
  ar: {
    search: "بحث",
    category: "الفئة",
    status: "الحالة",
    location: "الموقع",
    new: "جديد",
    used: "مستعمل",
    capital: "العاصمة",
    hawally: "حولي",
    salmiya: "السالمية",
    // ... add more translations as needed
  }
};

const Template1LanguageContext = createContext<Template1LanguageContextType | undefined>(undefined);

export const Template1LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('ar');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <Template1LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </Template1LanguageContext.Provider>
  );
};

export const useTemplate1Language = () => {
  const context = useContext(Template1LanguageContext);
  if (context === undefined) {
    throw new Error('useTemplate1Language must be used within a Template1LanguageProvider');
  }
  return context;
};
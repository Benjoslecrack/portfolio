"use client"

import React, { createContext, useContext, useState, ReactNode } from 'react';

// Définissez un type pour le contexte de traduction
type TranslationContextType = {
  language: string;
  toggleLanguage: () => void;
};

// Créez un contexte pour la traduction
const TranslationContext = createContext<TranslationContextType | undefined>(
  undefined
);

// Créez un fournisseur de traduction
type TranslationProviderProps = {
  children: ReactNode;
};

export function TranslationProvider({ children }: TranslationProviderProps) {
  // État pour stocker la langue actuelle
  const [language, setLanguage] = useState('fr'); // La langue par défaut est le français

  // Fonction pour changer la langue
  const toggleLanguage = () => {
    setLanguage(language === 'fr' ? 'en' : 'fr');
  };

  return (
    <TranslationContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </TranslationContext.Provider>
  );
}

// Fonction utilitaire pour utiliser le contexte de traduction
export function useTranslation() {
  const context = useContext(TranslationContext);
  if (context === undefined) {
    throw new Error("useTranslation doit être utilisé à l'intérieur d'un TranslationProvider");
  }
  return context;
}

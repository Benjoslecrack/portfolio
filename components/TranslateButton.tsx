"use client"

import { useTranslation } from "@/context/TranslationContext"

export default function TranslateButton() {
    const { language, toggleLanguage } = useTranslation();
    return (
        <button
            className="fixed bottom-5 right-5 w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all bg-gray-950"
            onClick={toggleLanguage}
        >
            {language === 'fr' ? '🇫🇷 ' : '🇬🇧 '}
        </button>
    )
}

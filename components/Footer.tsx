"use client";

import { footerTexts } from "@/lib/data";
import { useTranslation } from "@/context/TranslationContext"

export default function Footer() {
  const { language } = useTranslation();
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        &copy; {footerTexts[language as keyof typeof footerTexts].small}
      </small>
      <p className="text-xs">
        <span className="font-semibold">{footerTexts[language as keyof typeof footerTexts].about}</span> {footerTexts[language as keyof typeof footerTexts].detail}
      </p>
    </footer>
  );
}
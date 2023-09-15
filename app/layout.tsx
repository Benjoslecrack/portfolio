import './globals.css'
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Benjamin FONTAINE - Développeur Full-Stack NextJs',
  description: "Explorez mon portfolio en ligne pour découvrir une collection diversifiée de projets créatifs et techniques. De la conception web à la programmation, je présente mon parcours professionnel à travers une série de réalisations inspirantes. Découvrez comment j'ai mis en œuvre mes compétences en développement web, design et bien plus encore pour créer des expériences numériques uniques.",
}

// Contextes
import { TranslationProvider } from '@/context/TranslationContext';
import ActiveSectionContextProvider from "@/context/ActiveSectionContext";

// Components
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TranslateButton from '@/components/TranslateButton';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <TranslationProvider>
      <html lang="fr" className='!scroll-smooth'>
        <body suppressHydrationWarning={true} className={`${inter.className} bg-gray-900 text-gray-50 text-opacity-90 relative pt-28 sm:pt-36`}>
          <div className='bg-[#946263] absolute -z-10 top-[-6rem] right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]'></div>
          <div className='bg-[#676394] absolute -z-10 top-[-1rem] left-[-25rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-32rem] lg:left-[-27rem] xl:left-[-14rem] 2xl:left-[-4rem]'></div>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />
            <TranslateButton />
          </ActiveSectionContextProvider>
        </body>
      </html>
    </TranslationProvider>
  )
}

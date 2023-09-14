"use client"

import { useTranslation } from "@/context/TranslationContext"

// Components
import { Hero, About, Projects, Skills, Experiences, Contact } from "./index";
import SectionDivider from "../SectionDivider";

export default function Main() {
    const { language } = useTranslation();
    return (
        <>
            <Hero language={language} />
            <SectionDivider />
            <About language={language} />
            <Projects language={language} />
            <Skills language={language} />
            <Experiences language={language} />
            <Contact language={language} />
        </>
    )
}

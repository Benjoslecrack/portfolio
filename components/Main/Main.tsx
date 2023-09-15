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
            {/* <div className='bg-[#946263] relative -z-10 top-[-6rem] right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]'></div>
            <div className='bg-[#676394] relative -z-10 top-[-1rem] left-[-25rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-32rem] lg:left-[-27rem] xl:left-[-14rem] 2xl:left-[-4rem]'></div> */}
            <Contact language={language} />
        </>
    )
}

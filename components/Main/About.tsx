"use client";

import { motion } from "framer-motion";
import { aboutTexts, links } from "@/lib/data";
import SectionHeading from "../SectionHeading";
import { useSectionInView } from "@/lib/hooks";

export default function About({ language }: { language: string }) {
    const { ref } = useSectionInView(links[language as keyof typeof links][1].name, 0.5);

    return (
        <motion.section
            ref={ref}
            className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.175 }}
            id="about"
        >
            <SectionHeading>{aboutTexts[language as keyof typeof aboutTexts].title}</SectionHeading>
            <p className="mb-3">
                {
                    aboutTexts[language as keyof typeof aboutTexts][0]
                }
                <span className="font-medium">                {
                    aboutTexts[language as keyof typeof aboutTexts][1]
                }</span>                {
                    aboutTexts[language as keyof typeof aboutTexts][2]
                }
                <span>
                    {
                        aboutTexts[language as keyof typeof aboutTexts][0]
                    }
                </span>
            </p>

            <p>
                <span className="font-medium">
                    {
                        aboutTexts[language as keyof typeof aboutTexts][4]
                    }
                </span>
                <span>
                    {
                        aboutTexts[language as keyof typeof aboutTexts][5]
                    }
                </span>
                <span className="underline">
                    {
                        aboutTexts[language as keyof typeof aboutTexts][6]
                    }
                </span>
            </p>
        </motion.section>
    );
}
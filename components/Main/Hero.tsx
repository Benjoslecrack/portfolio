'use client';

import Image from "next/image";
import { motion } from 'framer-motion';
import { heroTexts, links } from "@/lib/data";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";

export default function Hero({ language }: { language: string }) {
    const { ref } = useSectionInView(links[language as keyof typeof links][0].name, 0.5);
    return (
        <section className="mb-2 max-w-[50rem] text-center sm:mb-0" id="home" ref={ref}>
            <div className="flex items-center justify-center">
                <div className="relative">
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            type: "tween",
                            duration: 0.3
                        }}
                    >
                        <Image src="/pp.png"
                            alt="Benjamin FONTAINE pp"
                            width="250"
                            height="250"
                            quality="95"
                            priority={true}
                            className="h-32 w-32 rounded-full border-[0.34rem] border-white object-cover shadow-xl"
                        />
                    </motion.div>
                    <motion.span className="absolute text-3xl bottom-0 right-0"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            type: "spring",
                            stiffness: 125,
                            delay: 0.3,
                            duration: 0.7
                        }}
                    >
                        🙌
                    </motion.span>
                </div>
            </div>

            <motion.h1 className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <span className="font-bold">
                    {
                        heroTexts[language as keyof typeof heroTexts].intro
                    }
                </span>
                {
                    heroTexts[language as keyof typeof heroTexts].presentation
                }
                <span className="font-bold">
                    {
                        heroTexts[language as keyof typeof heroTexts].work
                    }
                </span>
                {
                    heroTexts[language as keyof typeof heroTexts].description
                }
                <span className="underline">
                    {
                        heroTexts[language as keyof typeof heroTexts].focus
                    }
                </span>
            </motion.h1>

            <motion.div className="flex flex-col sm:flex-row items-center justify-center gap-5 px-4 text-lg font-medium"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.1
                }}
            >
                <Link href='#contact' className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition">
                    {
                        heroTexts[language as keyof typeof heroTexts].contact
                    }
                    <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
                </Link>
                <a
                    className="bg-white/10 text-white/80 p-4 flex items-center gap-2 rounded-full border border-black/10 focus:scale-[1.15] hover:scale-[1.15] hover:text-gra-950 active:scale-105 transition"
                    href="https://linkedin.com/in/benjamin-fontaine-5577671a2"
                    target="_blank"
                >
                    <BsLinkedin />
                </a>
                <a
                    className="bg-white/10 text-white/80 p-4 flex items-center gap-2 rounded-full border border-black/10 text-[1.35rem] focus:scale-[1.15] hover:scale-[1.15] hover:text-gra-950 active:scale-105 transition"
                    href="https://github.com/Benjoslecrack"
                    target="_blank"
                >
                    <FaGithubSquare />
                </a>
            </motion.div>
        </section>
    )
}

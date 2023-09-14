"use client";

import React from "react";
import SectionHeading from "../SectionHeading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "../SubmitBtn";
import toast from "react-hot-toast";
import { contactTexts } from "@/lib/data";

export default function Contact({ language }: { language: string }) {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>{contactTexts[language as keyof typeof contactTexts].title}</SectionHeading>

      <p className="text-gray-700 -mt-6 text-white/80">
      {contactTexts[language as keyof typeof contactTexts].description1}{" "}
        <a className="underline" href="mailto:example@gmail.com">
          fontaine28210@gmail.com
        </a>{" "}
        {contactTexts[language as keyof typeof contactTexts].description2}
      </p>

      <form
        className="mt-10 flex flex-col text-black"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success("Email sent successfully!");
        }}
      >
        <input
          className="h-14 px-4 rounded-lg borderBlack transition-all bg-white bg-opacity-80 focus:bg-opacity-100 outline-none"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder={contactTexts[language as keyof typeof contactTexts].emailPlaceholder}
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 transition-all bg-white bg-opacity-80 focus:bg-opacity-100 outline-none"
          name="message"
          placeholder={contactTexts[language as keyof typeof contactTexts].messagePlaceholder}
          required
          maxLength={5000}
        />
        <SubmitBtn text={contactTexts[language as keyof typeof contactTexts].buttonText} />
      </form>
    </motion.section>
  );
}
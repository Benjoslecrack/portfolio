"use client";

import React from "react";
import SectionHeading from "../SectionHeading";
import { projectsData, links } from "@/lib/data";
import Project from "./Project";
import { useSectionInView } from "@/lib/hooks";

export default function Projects({ language }: { language: string }) {
  const { ref } = useSectionInView(links[language as keyof typeof links][2].name, 0.5);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>{language === "fr" ? "Mes Derniers Projets" : "My Last Projects"}</SectionHeading>
      <div>
        {projectsData[language as keyof typeof projectsData].map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
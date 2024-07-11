"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project-card";
import { useSectionInView } from "@/lib/useInView";
import { useLanguage } from "@/containers/language-context";

export default function Projects() {
  const { ref } = useSectionInView("#projects", 0.1);

  const { activeLanguage } = useLanguage();

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>
        {activeLanguage === "It" ? "I miei lavori" : "Lessons"}
      </SectionHeading>
      <div>
        <p>These are sessions/lessons that include objectives for teaching applications. Stretch objectives, objectives that were optional for participants, are marked with a <span className="bg-[#e9d5ff]">lavender</span> background.</p>
      </div>
      <div>
        {projectsData.map((project, index) => (
          <Project {...project} key={index} />
        ))}
      </div>
    </section>
  );
}

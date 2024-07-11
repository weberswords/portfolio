"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project-card";
import { useSectionInView } from "@/lib/useInView";

export default function Projects() {
  const { ref } = useSectionInView("#projects", 0.1);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28 content-center">
      <SectionHeading>
        Lessons
      </SectionHeading>
      <div className="max-w-[48em]">
        <p>These are sessions/lessons that include objectives for teaching applications. Stretch objectives, objectives that were optional for participants, are marked with a <span className="bg-[#e9d5ff]"> lavender </span> background.</p>
      </div>
      <div className="content-center">
        {projectsData.map((project, index) => (
          <Project {...project} key={index} />
        ))}
      </div>
    </section>
  );
}

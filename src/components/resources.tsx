"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { resourcesData } from "@/lib/data";
import Resource from "./resource-card";
import { useSectionInView } from "@/lib/useInView";
import { useLanguage } from "@/containers/language-context";

export default function Resources() {
  const { ref } = useSectionInView("#resources", 0.1);

  const { activeLanguage } = useLanguage();

  return (
    <section ref={ref} id="resources" className="scroll-mt-28 mb-28">
      <SectionHeading>
        {activeLanguage === "It" ? "I miei lavori" : "Resources"}
      </SectionHeading>
      <div>
        <p>These are reviews of resources based on the work of <a className="underline text-[#1d4ed8]" href="https://www.researchgate.net/publication/344588659_A_design_framework_for_enhancing_engagement_in_student-centered_learning_own_it_learn_it_and_share_it_by_Lee_and_Hannafin_2016_an_international_perspective">Lee and Hannafin</a>.</p>
      </div>
      <div>
        {resourcesData.map((resource, index) => (
          <Resource {...resource} key={index} />
        ))}
      </div>
    </section>
  );
}

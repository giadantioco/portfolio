import React from "react";
import { SkillBadge, ButtonCTA } from "@/components/atoms";

function Skills() {
  const skills = [
    "HTML5",
    "CSS",
    "REACT",
    "SASS",
    "JAVASCRIPT",
    "NODE.JS",
    "GIT",
    "GITHUB",
  ];

  return (
    <section className="min-h-screen py-20 border-b border-melon/30 w-full flex items-center justify-center">
      <div className="w-full max-w-5xl px-6 md:px-10">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 xl:gap-16 ">
          {/* sx: TExt E CTA */}
          <div className="w-full md:w-1/2 text-center md:text-left flex flex-col mt-12 gap-6 items-center md:items-start">
            <div className="relative inline-block">
              <p className="font-mono text-off-white mb-3 tracking-widest">
                Here are my
              </p>

              <h2 className="font-display text-melon text-4xl tracking-tighter leading-tight">
                Skills and Expertise
              </h2>
              <img
                src="/sparkles.svg"
                alt="decoration"
                className="hidden md:block absolute -top-12 -right-16 w-15 h-15 opacity-50"
              />
            </div>
            <p className="font-mono text-off-white max-w-md mb-10 leading-relaxed ">
              As a Front-End Developer, I create responsive, user-friendly
              interfaces with a focus on clean, efficient code, utilizing agile
              methodologies and modern tools.
            </p>
            <ButtonCTA label="Download my CV" href="*" />
          </div>
          {/* dx SKILLS */}
          <div className="w-full md:w-1/2 flex flex-wrap justify-center md:justify-end gap-x-4 gap-y-6">
            {skills.map((skill) => (
              <SkillBadge
                key={skill}
                label={skill}
                size="lg"
                variant="outline"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;

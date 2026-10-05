"use client";

import React from "react";
import { SkillBadge, ButtonCTA } from "@/components/atoms";
import { useRef, useState } from "react";
import { Lottie } from "lottie-react";

function Skills() {
  const sparklesRef = useRef<any>(null);
  const [isSparklesPaused, setIsSparklesPaused] = useState(false);

  const skills = [
    "HTML5",
    "CSS",
    "SCSS/SASS",
    "JAVASCRIPT",
    "TYPESCRIPT",
    "REACT",
    "NEXT.JS",
    "TAILWIND CSS",
    "WORDPRESS",
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
              <div className="absolute h-7 w-7 top-6 -right-3 md:-top-2 md:-right-10 md:h-10 md:w-10">
                <Lottie
                  ref={sparklesRef}
                  src="/animations/sparkles_animation.json"
                  loop={true}
                  autoplay={true}
                  className="brightness-0 invert opacity-70"
                  renderer="svg"
                  rendererSettings={{
                    preserveAspectRatio: "xMidYMid slice",
                    progressiveLoad: true,
                    hideOnTransparent: true,
                  }}
                />
                <button
                  onClick={() => {
                    if (isSparklesPaused) sparklesRef.current?.play();
                    else sparklesRef.current?.pause();
                    setIsSparklesPaused(!isSparklesPaused);
                  }}
                  className="sr-only"
                  aria-label="Pause sparkles animation"
                >
                  {isSparklesPaused ? "Play" : "Pause"}
                </button>
              </div>
            </div>
            <p className="font-mono text-off-white md:text-xl text-[12px] mb-10 leading-relaxed max-w-md">
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

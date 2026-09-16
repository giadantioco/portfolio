"use client";

import { useEffect, useMemo, useRef } from "react";
import ProjectCard from "./ProjectCard";
import { myProjects } from "./projects";

export default function Projects() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const loopedProjects = useMemo(
    () => [...myProjects, ...myProjects, ...myProjects],
    [],
  );

  const getCardStep = () => {
    const container = scrollRef.current;
    if (!container) return 0;

    const firstCard = container.querySelector<HTMLElement>(
      "[data-project-card]",
    );
    if (!firstCard) return container.clientWidth;

    const gap = 24;
    return firstCard.offsetWidth + gap;
  };

  const scrollToMiddleCopy = (behavior: ScrollBehavior = "auto") => {
    const container = scrollRef.current;
    if (!container) return;

    const cardStep = getCardStep();
    const middleIndex = myProjects.length;

    container.scrollTo({
      left: cardStep * middleIndex,
      behavior,
    });
  };

  useEffect(() => {
    const timer = window.setTimeout(() => {
      scrollToMiddleCopy("auto");
    }, 50);

    return () => window.clearTimeout(timer);
  }, []);

  const normalizeLoopPosition = () => {
    const container = scrollRef.current;
    if (!container) return;

    const cardStep = getCardStep();
    const firstCopyEnd = cardStep * myProjects.length;
    const secondCopyEnd = cardStep * myProjects.length * 2;

    if (container.scrollLeft < firstCopyEnd * 0.5) {
      container.scrollLeft += cardStep * myProjects.length;
    }

    if (container.scrollLeft > secondCopyEnd + firstCopyEnd * 0.5) {
      container.scrollLeft -= cardStep * myProjects.length;
    }
  };

  const scroll = (direction: "left" | "right") => {
    const container = scrollRef.current;
    if (!container) return;

    normalizeLoopPosition();

    const cardStep = getCardStep();

    container.scrollBy({
      left: direction === "left" ? -cardStep : cardStep,
      behavior: "smooth",
    });
  };

  return (
    <section className="min-h-screen flex items-center border-b border-melon/30 py-40 overflow-hidden">
      <div className="w-full">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="font-mono text-off-white text-base md:text-lg flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4">
              Here are a few
              <span className="font-display text-melon text-4xl md-6 tracking-tighter leading-tight">
                Projects
              </span>
              I loved working on
            </h2>
          </div>
        </div>

        <div
          ref={scrollRef}
          onScroll={normalizeLoopPosition}
          className="
            flex gap-6 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-10
            px-[7.5vw]
            md:px-[25vw]
            xl:px-[12vw]
            2xl:px-[15vw]
          "
        >
          {loopedProjects.map((project, index) => (
            <ProjectCard key={`${project.id}-${index}`} {...project} />
          ))}
        </div>

        <div className="flex justify-center gap-6 mt-16">
          <button
            onClick={() => scroll("left")}
            aria-label="Previous project"
            className="w-14 h-14 rounded-full border border-pink/30 flex items-center justify-center text-pink hover:bg-pink/20 transition-all active:scale-90"
          >
            ←
          </button>

          <button
            onClick={() => scroll("right")}
            aria-label="Next project"
            className="w-14 h-14 rounded-full border border-pink/30 flex items-center justify-center text-pink hover:bg-pink/20 transition-all active:scale-90"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}

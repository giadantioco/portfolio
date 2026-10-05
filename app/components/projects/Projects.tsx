"use client";

import CarouselCard from "./CarouselCard";
import { myProjects } from "./projectsData";
import { useInfiniteCarousel } from "@/hooks/useInfiniteCarousel";
import { useCarouselTouch } from "@/hooks/useCarouselTouch";
import { SkillBadge, ButtonCTA } from "../atoms";

export default function Projects() {
  const { visibleItems, scroll, activeIndex } = useInfiniteCarousel(myProjects);
  const { handleTouchStart, handleTouchEnd } = useCarouselTouch(
    () => scroll("right"),
    () => scroll("left"),
  );

  const activeProject = visibleItems.find(
    (item) => item.position === "active",
  )?.project;

  return (
    <section className="relative min-h-screen border-b border-melon/30 overflow-hidden">
      <div className="flex min-h-screen flex-col justify-center py-20">
        {/* Heading */}
        <div className="mx-auto mb-15 w-full max-w-wrap px-6">
          <div className="text-center">
            <h2 className="flex flex-col items-center justify-center gap-2 font-mono text-base text-off-white md:flex-row md:gap-4 md:text-lg">
              Here are a few
              <span className="font-display text-4xl leading-tight tracking-tighter text-melon md:text-6xl">
                Projects
              </span>
              I loved working on
            </h2>
          </div>
        </div>

        {/* Project title */}
        <div className="mb-6 h-8 text-center">
          <h3 className="font-display text-3xl font-bold leading-none tracking-tight text-off-white md:text-2xl">
            {activeProject?.name}
          </h3>
        </div>

        {/* Carousel */}
        <div
          className="relative mx-auto h-75 w-full overflow-hidden md:h-80 lg:h-90 xl:h-105 2xl:h-150"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {visibleItems.map(({ project, position }) => (
            <CarouselCard
              key={project.id}
              project={project}
              position={position}
            />
          ))}
        </div>

        {/* Active project details */}
        {activeProject && (
          <div className="flex flex-col items-center gap-4">
            <div className="flex flex-wrap justify-center gap-2">
              {activeProject.tags.map((tag) => (
                <SkillBadge key={tag} label={tag} size="sm" variant="outline" />
              ))}
            </div>

            <div className="flex gap-3">
              <ButtonCTA
                label="WEBSITE"
                href={activeProject.github}
                variant="primary"
              />
              <ButtonCTA
                label="GITHUB"
                href={activeProject.github}
                variant="secondary"
              />
            </div>
          </div>
        )}

        {/* Navigation */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 justify-between hidden md:flex md:w-120 lg:w-150 xl:w-200 2xl:w-250 z-999"
          style={{ top: "53%" }}
        >
          <button
            onClick={() => scroll("right")}
            aria-label="Next project"
            className="p-4 border bg-violet/80 hover:violet border-pink rounded-[10px] hover:border-melon transition-colors"
          >
            <img src="/Polygon.svg" alt="arrow" className="w-3 h-3" />
          </button>
          <button
            onClick={() => scroll("left")}
            aria-label="Next project"
            className="p-4 border bg-violet/80 hover:violet border-pink rounded-[10px] hover:border-melon transition-colors"
          >
            <img
              src="/Polygon.svg"
              alt="arrow"
              className="w-3 h-3 transform rotate-180"
            />
          </button>
        </div>
        {/* Dots indicator */}
        <div className="flex justify-center gap-3 mt-8">
          {myProjects.map((project, index) => {
            const isActive = index === activeIndex;
            return (
              <button
                key={project.id}
                onClick={() => {
                  if (index < activeIndex) {
                    scroll("left"); // Avanti
                  } else {
                    scroll("right"); // Indietro
                  }
                }}
                className={`h-2 w-2 rounded-full transition-all ${
                  isActive ? "bg-melon w-8" : "bg-pink/40 hover:bg-pink/60"
                }`}
                aria-label={`Go to project ${index + 1}`}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

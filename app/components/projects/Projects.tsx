"use client";

import CarouselCard from "./CarouselCard";
import { myProjects } from "./projectsData";
import { useInfiniteCarousel } from "@/hooks/useInfiniteCarousel";
import { SkillBadge, ButtonCTA } from "../atoms";

export default function Projects() {
  const { visibleItems, scroll } = useInfiniteCarousel(myProjects);

  const activeProject = visibleItems.find(
    (item) => item.position === "active",
  )?.project;

  return (
    <section className="min-h-screen border-b border-melon/30 overflow-hidden">
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
        <div className="relative mx-auto h-75 w-full overflow-hidden md:h-90">
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
        <div className="mt-8 flex justify-center gap-6">
          <button
            onClick={() => scroll("left")}
            aria-label="Previous project"
            className="flex h-14 w-14 items-center justify-center rounded-full border border-pink/30 text-pink transition-all hover:bg-pink/20 active:scale-90"
          >
            ←
          </button>

          <button
            onClick={() => scroll("right")}
            aria-label="Next project"
            className="flex h-14 w-14 items-center justify-center rounded-full border border-pink/30 text-pink transition-all hover:bg-pink/20 active:scale-90"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}

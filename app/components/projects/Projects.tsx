"use client";

import ProjectCard from "./ProjectCard";
import { myProjects, Project } from "./projectsData";
import { useInfiniteCarousel } from "@/hooks/useInfiniteCarousel";

export default function Projects() {
  const { scrollRef, loopedItems, scroll } = useInfiniteCarousel(myProjects);

  return (
    <section className="min-h-screen flex flex-col border-b border-melon/30">
      <div className="flex-1 flex flex-col justify-center py-20">
        <div className="mx-auto w-full max-w-wrap px-6">
          <div className="text-center mb-15">
            <h2 className="font-mono text-off-white text-base md:text-lg flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4">
              Here are a few
              <span className="font-display text-melon text-4xl md-6 tracking-tighter leading-tight">
                Projects
              </span>
              I loved working on
            </h2>
          </div>
        </div>

        <div className="w-full overflow-hidden">
          <div
            ref={scrollRef}
            className="
              flex
              gap-6
              overflow-x-auto
              overflow-y-hidden
              no-scrollbar
              pb-10
              px-[12.5vw]
      md:px-0
            "
          >
            {loopedItems.map((project: Project, index: number) => (
              <ProjectCard key={`${project.id}-${index}`} {...project} />
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-6">
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

import React from "react";
import { SkillBadge, ButtonCTA } from "../atoms";

interface ProjectCardProps {
  name: string;
  tags: string[];
  image: string;
  github: string;
}

export default function ProjectCard({
  name,
  tags,
  image,
  github,
}: ProjectCardProps) {
  return (
    <article
      data-project-card
      className="
    shrink-0 snap-center
    w-[85vw]
    md:w-[50vw]
    xl:w-[32vw]
    2xl:w-[24vw]
  "
    >
      <div className="w-full mb-6 rounded-xl shadow-lg">
        <img src={image} alt={name} className="w-full h-auto block" />
      </div>

      <div className="flex flex-col items-center gap-4 w-full">
        <div className="flex flex-wrap justify-center gap-2">
          {tags.map((tag) => (
            <SkillBadge key={tag} label={tag} size="sm" variant="outline" />
          ))}
        </div>

        <h3 className="font-display text-white font-bold text-3xl mb-6 md:text-2xl text-center tracking-tight leading-none">
          {name}
        </h3>

        <ButtonCTA label="SEE ON GITHUB" href={github} />
      </div>
    </article>
  );
}

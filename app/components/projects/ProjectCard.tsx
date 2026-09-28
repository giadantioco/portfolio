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
        shrink-0 snap-start flex flex-col items-center justify-center
        w-[80vw]
        md:w-[50vw]
        lg:w-[40vw]
        xl:w-[24vw]"
    >
      <div className="mb-6">
        <img
          src={image}
          alt={name}
          className="w-[270px] h-[270px] md:w-full md:h-auto object-cover"
        />
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

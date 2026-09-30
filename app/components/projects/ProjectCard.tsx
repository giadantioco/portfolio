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
      className="flex w-full flex-col items-center justify-center"
    >
      <h3 className="mb-6 text-center font-display text-3xl font-bold leading-none tracking-tight text-off-white md:text-2xl">
        {name}
      </h3>

      <div className="mb-6">
        <img
          src={image}
          alt={name}
          className="h-67.5 w-67.5 object-cover md:h-auto md:w-full"
        />
      </div>

      <div className="flex w-full flex-col items-center gap-4">
        <div className="flex flex-wrap justify-center gap-2">
          {tags.map((tag) => (
            <SkillBadge key={tag} label={tag} size="sm" variant="outline" />
          ))}
        </div>

        <div className="flex">
          <ButtonCTA label="LIVE" href={github} />
          <ButtonCTA label="CODE" href={github} />
        </div>
      </div>
    </article>
  );
}

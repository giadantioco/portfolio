"use client";

import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

import { getCarouselPosition, CarouselPosition } from "./carouselPositions";
import { Project } from "./projectsData";

interface CarouselCardProps {
  project: Project;
  position: CarouselPosition;
}

export default function CarouselCard({ project, position }: CarouselCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [cardWidth, setCardWidth] = useState(360);

  useEffect(() => {
    if (!cardRef.current) return;

    const updateWidth = () => {
      if (cardRef.current) {
        setCardWidth(cardRef.current.offsetWidth);
      }
    };

    updateWidth();

    const observer = new ResizeObserver(updateWidth);
    observer.observe(cardRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      ref={cardRef}
      className="absolute left-1/2 w-67.5 -translate-x-1/2 md:w-[320px] lg:w-90 xl:w-105 2xl:w-150"
      animate={getCarouselPosition(position, cardWidth)}
      transition={{
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <img
        src={project.image}
        alt={project.name}
        className="h-auto w-full object-cover"
      />
    </motion.div>
  );
}

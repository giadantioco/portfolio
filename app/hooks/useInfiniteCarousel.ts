import { useState } from "react";
import { Project } from "@/components/projects/projectsData";

type Direction = "left" | "right";

export function useInfiniteCarousel(items: Project[]) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState<Direction>("right");

  const total = items.length;

  const getIndex = (offset: number) => {
    return (activeIndex + offset + total) % total;
  };

  const previous = () => {
    setDirection("left");

    setActiveIndex((current) => {
      return (current - 1 + total) % total;
    });
  };

  const next = () => {
    setDirection("right");

    setActiveIndex((current) => {
      return (current + 1) % total;
    });
  };

  const scroll = (direction: Direction) => {
    if (direction === "left") {
      previous();
    } else {
      next();
    }
  };

  const visibleItems = [
    {
      project: items[getIndex(-2)],
      position: "farPrevious" as const,
    },
    {
      project: items[getIndex(-1)],
      position: "previous" as const,
    },
    {
      project: items[getIndex(0)],
      position: "active" as const,
    },
    {
      project: items[getIndex(1)],
      position: "next" as const,
    },
    {
      project: items[getIndex(2)],
      position: "farNext" as const,
    },
  ];

  return {
    activeIndex,
    previousIndex: getIndex(-1),
    farPreviousIndex: getIndex(-2),
    nextIndex: getIndex(1),
    farNextIndex: getIndex(2),
    visibleItems,
    direction,
    scroll,
  };
}

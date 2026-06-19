import { useMemo, useRef, useEffect } from "react";

type Direction = "left" | "right";

export function useInfiniteCarousel<T>(items: T[]) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const loopedItems = useMemo(() => [...items, ...items, ...items], [items]);

  const getCardStep = () => {
    const container = scrollRef.current;
    if (!container) return 0;

    const firstCard = container.querySelector<HTMLElement>(
      "[data-carousel-card]"
    );

    if (!firstCard) return container.clientWidth;

    const styles = window.getComputedStyle(container);
    const gap = parseFloat(styles.columnGap || styles.gap || "0");

    return firstCard.offsetWidth + gap;
  };

  const scrollToMiddleCopy = (behavior: ScrollBehavior = "auto") => {
    const container = scrollRef.current;
    if (!container) return;

    container.scrollTo({
      left: getCardStep() * items.length,
      behavior,
    });
  };

  useEffect(() => {
    const timer = window.setTimeout(() => {
      scrollToMiddleCopy("auto");
    }, 50);

    return () => window.clearTimeout(timer);
  }, [items.length]);

  const normalizeLoopPosition = () => {
    const container = scrollRef.current;
    if (!container) return;

    const cardStep = getCardStep();
    const copyWidth = cardStep * items.length;

    if (copyWidth === 0) return;

    if (container.scrollLeft < copyWidth * 0.5) {
      container.scrollLeft += copyWidth;
    }

    if (container.scrollLeft > copyWidth * 2.5) {
      container.scrollLeft -= copyWidth;
    }
  };

  const scroll = (direction: Direction) => {
    const container = scrollRef.current;
    if (!container) return;

    normalizeLoopPosition();

    container.scrollBy({
      left: direction === "left" ? -getCardStep() : getCardStep(),
      behavior: "smooth",
    });
  };

  return {
    scrollRef,
    loopedItems,
    scroll,
    normalizeLoopPosition,
  };
}

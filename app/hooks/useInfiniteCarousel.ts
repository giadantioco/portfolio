import { useMemo, useRef, useEffect } from "react";

type Direction = "left" | "right";

export function useInfiniteCarousel<T>(items: T[]) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const loopedItems = useMemo(() => [...items, ...items, ...items], [items]);

  // Recupera tutte le card
  const getCards = () => {
    const container = scrollRef.current;
    if (!container) return [];

    return Array.from(
      container.querySelectorAll<HTMLElement>("[data-project-card]"),
    );
  };

  // Calcola la larghezza di una copia completa
  const getCopyWidth = () => {
    const cards = getCards();

    if (!cards.length || !items.length) return 0;

    const firstCard = cards[0];
    const secondCard = cards[1];

    const container = scrollRef.current;
    if (!container) return 0;

    const styles = window.getComputedStyle(container);
    const gap = parseFloat(styles.columnGap || styles.gap || "0");

    return (firstCard.offsetWidth + gap) * items.length;
  };

  // Centra una card specifica nella viewport del carousel
  const centerCard = (
    card: HTMLElement,
    behavior: ScrollBehavior = "smooth",
  ) => {
    const container = scrollRef.current;
    if (!container) return;

    const containerRect = container.getBoundingClientRect();
    const cardRect = card.getBoundingClientRect();

    const cardCenter =
      cardRect.left -
      containerRect.left +
      container.scrollLeft +
      cardRect.width / 2;

    const targetScroll = cardCenter - container.clientWidth / 2;

    container.scrollTo({
      left: targetScroll,
      behavior,
    });
  };

  // Centra la prima card della copia centrale all'avvio
  useEffect(() => {
    const timer = window.setTimeout(() => {
      const cards = getCards();

      if (!cards.length || !items.length) return;

      centerCard(cards[items.length], "instant");
    }, 50);

    return () => window.clearTimeout(timer);
  }, [items.length]);

  // Mantiene lo scroll all'interno della copia centrale
  const normalizeLoopPosition = () => {
    const container = scrollRef.current;
    if (!container) return;

    const copyWidth = getCopyWidth();
    if (!copyWidth) return;

    if (container.scrollLeft < copyWidth) {
      container.scrollLeft += copyWidth;
    } else if (container.scrollLeft >= copyWidth * 2) {
      container.scrollLeft -= copyWidth;
    }
  };

  // Aspetta che lo scroll sia terminato prima di normalizzare
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const handleScroll = () => {
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      scrollTimeoutRef.current = setTimeout(() => {
        normalizeLoopPosition();
      }, 120);
    };

    container.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      container.removeEventListener("scroll", handleScroll);

      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [items.length]);

  // Individua la card più vicina al centro
  const getCenteredCardIndex = () => {
    const container = scrollRef.current;
    const cards = getCards();

    if (!container || !cards.length) return 0;

    const containerCenter =
      container.getBoundingClientRect().left + container.clientWidth / 2;

    let closestIndex = 0;
    let closestDistance = Infinity;

    cards.forEach((card, index) => {
      const rect = card.getBoundingClientRect();
      const cardCenter = rect.left + rect.width / 2;

      const distance = Math.abs(containerCenter - cardCenter);

      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    return closestIndex;
  };

  // Navigazione
  const scroll = (direction: Direction) => {
    const cards = getCards();

    if (!cards.length) return;

    const currentIndex = getCenteredCardIndex();

    const nextIndex = currentIndex + (direction === "right" ? 1 : -1);

    const nextCard = cards[nextIndex];

    if (nextCard) {
      centerCard(nextCard, "smooth");
    }
  };

  return {
    scrollRef,
    loopedItems,
    scroll,
    normalizeLoopPosition,
  };
}

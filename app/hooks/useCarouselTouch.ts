import { useRef } from "react";

export function useCarouselTouch(
  onSwipeLeft: () => void,
  onSwipeRight: () => void,
) {
  const startXRef = useRef(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    startXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const endX = e.changedTouches[0].clientX;
    const diff = startXRef.current - endX;
    const threshold = 50;

    if (Math.abs(diff) > threshold) {
      if (diff > 0) {
        onSwipeLeft(); // Swipe left
      } else {
        onSwipeRight(); // Swipe right
      }
    }
  };

  return { handleTouchStart, handleTouchEnd };
}

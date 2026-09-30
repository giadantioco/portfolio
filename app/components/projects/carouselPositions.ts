export type CarouselPosition =
  | "farPrevious"
  | "previous"
  | "active"
  | "next"
  | "farNext";

export function getCarouselPosition(
  position: CarouselPosition,
  cardWidth: number,
) {
  const previousX = -(cardWidth * 0.62);
  const farPreviousX = -(cardWidth * 1.18);

  const nextX = cardWidth * 0.62;
  const farNextX = cardWidth * 1.18;

  switch (position) {
    case "farPrevious":
      return {
        x: farPreviousX,
        scale: 0.65,
        opacity: 0.35,
        zIndex: 1,
      };

    case "previous":
      return {
        x: previousX,
        scale: 0.82,
        opacity: 0.75,
        zIndex: 2,
      };

    case "active":
      return {
        x: 0,
        scale: 1,
        opacity: 1,
        zIndex: 5,
      };

    case "next":
      return {
        x: nextX,
        scale: 0.82,
        opacity: 0.75,
        zIndex: 2,
      };

    case "farNext":
      return {
        x: farNextX,
        scale: 0.65,
        opacity: 0.35,
        zIndex: 1,
      };
  }
}

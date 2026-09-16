import React from "react";

export default function AnimatedBg() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      <img
        src="/bg_big_circle.svg"
        alt="big-circle"
        className="absolute -left-24 bottom-20 w-150 animate-wander-one"
      />

      <img
        src="/bg_small_circle.svg"
        alt="small-circle"
        className="absolute right-50 top-24 animate-wander-two"
      />
    </div>
  );
}

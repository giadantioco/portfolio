"use client";

import { Lottie } from "lottie-react";
import { useRef } from "react";

export function AnimatedBg() {
  const lottieRef = useRef<any>(null);

  return (
    <>
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none opacity-50">
        <Lottie
          ref={lottieRef}
          src="/animations/bg_animation.json"
          loop={true}
          autoplay={true}
          renderer="svg"
          rendererSettings={{
            preserveAspectRatio: "xMidYMid slice",
          }}
        />
      </div>
    </>
  );
}

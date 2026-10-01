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
          style={{
            width: "100%",
            height: "100%",
            display: "block",
          }}
          rendererSettings={{
            preserveAspectRatio: "xMidYMid slice",
            progressiveLoad: true,
            hideOnTransparent: true,
          }}
        />
      </div>
    </>
  );
}

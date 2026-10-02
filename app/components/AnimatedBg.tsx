"use client";
import { Lottie } from "lottie-react";
import { useRef, useState } from "react";

export function AnimatedBg() {
  const lottieRef = useRef<any>(null);
  const [isPaused, setIsPaused] = useState(false);

  const togglePause = () => {
    if (isPaused) {
      lottieRef.current?.play();
    } else {
      lottieRef.current?.pause();
    }
    setIsPaused(!isPaused);
  };

  return (
    <>
      <div className="fixed w-full h-full transition duration-500 opacity-50 md:opacity-30">
        <Lottie
          ref={lottieRef}
          src="/animations/bg_animation.json"
          loop
          autoplay
          renderer="svg"
          style={{}}
          rendererSettings={{
            preserveAspectRatio: "xMidYMid slice",
          }}
        ></Lottie>
      </div>

      {/* Fallback su mobile */}
      {/* <div className="md:hidden fixed top-0 left-0 w-full h-full -z-10 bg-linear-to-br from-slate-950 to-slate-900"></div> */}

      <button
        onClick={togglePause}
        className="sr-only"
        aria-label={isPaused ? "Play animation" : "Pause animation"}
      >
        {isPaused ? "▶" : "⏸"}
      </button>
    </>
  );
}

"use client";

import { Lottie } from "lottie-react";
import { useRef, useState } from "react";

export default function Hero() {
  const sparklesRef = useRef<any>(null);
  const [isSparklesPaused, setIsSparklesPaused] = useState(false);

  return (
    <section className="min-h-[95vh] flex flex-col border-b border-melon/30">
      <div className="m-auto w-full px-6 md:px-10 max-w-5xl">
        <div className="flex flex-col lg:flex-row pt-15 items-center justify-center gap-10 lg:gap-16 text-center lg:text-left">
          <div className="relative h-40 w-40 shrink-0 md:h-83 md:w-83">
            <div className="absolute -top-1.5 -left-1.5 h-40 w-40 rounded-[18.72px] border border-pink md:-top-3 md:-left-3 md:h-83 md:w-83 md:rounded-[40px]"></div>
            <img
              src="/profile_.gif"
              alt="Giada"
              className="h-full w-full object-cover border border-off-white rounded-[18.72px] md:rounded-[40px]"
            />
            <div className="absolute h-7 w-7 -top-6 -right-6 md:-top-10 md:-right-10 md:h-16 md:w-16">
              <Lottie
                ref={sparklesRef}
                src="/animations/sparkles_animation.json"
                loop={true}
                autoplay={true}
                renderer="svg"
                rendererSettings={{
                  preserveAspectRatio: "xMidYMid slice",
                  progressiveLoad: true,
                  hideOnTransparent: true,
                }}
              />
              <button
                onClick={() => {
                  if (isSparklesPaused) sparklesRef.current?.play();
                  else sparklesRef.current?.pause();
                  setIsSparklesPaused(!isSparklesPaused);
                }}
                className="sr-only"
                aria-label="Pause sparkles animation"
              >
                {isSparklesPaused ? "Play" : "Pause"}
              </button>
            </div>
          </div>
          <div className="max-w-xl flex flex-col items-center lg:items-start">
            <h4 className="font-display text-off-white text-xl md:text-4xl mb-1 xl:mb-4">
              Hi! I'm Giada
              <span className="test-wave ml-1.5">👋</span>
            </h4>
            <h1 className="font-display text-melon font-bold text-5xl lg:text-8xl mb-1 xl:mb-4">
              frontend <br />
              developer
            </h1>
            <div className="w-full lg:max-w-2xl max-w-95">
              <p className="lg:text-left text-center font-mono md:text-xl text-[12px] text-off-white mt-1 max-w-md">
                passionate about creating responsive, intuitive web experiences.
                Ready to bring ideas to life with clean and efficient code.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-auto py-10 flex justify-center ">
          <div
            className="relative w-35 h-35 flex items-center justify-center cursor-pointer"
            onClick={() => {
              window.scrollBy({
                top: window.innerHeight,
                behavior: "smooth",
              });
            }}
          >
            <img
              src="/scroll_component.svg"
              alt="scroll-down"
              className="animate-[spin_20s_linear_infinite]"
            />
            <img
              src="/arrow_down.svg"
              alt="arrow-down"
              className="absolute inset-0 m-auto w-4 h-4 animate-pulse"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { Lottie } from "lottie-react";
import { useRef } from "react";

export default function Hero() {
  const lottieRef = useRef<any>(null);

  return (
    <>
      <section className="min-h-screen flex flex-col border-b border-melon/30">
        <div className="m-auto w-full px-6 md:px-10 max-w-5xl">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16 text-center lg:text-left">
            <div className="relative mt-10 h-40 w-40 shrink-0 md:mt-0 md:h-83 md:w-83">
              <div className="absolute -top-1.5 -left-1.5 h-40 w-40 rounded-[18.72px] border border-pink md:-top-3 md:-left-3 md:h-83 md:w-83 md:rounded-[40px]"></div>

              <img
                src="/avatar1.png"
                alt="Giada"
                className="h-full w-full object-cover"
              />

              <div className="absolute -top-10 -right-10 h-16 w-16">
                <Lottie
                  ref={lottieRef}
                  src="/animations/sparkles_animation.json"
                  loop
                  autoplay
                />
              </div>
            </div>
            <div className="max-w-xl flex flex-col items-center lg:items-start">
              <h4 className="font-display text-melon text-2xl md:text-4xl mb-1 xl:mb-4">
                Hi! I'm Giada
                <span className="test-wave ml-1.5">👋</span>
              </h4>
              <h1 className="font-display text-white font-bold text-5xl lg:text-8xl mb-1 xl:mb-4">
                frontend <br />
                developer
              </h1>
              <p className="font-mono text-off-white mt-1 max-w-xl">
                ready to dive into the world of frontend development. After a
                couple of bootcamps and a lot of hours spent coding, I'm eager
                to apply my skills in creating responsive and intuitive web
                applications.
              </p>
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
                src="/scroll_component.png"
                alt=""
                className="animate-[spin_20s_linear_infinite]"
              />
              <img
                src="/arrow_down.svg"
                alt=""
                className="absolute inset-0 m-auto w-4 h-4"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

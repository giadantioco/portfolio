"use client";
import React from "react";
import { useRef } from "react";
import { Lottie } from "lottie-react";
import { ButtonCTA } from "./atoms";

export default function Contact() {
  const sparklesRef = useRef<any>(null);
  return (
    <section className="min-h-screen w-full relative flex flex-col items-center justify-center gap-10">
      <h1 className="relative font-display font-bold text-melon text-5xl md:text-8xl lg:text-9xl whitespace-nowrap">
        Let's Talk
        <div className="absolute h-7 w-7 -right-7 -top-5 md:-right-5s md:-top-5 md:h-10 md:w-10">
          <Lottie
            ref={sparklesRef}
            src="/animations/sparkles_animation.json"
            loop={true}
            autoplay={true}
            className="brightness-0 invert opacity-70"
            renderer="svg"
            rendererSettings={{
              preserveAspectRatio: "xMidYMid slice",
              progressiveLoad: true,
              hideOnTransparent: true,
            }}
          />
        </div>
      </h1>

      <ButtonCTA label="Contact me" href="mailto:giada.antiooco@gmail.com" />
    </section>
  );
}

import React from "react";
import { ButtonCTA } from "./atoms";

export default function Contact() {
  return (
    <section className="min-h-screen w-full flex flex-col items-center justify-center px-6">
      <h1 className="font-display font-bold text-white text-5xl md:text-8xl lg:text-9xl mb-4">
        Let's Talk
      </h1>
      <ButtonCTA label="Contact me" href="mailto:giada.antiooco@gmail.com" />
    </section>
  );
}

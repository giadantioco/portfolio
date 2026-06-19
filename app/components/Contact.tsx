import React from "react";
import { ButtonCTA } from "./atoms";

export default function Contact() {
  return (
    <section className="h-screen w-full flex flex-col items-center justify-center px-6">
      {/* Testo grande H1 */}
      <h1 className="font-display font-bold text-white text-5xl md:text-8xl lg:text-9xl mb-1 xl:mb-4">
        Let's Talk
      </h1>

      {/* Bottone CTA */}
      <ButtonCTA label="Contact me" href="mailto:giada.antiooco@gmail.com" />
    </section>
  );
}

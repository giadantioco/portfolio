import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-black py-6 border-t border-white/5">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="font-mono text-[10px] md:text-xs text-white/50 uppercase tracking-widest">
          Created by <span className="text-white">Giada Antioco </span>
        </p>

        <p className="font-mono text-[10px] md:text-xs text-white/50 uppercase tracking-widest">
          © {currentYear} — All rights reserved
        </p>
      </div>
    </footer>
  );
}

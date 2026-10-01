export default function Header() {
  return (
    <header className="relative xl:sticky xl:top-0 w-full">
      <div className="w-full flex items-center justify-between py-4 md:py-6 px-6 md:px-12 xl:px-20">
        <a href="#">
          <div className="text-[16px] md:text-[22px] font-display">
            <span className="text-melon">&lt;</span>
            <span className="font-semibold text-off-white">giada</span>
            <span className="font-normal text-off-white/30">antioco</span>
            <span className="text-melon">&gt;</span>
          </div>
        </a>

        <nav className="flex gap-2 sm:gap-5 lg:gap-6">
          <a
            href="https://www.linkedin.com/in/giada-antioco/"
            target="_blank"
            className="p-2 border border-pink rounded-[10px] hover:border-melon transition-colors"
          >
            <img
              src="/linkedin2.svg"
              alt="linkedin"
              className="w-3 h-3 md:w-5 md:h-5"
            />
          </a>
          <a
            href="https://github.com/giadantioco"
            target="_blank"
            className="p-2 border border-pink rounded-[10px] hover:border-melon transition-colors"
          >
            <img
              src="/github2.svg"
              alt="Github"
              className="w-3 h-3 md:w-5 md:h-5"
            />
          </a>
          <a
            href="mailto:giada.antioco@gmail.com"
            className="p-2 border border-pink rounded-[10px] hover:border-melon transition-colors"
          >
            <img
              src="/mail2.svg"
              alt="email"
              className="w-3 h-3 md:w-5 md:h-5"
            />
          </a>
        </nav>
      </div>
    </header>
  );
}

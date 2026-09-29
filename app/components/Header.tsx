export default function Navbar() {
  return (
    <header className="relative xl:sticky xl:top-0 w-full">
      <div className="w-full flex items-center justify-between py-4 md:py-6 px-6 md:px-12 xl:px-20">
        <a href="#">
          <img src="/logo.png" alt="Logo" className="w-auto antialiased" />
        </a>

        <nav className="flex gap-2 sm:gap-5 lg:gap-6">
          <a href="https://www.linkedin.com/in/giada-antioco/" target="_blank">
            <img src="/linkedin.svg" alt="linkedin" />
          </a>
          <a href="https://github.com/giadantioco" target="_blank">
            <img src="/github.svg" alt="Github" />
          </a>
          <a href="mailto:giada.antioco@gmail.com">
            <img src="/email.svg" alt="email" />
          </a>
        </nav>
      </div>
    </header>
  );
}

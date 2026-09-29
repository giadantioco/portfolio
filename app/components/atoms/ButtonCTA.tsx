interface ButtonCTAProps {
  href: string;
  label: string;
}

export default function ButtonCTA({ href, label }: ButtonCTAProps) {
  const isEmail = href.startsWith("mailto:");
  return (
    <a
      href={href}
      target={isEmail ? undefined : "_blank"}
      rel={isEmail ? undefined : "noopener noreferrer"}
      className="flex gap-2 items-center bg-pink text-off-black font-display font-semibold text-md tracking-tight px-4 py-3 rounded-full uppercase hover:bg-off-white transition-all duration-300 shadow-lg active:scale-95"
    >
      {label}
      <img src="arrow.svg" alt={"arrow-icon"} className="w-4 h-4" />
    </a>
  );
}

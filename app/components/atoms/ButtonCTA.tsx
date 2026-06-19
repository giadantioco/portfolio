interface ButtonCTAProps {
  label: string;
  href: string;
}

export default function ButtonCTA({ label, href }: ButtonCTAProps) {
  const isEmail = href.startsWith("mailto:");
  return (
    <a
      href={href}
      target={isEmail ? undefined : "_blank"}
      rel={isEmail ? undefined : "noopener noreferrer"}
      className="inline-block bg-pink text-off-black font-display font-semibold text-md tracking-tight px-4 py-3 rounded-full uppercase hover:bg-off-white transition-all duration-300 shadow-lg active:scale-95"
    >
      {label} ↗
    </a>
  );
}

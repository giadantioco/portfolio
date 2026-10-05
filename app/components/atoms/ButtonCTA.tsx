interface ButtonCTAProps {
  href: string;
  label: string;
  variant?: "primary" | "secondary";
}

export default function ButtonCTA({
  href,
  label,
  variant = "primary",
}: ButtonCTAProps) {
  const isEmail = href.startsWith("mailto:");

  const styles =
    variant === "primary"
      ? "bg-pink text-violet hover:border hover:border-melon"
      : "bg-violet text-pink border border-pink hover:border-melon";

  const arrowDefault =
    variant === "primary" ? "/north_east_violet.svg" : "/north_east_pink.svg";

  return (
    <a
      href={href}
      target={isEmail ? undefined : "_blank"}
      rel={isEmail ? undefined : "noopener noreferrer"}
      className={`group inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-[10px] font-display font-semibold text-base tracking-wide uppercase shadow-lg transition-all duration-200 active:scale-95 ${styles}`}
    >
      <span>{label}</span>

      <span className="relative flex h-4 w-4 shrink-0">
        <img
          src={arrowDefault}
          alt=""
          aria-hidden="true"
          className="h-full w-full"
        />
      </span>
    </a>
  );
}

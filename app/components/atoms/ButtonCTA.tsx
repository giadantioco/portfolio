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
      ? "bg-pink text-violet hover:bg-off-white hover:text-pink hover:border hover:border-pink"
      : "bg-violet text-pink border border-pink hover:bg-off-white hover:text-violet";

  const arrowDefault =
    variant === "primary" ? "/north_east_violet.svg" : "/north_east_pink.svg";

  const arrowHover =
    variant === "primary" ? "/north_east_pink.svg" : "/north_east_violet.svg";

  return (
    <a
      href={href}
      target={isEmail ? undefined : "_blank"}
      rel={isEmail ? undefined : "noopener noreferrer"}
      className={`group inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-[10px] font-display font-semibold text-base tracking-wide uppercase shadow-lg transition-all duration-200 active:scale-95 ${styles}`}
    >
      <span>{label}</span>

      <span className="relative flex h-4 w-4 shrink-0">
        {/* Default arrow */}
        <img
          src={arrowDefault}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full opacity-100 transition-opacity duration-200 group-hover:opacity-0"
        />

        {/* Hover arrow */}
        <img
          src={arrowHover}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full opacity-0 transition-opacity duration-200 group-hover:opacity-100"
        />
      </span>
    </a>
  );
}

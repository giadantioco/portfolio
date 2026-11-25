interface ButtonCTAProps {
  href: string;
  label: string;
  variant?: "primary" | "secondary";
}

const VARIANT_STYLES = {
  primary: "bg-pink text-violet border-transparent hover:border-melon",
  secondary: "bg-violet text-pink border-pink hover:border-melon",
} as const;

export default function ButtonCTA({
  href,
  label,
  variant = "primary",
}: ButtonCTAProps) {
  const isEmail = href.startsWith("mailto:");

  const arrowDefault =
    variant === "primary" ? "/north_east_violet.svg" : "/north_east_pink.svg";

  return (
    <a
      href={href}
      target={isEmail ? undefined : "_blank"}
      rel={isEmail ? undefined : "noopener noreferrer"}
      className={`group inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-[10px] border font-display font-semibold text-base tracking-wide uppercase shadow-lg transition-[color,background-color,border-color,scale] duration-200 active:scale-95 ${VARIANT_STYLES[variant]}`}
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

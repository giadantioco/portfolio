interface SkillBadgeProps {
  label: string;
  variant?: "primary" | "outline";
  size?: "sm" | "md" | "lg";
}

export default function SkillBadge({
  label,
  variant = "outline",
  size = "md",
}: SkillBadgeProps) {
  const sizeStyles = {
    sm: "px-3 py-1 text-xs md:text-sm",
    md: "px-6 py-3 text-lg md:text-2xl",
    lg: "px-8 py-4 md:px-10 md:py-5 text-2xl md:text-5xl",
  };

  const variantStyles = {
    primary: "bg-melon text-off-black border-transparent",
    outline:
      "border-melon text-off-white hover:border-melon/30 hover:bg-melon/5",
  };

  return (
    <div
      className={`
        ${sizeStyles[size]} 
        ${variantStyles[variant]} 
        spin-glow
        border rounded-full font-mono transition-all duration-300 
        cursor-default transform hover:-translate-y-1 select-none
      `}
    >
      {label}
    </div>
  );
}

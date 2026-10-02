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
    sm: "px-2 py-1 text-[10px] md:px-3 md:text-sm",
    md: "px-3 py-1.5 text-sm md:px-6 md:py-3 md:text-2xl",
    lg: "px-4 py-2 text-lg md:px-8 md:py-4 md:text-2xl",
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
        cursor-default transform select-none
      `}
    >
      {label}
    </div>
  );
}

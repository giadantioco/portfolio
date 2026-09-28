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
  // Gestione delle dimensioni (Atomo flessibile)
  const sizeStyles = {
    sm: "px-3 py-1 text-xs md:text-sm",
    md: "px-6 py-3 text-lg md:text-2xl",
    lg: "px-8 py-4 md:px-10 md:py-5 text-2xl md:text-4xl",
  };

  // Gestione degli stili (Atomo versatile)
  const variantStyles = {
    primary: "bg-melon text-off-black border-transparent",
    outline:
      "border-melon/30 text-melon/90 hover:border-melon hover:bg-melon/5",
  };

  return (
    <div
      className={`
        ${sizeStyles[size]} 
        ${variantStyles[variant]} 
        spin-glow
        border rounded-full font-display transition-all duration-300 
        cursor-default transform hover:-translate-y-1 select-none
      `}
    >
      {label}
    </div>
  );
}

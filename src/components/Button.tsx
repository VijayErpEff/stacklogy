import Link from "next/link";

const variantStyles = {
  primary:
    "bg-brand-orange text-white hover:bg-orange-600 shadow-sm",
  secondary:
    "bg-slate-900 text-white hover:bg-slate-800 shadow-sm",
  ghost:
    "text-slate-600 hover:text-slate-900",
} as const;

const sizeStyles = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
} as const;

interface ButtonProps {
  variant?: keyof typeof variantStyles;
  size?: keyof typeof sizeStyles;
  href?: string;
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
}

export default function Button({
  variant = "primary",
  size = "md",
  href,
  children,
  className = "",
  type = "button",
  onClick,
}: ButtonProps) {
  const baseStyles =
    "group inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-200";

  const classes = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`.trim();

  const content = (
    <>
      {children}
      <span
        className="inline-block transition-transform duration-200 group-hover:translate-x-1"
        aria-hidden="true"
      >
        &rarr;
      </span>
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {content}
    </button>
  );
}

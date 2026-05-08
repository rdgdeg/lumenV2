import { useState } from "react";

interface PrimaryButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: "outline" | "filled";
  className?: string;
  type?: "button" | "submit";
  fullWidth?: boolean;
}

export default function PrimaryButton({
  children, onClick, href, variant = "outline", className = "", type = "button", fullWidth = false,
}: PrimaryButtonProps) {
  const [hovered, setHovered] = useState(false);

  const baseClasses = `inline-flex items-center justify-center gap-2 font-display text-xs font-semibold uppercase tracking-[0.12em] px-8 py-3.5 rounded-full transition-all duration-300 ease-out cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-primary)] ${fullWidth ? "w-full" : ""} ${className}`;

  const content = (
    <>
      {children}
      <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="transition-transform duration-300" style={{ transform: hovered ? "translateX(3px)" : "translateX(0)" }}>
        <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );

  if (variant === "filled") {
    const classes = `${baseClasses} border`;
    const style = hovered
      ? { backgroundColor: "var(--btn-primary-hover)", borderColor: "var(--btn-primary-hover)", color: "var(--btn-primary-text)", boxShadow: "0 10px 25px var(--shadow-card-hover)" }
      : { backgroundColor: "var(--btn-primary-bg)", borderColor: "var(--btn-primary-bg)", color: "var(--btn-primary-text)" };
    if (href) return <a href={href} className={classes} style={style} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} onClick={onClick}>{content}</a>;
    return <button type={type} className={classes} style={style} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} onClick={onClick}>{content}</button>;
  }

  const classes = `${baseClasses} border`;
  const style = hovered
    ? { backgroundColor: "var(--btn-primary-bg)", borderColor: "var(--btn-primary-bg)", color: "var(--btn-primary-text)", boxShadow: "0 8px 22px var(--shadow-card)" }
    : { backgroundColor: "transparent", borderColor: "var(--btn-outline-border)", color: "var(--btn-outline-text)" };
  if (href) return <a href={href} className={classes} style={style} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} onClick={onClick}>{content}</a>;
  return <button type={type} className={classes} style={style} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} onClick={onClick}>{content}</button>;
}

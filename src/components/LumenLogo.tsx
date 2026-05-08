interface LumenLogoProps {
  color?: string;
  width?: number;
}

export default function LumenLogo({ color, width = 120 }: LumenLogoProps) {
  const height = width * 0.42;
  const logoColor = color || "var(--text-light)";
  return (
    <svg width={width} height={height} viewBox="0 0 120 50" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M52 8C52 8 50 4 46 4C42 4 40 8 40 8C40 8 38 12 40 16C42 20 46 22 46 22C46 22 50 20 52 16C54 12 52 8 52 8Z"
        stroke={logoColor}
        strokeWidth="1.2"
        fill="none"
      />
      <path d="M46 22V42" stroke={logoColor} strokeWidth="1.2" />
      <path d="M52 12C52 12 56 8 60 8" stroke={logoColor} strokeWidth="1" fill="none" />
      <text
        x="18" y="42"
        fontFamily="Cormorant Garamond, serif"
        fontSize="28" fontWeight="500"
        fill={logoColor}
        letterSpacing="3"
      >
        LUMEN
      </text>
    </svg>
  );
}

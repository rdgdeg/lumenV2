import { useTheme } from "@/hooks/useTheme";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative inline-flex items-center gap-2 px-3 py-1.5 rounded-full transition-all duration-300"
      style={{
        backgroundColor: "var(--theme-toggle-bg)",
        color: "var(--text-light)",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.backgroundColor = "var(--theme-toggle-hover)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.backgroundColor = "var(--theme-toggle-bg)";
      }}
      title={theme === "warm" ? "Passer au theme sombre" : "Passer au theme clair"}
    >
      {/* Sun icon */}
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        style={{
          opacity: theme === "warm" ? 1 : 0.4,
          transition: "opacity 0.3s",
        }}
      >
        <circle cx="12" cy="12" r="5" />
        <line x1="12" y1="1" x2="12" y2="3" />
        <line x1="12" y1="21" x2="12" y2="23" />
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
        <line x1="1" y1="12" x2="3" y2="12" />
        <line x1="21" y1="12" x2="23" y2="12" />
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
      </svg>

      {/* Toggle pill */}
      <div
        className="relative w-8 h-4 rounded-full transition-colors duration-300"
        style={{ backgroundColor: theme === "warm" ? "var(--accent)" : "var(--accent-medium)" }}
      >
        <div
          className="absolute top-0.5 w-3 h-3 rounded-full transition-transform duration-300"
          style={{
            backgroundColor: "var(--text-light)",
            transform: theme === "warm" ? "translateX(2px)" : "translateX(18px)",
          }}
        />
      </div>

      {/* Moon icon */}
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        style={{
          opacity: theme === "dark" ? 1 : 0.4,
          transition: "opacity 0.3s",
        }}
      >
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
      </svg>

      <span className="hidden lg:inline font-body text-[11px] uppercase tracking-wider ml-1">
        {theme === "warm" ? "Clair" : "Sombre"}
      </span>
    </button>
  );
}

import { createContext, useContext, useState, useEffect, type ReactNode } from "react";

type Theme = "warm" | "dark";

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | null>(null);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(() => {
    const saved = localStorage.getItem("lumen-theme");
    return (saved as Theme) || "warm";
  });

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("theme-warm", "theme-dark");
    root.classList.add(`theme-${theme}`);
    localStorage.setItem("lumen-theme", theme);
  }, [theme]);

  const setTheme = (t: Theme) => setThemeState(t);
  const toggleTheme = () => setThemeState((prev) => (prev === "warm" ? "dark" : "warm"));

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}

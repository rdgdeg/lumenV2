import { useState, useCallback } from "react";

const ADMIN_PASSWORD = "lumen2026";
const AUTH_KEY = "lumen_admin_auth";

export function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem(AUTH_KEY) === "true";
  });
  const [error, setError] = useState("");

  const login = useCallback((password: string) => {
    if (password === ADMIN_PASSWORD) {
      localStorage.setItem(AUTH_KEY, "true");
      setIsAuthenticated(true);
      setError("");
      return true;
    } else {
      setError("Mot de passe incorrect. Veuillez reessayer.");
      return false;
    }
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem(AUTH_KEY);
    setIsAuthenticated(false);
    setError("");
  }, []);

  return { isAuthenticated, login, logout, error };
}

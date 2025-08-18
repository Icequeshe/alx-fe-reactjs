import { useState } from "react";

export function useAuth() {
  // Mock authentication state
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Functions to login/logout (for demo purposes)
  const login = () => setIsAuthenticated(true);
  const logout = () => setIsAuthenticated(false);

  return { isAuthenticated, login, logout };
}

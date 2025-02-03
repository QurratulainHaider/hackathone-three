// src/components/context/auth-context.tsx
"use client";

import { createContext, useContext, useState } from "react";

interface AuthContextProps {
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string, name: string) => Promise<void>;
  user: { email?: string; name?: string } | null;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<{ email?: string, name?: string } | null>(null);

  const login = async (email: string, password: string) => {
    if (email === "test@example.com" && password === "password") {
      setUser({ email });
      return Promise.resolve();
    } else {
      return Promise.reject(new Error("Invalid login credentials"));
    }
  };

  const register = async (email: string, password: string, name: string) => {
    setUser({ email, name });
    return Promise.resolve();
  };

  return (
    <AuthContext.Provider value={{ login, register, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

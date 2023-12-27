import { createContext, useState, ReactNode } from "react";

interface AuthContextProps {
  auth: string;
  setAuth: (auth: string) => void;
}

export const AuthContext = createContext<AuthContextProps | null>(null);

interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [auth, setAuth] = useState("");
  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
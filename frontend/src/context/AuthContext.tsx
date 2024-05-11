// Imports
import { AuthReturn, useAuth } from "@/hooks/useAuth";
import { ReactNode, createContext, useContext } from "react";

type AuthContextProviderProp = {
  children: ReactNode
}

export const AuthContext = createContext<AuthReturn | null>(null);

export default function AuthContextProvider({ children }: AuthContextProviderProp) {
  const auth = useAuth();
  return (
    <AuthContext.Provider value={ auth }>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuthProvider(){
  const context = useContext(AuthContext)
  if(!context){
    throw new Error(
      "useAuthProvider must be used in AuthContextProvider"
    )
  }
  return context;
}
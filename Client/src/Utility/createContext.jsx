import { createContext, useContext, useState } from "react";

const GoogleAuth = createContext();

export const AuthProvider = ({ children }) => {
  const [gauth, setAuth] = useState({
    token: null,
  });

  return (
    <GoogleAuth.Provider value={[gauth, setAuth]}>{children}</GoogleAuth.Provider>
  );
};

const useAuth = () => {
  return useContext(GoogleAuth);
};

export default useAuth;

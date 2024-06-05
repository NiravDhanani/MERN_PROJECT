import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoutes = () => {
  const [authenticated, setAuthenticated] = useState(true);

  useEffect(() => {
    const validToken = async () => {
      let localData = JSON.parse(localStorage.getItem("Login"));
      const token = localData?.token;
      let response = await fetch(
        "http://localhost:8222/v1/Api/Validate-token",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      let data = await response.json();
      if (data.success) {
        setAuthenticated(true);
      } else {
        setAuthenticated(false);
        localStorage.removeItem("Login")
      }
    };
    validToken();
  }, []);

  return authenticated ? <Outlet /> : <Navigate to={"/login"} />;
};

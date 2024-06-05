import React, { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import "bootstrap/dist/js/bootstrap.bundle.js";
import { BrowserRouter, Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { Home } from "./Pages/Home/Home";
import { Dashboard } from "./Pages/Dashboard/Dashboard";
import { Cart } from "./Pages/Cart/Cart";
import { About } from "./Pages/About/About";
import { Register } from "./Pages/Register/Register";
import { Login } from "./Pages/Login/Login";
import { Blog } from "./Pages/Blog/Blog";
import { ProtectedRoutes } from "./Utility/ProtectedRoutes";

function App() {
  const [userRole, setUserRole] = useState("");

  useEffect(() => {
    const validToken = async () => {
      let localData = JSON.parse(localStorage.getItem("Login"));
      const token = localData?.token;

      try {
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
          return setUserRole(data.data.payload.role);

        } else {
          setUserRole("");
        }
      } catch (err) {
        console.error("Token validation error:", err);
        setUserRole(null);
      }
    };
    validToken();
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
          <Route element={<ProtectedRoutes />}>
            {userRole === "admin" ? (
              <Route path="/dashboard" element={<Dashboard />} />
            ) : ( <Route path="*" element={<Navigate to={'/'} />} />)}
            <Route path="/cart" element={<Cart />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

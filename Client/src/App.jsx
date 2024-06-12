import { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home/Home";
import { Cart } from "./Pages/Cart/Cart";
import { About } from "./Pages/About/About";
import { Register } from "./Pages/Register/Register";
import { Login } from "./Pages/Login/Login";
import { Blog } from "./Pages/Blog/Blog";
import { ProtectedRoutes } from "./Utility/ProtectedRoutes";
import { Dashboard } from "./Pages/Dashboard/Dashboard/Dashboard";
import { Category } from "./Pages/Dashboard/Category/Category";
import { Product } from "./Pages/Dashboard/Product/Product";
import { UserPage } from "./Pages/Dashboard/User/UserPage";

function App() {
  const [userRole, setUserRole] = useState("");
  const [loading, setLoading] = useState(true);

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
          setUserRole(data.data.payload.role);
        } else {
          setUserRole("");
        }
      } catch (err) {
        console.error("Token validation error:", err);
        setUserRole(null);
      } finally {
        setLoading(false);
      }
    };
    validToken();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/blog" element={<Blog />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/cart" element={<Cart />} />
            {userRole === "admin" ? (
              <Route path="/dashboard" element={<Dashboard />} />
            ) : (
              <Route path="/" element={<Home />} />
            )}
            <Route path="/user" element={<UserPage />} />
            <Route path="/category" element={<Category />} />
            <Route path="/product" element={<Product />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

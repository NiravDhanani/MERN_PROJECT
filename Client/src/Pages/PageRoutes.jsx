import {Route, Routes } from "react-router-dom";
import { Home } from "./Home/Home";
import { Cart } from "./Cart/Cart";
import { About } from "./About/About";
import { Register } from "./Register/Register";
import { Login } from "./Login/Login";
import { Dashboard } from "./Dashboard/Dashboard";
import { Blog } from "./Blog/Blog";

export const PageRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
      </Routes>
    </>
  );
};

import { useEffect } from "react";
import { toast } from "react-toastify";
import './Home.css'
export const Dashboard = () => {
  useEffect(() => {
    toast.success("Welcom Home Page");
  }, []);

  return (
    <>
    <h1>Dashboard</h1>
    </>
  );
};

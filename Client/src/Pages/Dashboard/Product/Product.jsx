import "./Product.css";

import Container from "react-bootstrap/esm/Container";
import { Link } from "react-router-dom";
import { Header } from "../../../Components/Header/Header";
export const Product = () => {
  return (
    <>
      <Header />
      <div className="d-flex">
        <div className="sidebar">
          <div className="section">
            <div className="py-2">
              <Link to={'/dashboard'} className="item">Dashboard</Link>
            </div>
            <div className="py-2">
              <Link to={'/user'} className="item">User</Link>
            </div>
            <div className="py-2">
              <Link to={'/category'} className="item">Category</Link>
            </div>
            <div className="py-2">
              <Link to={'/product'} className="item">Product</Link>
            </div>
            
          </div>
          <div className="section">
            <div className="item">Settings</div>
            <div className="item">Question?</div>
          </div>
        </div>
        <Container></Container>
      </div>
    </>
  );
};

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import { Link, useNavigate } from "react-router-dom";
import { IoLogoUsd } from "react-icons/io";
import { FaEuroSign } from "react-icons/fa6";
import { PiCurrencyInrBold } from "react-icons/pi";
import { TbCurrencyYuan } from "react-icons/tb";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { IoSearch } from "react-icons/io5";
import { FiPhoneCall } from "react-icons/fi";
import { IoIosHeartEmpty } from "react-icons/io";
import { BsCartPlus } from "react-icons/bs";
import Badge from "react-bootstrap/Badge";
import { CgProfile } from "react-icons/cg"; 
import { BiSolidEditAlt } from "react-icons/bi";
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { RiLogoutBoxLine } from "react-icons/ri";
import CloseButton from "react-bootstrap/CloseButton";
import "./Header.css";
// import { useLoginAuth } from "../../Context/LoginContext";
import { FaRegUserCircle } from "react-icons/fa";

export const Header = () => {
  const navigate = useNavigate()

let localToken = JSON.parse(localStorage.getItem("Login"));
  
  const handleLogout = () => {
    localStorage.removeItem("Login");
    navigate("/login");
  };
  return (
    <>
      <section className="top-bar">
        <div className="container">
          <div className="row">
            <div className="col-xxl-12 col-xl-12 d-flex justify-content-between">
              <div className="col-xxl-2 col-xl-2 d-xs-none d-sm-none d-none d-xxl-flex">
                <i className="ri-map-pin-line" />
                <span className="text-white sans">
                  1418 Riverwood Drive, CA 96052, US
                </span>
              </div>
              <div className="col-xxl-7 col-xl-9 d-xs-none d-sm-none d-none d-xl-flex">
                <div className="top-bar-offer ">
                  <div className="changebox text-center ">
                    <span>
                      "Something you love is now on sale{" "}
                      <Link href="#">Buy Now!</Link> "
                    </span>
                    <br />
                    <span>
                      "<span>Welcome to Fastkart!</span> Wrap new offers/gift
                      every signle day on Weekends.{" "}
                      <span>New Coupon Code: Fast024</span> "
                    </span>
                    <br />
                  </div>
                </div>
              </div>
              <div className="col-xxl-3 col-xs-12 col-xl-3 col-sm-12">
                <div className="top-bar-right d-flex justify-content-end">
                  <div className="language">
                    <a
                      className="d-flex align-items-center"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      style={{ color: "white" }}
                    >
                      <span>
                        {" "}
                        <img
                          src="./public/img/united-states.png"
                          width={20}
                          alt="USA"
                          className="mx-1"
                        />
                        English
                      </span>
                      <i className="ri-arrow-down-s-line" />
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="#">
                          <img
                            src="./public/img/united-kingdom.png"
                            width={20}
                            alt="UK"
                            className="mx-1"
                          />
                          English
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          <img
                            src="./public/img/germany.png"
                            width={20}
                            alt="germeny"
                            className="mx-1"
                          />
                          Germany
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          <img
                            src="./public/img/turkish.png"
                            width={20}
                            alt="turkey"
                            className="mx-1"
                          />{" "}
                          Turkey
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="desh">|</div>
                  <div className="currency">
                    <a
                      className="d-flex align-items-center"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      style={{ color: "white" }}
                    >
                      <IoLogoUsd /> USD
                      <i className="ri-arrow-down-s-line" />
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="#">
                          <PiCurrencyInrBold /> INR
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          <FaEuroSign /> EUR
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          <TbCurrencyYuan /> CNY
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* navigation header start  */}

      {/* // logincode */}
      <Navbar expand="lg" className="bg-body-tertiary navHeader">
        <Container>
          <Navbar.Brand as={Link} to={"/"}>
            <img
              src="./public/img/logo.png"
              alt="Logo"
              className="logoImg"
            ></img>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to={"/"} className="navitem ">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to={"/cart"} className="navitem">
                Cart
              </Nav.Link>
              <Nav.Link as={Link} to={"/about"} className="navitem">
                About
              </Nav.Link>
              <Nav.Link as={Link} to={"/blog"} className="navitem">
                Blog
              </Nav.Link>
              {localToken?.user?.role == "admin" ? ( <Nav.Link as={Link} to={"/dashboard"} className="navitem">
                Admin
              </Nav.Link>): ""}
             

              <NavDropdown
                title="User"
                id="basic-nav-dropdown"
                className="navitem d-md-flex d-lg-none"
              >
                {localToken ? (<>
                  <NavDropdown.Item>
                  <CgProfile /> My Profile{" "}
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <BiSolidEditAlt /> Edit Profile
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <IoSettingsOutline /> Setting
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <IoIosHelpCircleOutline /> Help & Support
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={handleLogout}>
                  <RiLogoutBoxLine /> Logout
                </NavDropdown.Item></>) : ( 
               <>
                <NavDropdown.Item as={Link} to={"/login"}>
                  <CgProfile /> Login
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to={"/register"}>
                  <BiSolidEditAlt /> Register
                </NavDropdown.Item></>
               )}
               
              </NavDropdown>
            </Nav>
            <InputGroup className="w-25 d-lg-flex d-none">
              <Form.Control
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                placeholder="I'am Searching for..."
              />
              <InputGroup.Text id="inputGroup-sizing-default">
                <IoSearch />
              </InputGroup.Text>
            </InputGroup>
            <div className="RIghtSide-menu d-lg-flex d-none">
              <ul type="none" className="d-flex justify-content-between">
                <li className="mx-2">
                  <div className="dilivery-box d-flex">
                    <div className="delivery-icon ">
                      <FiPhoneCall />
                    </div>
                    <div className="delivery-detail d-flex flex-column">
                      <span className="d-xl-flex  d-none delivery-msg">
                        24/7 Delivery
                      </span>
                      <span className="d-xl-flex d-none  delivery-num">
                        + 91 78975 85632
                      </span>
                    </div>
                  </div>
                </li>
                <div className="verticalLine"></div>

                <li className="Wishlist">
                  <IoIosHeartEmpty />
                </li>

                <div className="verticalLine"></div>
                <li className="cartlist">
                  <Badge bg="danger" className="badges">
                    9
                  </Badge>
                  <BsCartPlus />
                  <div className="dropdown-Cart">
                    <ul type="none">
                      <li>
                        <div className="item-details d-flex">
                          <div className="item-img">
                            <img src="./public/img/bottel.jpg" alt="img" />
                          </div>
                          <div className="item-info ">
                            <h5 className="item-name">Penut Butter</h5>
                            <span className="item-qty">1 x 180</span>
                          </div>
                          <CloseButton
                            className="close-btn"
                            onClick={() => alert("remove")}
                          />
                        </div>
                      </li>
                      <div className="cart-bottom">
                        <div className="d-flex justify-content-between ">
                          <span>Total : </span> <span>120</span>
                        </div>
                        <div className="d-flex justify-content-between ">
                          <button className="btn">View Cart</button>
                          <button className="btn">Checkout</button>
                        </div>
                      </div>
                    </ul>
                  </div>
                </li>
                <div className="verticalLine"></div>
                <li>
                  <div className="User-box d-flex">
                    <div className="User-icon">
                      <FaRegUserCircle/>
                      {/* <img
                        src="./public/img/user.jpg"
                        alt="user"
                        className="User-icon"
                      ></img> */}
                    </div>
                    <div className="User-detail d-flex flex-column">
                      <span className="User-msg d-xxl-flex d-none">Hello,</span>
                      <span className="User-name d-xxl-flex d-none">
                        {localToken ? localToken?.user?.name : "User Name"}
                      </span>
                    </div>
                    <div className="dropDown-box">
                      <ul type="none">
                       {localToken ? ( <>
                        <li>
                          {" "}
                          <CgProfile /> My Profile{" "}
                        </li>
                        <li>
                          <BiSolidEditAlt /> Edit Profile
                        </li>
                        <li>
                          <IoSettingsOutline /> Setting
                        </li>
                        <li>
                          <IoIosHelpCircleOutline /> Help & Support
                        </li>
                    
                        <li onClick={handleLogout}>
                          <RiLogoutBoxLine /> Logout
                        </li>
                       </>) : ( 
                       <>
                        <Link
                          to={"/login"}
                          className="navitem text-decoration-none"
                        >
                          <li>
                            <CgProfile /> Login
                          </li>
                        </Link>

                        <Link
                          to={"/register"}
                          className="navitem text-decoration-none"
                        >
                          <li>
                            <BiSolidEditAlt /> Register
                          </li>
                        </Link>
                       </>
                       )}
                      </ul>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

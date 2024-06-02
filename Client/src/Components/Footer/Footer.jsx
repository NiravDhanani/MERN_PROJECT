import "./Footer.css";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaInstagramSquare } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";

export const Footer = () => {
  return (
    <>
      <footer className="footer " style={{ overflow: "hidden" }}>
        <div className="container">
          <div className="row">
            <div className="col-12 col-xxl-12">
              {/* <img src={Img.img1} alt="" /> */}
              <div className="logistic  justify-content-between  col-12 d-none d-md-flex  flex-wrap">
                <div className="service-box d-flex col-md-6 col-6 col-lg-6 col-xl-3">
                  <div className="servics-img ">
                    <img src="./public/img/product.svg" />
                  </div>
                  <div className="servic-details ">
                    <h5>Every Fresh Products</h5>
                  </div>
                </div>
                <div className="service-box d-flex col-md-6 col-6 col-lg-6 col-xl-3">
                  <div className="servics-img">
                    <img src="./public/img/delivery.svg" />
                  </div>
                  <div className="servic-details">
                    <h5>Free Delivery For Order Over $50</h5>
                  </div>
                </div>
                <div className="service-box d-flex col-md-6 col-6 col-lg-6 col-xl-3">
                  <div className="servics-img">
                    <img src="./public/img/discount.svg" />
                  </div>
                  <div className="servic-details">
                    <h5>Daily Mega Discounts</h5>
                  </div>
                </div>
                <div className="service-box d-flex col-md-6 col-6 col-lg-6 col-xl-3">
                  <div className="servics-img">
                    <img src="./public/img/market.svg" />
                  </div>
                  <div className="servic-details">
                    <h5 className="border-0">Best Price On The Market</h5>
                  </div>
                </div>
              </div>
              <div className="service-sector d-flex  flex-wrap justify-content-between">
                <div className=" col-12 col-md-6 col-lg-4 col-xl-3 mb-3">
                  <div className="footer-logo">
                    <img src="./public/img/logo.png" alt />
                  </div>
                  <div className="service-info1">
                    <p>
                      We are a friendly bar serving a variety of cocktails,
                      wines and beers. Our bar is a perfect place for a couple.
                    </p>
                    <ul type="none">
                      <li className="text-decoration-none">
                        <Link className="footer-items">
                          <FaLocationDot /> 1418 Riverwood Drive, CA 96052, US{" "}
                        </Link>
                      </li>
                      <li>
                        <Link className="footer-items">
                          <MdOutlineEmail /> support@fastkart.com
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className=" col-12 col-md-6 col-lg-2 col-xl-2 mb-3">
                  <div className="service-info ">
                    <h4 className="dropdown1">Categories</h4>
                    <ul type="none" className="dropdown-menu1 ">
                      <li>
                        <Link className="footer-items"> Vegetables &amp; Fruit </Link>
                      </li>
                      <li>
                        <Link  className="footer-items"> Beverages</Link>
                      </li>
                      <li>
                        <Link className="footer-items"> Meats &amp; Seafood</Link>
                      </li>
                      <li>
                        <Link className="footer-items"> Frozen Foods</Link>
                      </li>
                      <li>
                        <Link className="footer-items"> Biscuits &amp; Snacks</Link>
                      </li>
                      <li>
                        <Link className="footer-items"> Grocery &amp; Staples</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-12 col-md-4 col-lg-2 col-xxl-2 mb-3">
                  <div className="service-info">
                    <h4 className="dropdown1">Useful Links</h4>
                    <ul type="none" className="dropdown-menu1 ">
                      <li>
                        <Link className="footer-items"> Home </Link>
                      </li>
                      <li>
                        <Link className="footer-items"> Shop</Link>
                      </li>
                      <li>
                        <Link className="footer-items"> About Us</Link>
                      </li>
                      <li>
                        <Link className="footer-items"> Blog</Link>
                      </li>
                      <li>
                        <Link className="footer-items"> Contact us</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-12 col-md-4  col-lg-2 col-xxl-2 mb-3">
                  <div className="service-info">
                    <h4 className="dropdown1">Help Center</h4>
                    <ul type="none" className="dropdown-menu1 ">
                      <li>
                        <Link  className="footer-items"> Your Order </Link>
                      </li>
                      <li>
                        <Link className="footer-items"> Your Account</Link>
                      </li>
                      <li>
                        <Link className="footer-items"> Track Order</Link>
                      </li>
                      <li>
                        <Link className="footer-items"> Your Wishlist</Link>
                      </li>
                      <li>
                        <Link className="footer-items"> Search</Link>
                      </li>
                      <li>
                        <Link className="footer-items"> FAQ</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-6 col-md-4  col-lg-2 col-xxl-2 mb-3">
                  <div className="service-info1">
                    <h4 className="dropdown1">Contact Us</h4>
                    <div className="footer-content">
                      <ul type="none" id="none-1" className="dropdown-menu1 ">
                        <li>
                          <div className="footer-number d-flex">
                            <div className="contact-number">
                            <BsFillTelephoneFill/>
                            </div>
                            <div className="contact-01">
                              <h5>Hotline 24/7 :</h5>
                              <h6>+91 888 104 2340</h6>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="footer-number d-flex">
                            <div className="contact-number">
                            <MdEmail/>
                            </div>
                            <div className="contact-01">
                              <h5>Email Address :</h5>
                              <h6>fastkart@hotmail.com</h6>
                            </div>
                          </div>
                        </li>
                        <div className="footer-info">
                          <h4>Download App :</h4>
                          <ul type="none" className="d-lg-flex flex-wrap">
                            <li>
                              <Link>
                                {" "}
                                <img
                                  src="./public/img/playstore.svg"
                                  alt
                                />{" "}
                              </Link>
                            </li>
                            <li>
                              <Link>
                                {" "}
                                <img src="./public/img/appstore.svg" alt />
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="foot-service d-lg-flex ">
                <div className="reserve  col-md-12 col-lg-4">
                  <h6 className="col-12 col-md-12  d-flex justify-content-center">
                    ©2022 Fastkart All rights reserved
                  </h6>
                </div>
                <div className="payment col-12 col-md-12 col-lg-4 d-flex justify-content-center">
                  <img
                    src="./public/img/1 (1).png"
                    className="img-fluid"
                    height="20px"
                  />
                </div>
                <div className="text-content d-flex justify-content-center col-md-12 col-lg-3">
                  <h6>Stay connected :</h6>
                  <ul type="none" className="d-flex px-1">
                    <li>
                      <FaFacebookF className="facebook"/>
                    </li>
                    <li>
                      <FaTwitter  className="twitter"/>
                    </li>
                    <li>
                    <FaInstagramSquare  className="insta"/>
                    </li>
                    <li>
                    <FaPinterest  className="pintrest"/>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

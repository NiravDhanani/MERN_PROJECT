import { Footer } from "../../Components/Footer/Footer";
import { Header } from "../../Components/Header/Header";
import './Cart.css'

export const Cart = () => {
  return (
    <>
    <Header/>
      <div>
        <section className="cart-page-head01">
          <section className="otp-page-head">
            <div className="container">
              <div className="row">
                <div className="col-xxl-12 col-12">
                  <div className="otp1 d-flex justify-content-between align-items-center">
                    <h4>Cart</h4>
                    <span className="d-flex align-items-center">
                      <a href="index.html">
                        {" "}
                        <i className="ri-home-4-fill" />{" "}
                      </a>
                      <i className="ri-arrow-right-s-line" />
                      <p>Cart</p>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
        {/* cart section  container    */}
        <section className="cart-product">
          <div className="container">
            <div className="row d-xl-flex">
              <div className="col-xxl-9 col-xl-9 col-12  px-2">
                <div className="py-3 table-body overflow-scroll">
                  <div className="cart-table d-flex justify-content-between ">
                    <div className="col-xxl-3">
                      <div className="table d-flex ">
                        <div className="tab-img ">
                          <img
                            src="./public/img/11.png"
                            className="img-fluid"
                          />
                        </div>
                        <div className="name">
                          <h4>Bell pepper</h4>
                          <p>
                            SoldBy:<span> Fresho</span>
                          </p>
                          <p>
                            Quantity:<span> - 500 g</span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-3">
                      <div className="table d-flex ">
                        <div className="price">
                          <h5>Price</h5>
                          <p className="compare">
                            $35.10
                            <span>
                              <del>$45.68</del>
                            </span>
                          </p>
                          <h6>You Save : $20.68</h6>
                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-2">
                      <div className="table d-flex ">
                        <div className="price">
                          <div className="col-md-4" id="product-1">
                            <h5>Qty</h5>
                            <div className="d-flex">
                              <button className="button">-</button>
                              <input
                                type="number"
                                className="input"
                                defaultValue={1}
                                min={1}
                              />
                              <button className="button">+</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-1">
                      <div className="table d-flex ">
                        <div className="price">
                          <h5>Total</h5>
                          <h3>$35.10</h3>
                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-2">
                      <div className="table d-flex ">
                        <div className="price">
                          <h5>Action</h5>
                          <h4 className>
                            <a href="#">Save for later</a>{" "}
                          </h4>
                          <span className>
                            <a href="#">Remove</a>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="cart-table d-flex justify-content-between">
                    <div className="col-xxl-3">
                      <div className="table d-flex ">
                        <div className="tab-img ">
                          <img
                            src="./public/img/13.png"
                            className="img-fluid"
                            atl
                          />
                        </div>
                        <div className="name">
                          <h4>Bell pepper</h4>
                          <p>
                            SoldBy:<span> Fresho</span>
                          </p>
                          <p>
                            Quantity:<span> - 500 g</span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-3">
                      <div className="table d-flex ">
                        <div className="price">
                          <h5>Price</h5>
                          <p className="compare">
                            $35.10
                            <span>
                              <del>$45.68</del>
                            </span>
                          </p>
                          <h6>You Save : $20.68</h6>
                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-2">
                      <div className="table d-flex ">
                        <div className="price">
                          <div className="col-md-4" id="product-1">
                            <h5>Qty</h5>
                            <div className="d-flex">
                              <button className="button">-</button>
                              <input
                                type="number"
                                className="input"
                                defaultValue={1}
                                min={1}
                              />
                              <button className="button">+</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-1">
                      <div className="table d-flex ">
                        <div className="price">
                          <h5>Total</h5>
                          <h3>$35.10</h3>
                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-2">
                      <div className="table d-flex ">
                        <div className="price">
                          <h5>Action</h5>
                          <h4 className>
                            <a href="#">Save for later</a>{" "}
                          </h4>
                          <span className>
                            <a href="#">Remove</a>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="cart-table d-flex justify-content-between"
                    id="cart-table01"
                  >
                    <div className="col-xxl-3">
                      <div className="table d-flex ">
                        <div className="tab-img ">
                          <img
                            src="./public/img/12.png"
                            className="img-fluid"
                            atl
                          />
                        </div>
                        <div className="name">
                          <h4>Bell pepper</h4>
                          <p>
                            SoldBy:<span> Fresho</span>
                          </p>
                          <p>
                            Quantity:<span> - 500 g</span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-3">
                      <div className="table d-flex ">
                        <div className="price">
                          <h5>Price</h5>
                          <p className="compare">
                            $35.10
                            <span>
                              <del>$45.68</del>
                            </span>
                          </p>
                          <h6>You Save : $20.68</h6>
                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-2">
                      <div className="table d-flex ">
                        <div className="price">
                          <div className="col-md-4" id="product-1">
                            <h5>Qty</h5>
                            <div className="d-flex">
                              <button className="button">-</button>
                              <input
                                type="number"
                                className="input"
                                defaultValue={0}
                                min={0}
                              />
                              <button className="button">+</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-1">
                      <div className="table d-flex ">
                        <div className="price">
                          <h5>Total</h5>
                          <h3>$35.10</h3>
                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-2">
                      <div className="table d-flex ">
                        <div className="price">
                          <h5>Action</h5>
                          <h4 className>
                            <a href="#">Save for later</a>{" "}
                          </h4>
                          <span className>
                            <a href="#">Remove</a>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-3 col-xl-3 col-12 px-2">
                <div className="cart-total-right">
                  <div className="col-xxl-12">
                    <div className="cart-total">
                      <h4>Cart Total</h4>
                    </div>
                    <div className="summery">
                      <h6>Coupon Apply</h6>
                      <div className="enter-code">
                        <input
                          type="text"
                          placeholder="Enter Coupon code here.."
                        />
                        <button>
                          {" "}
                          <a href="#">Apply</a>
                        </button>
                      </div>
                    </div>
                    <ul type="none">
                      <li className="d-flex justify-content-between">
                        Subtotal <span>$125.55</span>
                      </li>
                      <li className="d-flex justify-content-between">
                        Coupon Discount
                        <span>(-) 0.00</span>
                      </li>
                      <li className="d-flex justify-content-between">
                        Shipping
                        <span>$6.90</span>
                      </li>
                    </ul>
                    <div className="bottom py-2">
                      <h4 className="d-flex justify-content-between">
                        Total (USD) <span> $132.58</span>
                      </h4>
                    </div>
                    <div className="buttons">
                      <button>
                        <a href="#">Process To Checkout</a>{" "}
                      </button>
                    </div>
                    <div className="btn-3">
                      <button className="return">
                        <a href="#" className="text-decoration-none text-dark">
                           &nbsp;Return To
                          Shopping
                        </a>{" "}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    <Footer/>
    </>
  );
};

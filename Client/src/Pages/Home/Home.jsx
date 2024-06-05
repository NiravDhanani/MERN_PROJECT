import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { IoIosHeartEmpty } from "react-icons/io";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { IoStar } from "react-icons/io5";
import { MdOutlineStarOutline } from "react-icons/md";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./Home.css";
import { Link } from "react-router-dom";
import { IoMailSharp } from "react-icons/io5";
import { Header } from "../../Components/Header/Header";
import { Footer } from "../../Components/Footer/Footer";
export const Home = () => {
  // Deal slide 1
  const loadSlick = () => {
    if (typeof window !== "undefined" && window.$) {
      $(".deal-slider").slick({
        rows: 1,
        dots: false,
        arrows: true,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1290,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 1090,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 1000,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 880,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      });
    }
  };
  const browseSlider = () => {
    if (typeof window !== "undefined" && window.$) {
      $(".browse-slider").slick({
        rows: 1,
        dots: false,
        arrows: true,
        infinite: true,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1290,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 1090,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 1000,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 880,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      });
    }
  };
  const FeatureBlog = () => {
    if (typeof window !== "undefined" && window.$) {
      $("#slick1").slick({
        rows: 1,
        dots: false,
        arrows: true,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1290,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 1090,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 1000,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 880,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      });
    }
  };

  useEffect(() => {
    loadSlick();
    browseSlider();
    FeatureBlog()
  }, []);

  return (
    <>
    <Header/>

      {/* <!-- banner start ============================================= --> */}
      <section className="banner py-5">
        <div className="container">
          <div className="row ">
            <div className="col-12 col-sm-12 col-md-12 col-lg-8 col-xl-8 col-xll-8">
              <div className="home-img">
                <div className="banner-data col-11 col-xl-11">
                  <h6>
                    Exclusive offer <span>30% Off</span>
                  </h6>
                  <h2 className="w-75">
                    STAY HOME &amp; DELIVERED YOUR <span>DAILY NEEDS</span>
                  </h2>
                  <p>
                    Vegetables contain many vitamins and minerals that are good
                    for your health.
                  </p>
                  <button className="shop-btn">
                    Shop Now <HiOutlineShoppingBag />{" "}
                  </button>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xll-4 d-sm-flex d-md-flex d-lg-flex flex-wrap align-items-between  ">
              <div className="col-12 col-sm-6 col-md-6 col-lg-12 col-xl-12 col-xxl-12 offer-box">
                <div className="off-45">
                  <div className="off-content ">
                    <h6>
                      <span>45%</span>OFF
                    </h6>
                    <h2>Nut Collection</h2>
                    <p>We deliver organic vegetables &amp; fruits</p>
                    <button className="shop-btn2">
                      Shop Now <i className="ri-arrow-right-fill" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-6 col-lg-12 col-xl-12 col-xxl-12 offer-box  ">
                <div className="healthy-food m-0">
                  <div className="healthy-content">
                    <h6>Healthy Food</h6>
                    <h2>Organic Market</h2>
                    <p className>
                      {" "}
                      Start your daily shopping with some Organic food
                    </p>
                    <button className="shop-btn3">
                      Shop Now <HiOutlineShoppingBag />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- banner end ============================================= --> */}
      {/* <!-- hot deals Start============================= --> */}
      <section className="hot-deals">
        <div className="container">
          <div className="row">
            <div className="col-12 justify-content-between">
              <div className="browse-wrapper">
                <div className="deal-slider col-12 col-xxl-12 w-100 d-flex">
                  <div className="browse-category d-flex justify-content-center flex-wrap px-1">
                    <div className="deal-1">
                      <div className="deal-content">
                        <span>5% OFF</span>
                        <h4>Hot Deals on New Items</h4>
                        <p>Daily Essentials Eggs &amp; Dairy</p>
                      </div>
                      <div className="deal-btn">
                        <a href="#">
                          Shop Now <HiOutlineShoppingBag />
                          <i className="ri-arrow-right-line" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="browse-category d-flex justify-content-center flex-wrap px-1">
                    <div className="deal-2">
                      <div className="deal-content">
                        <span>5% OFF</span>
                        <h4>Hot Deals on New Items</h4>
                        <p>Daily Essentials Eggs &amp; Dairy</p>
                      </div>
                      <div className="deal-btn">
                        <a href="#">
                          Shop Now <HiOutlineShoppingBag />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="browse-category d-flex justify-content-center flex-wrap px-1">
                    <div className="deal-3">
                      <div className="deal-content">
                        <span>5% OFF</span>
                        <h4>Hot Deals on New Items</h4>
                        <p>Daily Essentials Eggs &amp; Dairy</p>
                      </div>
                      <div className="deal-btn">
                        <a href="#">
                          Shop Now <HiOutlineShoppingBag />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="browse-category d-flex justify-content-center flex-wrap px-1">
                    <div className="deal-4">
                      <div className="deal-content">
                        <span>5% OFF</span>
                        <h4>Hot Deals on New Items</h4>
                        <p>Daily Essentials Eggs &amp; Dairy</p>
                      </div>
                      <div className="deal-btn">
                        <a href="#">
                          Shop Now <HiOutlineShoppingBag />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- hot deals End ============================= --> */}
      {/* <!-- Produc section start  ============================= --> */}
      <section className="product py-5">
        <div className="container">
          <div className="row d-lg-flex">
            <div className="d-none col-lg-3 d-lg-flex position-sticky top-0">
              <div className=" category position-sticky top-0">
                <h5>Category</h5>
                <ul
                  className="category-list gap-3 d-flex flex-wrap"
                  type="none"
                >
                  <li className="d-flex align-items-center">
                    <img src="./public/img/vegetable.svg" width={25} />
                    <a href="#">Vegetables &amp; Fruits</a>
                  </li>
                  <li>
                    <img src="./public/img/cup.svg" width={25} />
                    <a href="#">Beverages</a>
                  </li>
                  <li>
                    <img src="./public/img/meats.svg" width={25} />
                    <a href="#">Meats &amp; Seafood</a>
                  </li>
                  <li>
                    <img src="./public/img/breakfast.svg" width={25} />
                    <a href="#">Breakfast &amp; Dairy</a>
                  </li>
                  <li>
                    <img src="./public/img/frozen.svg" width={25} />
                    <a href="#">Frozen Foods</a>
                  </li>
                  <li>
                    <img src="./public/img/biscuit.svg" width={25} />
                    <a href="#">Biscuits &amp; Snacks</a>
                  </li>
                  <li>
                    <img src="./public/img/grocery.svg" width={25} />
                    <a href="#">Grocery &amp; Staples</a>
                  </li>
                  <li>
                    <img src="./public/img/drink.svg" width={25} />
                    <a href="#">Wines &amp; Alcohol Drinks</a>
                  </li>
                  <li>
                    <img src="./public/img/milk.svg" width={25} />
                    <a href="#">Milk &amp; Dairies</a>
                  </li>
                  <li>
                    <img src="./public/img/pet.svg" width={25} />
                    <a href="#">Pet Foods</a>
                  </li>
                </ul>
                <ul className="value-list gap-3 d-flex flex-wrap" type="none">
                  <li>
                    <a href="#">Value of the Day</a>
                  </li>
                  <li>
                    <a href="#">Top 50 Offers</a>
                  </li>
                  <li>
                    <a href="#">New Arrivals</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-lg-9">
              <div className="top-save">
                <div className="top-save-data">
                  <h2>Top Save Today</h2>
                  <div className="col-12 ">
                    <div className="col-12 d-flex justify-content-between align-items-center">
                      <span className=" leaves">
                        <img src="./public/img/leaves.png" width={45} />
                      </span>
                      <div className="time d-flex align-items-center">
                        <span>
                          <i className="ri-timer-line" /> Expire In &nbsp;
                        </span>
                        <p id="demo" />
                      </div>
                    </div>
                    <p>
                      Don't miss this opportunity at a special discount just for
                      this week.
                    </p>
                  </div>
                  <div className="top-save-products">
                    <div className="Product-list ">
                      {/* === card === */}
                      <Card className="product-card">
                        <Card.Img
                          className="product-img"
                          variant="top"
                          src="./public/img/1 (2).png"
                        />
                        <Card.Body>
                          <Card.Title>
                            {" "}
                            Fantasy Crunchy Choco Chip Cookies
                          </Card.Title>

                          <div className="details">
                            <p>
                              <span className="discoutes-price">$26.69 </span>
                              <span className="text-decoration-line-through">
                                28.56
                              </span>
                            </p>
                            <IoStar style={{ color: "#ffb321" }} />
                            <IoStar style={{ color: "#ffb321" }} />
                            <IoStar style={{ color: "#ffb321" }} />
                            <IoStar style={{ color: "#ffb321" }} />
                            <MdOutlineStarOutline
                              style={{ color: "#ffb321" }}
                            />
                            <span className="px-2">In Stock</span>
                          </div>
                          <div className="d-flex m-1 justify-content-between">
                            <Button className="Addtocart">Add To Cart</Button>
                            <Button className="AddtoWish">
                              <IoIosHeartEmpty className="heart" />
                            </Button>
                          </div>
                        </Card.Body>
                      </Card>
                      {/* === card === */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="browse py-3">
                <h2>Bowse By Categories</h2>
                <div className="col-12  ">
                  <div className="col-12 d-flex justify-content-between align-items-center">
                    <span className=" leaves">
                      <img src="./public/img/leaves.png" width={45} />
                    </span>
                  </div>
                  <p>Top Categories Of The Week</p>
                </div>
                <div className="browse-wrapper">
                  <div className="browse-slider col-xl-12 gap-2 ">
                    <div className="browse-category">
                      <div>
                        <img
                          src="./public/img/vegetable.svg"
                          width={45}
                          height={45}
                          className
                        />
                      </div>
                      <h5>Veges &amp; Fruits</h5>
                    </div>
                    <div className="browse-category  ">
                      <img src="./public/img/cup.svg" width={45} height={45} />
                      <h5>Coffe &amp; Beverages</h5>
                    </div>
                    <div className="browse-category  ">
                      <img
                        src="./public/img/meats.svg"
                        width={45}
                        height={45}
                      />
                      <h5>Meats &amp; Seafood</h5>
                    </div>
                    <div className="browse-category  ">
                      <img
                        src="./public/img/breakfast.svg"
                        width={45}
                        height={45}
                      />
                      <h5>Morning Breakfast</h5>
                    </div>
                    <div className="browse-category  ">
                      <img
                        src="./public/img/frozen.svg"
                        width={45}
                        height={45}
                      />
                      <h5>Frozen Foods</h5>
                    </div>
                    <div className="browse-category  ">
                      <img src="./public/img/milk.svg" width={45} height={45} />
                      <h5>Milk &amp; Dairies</h5>
                    </div>
                    <div className="browse-category  ">
                      <img src="./public/img/pet.svg" width={45} height={45} />
                      <h5>your Pet Food</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Produc section End ============================= --> */}
      {/* <!-- seafood section   start =====================================================================  --> */}
      <section className="seafood ">
        <div className="container">
          <div className="row d-lg-flex ">
            <div className="col-xxl-3 col-lg-3 d-none d-md-none  d-lg-flex flex-wrap">
              <div className="seafood-side-banner">
                <h4>Seafood</h4>
                <h2>
                  {" "}
                  FRESHES <span>PRODUCTS </span>
                </h2>
                <p>every hour</p>
                <button className="shop-btn">
                  Shop Now  <HiOutlineShoppingBag/>
                </button>
              </div>
              {/* organic side pic section start  */}
              <div className="organic">
                <div className="organic-side-banner">
                  <h4>Organic</h4>
                  <h2>FRESH</h2>
                  <span>VEGETABLES</span>
                  <p>Super Offer to 50% Off</p>
                  <button>
                    {" "}
                    <Link>
                      {" "}
                      Shop Now <HiOutlineShoppingBag/>
                    </Link>
                  </button>
                </div>
              </div>
              {/* tending product side banner =============== */}
              <div className="trending-product">
                <div className="tranding">
                  <h3>Trending Products</h3>
                  <div className="trending-list">
                    <div className="list01 d-flex">
                      <a href>
                        {" "}
                        <img src="./public/img/23.png" alt />
                      </a>
                      <div className="list-info">
                        <a href="#">
                          <h6>Meatigo Premium Goat Curry</h6>
                        </a>
                        <span>450 G</span>
                        <p>$ 70.00</p>
                      </div>
                    </div>
                    <div className="list01 d-flex">
                      <a href>
                        {" "}
                        <img src="./public/img/24.png" alt />
                      </a>
                      <div className="list-info">
                        <a href="#">
                          <h6>Meatigo Premium Goat Curry</h6>
                        </a>
                        <span>450 G</span>
                        <p>$ 70.00</p>
                      </div>
                    </div>
                    <div className="list01 d-flex">
                      <a href>
                        {" "}
                        <img src="./public/img/25.png" alt />
                      </a>
                      <div className="list-info">
                        <a href="#">
                          <h6>Meatigo Premium Goat Curry</h6>
                        </a>
                        <span>450 G</span>
                        <p>$ 70.00</p>
                      </div>
                    </div>
                    <div className="list01 d-flex">
                      <a href>
                        {" "}
                        <img src="./public/img/26.png" alt />
                      </a>
                      <div className="list-info" id="list-1">
                        <a href="#">
                          <h6>Meatigo Premium Goat Curry</h6>
                        </a>
                        <span>450 G</span>
                        <p>$ 70.00</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* customer comment ============================= */}
              <div className="customer-comment py-3">
                <div className="customer">
                  <h3> Customer Comment</h3>
                  <div className="py-3">
                    <span>We Care About Our Customer Experience</span>
                  </div>
                  {/* <span>We Care About Our Customer Experience</span> */}
                  <p>
                    In publishing and graphic design, Lorem ipsum is a
                    placeholder text commonly used to demonstrate the visual
                    form of a document or a typeface without relying on
                    meaningful content.
                  </p>
                  <div className="customer-pic  d-flex">
                    <a href>
                      {" "}
                      <img src="./public/img/1 (4).jpg" alt width="80px" />
                    </a>
                    <div className="customer-info">
                      <a href="#">
                        <h6>Tina Mcdonnale</h6>
                      </a>
                      <span>Sale Manager</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className=" col-12 col-lg-9 col-xxl-9">
              <div className="banner-meat d-flex">
                <div className="mushroom-offer d-flex flex-wrap d-md-flex col-12 col-xxl-12">
                  <div className="col-12 col-md-6 col-xl-6 p-1">
                    <div className="mushroom">
                      <h3>50% offer</h3>
                      <span>Testy Mushrooms</span>
                      <button>
                        <Link>
                          Shop Now <i className="ri-arrow-right-fill" />
                        </Link>
                      </button>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-xl-6 p-1">
                    <div className="mushroom" id="meat">
                      <h3>50% offer</h3>
                      <span>Fresh MEAT</span>
                      <button>
                        <a href="#">
                          Shop Now <i className="ri-arrow-right-fill" />
                        </a>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* cupboard =========  */}
              <div className="cupboard py-3">
                <div className="top-save-data">
                  <h2>Food Cupboard</h2>
                  <span className="leaves">
                    <img src="./public/img/leaves.png" width="45px" />
                  </span>
                  <p>
                    A virtual assistant collects the products from your list
                  </p>
                </div>
                <div className="top-save-products ">
                   {/* === card === */}
                   <Card className="product-card">
                        <Card.Img
                          className="product-img"
                          variant="top"
                          src="./public/img/1 (2).png"
                        />
                        <Card.Body>
                          <Card.Title>
                            {" "}
                            Fantasy Crunchy Choco Chip Cookies
                          </Card.Title>

                          <div className="details">
                            <p>
                              <span className="discoutes-price">$26.69 </span>
                              <span className="text-decoration-line-through">
                                28.56
                              </span>
                            </p>
                            <IoStar style={{ color: "#ffb321" }} />
                            <IoStar style={{ color: "#ffb321" }} />
                            <IoStar style={{ color: "#ffb321" }} />
                            <IoStar style={{ color: "#ffb321" }} />
                            <MdOutlineStarOutline
                              style={{ color: "#ffb321" }}
                            />
                            <span className="px-2">In Stock</span>
                          </div>
                          <div className="d-flex m-1 justify-content-between">
                            <Button className="Addtocart">Add To Cart</Button>
                            <Button className="AddtoWish">
                              <IoIosHeartEmpty className="heart" />
                            </Button>
                          </div>
                        </Card.Body>
                      </Card>
                      {/* === card === */}
                </div>
              </div>
              {/* cash back ========= */}
              <div className="cash py-4">
                <div className="cashback">
                  <h3>Get $3 Cashback! Min Order of $30</h3>
                  <p>Use Code : GROCERY1920</p>
                </div>
              </div>
              {/* get ready section   */}
              <div className="get-ready py-4 d-md-flex ">
                <div className="col-xxl-8 col-xs-12 col-md-8 col-lg-8  p-1">
                  <div className="ready">
                    <h2 className>Get Ready To</h2>
                    <span>TAKE ON THE DAY!</span>
                    <p className="col-6">
                      In publishing and graphic design, Lorem ipsum is a
                      placeholder text commonly used to demonstrate.
                    </p>
                    <button>
                      {" "}
                      <Link>
                        {" "}
                        Shop Now <HiOutlineShoppingBag/>
                      </Link>
                    </button>
                  </div>
                </div>
                <div className="col-xxl-4 col-xs-12 col-md-4 p-1 ">
                  <div className="summry">
                    <h2 className>20% off</h2>
                    <span className="text-uppercase">summr</span>
                    <p className>Product</p>
                  </div>
                </div>
              </div>
              {/* oure best seller section  */}
              <div className="best-seller py-3">
                <div className="our-best">
                  <h3>Our Best Seller</h3>
                  <span className="leaves">
                    <img src="./public/img/leaves.png" width="45px" />
                  </span>
                  <p>
                    A virtual assistant collects the products from your list
                  </p>
                  <div className="best-product d-flex justify-content-between">
                    <div className="best-list col-xxl-4 col-6 col-md-4  col-lg-4">
                      <div className="list01 d-flex">
                        <a href>
                          {" "}
                          <img src="./public/img/11.png" alt />
                        </a>
                        <div className="list-info">
                          <a href="#">
                            <h6>Meatigo Premium Goat Curry</h6>
                          </a>
                          <span>450 G</span>
                          <p>$ 70.00</p>
                        </div>
                      </div>
                      <div className="list01 d-flex">
                        <a href>
                          {" "}
                          <img src="./public/img/12.png" alt />
                        </a>
                        <div className="list-info">
                          <a href="#">
                            <h6>Meatigo Premium Goat Curry</h6>
                          </a>
                          <span>450 G</span>
                          <p>$ 70.00</p>
                        </div>
                      </div>
                      <div className="list01 d-flex">
                        <a href>
                          {" "}
                          <img src="./public/img/13.png" alt />
                        </a>
                        <div className="list-info">
                          <a href="#">
                            <h6>Meatigo Premium Goat Curry</h6>
                          </a>
                          <span>450 G</span>
                          <p>$ 70.00</p>
                        </div>
                      </div>
                      <div className="list01 d-flex">
                        <a href>
                          {" "}
                          <img src="./public/img/14.png" alt />
                        </a>
                        <div className="list-info" id="list-1">
                          <a href="#">
                            <h6>Meatigo Premium Goat Curry</h6>
                          </a>
                          <span>450 G</span>
                          <p>$ 70.00</p>
                        </div>
                      </div>
                    </div>
                    <div className="best-list col-xxl-4 col-6 col-md-4  col-lg-4">
                      <div className="list01 d-flex">
                        <a href>
                          {" "}
                          <img src="./public/img/15.png" alt />
                        </a>
                        <div className="list-info">
                          <a href="#">
                            <h6>Meatigo Premium Goat Curry</h6>
                          </a>
                          <span>450 G</span>
                          <p>$ 70.00</p>
                        </div>
                      </div>
                      <div className="list01 d-flex">
                        <a href>
                          {" "}
                          <img src="./public/img/16.png" alt />
                        </a>
                        <div className="list-info">
                          <a href="#">
                            <h6>Meatigo Premium Goat Curry</h6>
                          </a>
                          <span>450 G</span>
                          <p>$ 70.00</p>
                        </div>
                      </div>
                      <div className="list01 d-flex">
                        <a href>
                          {" "}
                          <img src="./public/img/17.png" alt />
                        </a>
                        <div className="list-info">
                          <a href="#">
                            <h6>Meatigo Premium Goat Curry</h6>
                          </a>
                          <span>450 G</span>
                          <p>$ 70.00</p>
                        </div>
                      </div>
                      <div className="list01 d-flex">
                        <a href>
                          {" "}
                          <img src="./public/img/18.png" alt />
                        </a>
                        <div className="list-info" id="list-1">
                          <a href="#">
                            <h6>Meatigo Premium Goat Curry</h6>
                          </a>
                          <span>450 G</span>
                          <p>$ 70.00</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-4 d-none col-lg-4 col-md-4 d-md-flex d-lg-flex">
                      <div className="best-list ">
                        <div className="list01 d-flex">
                          <a href>
                            {" "}
                            <img src="./public/img/18.png" alt />
                          </a>
                          <div className="list-info">
                            <a href="#">
                              <h6>Meatigo Premium Goat Curry</h6>
                            </a>
                            <span>450 G</span>
                            <p>$ 70.00</p>
                          </div>
                        </div>
                        <div className="list01 d-flex">
                          <a href>
                            {" "}
                            <img src="./public/img/20.png" alt />
                          </a>
                          <div className="list-info">
                            <a href="#">
                              <h6>Meatigo Premium Goat Curry</h6>
                            </a>
                            <span>450 G</span>
                            <p>$ 70.00</p>
                          </div>
                        </div>
                        <div className="list01 d-flex">
                          <a href>
                            {" "}
                            <img src="./public/img/21.png" alt />
                          </a>
                          <div className="list-info">
                            <a href="#">
                              <h6>Meatigo Premium Goat Curry</h6>
                            </a>
                            <span>450 G</span>
                            <p>$ 70.00</p>
                          </div>
                        </div>
                        <div className="list01 d-flex">
                          <a href>
                            {" "}
                            <img src="./public/img/22.png" alt />
                          </a>
                          <div className="list-info" id="list-1">
                            <a href="#">
                              <h6>Meatigo Premium Goat Curry</h6>
                            </a>
                            <span>450 G</span>
                            <p>$ 70.00</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* summer deal banner  */}
              <div className="summer">
                <div className="summer01 d-flex justify-content-center ">
                  <div className=".col-9">
                    <h6 className="text-center">SUMMER</h6>
                    <h2 className="text-center">VEGETABLE</h2>
                    <h5 className="text-center">Save up to 5% OFF</h5>
                    <button className>
                      {" "}
                      <a href="#">
                        {" "}
                        Shop Now <i className="ri-arrow-right-fill" />
                      </a>
                    </button>
                  </div>
                </div>
              </div>
              {/* feature blogg start */}
              <div className="feature-blog py-4">
                <div className="top-save-data">
                  <h2>Featured Blog</h2>
                  <span className="leaves">
                    <img src="./public/img/leaves.png" width="45px" />
                  </span>
                  <p>
                    A virtual assistant collects the products from your list
                  </p>
                </div>
                <div className="feature-products ">
                  <div className="slick-wrapper3 ">
                    <div id="slick1" className="d-flex">
                      <div className="slide-item3 ">
                        <div className="box01">
                          <div className="Feature-product-img text-center">
                            <img
                              src="./public/img/2 (1).jpg"
                              className="img-fluid"
                              style={{ height: "px" }}
                            />
                          </div>
                          <h6 className="text-start">20 march 2022</h6>
                          <a href>
                            <h5>Fresh Vegetable Online</h5>
                          </a>
                        </div>
                      </div>
                      <div className="slide-item3">
                        <div className="box01">
                          <div className="Feature-product-img text-center">
                            <img
                              src="./public/img/3 (1).jpg"
                              className="img-fluid"
                            />
                          </div>
                          <h6 className="text-start">20 march 2022</h6>
                          <a href>
                            <h5>Fresh Vegetable Online</h5>
                          </a>
                        </div>
                      </div>
                      <div className="slide-item3">
                        <div className="box01">
                          <div className="Feature-product-img text-center">
                            <img
                              src="./public/img/2 (1).jpg"
                              className="img-fluid"
                            />
                          </div>
                          <h6 className="text-start">20 march 2022</h6>
                          <a href>
                            <h5>Fresh Vegetable Online</h5>
                          </a>
                        </div>
                      </div>
                      <div className="slide-item3">
                        <div className="box01">
                          <div className="Feature-product-img text-center">
                            <img
                              src="./public/img/1 (2).jpg"
                              className="img-fluid"
                              style={{ height: "px" }}
                            />
                          </div>
                          <h6 className="text-start">20 march 2022</h6>
                          <a href>
                            <h5>Fresh Vegetable Online</h5>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- seafood section   end  =====================================================================  --> */}
      {/* <!-- news latter section =========== --> */}
      <section className="newsletter py-4">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 justify-content-end ">
              <div className="news-letter-banner">
                <div className="news col-xl-5  col-md-8 col-lg-6 col-11">
                  <h3>Join Our Newsletter And Get...</h3>
                  <span>$20 discount for your first order</span>
                  <div className="input-group mb-3 ">
                    <div className="input-group-text">
                      <span>
                        {" "}
                        <IoMailSharp/>
                      </span>
                    </div>
                    <input
                      type="text"
                      placeholder="Enter Your Email"
                      className="form-control w-50"
                      aria-label="Dollar amount (with dot and two decimal places)"
                    />
                    <button>
                      {" "}
                      <a href="#">
                        {" "}
                        Subscribe <i className="ri-arrow-right-fill" />
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- fotter section ==================================================================== -- */}
      <Footer/>
    </>
  );
};

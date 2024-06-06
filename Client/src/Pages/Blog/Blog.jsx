import { Footer } from "../../Components/Footer/Footer";
import { Header } from "../../Components/Header/Header";
import "./Blog.css";

export const Blog = () => {
  return (
    <>
      <Header />
      <div>
        <section className="cart-page-head01">
          <section className="otp-page-head">
            <div className="container">
              <div className="row">
                <div className="col-xxl-12">
                  <div className="otp1 d-flex justify-content-between align-items-center">
                    <h4>Blog List Page</h4>
                    <span className="d-flex align-items-center">
                      <a href="index.html">
                        {" "}
                        <i className="ri-home-4-fill" />{" "}
                      </a>
                      <i className="ri-arrow-right-s-line" />
                      <p>
                        Blog
                        <i className="ri-arrow-right-s-line" />
                        Blog List
                      </p>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
        {/* cart section  container    */}
        <div className="container">
          <div className="row g-sm-4 g-3">
            <div className="col-xxl-3 col-xl-4 col-lg-5 d-lg-block d-none">
              <div className="left-sidebar-box">
                <div className="left-search-box">
                  <div className="search-box">
                    <input
                      type="search"
                      className="form-control"
                      id="exampleFormControlInput4"
                      placeholder="Search...."
                    />
                  </div>
                </div>
                <div
                  className="accordion left-accordion-box"
                  id="accordionPanelsStayOpenExample"
                >
                  <div className="accordion-item">
                    <h2
                      className="accordion-header"
                      id="panelsStayOpen-headingOne"
                    >
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseOne"
                        aria-expanded="true"
                        aria-controls="panelsStayOpen-collapseOne"
                      >
                        Recent Post
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapseOne"
                      className="accordion-collapse collapse show"
                      aria-labelledby="panelsStayOpen-headingOne"
                    >
                      <div className="accordion-body pt-0">
                        <div className="recent-post-box">
                          <div className="recent-box d-flex">
                            <a href className="recent-image">
                              <img
                                src="./public/img/12.png"
                                className="img-fluid"
                                alt
                              />
                            </a>
                            <div className="recent-detail">
                              <a href>
                                <h5 className="recent-name">
                                  Green onion knife and salad placed
                                </h5>
                              </a>
                              <h6 className="d-flex justify-content-between">
                                25 Jan, 2022{" "}
                                <span>
                                  <i className="ri-thumb-up-line" />
                                </span>
                              </h6>
                            </div>
                          </div>
                          <div className="recent-box d-flex">
                            <a href className="image0123">
                              <img
                                src="./public/img/15.png"
                                className="img-fluid "
                                alt
                              />
                            </a>
                            <div className="recent-detail">
                              <a href>
                                <h5 className="recent-name">
                                  Green onion knife and salad placed
                                </h5>
                              </a>
                              <h6 className="d-flex justify-content-between">
                                25 Jan, 2022{" "}
                                <span>
                                  <i className="ri-thumb-up-line" />
                                </span>
                              </h6>
                            </div>
                          </div>
                          <div className="recent-box d-flex">
                            <a href className="image0123">
                              <img
                                src="./public/img/14.png"
                                className="img-fluid"
                                alt
                              />
                            </a>
                            <div className="recent-detail">
                              <a href>
                                <h5 className="recent-name">
                                  Green onion knife and salad placed
                                </h5>
                              </a>
                              <h6 className="d-flex justify-content-between">
                                25 Jan, 2022{" "}
                                <span>
                                  <i className="ri-thumb-up-line" />
                                </span>
                              </h6>
                            </div>
                          </div>
                          <div className="recent-box d-flex">
                            <a href className="image0123">
                              <img
                                src="./public/img/13.png"
                                className="img-fluid "
                                alt
                              />
                            </a>
                            <div className="recent-detail">
                              <a href>
                                <h5 className="recent-name">
                                  Green onion knife and salad placed
                                </h5>
                              </a>
                              <h6 className="d-flex justify-content-between">
                                25 Jan, 2022{" "}
                                <span>
                                  <i className="ri-thumb-up-line" />
                                </span>
                              </h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2
                      className="accordion-header"
                      id="panelsStayOpen-headingTwo"
                    >
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseTwo"
                        aria-expanded="false"
                        aria-controls="panelsStayOpen-collapseTwo"
                      >
                        Category
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapseTwo"
                      className="accordion-collapse collapse collapse show"
                      aria-labelledby="panelsStayOpen-headingTwo"
                    >
                      <div className="accordion-body p-0">
                        <div className="category-list-box">
                          <ul>
                            <li>
                              <a href="#">
                                <div className="category-name d-flex justify-content-between">
                                  <h5>Latest Recipes</h5>
                                  <span>10</span>
                                </div>
                              </a>
                            </li>
                            <li>
                              <a href>
                                <div className="category-name d-flex justify-content-between">
                                  <h5>Diet Food</h5>
                                  <span>6</span>
                                </div>
                              </a>
                            </li>
                            <li>
                              <a href>
                                <div className="category-name d-flex justify-content-between">
                                  <h5>Low calorie Items</h5>
                                  <span>8</span>
                                </div>
                              </a>
                            </li>
                            <li>
                              <a href>
                                <div className="category-name d-flex justify-content-between">
                                  <h5>Cooking Method</h5>
                                  <span>9</span>
                                </div>
                              </a>
                            </li>
                            <li>
                              <a href>
                                <div className="category-name d-flex justify-content-between">
                                  <h5>Dairy Free</h5>
                                  <span>12</span>
                                </div>
                              </a>
                            </li>
                            <li>
                              <a href>
                                <div className="category-name d-flex justify-content-between">
                                  <h5>Vegetarian Food</h5>
                                  <span>10</span>
                                </div>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2
                      className="accordion-header"
                      id="panelsStayOpen-headingThree"
                    >
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseThree"
                        aria-expanded="false"
                        aria-controls="panelsStayOpen-collapseThree"
                      >
                        Product Tags
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapseThree"
                      className="accordion-collapse collapse collapse show"
                      aria-labelledby="panelsStayOpen-headingThree"
                    >
                      <div className="accordion-body pt-0">
                        <div className="product-tags-box">
                          <ul className="d-flex flex-wrap">
                            <li>
                              <a href="#">Fruit Cutting</a>
                            </li>
                            <li>
                              <a href="javascript:void(0)">Meat</a>
                            </li>
                            <li>
                              <a href="javascript:void(0)">organic</a>
                            </li>
                            <li>
                              <a href="javascript:void(0)">cake</a>
                            </li>
                            <li>
                              <a href="javascript:void(0)">pick fruit</a>
                            </li>
                            <li>
                              <a href="javascript:void(0)">backery</a>
                            </li>
                            <li>
                              <a href="javascript:void(0)">organix food</a>
                            </li>
                            <li>
                              <a href="javascript:void(0)">
                                Most Expensive Fruit
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2
                      className="accordion-header"
                      id="panelsStayOpen-headingFour"
                    >
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseFour"
                        aria-expanded="false"
                        aria-controls="panelsStayOpen-collapseFour"
                      >
                        Trending Products
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapseFour"
                      className="accordion-collapse collapse collapse show"
                      aria-labelledby="panelsStayOpen-headingFour"
                    >
                      <div className="accordion-body">
                        <ul className="product-list product-list-2 border-0 p-0">
                          <li>
                            <div className="offer-product d-flex">
                              <a href="#">
                                {" "}
                                <img src="./public/img/23.png" alt />
                              </a>
                              <div className="offer-detail">
                                <div>
                                  <a href="#">
                                    <h6 className="name">
                                      Meatigo Premium Goat Curry
                                    </h6>
                                  </a>
                                  <span>450 G</span>
                                  <h6 className="price theme-color">$ 70.00</h6>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="offer-product d-flex">
                              <a href>
                                {" "}
                                <img src="./public/img/24.png" alt />
                              </a>
                              <div className="offer-detail">
                                <div>
                                  <a href="#">
                                    <h6 className="name">
                                      Dates Medjoul Premium Imported
                                    </h6>
                                  </a>
                                  <span>450 G</span>
                                  <h6 className="price theme-color">$ 40.00</h6>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li className="mb-0">
                            <div className="offer-product d-flex">
                              <a href>
                                {" "}
                                <img src="./public/img/25.png" alt />
                              </a>
                              <div className="offer-detail">
                                <div>
                                  <a href="#">
                                    <h6 className="name">
                                      Apple Red Premium Imported
                                    </h6>
                                  </a>
                                  <span>1 KG</span>
                                  <h6 className="price theme-color">$ 80.00</h6>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-9 col-xl-8 col-lg-7  mb-2">
              <div className="blog-grid-box mb-4 d-flex align-items-center">
                <div className="blog-image">
                  <a href="#">
                    <img
                      src="./public/img/1.jpg"
                      className="img-fluid"
                      id="img-blog-list"
                    />
                  </a>
                </div>
                <div className="blog-content">
                  <div className="blog-title d-flex flex-wrap">
                    <span>
                      <i className="ri-time-line" />
                      &nbsp; 25 Feg, 2022
                    </span>
                    <span>
                      {" "}
                      <i className="ri-user-3-line" />
                      &nbsp; Mark J. Speight
                    </span>
                  </div>
                  <a href="#">
                    <h3 className="text-capitalize">
                      One Pot Creamy Mediterranean Chicken Pasta Cream.
                    </h3>
                  </a>
                  <p>
                    Monterey jack cheese slices cream cheese cream cheese hard
                    cheese roquefort emmental lancashire. Who moved my cheese
                    dolcelatte st. agur blue cheese fromage mozzarella say
                    cheese mascarpone blue castello.
                  </p>
                  <button>
                    <a href="#">
                      Read More <i className="ri-arrow-right-fill" />
                    </a>
                  </button>
                </div>
              </div>
              <div className="blog-grid-box mb-4 d-flex align-items-center">
                <div className="blog-image">
                  <a href="#">
                    <img
                      src="./public/img/5 (1).jpg"
                      className="img-fluid"
                      id="img-blog-list"
                    />
                  </a>
                </div>
                <div className="blog-content">
                  <div className="blog-title d-flex flex-wrap">
                    <span>
                      <i className="ri-time-line" />
                      &nbsp; 25 Feg, 2022
                    </span>
                    <span>
                      {" "}
                      <i className="ri-user-3-line" />
                      &nbsp; Mark J. Speight
                    </span>
                  </div>
                  <a href="#">
                    <h3 className="text-capitalize">
                      One Pot Creamy Mediterranean Chicken Pasta Cream.
                    </h3>
                  </a>
                  <p>
                    Monterey jack cheese slices cream cheese cream cheese hard
                    cheese roquefort emmental lancashire. Who moved my cheese
                    dolcelatte st. agur blue cheese fromage mozzarella say
                    cheese mascarpone blue castello.
                  </p>
                  <button>
                    <a href="#">
                      Read More <i className="ri-arrow-right-fill" />
                    </a>
                  </button>
                </div>
              </div>
              <div className="blog-grid-box mb-4 d-flex align-items-center">
                <div className="blog-image">
                  <a href="#">
                    <img
                      src="./public/img/1.jpg"
                      className="img-fluid"
                      id="img-blog-list"
                    />
                  </a>
                </div>
                <div className="blog-content">
                  <div className="blog-title d-flex flex-wrap">
                    <span>
                      <i className="ri-time-line" />
                      &nbsp; 25 Feg, 2022
                    </span>
                    <span>
                      {" "}
                      <i className="ri-user-3-line" />
                      &nbsp; Mark J. Speight
                    </span>
                  </div>
                  <a href="#">
                    <h3 className="text-capitalize">
                      One Pot Creamy Mediterranean Chicken Pasta Cream.
                    </h3>
                  </a>
                  <p>
                    Monterey jack cheese slices cream cheese cream cheese hard
                    cheese roquefort emmental lancashire. Who moved my cheese
                    dolcelatte st. agur blue cheese fromage mozzarella say
                    cheese mascarpone blue castello.
                  </p>
                  <button>
                    <a href="#">
                      Read More <i className="ri-arrow-right-fill" />
                    </a>
                  </button>
                </div>
              </div>
              <div className="blog-grid-box mb-4 d-flex align-items-center">
                <div className="blog-image">
                  <a href="#">
                    <img
                      src="./public/img/5 (1).jpg"
                      className="img-fluid"
                      id="img-blog-list"
                    />
                  </a>
                </div>
                <div className="blog-content">
                  <div className="blog-title d-flex flex-wrap">
                    <span>
                      <i className="ri-time-line" />
                      &nbsp; 25 Feg, 2022
                    </span>
                    <span>
                      {" "}
                      <i className="ri-user-3-line" />
                      &nbsp; Mark J. Speight
                    </span>
                  </div>
                  <a href="#">
                    <h3 className="text-capitalize">
                      One Pot Creamy Mediterranean Chicken Pasta Cream.
                    </h3>
                  </a>
                  <p>
                    Monterey jack cheese slices cream cheese cream cheese hard
                    cheese roquefort emmental lancashire. Who moved my cheese
                    dolcelatte st. agur blue cheese fromage mozzarella say
                    cheese mascarpone blue castello.
                  </p>
                  <button>
                    <a href="#">
                      Read More <i className="ri-arrow-right-fill" />
                    </a>
                  </button>
                </div>
              </div>
              <div className="blog-grid-box mb-4 d-flex align-items-center">
                <div className="blog-image">
                  <a href="#">
                    <img
                      src="./public/img/1.jpg"
                      className="img-fluid"
                      id="img-blog-list"
                    />
                  </a>
                </div>
                <div className="blog-content">
                  <div className="blog-title d-flex flex-wrap">
                    <span>
                      <i className="ri-time-line" />
                      &nbsp; 25 Feg, 2022
                    </span>
                    <span>
                      {" "}
                      <i className="ri-user-3-line" />
                      &nbsp; Mark J. Speight
                    </span>
                  </div>
                  <a href="#">
                    <h3 className="text-capitalize">
                      One Pot Creamy Mediterranean Chicken Pasta Cream.
                    </h3>
                  </a>
                  <p>
                    Monterey jack cheese slices cream cheese cream cheese hard
                    cheese roquefort emmental lancashire. Who moved my cheese
                    dolcelatte st. agur blue cheese fromage mozzarella say
                    cheese mascarpone blue castello.
                  </p>
                  <button>
                    <a href="#">
                      Read More <i className="ri-arrow-right-fill" />
                    </a>
                  </button>
                </div>
              </div>
              <div className="blog-grid-box mb-4 d-flex align-items-center">
                <div className="blog-image">
                  <a href="#">
                    <img
                      src="./public/img/5 (1).jpg"
                      className="img-fluid"
                      id="img-blog-list"
                    />
                  </a>
                </div>
                <div className="blog-content">
                  <div className="blog-title d-flex flex-wrap">
                    <span>
                      <i className="ri-time-line" />
                      &nbsp; 25 Feg, 2022
                    </span>
                    <span>
                      {" "}
                      <i className="ri-user-3-line" />
                      &nbsp; Mark J. Speight
                    </span>
                  </div>
                  <a href="#">
                    <h3 className="text-capitalize">
                      One Pot Creamy Mediterranean Chicken Pasta Cream.
                    </h3>
                  </a>
                  <p>
                    Monterey jack cheese slices cream cheese cream cheese hard
                    cheese roquefort emmental lancashire. Who moved my cheese
                    dolcelatte st. agur blue cheese fromage mozzarella say
                    cheese mascarpone blue castello.
                  </p>
                  <button>
                    <a href="#">
                      Read More <i className="ri-arrow-right-fill" />
                    </a>
                  </button>
                </div>
              </div>
              <div className="blog-grid-box mb-4 d-flex align-items-center">
                <div className="blog-image">
                  <a href="#">
                    <img
                      src="./public/img/1.jpg"
                      className="img-fluid"
                      id="img-blog-list"
                    />
                  </a>
                </div>
                <div className="blog-content">
                  <div className="blog-title d-flex flex-wrap">
                    <span>
                      <i className="ri-time-line" />
                      &nbsp; 25 Feg, 2022
                    </span>
                    <span>
                      {" "}
                      <i className="ri-user-3-line" />
                      &nbsp; Mark J. Speight
                    </span>
                  </div>
                  <a href="#">
                    <h3 className="text-capitalize">
                      One Pot Creamy Mediterranean Chicken Pasta Cream.
                    </h3>
                  </a>
                  <p>
                    Monterey jack cheese slices cream cheese cream cheese hard
                    cheese roquefort emmental lancashire. Who moved my cheese
                    dolcelatte st. agur blue cheese fromage mozzarella say
                    cheese mascarpone blue castello.
                  </p>
                  <button>
                    <a href="#">
                      Read More <i className="ri-arrow-right-fill" />
                    </a>
                  </button>
                </div>
              </div>
              <div className="blog-grid-box mb-4 d-flex align-items-center">
                <div className="blog-image">
                  <a href="#">
                    <img
                      src="./public/img/5 (1).jpg"
                      className="img-fluid"
                      id="img-blog-list"
                    />
                  </a>
                </div>
                <div className="blog-content">
                  <div className="blog-title d-flex flex-wrap">
                    <span>
                      <i className="ri-time-line" />
                      &nbsp; 25 Feg, 2022
                    </span>
                    <span>
                      {" "}
                      <i className="ri-user-3-line" />
                      &nbsp; Mark J. Speight
                    </span>
                  </div>
                  <a href="#">
                    <h3 className="text-capitalize">
                      One Pot Creamy Mediterranean Chicken Pasta Cream.
                    </h3>
                  </a>
                  <p>
                    Monterey jack cheese slices cream cheese cream cheese hard
                    cheese roquefort emmental lancashire. Who moved my cheese
                    dolcelatte st. agur blue cheese fromage mozzarella say
                    cheese mascarpone blue castello.
                  </p>
                  <button>
                    <a href="#">
                      Read More <i className="ri-arrow-right-fill" />
                    </a>
                  </button>
                </div>
              </div>
              <div className="blog-grid-box mb-4 d-flex align-items-center">
                <div className="blog-image">
                  <a href="#">
                    <img
                      src="./public/img/1.jpg"
                      className="img-fluid"
                      id="img-blog-list"
                    />
                  </a>
                </div>
                <div className="blog-content">
                  <div className="blog-title d-flex flex-wrap">
                    <span>
                      <i className="ri-time-line" />
                      &nbsp; 25 Feg, 2022
                    </span>
                    <span>
                      {" "}
                      <i className="ri-user-3-line" />
                      &nbsp; Mark J. Speight
                    </span>
                  </div>
                  <a href="#">
                    <h3 className="text-capitalize">
                      One Pot Creamy Mediterranean Chicken Pasta Cream.
                    </h3>
                  </a>
                  <p>
                    Monterey jack cheese slices cream cheese cream cheese hard
                    cheese roquefort emmental lancashire. Who moved my cheese
                    dolcelatte st. agur blue cheese fromage mozzarella say
                    cheese mascarpone blue castello.
                  </p>
                  <button>
                    <a href="#">
                      Read More <i className="ri-arrow-right-fill" />
                    </a>
                  </button>
                </div>
              </div>
              <div className="blog-grid-box mb-4 d-flex align-items-center">
                <div className="blog-image">
                  <a href="#">
                    <img
                      src="./public/img/5 (1).jpg"
                      className="img-fluid"
                      id="img-blog-list"
                    />
                  </a>
                </div>
                <div className="blog-content">
                  <div className="blog-title d-flex flex-wrap">
                    <span>
                      <i className="ri-time-line" />
                      &nbsp; 25 Feg, 2022
                    </span>
                    <span>
                      {" "}
                      <i className="ri-user-3-line" />
                      &nbsp; Mark J. Speight
                    </span>
                  </div>
                  <a href="#">
                    <h3 className="text-capitalize">
                      One Pot Creamy Mediterranean Chicken Pasta Cream.
                    </h3>
                  </a>
                  <p>
                    Monterey jack cheese slices cream cheese cream cheese hard
                    cheese roquefort emmental lancashire. Who moved my cheese
                    dolcelatte st. agur blue cheese fromage mozzarella say
                    cheese mascarpone blue castello.
                  </p>
                  <button>
                    <a href="#">
                      Read More <i className="ri-arrow-right-fill" />
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

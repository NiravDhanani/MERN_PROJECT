import "./Product.css";

import Container from "react-bootstrap/esm/Container";
import { Link } from "react-router-dom";
import { Header } from "../../../Components/Header/Header";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import Modal from "react-bootstrap/Modal";
import { CategoryView, ProductCreate, ProductView } from "../../../redux/action/action";
import { MdDeleteSweep } from "react-icons/md";
import { TbEdit } from "react-icons/tb";

export const Product = () => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [categoryI, setCategoryI] = useState([]);
  const [product_name, setProduct_name] = useState("");
  const [product_description, setProduct_description] = useState("");
  const [product_offer_price, setProduct_offer_price] = useState("");
  const [product_price, setProduct_price] = useState("");
  const [product_status, setProduct_status] = useState("");
  const [product_image, setProduct_image] = useState(null);

  const productDate = useSelector((state) => state.FreshMart.Product);
  // const categorydata = useSelector((state)=>state.FreshMart.Category)
  let categorydata = useSelector((state) => state.FreshMart.Category);

  const FormhandleSubmit = (e) =>{
    e.preventDefault()
    let formdata = new FormData();

    formdata.append('categoryI',categoryI)
    formdata.append('product_name',product_name)
    formdata.append('product_description',product_description)
    formdata.append('product_offer_price',product_offer_price)
    formdata.append('product_price',product_price)
    formdata.append('product_status',product_status)
    formdata.append('product_image',product_image)

    // let obj ={
    //   categoryI,
    //   product_name,
    //   product_description,
    //   product_offer_price,
    //   product_price,
    //   product_status,
    //   product_image,
    // }

    console.log(formdata);

    dispatch(ProductCreate(formdata))
    setCategoryI("")
    setProduct_name("")
    setProduct_description("")
    setProduct_price("")
    setProduct_offer_price("")
    setProduct_status("")
    setProduct_image("")
  }

  useEffect(() => {
    dispatch(ProductView());
    dispatch(CategoryView())
  }, []);

  return (
    <>
      <Header />
      <div className="d-flex">
        <div className="sidebar">
          <div className="section">
            <div className="py-2">
              <Link to={"/dashboard"} className="item">
                Dashboard
              </Link>
            </div>
            <div className="py-2">
              <Link to={"/user"} className="item">
                User
              </Link>
            </div>
            <div className="py-2">
              <Link to={"/category"} className="item">
                Category
              </Link>
            </div>
            <div className="py-2">
              <Link to={"/product"} className="item">
                Product
              </Link>
            </div>
          </div>
          <div className="section">
            <div className="item">Settings</div>
            <div className="item">Question?</div>
          </div>
        </div>
        <Container>
          <div>
            <h2 className="text-center m-3">Product Listing</h2>
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Caetgory</th>
                  <th>Product</th>
                  <th>Discription</th>
                  <th>Price</th>
                  <th>Dis.Price</th>
                  <th>Status</th>
                  <th>Image</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {productDate && productDate.length ? (
                  productDate.map((item, i) => {
                    return (
                      <tr key={i}>
                        <td>{i++}</td>
                        <td>{item.categoryId.category}</td>
                        <td>{item.product_name}</td>
                        <td>{item.product_description}</td>
                        <td>{item.product_price}</td>
                        <td>{item.product_offer_price}</td>
                        <td>
                          {item.product_status == 1 ? (
                            <button className="btn btn-success">Active</button>
                          ) : (
                            <button className="btn btn-danger">Deactive</button>
                          )}
                        </td>
                        <td>
                          <img
                            src={item.product_image}
                            width={100}
                            height={100}
                          />{" "}
                        </td>
                        <td>
                          <button className="btn btn-danger m-1">
                            <MdDeleteSweep />
                          </button>
                          <button className="btn btn-success m-1">
                            <TbEdit />
                          </button>
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <tr>
                    <td colSpan={9} className="bg-light text-center">
                      Loading......
                    </td>
                  </tr>
                )}
              </tbody>
            </table>

            {/* // model for form  */}
            <div className="d-flex justify-content-center">
              <Button variant="primary" onClick={handleShow}>
                Add Product
              </Button>
            </div>

            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Add Product Data</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form onSubmit={FormhandleSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Label>Category</Form.Label>
                    <Form.Control
                      as="select"
                      value={categoryI}
                      onChange={(e) => setCategoryI(e.target.value)}
                    >
                      <option> -- select --</option>
                      {categorydata.map((val, i) => {
                        return (
                          <option key={i} value={val._id}>
                            {val.category}
                          </option>
                        );
                      })}
                    </Form.Control>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Product</Form.Label>
                    <Form.Control
                      placeholder="Enter Product Title"
                      type="text"
                      onChange={(e) => setProduct_name(e.target.value)}
                      value={product_name}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                      placeholder="Tell me Somthing About Product"
                      as="textarea"
                      col={2}
                      onChange={(e) => setProduct_description(e.target.value)}
                      value={product_description}
                    />
                  </Form.Group>

                  <div className="d-flex justify-content-between">
                    <Form.Group className="mb-3">
                      <Form.Label>Price</Form.Label>
                      <Form.Control
                        placeholder="MRP"
                        type="text"
                        onChange={(e) => setProduct_price(e.target.value)}
                        value={product_price}
                      />
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label>Discounted Price</Form.Label>
                      <Form.Control
                        placeholder="Dis. MRP"
                        type="text"
                        onChange={(e) => setProduct_offer_price(e.target.value)}
                        value={product_offer_price}
                      />
                    </Form.Group>
                  </div>

                  <Form.Group className="mb-3">
                    <Form.Label>Status</Form.Label>
                    <Form.Control
                      placeholder="Active = 1 & Deactive = 0"
                      type="text"
                      onChange={(e) => setProduct_status(e.target.value)}
                      value={product_status}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Image</Form.Label>
                    <Form.Control
                      type="file"
                      onChange={(e) => setProduct_image(e.target.files[0])}
                    />
                  </Form.Group>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button>
                    <Button variant="primary" type="submit" onClick={handleClose}>
                      Save Changes
                    </Button>
                  </Modal.Footer>
                </Form>
              </Modal.Body>
            </Modal>
          </div>
        </Container>
      </div>
    </>
  );
};

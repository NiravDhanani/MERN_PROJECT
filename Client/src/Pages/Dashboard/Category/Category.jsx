import "./Category.css";
import { Header } from "../../../Components/Header/Header";
import Container from "react-bootstrap/esm/Container";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import {
  CategoryView,
  CreateCategory,
  DeleteCategory,
  EditCategory,
  UpdateCategory,
} from "../../../redux/action/action";

export const Category = () => {
  const dispatch = useDispatch();
  const [category, setCategory] = useState("");
  const [editId, setEditId] = useState("");
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
    setEditId("");
    setCategory("");
  };

  const handleShow = () => setShow(true);

  let record = useSelector((state) => state.FreshMart.Category);
  let single = useSelector((state) => state.FreshMart.single);

  let localData = JSON.parse(localStorage.getItem("Login"));
  const token = localData?.token;

  const View = async () => {
    let response = await fetch(
      "http://localhost:8222/v1/Api/Category/viewcategory",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    let res = await response.json();
    let data = res.data;
    dispatch(CategoryView(data));
  };

  const Edithandler = (id) => {
    handleShow();
    dispatch(EditCategory(id));
  };

  const FormHandler = (e) => {
    e.preventDefault();
    if (editId) {
      dispatch(UpdateCategory({ editId, category }));
      setCategory("");
      setEditId("");
      setShow(false);
    } else {
      dispatch(CreateCategory({ category }));
      setCategory("");
      setShow(false);
    }
  };

  useEffect(() => {
    View();
  }, []);

  useEffect(() => {
    if (single) {
      setCategory(single.category);
      setEditId(single._id);
    }
  }, [single]);

  return (
    <>
      <ToastContainer />
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
        </div>
        <Container>
          <h1 className="text-center">Category Table</h1>

          <div>
            <table className="table table-striped  w-100 " align="center">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Category</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {record && record.length ? (
                  record.map((item, i) => (
                    <tr key={item._id}>
                      <td>{i + 1}</td>
                      <td>{item.category}</td>
                      <td>
                        <Button
                          variant="primary"
                          className="mx-1"
                          onClick={() => Edithandler(item._id)}
                        >
                          Edit
                        </Button>
                        <Button
                          variant="danger"
                          className="mx-1"
                          onClick={() => dispatch(DeleteCategory(item._id))}
                        >
                          Delete
                        </Button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="3">Loading...</td>
                  </tr>
                )}

                <tr>
                  <td className="text-center" colSpan={4}>
                    <Button variant="primary" onClick={handleShow}>
                      Add New Category
                    </Button>
                  </td>
                </tr>
              </tbody>
            </table>

            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Add New Category</Modal.Title>
              </Modal.Header>
              <Form onSubmit={FormHandler}>
                <Modal.Body>
                  <Form.Group className="mb-3" controlId="categoryInput">
                    <Form.Label>Category</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Category"
                      onChange={(e) => setCategory(e.target.value)}
                      value={category}
                      autoFocus
                    />
                  </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  {editId ? (
                    <Button variant="primary" type="submit">
                      Update Changes
                    </Button>
                  ) : (
                    <Button variant="primary" type="submit">
                      Save Changes
                    </Button>
                  )}
                </Modal.Footer>
              </Form>
            </Modal>
          </div>
        </Container>
      </div>
    </>
  );
};



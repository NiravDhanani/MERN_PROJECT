import { toast } from "react-toastify";

export const Register_User = (users) => {
  return async (dispatch) => {
    try {
      const response = await fetch("http://localhost:8222/v1/Api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(users),
      });

      if (response.ok) {
        const data = await response.json();
        toast.success("User Registered Successfully!");

        dispatch({
          type: "REGISTER_USER",
          payload: data, // Updated to reflect the response data
        });

        return data;
      } else {
        const errorData = await response.json();
        toast.error(`Error: ${errorData.message}`);
        throw new Error(errorData.message);
      }
    } catch (error) {
      toast.error(`Error: ${error.message}`);
      console.error("Registration Error:", error);
      throw error; // Re-throwing the error for further handling if needed
    }
  };
};

export const Login_User = (obj, login, setLogin, navigate) => {
  return async (dispatch) => {
    try {
      const response = await fetch("http://localhost:8222/v1/Api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(obj),
      });
      if (response.ok) {
        const data = await response.json();
        setLogin({
          ...login,
          user: data.user,
          token: data.token,
        });
        if (data.user?.role === "admin") {
          navigate("/dashboard");
        } else {
          navigate("/");
        }
        localStorage.setItem("Login", JSON.stringify(data), true);
        dispatch({
          type: "loginuser",
          payload: data,
        });
        return data;
      } else {
        toast.error("email or password may wrong");
      }
    } catch (err) {
      toast.error("Error :", err);
      return false;
    }
  };
};

// category section
let localData = JSON.parse(localStorage.getItem("Login"));
const token = localData?.token;

export const CreateCategory = (category) => {
  return async (dispatch) => {
    try {
      let response = await fetch(
        "http://localhost:8222/v1/Api/Category/createcategory",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(category),
        }
      );

      if (response.ok) {
        await response.json();
        toast.success("Category Added Successfully!");
        dispatch(CategoryView());
      } else {
        let errorData = await response.json();
        toast.error(`Error: ${errorData.message}`);
      }
    } catch (err) {
      toast.error(`Error: ${err.message}`);
      console.error("Create Category Error:", err);
    }
  };
};

export const CategoryView = () => {
  return async (dispatch) => {
    try {
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
      let data = await response.json();
      dispatch({
        type: "VIEW_CATEGORY",
        payload: data.data,
      });
    } catch (err) {
      toast.error(`Error: ${err.message}`);
      console.error("Create Category Error:", err);
    }
  };
};

export const DeleteCategory = (id) => {
  return async (dispatch) => {
    try {
      let response = await fetch(
        `http://localhost:8222/v1/Api/Category/deleteCategory?id=${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.ok) {
        const data = await response.json();

        toast.success("Category deleted successfully!");

        dispatch({
          type: "DELETE_CATEGORY",
          payload: id,
        });
        return data;
      }
    } catch (err) {
      toast.error(`Error: ${err.message}`);
      console.log(err.message);
    }
  };
};

export const EditCategory = (id) => {
  return async (dispatch) => {
    try {
      let response = await fetch(
        `http://localhost:8222/v1/Api/Category/editCategory?id=${id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.ok) {
        let data = await response.json();
        dispatch({
          type: "EDIT_CATEGORY",
          payload: data.single,
        });
      }
    } catch (err) {
      toast.error(err.message);
      console.log(err.message);
    }
  };
};

export const UpdateCategory = ({ editId, category }) => {
  return async (dispatch) => {
    try {
      let response = await fetch(
        `http://localhost:8222/v1/Api/Category/updateCategory?id=${editId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ category }),
        }
      );
      if (response.ok) {
        let data = await response.json();
        toast.success("Category updated successfully!");
        dispatch(CategoryView());
        return data;
      }
    } catch (err) {
      toast.error(err.message);
      console.log(err.message);
    }
  };
};

// product section

export const ProductView = () => {
  return async (dispatch) => {
    let response = await fetch(
      `http://localhost:8222/v1/Api/product/ViewProduct`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const data = await response.json();
    dispatch({
      type: "PRODUCT_VIEW",
      payload: data.data,
    });
  };
};

export const ProductCreate = (formData) => { // Change the argument name to formData
  return async (dispatch) => {
    try {
      let response = await fetch(
        `http://localhost:8222/v1/Api/product/createProduct`,
        {
          method: "POST",
          headers: {
            // Remove "Content-Type" header since it's automatically set for FormData
            Authorization: `Bearer ${token}`,
          },
          body: formData, // Pass formData directly
        }
      );

      console.log(formData);
      console.log(response);

      if (!response.ok) {
        let errorMessage = `Error: ${response.status} ${response.statusText}`;
        toast.error(errorMessage);
        console.error(errorMessage);
        return;
      }

      let data = await response.json();
      console.log("Product created successfully:", data);
      toast.success("Product created successfully!");
      dispatch(ProductView()); // Fetch the updated product list
    } catch (err) {
      toast.error("An error occurred while creating the product.");
      console.error("Error:", err.message);
    }
  };
};

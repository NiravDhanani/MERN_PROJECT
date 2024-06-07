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
        let data = await response.json();
        toast.success("Category Added Successfully!");
        dispatch({
          type: "CREATE_CATEGORY",
          payload: data,
        });
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

export const CategoryView = (data) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: "VIEW_CATEGORY",
        payload: data,
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
      let response = await fetch(`http://localhost:8222/v1/Api/Category/editCategory?id=${id}`,{
        method : "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      if(response.ok){
        let data = await response.json()
        dispatch({
          type : "EDIT_CATEGORY",
          payload : data.single
        })

      }
    } catch (err) {
      toast.error(err.message);
      console.log(err.message);
    }
  };
};

export const UpdateCategory = ({editId,category}) => {
  return async (dispatch) => {
    try {
      let response = await fetch(`http://localhost:8222/v1/Api/Category/updateCategory?id=${editId}`,{
        method : "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body : JSON.stringify({category})
      })
      if(response.ok){
        let data = await response.json()
        toast.success("Category updated successfully!");
        dispatch({
          type : "UpdateCategory",
          payload : data
        })
        return data
      }
    } catch (err) {
      toast.error(err.message);
      console.log(err.message);
    }
  };
}

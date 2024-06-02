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

export const Login_User = (obj,login,setLogin,navigate) => {
  return async (dispatch) => {

    try {
     
      const response = await fetch("http://localhost:8222/v1/Api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", 
        },
        body: JSON.stringify(obj),
      });
      if(response.ok){
        const data = await response.json()
        setLogin({
          ...login,
          user : data.user,
          token : data.token
        })
        if(data.user?.role === "admin"){
          navigate('/dashboard')
        }else{
          navigate('/')
        }
        localStorage.setItem('Login',JSON.stringify(data))
        dispatch({
          type : "loginuser",
          payload : data
        })
        
        return data
      } else{
        toast.error("email or password may wrong")
      }
    } catch (err) {
      toast.error("Error :", err);
      return false;
    }
  };
};

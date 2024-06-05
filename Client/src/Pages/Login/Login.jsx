import { useEffect, useState } from "react";
import "../Register/Register.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Login_User } from "../../redux/action/action";
import { ToastContainer, toast } from "react-toastify";
// import { useLoginAuth } from "../../Context/LoginContext";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [login, setLogin] = useState();
  const dispatch = useDispatch();

  const LoginFormHandler = async (e) => {
    e.preventDefault();
    try {
      if(!email || !password){
        toast.error("All Field Require")
      }
      let obj = {
        email,
        password,
      };
      dispatch(Login_User(obj,login,setLogin,navigate));
      setEmail("");
      setPassword("");
    } catch (err) {
      toast.error("Errorn Pleas try again later");
      return false;
    }   
  };
  useEffect(()=>{
    let login = localStorage.getItem('Login')
    if(!login){
      navigate('/login')
    }
  },[])
  return (
    <>
      <ToastContainer />
      <section className="login-pade-head01">
        <section className="login-pade-head">
          <div className="container">
            <div className="row">
              <div className="col-12 col-xxl-12 ">
                <div className="login01 d-flex justify-content-between align-items-center">
                  <h4>Log in</h4>
                  <span className="d-flex align-items-center">
                    <p>Log in</p>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
      {/* login container    */}
      <section className="login-content">
        <div className="container">
          <div className="row">
            <div className="col-12  col-md-12 col-xxl-12  ">
              <div className="log-content d-md-flex">
                <div className=" d-none col-lg-6 d-lg-flex justify-content-lg-center col-xxl-6">
                  <div className="img-contain">
                    <img src="./public/img/log-in.png" className="img-fluid" />
                  </div>
                </div>
                <div className="col-12 col-sm-10 col-md-8 mx-sm-auto col-lg-5 col-xxl-5 mx-lg-0 ">
                  <div className="log-in-data col-xxl-12 d-flex justify-content-center">
                    <div className="log-in-box  col-10">
                      <div className="login-title">
                        <h4>Welcome To Fastkart</h4>
                        <h3>Log In Your Account</h3>
                      </div>
                      <form onSubmit={LoginFormHandler}>
                        <div className="login-email">
                          <label>Email Address</label>
                          <input
                            type="Email"
                            placeholder="Email Address"
                            className="w-100"
                            id="loginemail"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </div>
                        <div className="password">
                          <label>Password</label>
                          <input
                            type="password"
                            placeholder="Password"
                            className="w-100"
                            id="loginpassword"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                          />
                        </div>
                        <div className="forgetbox d-flex justify-content-between">
                          <div className="remember">
                            <input type="checkbox" />
                            <label htmlFor="checkbox">Remember Me</label>
                          </div>
                          <Link>Forgot Password?</Link>
                        </div>
                        <div className="button-login">
                          <button className="w-100" type="submit">
                            Log In
                          </button>
                        </div>
                        <div className="google ">
                          <h6 className="text-center ">OR</h6>
                          <div className="google-img d-flex justify-content-center">
                            <img src="./public/img/google.png" alt />
                            <h4>Log In With Google</h4>
                          </div>
                          <div className="google-img d-flex justify-content-center ">
                            <img src="./public/img/facebook.png" alt />
                            <h4>Log In With Facebook</h4>
                          </div>
                        </div>
                        <div className="sign-up-form text-center">
                          <h6>Dont have an account?</h6>
                          <Link to={"/register"}> Register </Link>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

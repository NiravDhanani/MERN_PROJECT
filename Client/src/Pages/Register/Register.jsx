import {useState } from "react";
import { useDispatch } from 'react-redux';

import { ToastContainer, toast } from 'react-toastify';
import { Link, useNavigate } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import "./Register.css";
import { Register_User } from "../../redux/action/action";
import { signInWithPopup } from "firebase/auth";
import { googleAuthProvider, auth } from "../../Utility/GoogleAuth"; 
import useAuth from "../../Utility/createContext";
    
export const Register = () => {
  const [gauth, setAuth] = useAuth();
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [cpassword,setCpassword] = useState("")

  const navigate = useNavigate()
  const dispatch = useDispatch()

  
  const authLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleAuthProvider);
      const user = result.user;
      setAuth({ ...authState, token: user.accessToken });
      navigate("/"); // Navigate to a different route after successful login
    } catch (error) {
      toast.error("Error with Google Sign In");
    }
  };

  const RegisterFormhandler = async (e) => {
    e.preventDefault();
  if (!name || !email ||!password){
    toast.error("All field Require")
    return false
  }
    if (password != cpassword) {
      toast.error("Passwords do not match");
      return false;
    }
  
    const users = { name, email, password };
  
    dispatch(Register_User(users))
    setName("");
    setEmail("");
    setPassword("");
    setCpassword("");
    navigate('/login')
  };
  
  return (
    <>
        <section className="login-pade-head01">
          <section className="login-pade-head">
            <div className="container">
              <div className="row">
                <div className="col-xxl-12 col-12 ">
                  <div className="login01 d-flex justify-content-between align-items-center">
                    <h4>Sign in</h4>
                    <span className="d-flex align-items-center">
                      <a href="">
                        
                        <i className="ri-home-4-fill" />
                      </a>
                      <i className="ri-arrow-right-s-line" />
                      <p>Sign in</p>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
        {/* sign in container    */}
        <section className="login-content">
          <div className="container">
            <div className="row">
              <div className="col-xxl-12 col-12 ">
                <div className="log-content d-flex justify-content-lg-between justify-content-md-center justify-content-center">
                  <div className="col-xxl-6  col-lg-5 d-md-none d-none d-lg-flex justify-content-lg-center">
                    <div className="img-contain">
                      <img
                        src="./public/img/sign-up.png"
                        className="img-fluid"
                      />
                    </div>
                  </div>
                  <div className="col-xxl-4 col-lg-7  col-md-10 col-11 d-lg-flex d-flex justify-content-center">
                    <div className="log-in-data col-xxl-12 col-10 col-md-10 d-flex justify-content-center">
                      <div className="log-in-box  col-10 col-md-10">
                        <div className="login-title">
                          <h4>Welcome To Fastkart</h4>
                          <h3>Create New Account</h3>
                        </div>

                        <form  onSubmit={RegisterFormhandler}>
                          <div className="login-email">
                            <input
                              type="name"
                              placeholder="Full Name"
                              className="w-100"
                              id="loginname"
                              onChange={(e)=>setName(e.target.value)}
                              value={name}
                            />
                            {/* <label for="email">Email Address</label> */}
                          </div>
                          <div className="login-email">
                            <input
                              type="Email"
                              placeholder="Email Address"
                              className="w-100"
                              id="loginemail"
                              onChange={(e)=>setEmail(e.target.value)}
                              value={email}
                            />
                            {/* <label for="email">Email Address</label> */}
                          </div>
                          <div className="password">
                            <input
                              type="text"
                              placeholder="Password"
                              className="w-100"
                              id="loginpassword"
                              onChange={(e)=>setPassword(e.target.value)}
                              value={password}
                            />
                          </div>
                          <div className="password">
                            <input
                              type="text"
                              placeholder="Confirm Password"
                              className="w-100"
                            
                              onChange={(e)=>setCpassword(e.target.value)}
                              value={cpassword}
                            />
                          </div>
                          <div className="forgetbox d-flex justify-content-between">
                            <div className="terms">
                              <input type="checkbox" className="check-box" />
                              <label htmlFor="checkbox">
                                I agree with
                                <span>Terms</span>  and  <span>Privacy</span>
                              </label>
                            </div>
                          </div>
                          <div className="button-login">
                          <button
                              className="w-100"
                              type="submit"
                            >
                               Sign Up
                               <ToastContainer/>
                            </button>
                           
                          </div>
                          <div className="google ">
                            <h6 className="text-center ">OR</h6>
                            <div className="google-img d-flex justify-content-center" onClick={()=>authLogin()}>
                              <img src="./public/img/google.png" alt="google"/>
                              <h4>Log In With Google</h4>
                            </div>
                            <div className="google-img d-flex justify-content-center ">
                              <img src="./public/img/facebook.png" alt="fb" />
                              <h4>Log In With Facebook</h4>
                            </div>
                          </div>
                          <div className="sign-up-form text-center">
                            <h6>Already have an account?</h6>
                            <Link to={'/login'} > Log In </Link>
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

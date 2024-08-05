import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {useAuth} from "../store/auth";
import { toast } from "react-toastify";
function LoginComp() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const {serverToken}=useAuth();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const Submit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:8000/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const tok_res=await response.json();

      if (response.ok) {
        serverToken(tok_res.token)
        toast.success("Login Successfull")
        navigate("/");
      } else {
        toast.error(tok_res.extraDetails?tok_res.extraDetails:"Invalid Logins")
      }
    } catch (error) {
      console.log("Login Error" + error);
    }
  };
  return (
    <>
      <section>
        <main>
          <div className="section-registration">
            <div className="container grid grid-two-cols">
              <div className="login-image">
                <img
                  src="/images/Login.jpg"
                  alt="register"
                  width="500"
                  height="500"
                />
              </div>
              <div className="registration-form">
                <h1 className="main-heading mb-3">login Form </h1>
                <br />

                <form onSubmit={Submit}>
                  <div>
                    <label htmlFor="email">email</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Please enter email"
                      id="email"
                      required
                      autoComplete="off"
                      value={data.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="password">password</label>
                    <input
                      type="password"
                      name="password"
                      placeholder="Please enter password"
                      id="password"
                      required
                      autoComplete="off"
                      value={data.password}
                      onChange={handleChange}
                    />
                  </div>
                  <br />
                  <button className="btn btn-submit" type="submit">
                    Login
                  </button>
                </form>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
}

export default LoginComp;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

function RegComp() {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    phone: "",
  });
  const navigate = useNavigate();
  const { serverToken } = useAuth();

  const handleChange = (e) => {
    let { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const Submit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8000/api/auth/reg", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      const tok_res = await response.json();
      if (response.ok) {
        const token = serverToken(tok_res.token);
        console.log("token data", token);
        setUser({
          username: "",
          email: "",
          password: "",
          phone: "",
        });
        toast.success("Registration Successfull")
        navigate("/");
      } else {
        toast.warning(tok_res.extraDetails ? tok_res.extraDetails : tok_res.message);
      }
    } catch (error) {
      console.log("Register" + error);
    }
  };

  return (
    <>
      <section>
        <main>
          <div className="section-registration">
            <div className="container grid grid-two-cols">
              <div className="registration-image">
                <img
                  src="/images/Register.jpg"
                  alt="register"
                  width="500"
                  height="500"
                />
              </div>
              <div className="registration-form">
                <h1 className="main-heading mb-3">Registration Form </h1>
                <br />

                <form onSubmit={Submit}>
                  <div>
                    <label htmlFor="username">Username</label>
                    <input
                      type="text"
                      name="username"
                      placeholder="Please enter username"
                      id="username"
                      required
                      autoComplete="off"
                      value={user.username}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Please enter email"
                      id="email"
                      required
                      autoComplete="off"
                      value={user.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      name="password"
                      placeholder="Please enter password"
                      id="password"
                      required
                      autoComplete="off"
                      value={user.password}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="phone">Phone</label>
                    <input
                      type="number"
                      name="phone"
                      placeholder="Please enter phone"
                      id="phone"
                      required
                      autoComplete="off"
                      value={user.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <br />
                  <button className="btn btn-submit" type="submit">
                    Register
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

export default RegComp;

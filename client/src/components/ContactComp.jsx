import React, { useState, useEffect } from "react";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

function ContactComp() {
  const [user, setUser] = useState({
    username: "",
    email: "",
    message: "",
  });
  const [data, setData] = useState(true);
  const { User } = useAuth();

  useEffect(() => {
    if (data && User) {
      setUser({
        username: User.username,
        email: User.email,
        message: "",
      });
      setData(false);
    }
  }, [data, User]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8000/api/form/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      const data = await response.json();
      if (response.ok) {
        console.log(data);
        if (data) {
          toast.success("Message Sent Successfully");
          setUser({
            message: "",
          });
        }
      } else {
        toast.warning(data.extraDetails ? data.extraDetails : data.message);
      }
    } catch (error) {
      console.log("Contact" + error);
    }
  };

  return (
    <section className="contact-section">
      <div className="contact-container grid grid-two-cols">
        <div className="contact-image">
          <img
            src="/images/Contact.jpg"
            alt="Contact"
            width="500"
            height="500"
          />
        </div>
        <div className="contact-form-container">
          <h1 className="contact-heading">Contact Form</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
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
            <div className="form-group">
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
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                value={user.message}
                onChange={handleChange}
                placeholder="Please enter your message"
                id="message"
                cols="30"
                rows="5"
                required
                autoComplete="off"
              ></textarea>
            </div>
            <button className="btn btn-submit" type="submit">
              Submit  
            </button>
            
            <div className="social-links">
            <span>Or</span>
              <a
                href="https://www.linkedin.com/in/annas-mir-842817266/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <img src="/images/Linkdin.png" alt="LinkedIn" />
                LinkedIn
              </a>
              <a
                href="https://github.com/annasmir2"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <img src="/images/Github.png" alt="GitHub" />
                GitHub
              </a>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactComp;

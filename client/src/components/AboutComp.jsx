import React from "react";
import { Link } from "react-router-dom";
import AboutTh from "./AboutTh";
import { useAuth } from "../store/auth";

function AboutComp() {
  const { User } = useAuth();
  return (
    <>
      <section className="section-hero">
        <div className="container grid grid-two-cols">
          <div className="hero-content">
            <p className="welcome-text">
              Welcome {User ? User.username : "User"}
            </p>
            <h2>Why Choose Me?   <img src="/images/information.gif" className="case" /></h2>
            <ul className="why-choose-me">
              <li>-  Proficient in MERN Stack with hands-on experience.</li><br/>
              <li>-  Skilled in React.js, Node.js, and MongoDB for full-stack development.</li><br/>
              <li>-  Experienced with Appwrite for seamless backend solutions.</li><br/>
              <li>-  Strong foundation in JavaScript and expert in solving complex problems.</li><br/>
              <li>-  Knowledgeable in Git & GitHub for efficient version control and collaboration.</li>
            </ul>
            <div className="btn btn-group">
              <Link to="/contact">
                <button className="btn">Connect Now</button>
              </Link>
              <Link to="/services">
                <button className="btn secondary-btn">Learn More</button>
              </Link>
            </div>
          </div>
          <div className="hero-image">
            <img
              src="/images/About.jpg"
              alt="Annas Mir"
              width="500"
              height="500"
            />
          </div>
        </div>
      </section>
      <AboutTh />
    </>
  );
}

export default AboutComp;

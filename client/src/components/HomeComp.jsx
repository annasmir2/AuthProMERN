import React from "react";
import { Link } from "react-router-dom";
import AboutTh from "./AboutTh";
function HomeComp() {
  return (
    <>
      <main>
        <section className="section-hero">
          <div className="container grid grid-two-cols">
            <div className="hero-content">
              <p>
                Hi, I'm <strong>Annas Mir</strong>, a dedicated{" "}
                <strong>Software Engineer</strong> and
                <strong> Full-Stack Web Developer.</strong>{" "}
              </p>
              <h1>
                Welcome to My Portfolio{" "}
                <img src="/images/case.gif" className="case" />
              </h1>
              <p>
                Aspiring Full-Stack Developer | Proficient in MERN Stack |
                Skilled in React.js, Node.js, MongoDB | Experienced with
                Appwrite | Strong Foundation in JavaScript | Expert in Hunting
                Down Solutions with REST APIs, Redux, and Context API |
                Passionate About Applying Skills to Real-World Challenges |
                Knowledgeable in Git & GitHub for Version Control and
                Collaboration | Effective Communicator | Strong Problem-Solver |
                Committed to Crafting Secure, Scalable, and User-Friendly
                Experiences
              </p>
              <div className="btn btn-group">
                <Link to="/contact">
                  <button className="btn">connect now</button>
                </Link>
                <Link to="/services">
                  <button className="btn secondary-btn">learn more now</button>
                </Link>
              </div>
            </div>

            {/* Images */}
            <div className="hero-image">
              <img
                src="/images/Me.jpeg"
                alt="my image"
               
              />
            </div>
          </div>
        </section>
      </main>

      <AboutTh />
      <section className="section-hero">
        <div className="container grid grid-two-cols">
          {/* Images */}
          <div className="hero-image">
            <img
              src="/images/Started.jpg"
              alt="my image"
              width="500"
              height="500"
            />
          </div>
          <div className="hero-content">
            <p>Ready to begin your web development journey?</p>
            <h1>Getting Started</h1>
            <p>
              Feel free to reach out for collaboration or any questions. I'm
              excited to connect with fellow developers and explore new
              opportunities in web development.
            </p>
            <div className="btn btn-group">
              <Link to="/contact">
                <button className="btn">connect now</button>
              </Link>
              <Link to="/services">
                <button className="btn secondary-btn">learn more now</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default HomeComp;

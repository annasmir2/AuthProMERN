import React from 'react';
import { Link } from 'react-router-dom';

function ErrorComp() {
  return (
    <>
      <section id="error-page">
        <div className=" content">
          <div className="content">
            <h2 className="header">404</h2>
            <h3>Oops! The page you're looking for can't be found.</h3>
            <p2>
              It seems the page you are trying to reach does not exist or has been moved. Don't worry, we've got you covered. You can go back to the homepage or let us know about the problem.
            </p2>
            <div className="btns">
              <Link to="/">Return Home</Link>
              <Link to="/contact">Report a Problem</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ErrorComp;

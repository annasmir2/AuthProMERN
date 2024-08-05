import React from 'react';

function AboutTh() {
  return (
    <section className="section-analytics">
      <div className="container grid grid-four-cols">
        
        <div className="div1">
          <img 
            src="/images/Rest.png" 
            alt="REST APIs" 
            className="heading-image"
          />
          <h2>REST APIs</h2>
          <p>Designing and implementing robust APIs for seamless data interaction.</p>
        </div>

        <div className="div1">
          <img 
            src="/images/Redux.png" 
            alt="Redux Toolkit / Context API" 
            className="heading-image"
          />
          <h2>Redux Toolkit/Context API</h2>
          <p>Managing state with Redux Toolkit/Context Apis for predictable state updates.</p>
        </div>

        <div className="div1">
          <img 
            src="/images/Github.png" 
            alt="Git & GitHub" 
            className="heading-image"
          />
          <h2>Git & GitHub</h2>
          <p>Version control and collaboration using Git and GitHub.</p>
        </div>

        <div className="div1">
          <img 
            src="/images/Prob.png" 
            alt="Problem Solving" 
            className="heading-image"
          />
          <h2>Problem Solving</h2>
          <p>Approaching complex challenges with innovative solutions.</p>
        </div>

      </div>
    </section>
  );
}

export default AboutTh;

import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const Education = (props) => {
  return (
    <div>
      <div className="landing-page">
        <div className="education-pic">
          <img src="src/img/dartmouth.jpg" alt="Dartmouth!" />
        </div>
        <div className="education-text">
          <h1>I am a &#39;20 at Dartmouth College studying computer science, philosophy, and economics.</h1>
          <h2>My favorite courses so far are: </h2>
          <h3>Smartphone Programming, Full-stack Web Development, Human-computer Interaction, and Philosphy of Time</h3>
          <h2>On campus, I am also involved with: </h2>
          <ul>
            <li>Dartmouth Asian Organization</li>
            <li>The Dartmouth Tech Staff</li>
            <li>Dandelion Project</li>
            <li>Computer Science Research</li>
            <li>CoderDojo</li>
            <li>DREAM</li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default withRouter(connect(null, null)(Education));

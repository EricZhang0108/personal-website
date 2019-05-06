import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

// the hobbies page
const Hobbies = (props) => {
  return (
    <div>
      <div className="landing-page">
        <div className="hobbies-text">
          <h1>I love to travel and volunteer whenever I can.</h1>
          <h1>Recently, I have also gotten into longboarding too!</h1>
        </div>
        <div className="hobbies-pic">
          <div>
            <img src="src/img/amsterdam.png" alt="dream" />
          </div>
          <div>
            <img src="src/img/dream.jpg" alt="amsterdam" />
          </div>
          <div>
            <img src="src/img/china.jpg" alt="china" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(connect(null, null)(Hobbies));

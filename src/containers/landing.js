import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const Landing = (props) => {
  return (
    <div>
      <div className="landing-page">
        <div className="landing-text">
          <h1>Hey what&#39;s up?</h1>
          <h1>My name is <span id="name">Eric Zhang</span>. I am a software engineer.</h1>
          <div id="typing">
            <h1>Nice to meet you :)</h1>
          </div>
        </div>
        <div className="landing-pic">
          <img src="src/img/landing-pic.jpeg" alt="pitcture of me!" />
        </div>
      </div>
    </div>
  );
};

export default withRouter(connect(null, null)(Landing));

import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const Contact = (props) => {
  return (
    <div>
      <div className="landing-page">
        <div className="about-text">
          <h1>Hey! Feel free to reach out to me at:</h1>
          <h1>Email: <a href="mailto: eric.z.zhang.20@dartmouth.edu">eric.z.zhang.20@dartmouth.edu</a></h1>
          <h1>Phone number: (630) 346-9700</h1>
        </div>
        <div className="contact-pic">
          <img src="src/img/contact.jpg" alt="me!" />
        </div>
      </div>
    </div>
  );
};

export default withRouter(connect(null, null)(Contact));

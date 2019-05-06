import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

// the about page
// TODO: Implement Google Maps API with markers and infoboxes
const About = (props) => {
  return (
    <div>
      <div className="landing-page">
        <div className="about-text">
          <h1>I am 21 years old. I was born in Naperville, IL and grew up in Beijing, China.</h1>
          <h1>During high school, I went back to Naperville and studied at <span id="naperville">Naperville Central High School.</span></h1>
          <h1>I am now a junior at <span className="dartmouth">Dartmouth College</span>. Let&#39;s go <span className="dartmouth">Big Green!</span></h1>
        </div>
        <div className="map-pic">
          <img src="src/img/maps_edit.png" alt="map!" />
        </div>
      </div>
    </div>
  );
};

export default withRouter(connect(null, null)(About));

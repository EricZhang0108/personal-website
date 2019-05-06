import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

// the projects page
// TODO: Add more projects to the page
const Projects = (props) => {
  return (
    <div>
      <div className="landing-page">
        <div className="projects-listing">
          <div className="listing-first">
            <a href="https://github.com/EricZhang0108/HackDartmouth2018">
              <div className="firefite">
                <div className="firefite-pic">
                  <img className="hackdartmouth" src="src/img/hackdartmouth.png" alt="hackdartmouth" />
                </div>
                <h2>FyreFite</h2>
                <h3>Winner of HackDartmouth Google API Award</h3>
                <p>A fun multiplayer interactive game that uses Google Firebase and Maps</p>
              </div>
            </a>
            <a href="https://github.com/EricZhang0108/DartDASH_Master">
              <div className="dartdash">
                <div className="dartdash-pic">
                  <img className="android-pic" src="src/img/android.gif" alt="android" />
                </div>
                <h2>DartDASH</h2>
                <h3>Android App</h3>
                <p>A helpful tool to help student organizations with fundraising by using computer vision and cloud storage</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(connect(null, null)(Projects));

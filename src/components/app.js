import React from 'react';
import {
  BrowserRouter as Router, Route, NavLink, Switch,
} from 'react-router-dom';
import Landing from '../containers/landing';
import About from '../containers/about';
import Education from '../containers/education';
import Projects from '../containers/projects';
import Hobbies from '../containers/hobbies';
import Contact from '../containers/contact';

const Nav = (props) => {
  return (
    <nav>
      <ul className="navbar">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/education">Education</NavLink></li>
        <li><NavLink to="/projects">Projects</NavLink></li>
        <li><NavLink to="/hobbies">Hobbies</NavLink></li>
        <li><NavLink to="/contact"><button className="contact-button" type="button">Contact</button></NavLink></li>
      </ul>
    </nav>
  );
};

const FallBack = (props) => {
  return <div>URL Not Found</div>;
};

const App = (props) => {
  return (
    <Router>
      <div className="display">
        <Nav />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/about" component={About} />
          <Route path="/education" component={Education} />
          <Route path="/projects" component={Projects} />
          <Route path="/hobbies" component={Hobbies} />
          <Route path="/contact" component={Contact} />
          <Route component={FallBack} />
        </Switch>
      </div>
      <div className="footer">
        <a href="mailto: eric.z.zhang.20@dartmouth.edu"><i className="fas fa-envelope fa-4x" /></a>
        <a href="https://www.linkedin.com/in/eric-z-zhang/"><i className="fab fa-linkedin fa-4x" /></a>
        <a href="https://github.com/EricZhang0108"><i className="fab fa-github-square fa-4x" /></a>
      </div>
    </Router>
  );
};

export default App;

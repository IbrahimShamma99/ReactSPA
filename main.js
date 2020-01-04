import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, IndexLink, Link} from "react-router";

import App from './src/App.jsx';
import Home from './src/Home.jsx';
import About from './src/About.jsx';
import Github from './src/Github.jsx';
import Contact from './src/Contact.jsx';


ReactDOM.render(
      <Router>
        <Route path="/" component={App}>
          <IndexRoute component={Home}/>
          <Route path="about" component={About}/>
          <Route path="github" component={Github}/>
          <Route path="contact" component={Contact}/>
        </Route>
      </Router>,
      document.getElementById('app')
    );
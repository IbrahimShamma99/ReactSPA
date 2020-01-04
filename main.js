import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, IndexLink, Link} from "react-router";

import App from './src/App.jsx';
import Home from './src/Home.jsx';
import About from './src/About.jsx';
import Github from './src/Github.jsx';
import Contact from './src/Contact.jsx';
import Skill from './src/Skill.jsx';
import {RoutesNames} from './constants/constants';

ReactDOM.render(
      <Router>
        <Route path={RoutesNames.home} component={App}>
          <IndexRoute component={Home}/>
          <Route path={RoutesNames.about} component={About}/>
          <Route path={RoutesNames.github}  component={Github}/>
          <Route path={RoutesNames.contact} component={Contact}/>
          <Route path={RoutesNames.skill} component={Skill}/>
        </Route>
      </Router>,
      document.getElementById('app')
    );
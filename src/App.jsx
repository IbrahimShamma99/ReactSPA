import React from 'react';
import {Router, Route, IndexRoute, IndexLink, Link} from "react-router";
import {RoutesNames} from '../constants/constants';
var App = React.createClass({
  render: function() {
    return (
   
      <div id="menuwrapper">
        <h1>MY RESUME</h1>
        <ul>
          <li><IndexLink to={RoutesNames.home} activeClassName="active">Home</IndexLink></li>
          <li><Link to={RoutesNames.about} activeClassName="active">About</Link></li>  
          <li><Link to={RoutesNames.github} activeClassName="active">Github</Link></li>
          <li><Link to={RoutesNames.contact} activeClassName="active">Contact</Link></li>
          <li><Link to={RoutesNames.skill} activeClassName="active">Skills</Link></li>
        </ul>
        <div className="content">
            {this.props.children}
        </div>
      </div>
    )
  }
});

export default App;
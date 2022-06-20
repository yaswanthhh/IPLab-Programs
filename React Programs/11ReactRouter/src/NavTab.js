import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function NavTab() {
  return (
      <nav>
		<Link to="/" class="tab">Home</Link>
		<Link to="/About" class="tab">About</Link>
		<Link to="/Users" class="tab">Users</Link>
		<Link to="/Topics" class="tab">Topics</Link>
	  </nav>
    );
}

export default NavTab;
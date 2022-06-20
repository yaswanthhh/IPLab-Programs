import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import image1 from './index.jpg';



function NavTab() {
  return (
      <nav>
		<Link to="/" class="tab">Home</Link>
		<Link to="/About" class="tab">About</Link>
		<Link to="/Users" >
		<img src={image1} alt="example"/>
		</Link>
		<Link to="/Topics" class="tab">Topics</Link>
	  </nav>	  
    );
}

export default NavTab;
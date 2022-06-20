import React from 'react';
import ReactDOM from 'react-dom';

//Event handlers have access to the React event 
// that triggered the function.

class FootBall extends React.Component {
  shoot = (a, b) => {
	document.write("String -",a);
    document.write("<br> Event type- ",b.type);
    /*
    'b' represents the React event that triggered the function,
    in this case the 'click' event
    */
  }
  render() {
	  //with Arrow function
    return (
      <button onClick={(ev) => this.shoot("This is a Goal", ev)}>
		Take the shot!
	  </button>
    );
  }
}
export default FootBall;

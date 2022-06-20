import React from 'react';
import ReactDOM from 'react-dom';

//Event handlers have access to the React event 
// that triggered the function.

class FootBall extends React.Component {
  shoot = (a, b) => {
    document.write("Without Arrow function <br> String -",a);
    document.write("<br> Event type- ",b.type);
    /*
    'b' represents the React event that triggered the function,
    in this case the 'click' event
    */
  }
  render() {
	  //without Arrow function - bind is used
    return (
      <button onClick={this.shoot.bind(this, "This is a Goal")}> 
		Take the shot!
	  </button>
    );
  }
}
export default FootBall;

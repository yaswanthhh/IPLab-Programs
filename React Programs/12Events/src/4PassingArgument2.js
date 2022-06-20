import React from 'react';
import ReactDOM from 'react-dom';

//Bind the event handler to this
class FootBall extends React.Component {
  shoot(a) {
    document.write(a);
  }
  render() {
    return (
      <button
        onClick={this.shoot.bind(this, "This is a Goal")}> 
		Take the shot!</button>
    );
  }
}
export default FootBall;

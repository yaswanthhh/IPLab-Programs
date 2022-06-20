import React from 'react';
import ReactDOM from 'react-dom';

// If you want to send parameters into an event handler, you have two options:
// 1. Make an anonymous arrow function.
// 2. Bind the event handler to this.

// anonymous arrow function
class FootBall extends React.Component {
  shoot = (a) => {
    document.write(a);
  }
  render() {
    return (
      <button onClick={() => this.shoot("It's a Goal")}>Take the shot!</button>
    );
  }
}

export default FootBall;

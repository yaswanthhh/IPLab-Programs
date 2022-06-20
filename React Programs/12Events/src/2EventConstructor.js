import React from 'react';
import ReactDOM from 'react-dom';

class FootBall extends React.Component {
  shoot() {
    document.write("The button is pressed!");
  }
  render() {
    return (
      <button onClick={this.shoot}>Click Here!</button>
    );
  }
}

export default FootBall;

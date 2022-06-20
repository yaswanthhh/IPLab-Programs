import React from 'react';
import ReactDOM from 'react-dom';

class Car extends React.Component {
  render() {
	  return (
      <div>
      <h1>I stay in my Garage</h1>
	  <Garage />
      </div>
    );
  }
}

class Garage extends React.Component {
  render() {
    return <h2>I am a Car!</h2>;
  }
}

export default Car;


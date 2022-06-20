import React from 'react';
import ReactDOM from 'react-dom';

class Car extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: "Ford",
      model: "Fiesta ",
      color: "red ",
      year: 2019
    };
  }
  render() {
    return (
      <div>
        <h1>My {this.state.brand}</h1>
        <h2>
          It is a {this.state.color}
          {this.state.model}
          from {this.state.year}.
        </h2>
      </div>
    );
  }
}

export default Car;


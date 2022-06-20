import React from 'react';
import ReactDOM from 'react-dom';

class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '', age: null, };
  }
  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    if (nam === "age") {
      if (!Number(val)) {
        alert("Your age must be a number");
      }
    }
    this.setState({[nam]: val});
  }
  render() {
    return (
      <form>
      <h1>Hello {this.state.name}, you are {this.state.age} years old!</h1>
      <p>Enter your name:</p>
      <input type='text' name='name' onChange={this.myChangeHandler} />
      <p>Enter your age:</p>
      <input type='text' name='age' onChange={this.myChangeHandler} />
      </form>
    );
  }
}

export default MyForm;

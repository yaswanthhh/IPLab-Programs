import React from 'react';
import ReactDOM from 'react-dom';

class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: '' };
  }
  mySubmitHandler = (event) => {
    //event.preventDefault();
    document.write("You are submitting " + this.state.username);
  }
  myChangeHandler = (event) => {
    this.setState({username: event.target.value});
  }
  render() {
    return (
      <form onSubmit={this.mySubmitHandler}>
		<h1>Hello {this.state.username}</h1>
		<p>Enter your name, and submit:</p>
		<input type='text' onChange={this.myChangeHandler} /> <br /><br />
		<input type='submit'/>
      </form>
    );
  }
}

export default MyForm;

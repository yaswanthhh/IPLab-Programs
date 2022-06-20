import React from 'react';
import ReactDOM from 'react-dom';

class Car extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return <h2>I am a {this.props.model}!</h2>;
	}
}

class App extends React.Component {
  render() {
	  return( 
		<div classname="App">
			<Car model="Fiesta"/>
		</div>
	  );
  }
}

export default App;
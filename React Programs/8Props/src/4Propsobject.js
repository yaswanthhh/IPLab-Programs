import React from 'react';
import ReactDOM from 'react-dom';

class Car extends React.Component {
	render() { 
	//return <h2>I am a {this.props.brand.model}! </h2>;}
	return <h2>I am a {this.props.brand.name} {this.props.brand.model}! </h2>;}
}

class App extends React.Component {
	render() {
		const carinfo = {name: "Ford", model: "Fiesta"};
		return (
			<div>
			<h1>Who lives in my garage?</h1>
			<Car brand={carinfo} />
			</div>
		);
	}
}


export default App;
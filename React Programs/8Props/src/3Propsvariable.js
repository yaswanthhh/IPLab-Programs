import React from 'react';
import ReactDOM from 'react-dom';
import Car from './Vehicle';

class App extends React.Component {
	render() {
		const carname = "Ford";
		return (
			<div>
			<h1>Who lives in my Garage?</h1>
			<Car brand={carname} />
			</div>
		);
	}
}

export default App;
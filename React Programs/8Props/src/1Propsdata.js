import React from 'react';
import ReactDOM from 'react-dom';
import Car from './Vehicle';

//Props are arguments passed into React components.
//Props are passed to components via HTML attributes.
//React Props are like function arguments in JavaScript 
//and attributes in HTML.

class App extends React.Component {
	render() {
		return (
		<div>
			<h1>Who lives in my Garage?</h1> 
			<Car brand="Ford" />
		</div>);
	}
}

ReactDOM.render(<App />, document.getElementById('root'));


export default App;


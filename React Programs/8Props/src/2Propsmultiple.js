import React from 'react';
import ReactDOM from 'react-dom';
import Car from './Vehicle';

class App extends React.Component {
  render() {
	  return( 
		<div classname="App">
			<Car brand="Ford"/>
			<Car brand="KIA"/>
		</div>
	  );
  }
}

export default App;


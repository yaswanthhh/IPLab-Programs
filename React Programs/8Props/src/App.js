import React from 'react';
import ReactDOM from 'react-dom';
import Car from './Vehicle';

class App extends React.Component {
  render() {
	  return( 
		<div classname="App">
			<Car />
			<Car />
		</div>
	  );
	  
	/*  Will return error (2 components)
	return(   
		<Car />
		<Car />
	  );*/
  }
}

export default App;


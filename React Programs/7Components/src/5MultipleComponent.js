import React from 'react';
import ReactDOM from 'react-dom';

import Vehicle from './Vehicle';

class Car extends React.Component {
  render() {
	  return( 
		<div classname="App">
			<Vehicle />
			<Vehicle />
		</div>
	  );
	  
	/*  Will return error (2 components)
	return(   
		<Vehicle />
		<Vehicle />
	  );*/
  }
}

export default Car;


import React from 'react';
import ReactDOM from 'react-dom';

// Class component 
//Component written in separate file
class Car extends React.Component {
  render() {
    return <h2>Hi, I am a Car!</h2>; //JSX code
  }
}

export default Car;
//ReactDOM.render(<Car />, document.getElementById('root'));
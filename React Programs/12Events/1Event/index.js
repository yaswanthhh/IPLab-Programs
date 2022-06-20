import React from 'react';
import ReactDOM from 'react-dom';

function shoot() {
  alert("The button is pressed!");
}

const myelement = (
  <button onClick={shoot}>Click Here!</button>
);
//In HTML
//<button onclick="shoot()">Take the Shot!</button>

ReactDOM.render(myelement, document.getElementById('root'));

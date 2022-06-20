import React from 'react';
import ReactDOM from 'react-dom';


  //const dish = React.createElement("h1", null, "Baked Salmon")
  
  const dish = React.createElement("h1",{id: "recipe-0", 'data-type': "title"},"Baked Salmon")
  
  //<h1 data-reactroot id="recipe-0" data-type="title">Baked Salmon</h1>

    ReactDOM.render(dish, document.getElementById('react-container')
    )

    console.log('dish', dish)

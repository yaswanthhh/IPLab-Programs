import React from 'react';
import ReactDOM from 'react-dom';
import {Switch, BrowserRouter as Router, Route, Link} from 'react-router-dom';
import image1 from './delhi.jpg';
import image2 from './berlin.jpg';
import image3 from './jerusalem.jpg';
import Delhi from './Delhi.js';
import Jerusalem from './Jerusalem.js';
import Berlin from './Berlin.js';


class NavBar extends React.Component {
  render() {
    return (
      <nav>
        <Link to='/delhi'><img src={image1}/></Link>
        <Link to='/berlin'><img src={image2}/></Link>
        <Link to='/jerusalem'><img src={image3}/></Link>
      </nav>
    );
  }
} 

class App extends React.Component {
  render() {
    return (
      <div>
      
      <Router>
      <NavBar />
      <Switch>
        <div>
          <Route path="/delhi">
            <Delhi />
          </Route>
          <Route path='/berlin'>
            <Berlin />
          </Route>
          <Route path='/jerusalem'>
            <Jerusalem />
          </Route>
          </div>
        </Switch>
      </Router>
      </div>
    );
  }
}

export default App;

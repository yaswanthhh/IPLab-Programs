import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";

import NavTab from './NavTab';
import Home from './Home';
import About from './About';
import Users from './Users';
import Topics from './Topics';

function App() {
  return (
    <Router>
      <div>
        <NavTab />

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
		  <Route path="/Topics">
            <Topics />
          </Route>
          <Route path="/About">
            <About />
          </Route>
          <Route path="/Users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
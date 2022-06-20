import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

import NavTab from './NavTab';
import Home from './Home';
import About from './About';
import Users from './Users';

function App() {
  return (
    <Router>
      <div>
        <NavTab />

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/:id" children={<Child />} />
        </Switch>
      </div>
    </Router>
  );
}

function Child() {
  // We can use the `useParams` hook here to access
  // the dynamic pieces of the URL.
  let { id } = useParams();

  return (
    <div>
      <h3>You  clicked - {id}</h3>
    </div>
  );
}

export default App;
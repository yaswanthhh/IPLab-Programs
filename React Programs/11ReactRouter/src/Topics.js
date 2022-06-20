import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";
import Topic from './Topic';

function Topics() {
  // The `path` lets us build <Route> paths that are
  // relative to the parent route, while the `url` lets
  // us build relative links.
  let { path, url } = useRouteMatch();

  return (
    <div>
      <h2>Topics</h2>
	  <Link to={`${url}/rendering`} class="tab">Rendering with React</Link>
	  <Link to={`${url}/components`} class="tab">Components</Link>
	  <Link to={`${url}/props-v-state`} class="tab">Props v. State</Link>
	  
      <Switch>
        <Route exact path={path}>
          <h3>Please select a topic.</h3>
        </Route>
         <Route path={`${path}/:topicId`}>
          <Topic />
        </Route>
      </Switch>
    </div>
  );
}

export default Topics;
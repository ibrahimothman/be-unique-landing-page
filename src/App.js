import React, {lazy, Suspense} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import * as ROUTES from './Constants/Routes'
const Home = lazy(() => import('./pages/Home'))


export default function App() {
  return (
    <Router>
      <Suspense fallback={<p>Loading...</p>}>
        <Switch>
          <Route component={Home} path={ROUTES.HOME} exact/>
        </Switch>
      </Suspense>
    </Router>
  );
}

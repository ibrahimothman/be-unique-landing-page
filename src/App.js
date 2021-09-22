import React, {lazy, Suspense} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import * as ROUTES from './Constants/Routes'
import MainLayout from "./components/layout/MainLayout";


const Home = lazy(() => import('./pages/Home'))


export default function App() {
  return (
    <Router>
      <Suspense fallback={<p>Loading...</p>}>
        <Switch>
        <MainLayout>
          <Route component={Home} path={ROUTES.HOME} exact/>
        </MainLayout>
        </Switch>
      </Suspense>
    </Router>
  );
}

import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// components
import Loading from './components/Loading/Loading';
// views
import Home from './views/Home/Home';

const Main = () => (
  <Router>
    <Suspense fallback={<Loading />}>
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </Suspense>
  </Router>
);

export default Main;

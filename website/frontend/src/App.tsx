import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Providers from './context';

import Home from 'views/Home'

const AppRoutes = () => {

  return (
    <Switch>
      <Route path="/" exact component={Home}/>
    </Switch>
  );
}


const App = () => {

  return (
    <Providers>
      <Router>
        <AppRoutes />
      </Router>
    </Providers>
  );
}

export default App;
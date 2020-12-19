import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Providers from './context';

import {Routes} from 'routes';
import Home from 'views/Home'
import Keyboard1 from 'views/Tinkering/Keyboard1';

const AppRoutes = () => {

  return (
    <Switch>
      <Route path={Routes.Home} exact component={Home}/>
      <Route path={Routes.Tinkering.Keyboard1} exact component={Keyboard1}/>
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
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Providers from './context';

import {Routes} from 'routes';
import Home from 'views/Home'
import Keyboard1 from 'views/Tinkering/Keyboard1';
import Keyboard2 from 'views/Tinkering/Keyboard2';
import TinkeringHome from 'views/Tinkering/TinkeringHome';

const AppRoutes = () => {

  return (
    <Switch>
      <Route path={Routes.Home} exact component={Home}/>
      <Route path={Routes.Tinkering.Home} exact component={TinkeringHome} />
      <Route path={Routes.Tinkering.Keyboard1} exact component={Keyboard1}/>
      <Route path={Routes.Tinkering.Keyboard2} exact component={Keyboard2}/>
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
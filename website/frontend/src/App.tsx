import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Providers from './context';

import {GoTo} from 'routes';
import Home from 'views/Home';
import TinkeringHome from 'views/Tinkering/TinkeringHome';
import Keyboard1 from 'views/Tinkering/Keyboard1';
import Keyboard2 from 'views/Tinkering/Keyboard2';
import ArtHome from 'views/Art/ArtHome';
import AlgorithmsHome from 'views/Art/Algorithms/AlgorithmsHome';

export interface RouteInfo {
  path: string;
  component: (props:any) => JSX.Element;
}

const routes: RouteInfo[] = [
  { path: GoTo.Home, component: Home },
  
  // Tinkering
  {path: GoTo.Tinkering.Home, component: TinkeringHome},
  {path: GoTo.Tinkering.Keyboard1, component: Keyboard1},
  {path: GoTo.Tinkering.Keyboard2, component: Keyboard2},

  //Art
  {path: GoTo.Art.Home, component: ArtHome},
  {path: GoTo.Art.AlgorithmsHome, component: AlgorithmsHome}
]

const App = () => {
  return (
    <Providers>
      <Router>
        <Switch>
          {routes.map((route) => <Route path={route.path} exact component={route.component} key={route.path}/>)}
        </Switch>
      </Router>
    </Providers>
  );
}

export default App;
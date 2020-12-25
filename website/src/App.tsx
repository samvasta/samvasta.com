import NavigationBar from 'components/NavigationBar';
import ScrollToTop from 'components/ScrollToTop';
import NavigationProvider from 'context/navigation';
import React, { lazy, Suspense } from 'react';
import { hot } from 'react-hot-loader/root';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { GoTo } from 'routes';

import Providers from './context';

const Home = lazy(() => import('views/Home'));

// Tinkering Pages
const TinkeringHome = lazy(() => import('views/Tinkering/TinkeringHome'));
const Keyboard1 = lazy(() => import('views/Tinkering/Keyboard1'));
const Keyboard2 = lazy(() => import('views/Tinkering/Keyboard2'));

// Art Pages
const ArtHome = lazy(() => import('views/Art/ArtHome'));
const AlgorithmsHome = lazy(() => import('views/Art/Algorithms/AlgorithmsHome'));

// Personal Pages
const Resume = lazy(() => import('views/Personal/Resume'));

const RoutesWithNavBar = () => (
  <NavigationProvider>
    <Switch>
      {/* Tinkering */}
      <Route path={GoTo.Tinkering.Home} exact component={TinkeringHome} />
      <Route path={GoTo.Tinkering.Keyboard1} exact component={Keyboard1} />
      <Route path={GoTo.Tinkering.Keyboard2} exact component={Keyboard2} />

      {/* Art */}
      <Route path={GoTo.Art.Home} exact component={ArtHome} />
      <Route path={GoTo.Art.AlgorithmsHome} exact component={AlgorithmsHome} />

      {/* Personal */}
      <Route path={GoTo.Personal.Resume} exact component={Resume} />
    </Switch>
  </NavigationProvider>
);

const App = () => {
  return (
    <Providers>
      <Router>
        <ScrollToTop>
          <Suspense fallback={<h1>Loading...</h1>}>
            <Switch>
              <Route path={GoTo.Home} exact component={Home} />

              <Route component={RoutesWithNavBar} />
            </Switch>
          </Suspense>
        </ScrollToTop>
      </Router>
    </Providers>
  );
};

export default hot(App);

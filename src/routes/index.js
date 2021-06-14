import { Suspense, lazy } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const Home = lazy(() => import('../pages/Home/index'));
const Information = lazy(() => import('../pages/Information/index'));


export const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Suspense fallback={<div />}>
        <Route path="/" exact component={Home} />
        <Route path="/:id" exact component={Information} />
      </Suspense>
    </Switch>
  </BrowserRouter>
);

export default Routes;

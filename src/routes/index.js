import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../pages/Home/index'
import Information from '../pages/Information/index'

export const Routes = () => (
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Switch>
      <Route path="/home">
        <Home />
      </Route>
      <Route path="/:id">
        <Information />
      </Route>
      <Route path="/*">
        <Home />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;

import { Route, Switch, Redirect } from 'react-router-dom';

import Home from 'pages/Home';
import Tables from 'pages/Tables';
import Billing from 'pages/Billing';
import Profile from 'pages/Profile';

const Route__View = () => {
  return (
    <Switch>
      <Route exact path='/dashboard' component={Home} />
      <Route exact path='/tables' component={Tables} />
      <Route exact path='/billing' component={Billing} />
      <Route exact path='/profile' component={Profile} />
      <Redirect from='*' to='/dashboard' />
    </Switch>
  );
};
export default Route__View;

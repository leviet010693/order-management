import { Switch, Route, Redirect } from 'react-router-dom';

import Home from 'pages/Home';
import Tables from 'pages/Tables';
import Billing from 'pages/Billing';
import Profile from 'pages/Profile';
import SignUp from 'pages/SignUp';
import SignIn from 'pages/SignIn';

import Layout__Page from 'components/layout/Layout__Page';

const Route__Page = () => {
  return (
    <Switch>
      <Route path='/sign-up' exact component={SignUp} />
      <Route path='/sign-in' exact component={SignIn} />

      <Layout__Page>
        <Route exact path='/dashboard' component={Home} />
        <Route exact path='/tables' component={Tables} />
        <Route exact path='/billing' component={Billing} />
        <Route exact path='/profile' component={Profile} />
        <Redirect from='*' to='/dashboard' />
      </Layout__Page>
    </Switch>
  );
};

export default Route__Page;

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Admin from '../pages/Admin';
import Login from '../pages/Login';
import Cadastro from '../pages/Cadastro';

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/admin" component={Admin} />
      <Route path="/cadastro" component={Cadastro} />
    </Switch>
  );
}

export default Routes;

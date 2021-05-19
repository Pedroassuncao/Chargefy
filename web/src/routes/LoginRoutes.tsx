import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Restrict from '../views/Login/RestrictLogin';
import ForgotLogin from '../views/Login/ForgotLogin';

import Cadastrate from '../views/Login/Cadastrate';
import CadastrateSucess from '../views/Login/CadastrateSuccess';

export default function LoginRoutes() {
  return (
    <Switch>
      <Route exact path="/login" component={Restrict}></Route>
      <Route path="/login/forgot" component={ForgotLogin}></Route>

      <Route exact path="/cadastrate" component={Cadastrate}></Route>
      <Route
        exact
        path="/cadastrateSuccess"
        component={CadastrateSucess}
      ></Route>
    </Switch>
  );
}

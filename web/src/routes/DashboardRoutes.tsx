import React from 'react';
import { Switch } from 'react-router-dom';

import PrivateRoutes from '../components/PrivateRoutes';

import RegistredPces from '../views/Dashboard/RegistredPces';
import PendingPces from '../views/Dashboard/PendingPces';
import UpdateSucess from '../views/Dashboard/UpdateSuccess';
import RemoveSuccess from '../views/Dashboard/RemoveSucess';

export default function LoginRoutes() {
  return (
    <Switch>
      <PrivateRoutes
        exact
        path="/dashboard/registred"
        component={RegistredPces}
      ></PrivateRoutes>

      <PrivateRoutes
        exact
        path="/dashboard/pending"
        component={PendingPces}
      ></PrivateRoutes>

      <PrivateRoutes
        exact
        path="/updateSuccess"
        component={UpdateSucess}
      ></PrivateRoutes>

      <PrivateRoutes
        exact
        path="/removeSuccess"
        component={RemoveSuccess}
      ></PrivateRoutes>
    </Switch>
  );
}

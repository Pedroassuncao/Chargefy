import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Landing from '../views/Landing';
import PcesMap from '../views/PcesMap';
import CreatePce from '../views/CreatePce';
import Pce from '../views/Pce';
import Success from '../views/Success';

export default function PceRoutes() {
  return (
    <Switch>
      <Route path="/" exact component={Landing}></Route>
      <Route path="/app" component={PcesMap}></Route>
      <Route path="/Pces/create" component={CreatePce}></Route>
      <Route path="/success" component={Success}></Route>
      <Route path="/Pces/:id" component={Pce}></Route>
    </Switch>
  );
}

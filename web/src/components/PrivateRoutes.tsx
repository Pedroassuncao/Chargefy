import React from 'react';

import { Redirect, Route } from 'react-router';

export default function PrivateRoute(props: any) {
  const isLogged = !!localStorage.getItem('app-token');
  return isLogged ? <Route {...props} /> : <Redirect to="/login" />;
}

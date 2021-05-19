import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import PceRoutes from './routes/PceRoutes';
import LoginRoutes from './routes/LoginRoutes';
import DashboardRoutes from './routes/DashboardRoutes';

function Routes() {
  return (
    <BrowserRouter>
      <PceRoutes />

      <LoginRoutes />

      <DashboardRoutes />
    </BrowserRouter>
  );
}

export default Routes;

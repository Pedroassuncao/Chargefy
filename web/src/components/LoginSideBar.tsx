import React from 'react';

import '../styles/components/login_sidebar.css';
import HappyLogo from '../images/happy-logo-big.png';

export default function LoginSideBar() {
  return (
    <aside className="login-side-bar">
      <img src={HappyLogo} alt="Chargefy Logo" />
      <div className="locations">
        <strong>Portugal</strong>
        <span>Nunca fique sem bateria.</span>
      </div>
    </aside>
  );
}

import React from 'react';
import { FiArrowRight, FiLock } from 'react-icons/fi';
import { Link } from 'react-router-dom';

// !CSS
import '../styles/pages/landing.css';

// !IMAGES
import logoImg from '../images/Logo.png';

function Landing() {
  return (
    <div id="page-landing">
      <div className="content-wrapper">
        <img src={logoImg} width = "180" height="120" alt="Logo Chargefy" />

        <main>
          <h1>Nunca fique sem carga</h1>
          <p>Encontre um carregador de forma simples e prática</p>
        </main>

        <div className="location">
          <strong>Portugal</strong>
        </div>

        <Link to="/dashboard/registred" className="enter-restrict-access">
          <FiLock size={26} />
          Login
        </Link>

        <Link to="/app" className="enter-app">
          <FiArrowRight size={26} color="rgba(0,0,0, 0.8)" />
        </Link>
      </div>
    </div>
  );
}

export default Landing;

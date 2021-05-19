import React, { FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';

import '../../styles/pages/restrict.css';

import '../../styles/partials/inputs.css';

import LoginSideBar from '../../components/LoginSideBar';

import '../../styles/components/login_formarea.css';
import api from '../../services/api';
import { FiArrowLeft } from 'react-icons/fi';

import { useHistory } from 'react-router-dom';

export default function Restrict() {
  const history = useHistory();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleCadastrate(event: FormEvent) {
    event.preventDefault();

    await api.post('/users', {
      email,
      password,
    });

    history.push('/cadastrateSuccess');
  }

  return (
    <div id="page-restrict">
      <div className="content-wrapper">
        <LoginSideBar />

        <div className="login-card">
          <div className="login-area">
            <form onSubmit={handleCadastrate} className="login-form">
              <fieldset>
                <legend>Dados</legend>
                <div className="input-area">
                  <div className="input-block">
                    <label htmlFor="email">E-mail</label>
                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="input-block">
                    <label htmlFor="password">Password</label>
                    <input
                      id="password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </div>
              </fieldset>
              <button type="submit" className="login-button">
                Confirmar
              </button>
            </form>
          </div>
          <Link to="/login" className="button-back">
            <FiArrowLeft size={35} color="#15D691" />
          </Link>
        </div>
      </div>
    </div>
  );
}

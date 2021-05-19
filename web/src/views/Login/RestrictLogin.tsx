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

  async function handleLogin(event: FormEvent) {
    event.preventDefault();

    await api
      .post('/auth', {
        email,
        password,
      })
      .then((resp) => {
        const { data } = resp;
        if (data) {
          localStorage.setItem('app-token', data.token);
          history.push('/dashboard/registred');
        }
        console.log('Email ou senha inválido(s)');
      });
  }

  return (
    <div id="page-restrict">
      <div className="content-wrapper">
        <LoginSideBar />

        <div className="login-card">
          <div className="login-area">
            <form onSubmit={handleLogin} className="login-form">
              <fieldset>
                <legend>Entrar</legend>
                <Link to={'/cadastrate'} className="cadastrate">
                  Criar novo utilizador
                </Link>
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
                  <div className="help-area">
                    <div className="checkbox-block">
                      <input type="checkbox" name="remember" id="remember" />
                      <label htmlFor="remember">Lembrar-me</label>
                    </div>
                    <Link to="/login/forgot" className="forgot-password">
                      Esqueci minha Password
                    </Link>
                  </div>
                </div>
              </fieldset>
              <button type="submit" className="login-button">
                Entrar
              </button>
            </form>
          </div>
          <Link to="/" className="button-back">
            <FiArrowLeft size={35} color="#29B6D1" />
          </Link>
        </div>
      </div>
    </div>
  );
}

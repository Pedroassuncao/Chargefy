import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import '../styles/components/login_formarea.css';

export default function FormLoginArea(props: any) {
  return (
    <div className="login-card">
      <div className="login-area">
        <form onSubmit={props.onSubmite} className="login-form">
          <fieldset>
            <legend>{props.title}</legend>
            {props.children}
          </fieldset>
          <button type="submit" className="login-button">
            Entrar
          </button>
        </form>
      </div>
      <Link to={props.url} className="button-back">
        <FiArrowLeft size={35} color="#15E098" />
      </Link>
    </div>
  );
}

import React from 'react';

import '../../styles/pages/restrict.css';

import '../../styles/partials/inputs.css';

import LoginSideBar from '../../components/LoginSideBar';

import FormArea from '../../components/FormArea';

export default function ForgotLogin() {
  return (
    <div id="page-restrict">
      <div className="content-wrapper">
        <LoginSideBar />

        <FormArea title="Esqueci a minha Password" url="/login">
          <div className="input-area">
            <p>
              A redefinição de password será enviada para o e-mail registado.
            </p>
            <div className="input-block">
              <label htmlFor="email">E-mail</label>
              <input type="email" id="email" />
            </div>
          </div>
        </FormArea>
      </div>
    </div>
  );
}

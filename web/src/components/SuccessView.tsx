import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/pages/success.css';

interface SuccessText {
  feedback: string;
  linkInfo: string;
  link: string;
  image: string;
  color: string;
  title: string;
  btnClass: string;
}

export default function SuccessArea(props: SuccessText) {
  return (
    <div id="page-success" style={{ backgroundColor: props.color }}>
      <div className="content-wrapper">
        <main>
          <h1>{props.title}</h1>
          <p>{props.feedback}</p>

          <Link to={props.link} className={props.btnClass}>
            {props.linkInfo}
          </Link>
        </main>

        <div className="image">
          <img src={props.image} alt="Imagem Sucesso" />
        </div>
      </div>
    </div>
  );
}

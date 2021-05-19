import React from 'react';

import SuccessArea from '../../components/SuccessView';
import SuccessImage from '../../images/success-image.svg';



export default function UpdateSuccess() {
  return (
    <SuccessArea
      feedback={`Os dados foram aprovados e agora aparecerá no mapa :)`}
      link="/dashboard/registred"
      linkInfo="Voltar aos Postos Registados"
      color="#37C77F"
      image={SuccessImage}
      btnClass='goto-app'
      title='Sucesso!'
    />
  );
}

import React from 'react';

import SuccessArea from '../../components/SuccessView';
import RemoveImage from '../../images/remove-image.svg';

export default function UpdateSuccess() {
  return (
    <SuccessArea
      feedback={`O PCE foi removido :(`}
      link="/dashboard/registred"
      linkInfo="Voltar aos PCE Registados"
      color="#f43379"
      image={RemoveImage}
      btnClass='goto-app-red'
      title='Excluir!'
    />
  );
}

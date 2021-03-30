import React from 'react';
import './style.css';

const NextStepButton = ({ title, onClickButton }) => {
  return (
    <button onClick={onClickButton} className="vec-inspection-nextstep_button">
      {title}
    </button>
  );
};

export default NextStepButton;

import React from 'react';

const Validation =(props)=>{
  let validationMessage='Text too long';
  if (props.userLenght<=5) {
    validationMessage='Text too short';
  }
  return (
      // {
      //   props.userLenght<=5 ?
      //     <p>Text too short.</p>:
      //     <p>Text length too long.</p>
      // }
      <div>
      <p>{validationMessage}</p>
      </div>

  )
};

export default Validation;

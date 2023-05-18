import React from 'react'
import PropsTypes from 'prop-types';
import {FiChevronLeft, FiChevronRight, FiCircle} from 'react-icons/fi';
export const Button = ({text, onClick}) => {
  return (
    <button onClick={onClick} >
     
     {(() => {
        switch (text) {
          case "Anterior":   return <FiChevronLeft />;
          case "Reiniciar": return <FiCircle/>;
          case "Siguiente":  return <FiChevronRight/>;
          default:      return "";
        }
      })()}
      
    </button>
  )
}

Button.PropsTypes = {
    text: PropsTypes.string
}

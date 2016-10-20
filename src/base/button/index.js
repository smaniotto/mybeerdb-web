import React from 'react'

import './styles.css'


const Button = (props) => {
  const {
    children,
    variety,
    clickHandler,
  } = props


  let varietyClass
  switch(variety) {
    case 'primary':
      varietyClass = 'button--primary'
      break

    default:
      varietyClass = ''
      break
  }

  return (
    <button
      className={`button ${varietyClass}`}
      type="button"
      onClick={clickHandler}>
      {children}
    </button>
  )
}


export default Button

import React from 'react'

import './styles.css'


const TextInput = (props) =>  {
  const {
    text,
    placeholder,
    changeHandler,
    variety,
  } = props

  let varietyClass
  switch(variety) {
    case 'error':
      varietyClass = 'input--error'
      break

    default:
      varietyClass = ''
      break
  }

  return (
    <input
      className={`input ${varietyClass}`}
      type="text"
      value={text}
      placeholder={placeholder}
      onChange={changeHandler}
    />
  )
}


export default TextInput

import React from 'react'

import './styles.css'


const TextInput = (props) =>  {
  const {
    text,
    placeholder,
    changeHandler,
    variety,
  } = props

  let modifier = ''
  if (variety === 'error')
    modifier = 'input--error'

  return (
    <input
      className={`input ${modifier}`}
      type="text"
      value={text}
      placeholder={placeholder}
      onChange={changeHandler}
    />
  )
}


export default TextInput

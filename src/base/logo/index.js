import React from 'react'

import './styles.css'


const Logo = (props) => {
  const variety = props.variety
  let varietyClass

  switch(variety) {
    case 'default-light':
      varietyClass = 'logo--light'
      break

    default:
      varietyClass = ''
      break
  }

  return <h1 className={`logo ${varietyClass}`}>My Beer DB</h1>
}


export default Logo

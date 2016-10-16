import React from 'react'

import './styles.css'


const Logo = (props) => {
  const variation = props.variation
  let variationClass

  switch(variation) {
    case 'default-light':
      variationClass = 'logo--light'
      break

    default:
      variationClass = ''
      break
  }

  return <h1 className={`logo ${variationClass}`}>My Beer DB</h1>
}


export default Logo

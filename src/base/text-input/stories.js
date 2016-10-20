import React from 'react'
import { storiesOf, action } from '@kadira/storybook'

import TextInput from './'

let text = ''

storiesOf('TextInput', module)
  .add('default', () => {
    return (
      <TextInput
        changeHandler={(event) => action('change')(event.target.value)}
        text={text}
      />
    )
  })
  .add('with placeholder', () => {
    return (
      <TextInput
        text=""
        placeholder="Type anything"
      />
    )
  })
  .add('with populated value', () => {
    return (
      <TextInput
        text="Just typed"
        placeholder="Type anything"
      />
    )
  })
  .add('displaying error', () => {
    return (
      <TextInput
        text="Just typed"
        placeholder="Type anything"
        variety="error"
      />
   )
  })

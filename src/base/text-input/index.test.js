import React from 'react'
import { shallow } from 'enzyme'

import TextInput from './'


it('dispatch update function when input is changed', () => {
  let textInputValue
  const textInput = shallow(
    <TextInput
      changeHandler={(event) => {textInputValue = event.target.value}}
      text="Initial value"
    />
  )

  // Initially text input field should be empty
  expect(textInput.text()).toEqual('')


  const event = {
    target: {
      value: 'New value',
    }
  }
  textInput.simulate('change', event)

  // If a change event is dispatched with new text, it should display the text value
  expect(textInputValue).toEqual(event.target.value)
})

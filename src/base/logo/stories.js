import React from 'react'
import { storiesOf } from '@kadira/storybook'

import decorators from '../../../.storybook/decorators'
import Logo from './'


storiesOf('Logo', module)
  .add('with light background', () => (
    <Logo />
  ))
  .addDecorator(decorators.darkBackground)
  .add('with dark brackground', () => (
    <Logo variation="default-light" />
  ))

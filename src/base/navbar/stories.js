import React from 'react'
import { storiesOf } from '@kadira/storybook'

import decorators from '../../../.storybook/decorators'
import Navbar from './'


storiesOf('Navbar', module)
  .add('default', () => (
    <Navbar />
  ))
  .addDecorator(decorators.tallPage)
  .add('in a tall page', () => (
    <Navbar />
  ))

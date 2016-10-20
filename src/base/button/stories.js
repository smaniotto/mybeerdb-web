import React from 'react'
import { storiesOf, action } from '@kadira/storybook'

import decorators from '../../../.storybook/decorators'
import Button from './'


storiesOf('Button', module)
  .addDecorator(decorators.margins)
  .add('primary', () => (
    <Button
      clickHandler={action('click')}
      variety="primary">
      Click Me!
    </Button>
  ))
  .addDecorator(decorators.darkBackground)
  .add('default', () => (
    <Button clickHandler={action('click')}>Click Me!</Button>
  ))

import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import { withKnobs, text, select } from '@kadira/storybook-addon-knobs'

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
  .addDecorator(withKnobs)
  .add('dynamic label', () => {
    const label = text('Label', 'Click Me!')
    const variety = select('Variety', {
      default: '',
      primary: 'primary',
    })

    return (
      <Button
        clickHandler={action('click')}
        variety={variety}>
        {label}
      </Button>
    )
  })

import React from 'react'
import { storiesOf } from '@kadira/storybook'

import SearchPage from './'


storiesOf('SearchPage', module)
  .add('search page', () => (
    <SearchPage />
  ))

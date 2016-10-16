import React from 'react'

import '../../theme/colors.css'


export default (story) => (
  <div style={{backgroundColor: 'var(--color-black)'}}>
    {story()}
  </div>
)

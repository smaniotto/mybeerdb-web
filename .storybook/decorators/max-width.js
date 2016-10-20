import React from 'react'


export default (story) => (
  <div style={{maxWidth: '400px'}}>
    {story()}
  </div>
)

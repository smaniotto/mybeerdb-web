import React from 'react'


export default (story) => (
  <div style={{minHeight: '2000px'}}>
    {story()}
  </div>
)

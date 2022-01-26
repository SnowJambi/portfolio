import React from 'react'

const ArrowsAnchor = (href) => {
  return (
    <a href={href}>
      <div className='scroll-arrows'>
        <div className='scroll-down' />
        <div className='scroll-down2' />
      </div>
    </a>
  )
}

export default ArrowsAnchor
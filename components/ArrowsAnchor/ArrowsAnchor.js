import React from 'react'
import style from '../../styles/Home.module.scss'

const ArrowsAnchor = ({href}) => {
  return (
    <a href={href}>
      <div style={{margin: 'auto'}}>
        <div className={style.scrollDown} />
        <div className={style.scrollDown} />
      </div>
    </a>
  )
}

export default ArrowsAnchor

import React from 'react'
import style from '../../styles/Home.module.scss'
import ArrowsAnchor from '../ArrowsAnchor/ArrowsAnchor'
import Image from 'next/image'

const Intro = () => {
  return (
    <div className={style.intro}>
      <header>
        <div style={{ margin: 'auto' }}>
          <Image src='/images/logo-lj.png' alt='LJ logo' height={100} width={100} priority={true}/>
          <h1>
            LACHLAN <b>JADEZAK</b>
          </h1>
        </div>
      </header>
      <ArrowsAnchor href='#about' />
    </div>
  )
}

export default Intro

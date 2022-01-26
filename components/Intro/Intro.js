import React from 'react'
import style from '../../styles/Home.module.scss'
import ArrowsAnchor from '../ArrowsAnchor/ArrowsAnchor'
import Image from 'next/image'
import logoLJ from '../../public/images/logo-lj.png'

const Intro = () => {
  return (
    <div className={style.vpFixed}>
      <div className={style.grain} />
      <div className={style.center}>
        <div>
          <Image src='/images/logo-lj.png' alt='LJ logo' id={style.logoImage} width={100} height={100} />
          <header id='name-header'>
            LACHLAN <strong>JADEZAK</strong>
          </header>
        </div>
        <ArrowsAnchor href='#about' />
      </div>
    </div>
  )
}

export default Intro
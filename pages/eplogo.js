import React from 'react'
import Image from 'next/image'
import eplogo from '/public/images/eplogo.png'

const Eplogo = () => {
  return (
    <div>
      <img src='/images/eplogo.png' />
      <Image src={eplogo} alt='Eminence Projectiles logo'  quality={100}/>
    </div>
  )
}

export default Eplogo
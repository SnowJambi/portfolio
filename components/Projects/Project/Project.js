import React from 'react'
import Link from 'next/link'
import Tilt from 'react-parallax-tilt'
import style from '../../../styles/Home.module.scss'
import Image from 'next/image'

const Project = ({ image, title, body, url }) => {
  return (
    <Link href={url}>
      <a>
        <Tilt className={style.project} tiltReverse={true} perspective={2000} glareEnable={true} glareMaxOpacity={0.45} scale={1.15} gyroscope={true}>
          <Image className={style.projectImg} alt={image.alt} src={image.path} width={300} height={190}/>
          <h2>{title}</h2>
          <p>{body}</p>
        </Tilt>
      </a>
    </Link>
  )
}

export default Project

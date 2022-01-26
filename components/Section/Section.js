import React from 'react'
import style from '../../styles/Home.module.scss'
import AngledDiv from '../AngledDiv/AngledDiv'

const Section = ({ color, children, angled }) => {
  const getColor = () => color[0].toUpperCase() + color.substring(1)

  return (
    <>
      <div className={style['gradient' + getColor()]}>{children}</div>
      {angled && <AngledDiv color={color} variant='bottom' />}
    </>
  )
}

Section.defaultProps = {
  color: 'green',
  angled: true
}

export default Section

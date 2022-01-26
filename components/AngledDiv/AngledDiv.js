import React from 'react'
import style from '../../styles/Home.module.scss'

const AngledDiv = ({ color, variant }) => {
  const styles = () => {
    if (variant === 'top') {
      return {
        background: style['grad' + color],
        clipPath: 'polygon(0 0%, 100% 95%, 100% 100%, 0 100%)',
        top: '1px',
        marginTop: '-100px'
      }
    } else {
      return {
        background: style['grad' + color],
        clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 5%)',
        top: '-1px',
        marginBottom: '-100px'
      }
    }
  }

  return <div className={style.angled} style={styles()} />
}

AngledDiv.defaultProps = {
  variant: 'bottom',
  color: 'dark'
}

export default AngledDiv

import React from 'react';
import style from '../../styles/Home.module.scss'

const FlipButton = ({url, height, width, text, unit}) => {
  return (
    <a href={url} className={style.buttonWrapper}>
      <div className={style.button} style={{height: `${height}${unit}`, width: `${width}${unit}`}}>
        <div className={style.default} style={{height: `${height}${unit}`, transform: `translateZ(${height/2}${unit})`}}>{text}</div>
        <div className={style.hover} style={{height:`${height}${unit}`, transform: `rotateX(90deg) translateZ(${height*1.5}${unit})`}}>{text}</div>
      </div>
    </a>
  );
};

FlipButton.defaultProps = {
  unit: "px",
  width: 175,
  height: 45
}

export default FlipButton;
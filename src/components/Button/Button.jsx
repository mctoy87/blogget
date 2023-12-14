import React from 'react';
import style from './Button.module.css';

export const Button = props => {
  return <button className={style.button}>{props.text}</button>
}
import React from 'react'
import style from './container.module.css';

export default function Container({darkMode, children}) {
  return (
    <div className={darkMode ? style.container : style.lightContainer}>{children}</div>
  )
}

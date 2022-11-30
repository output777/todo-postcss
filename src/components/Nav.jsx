import React from 'react'
import style from './nav.module.css';

export default function Nav({children}) {
  return (
    <div className={style.nav}>
      {children}
    </div>
  )
}

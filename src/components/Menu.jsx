import React from 'react'
import style from './menu.module.css';
import {BsFillSunFill} from 'react-icons/bs';
import {BsFillMoonFill} from 'react-icons/bs';

export default function Menu({onFilter, darkMode, onDarkMode }) {
  return (
    <>
      <div className={style.icon} onClick={onDarkMode}>
        {darkMode ? <BsFillMoonFill /> :<BsFillSunFill /> }
      </div>
      <div className={style.menu}>
        <span onClick={() => onFilter(0)}>All</span>
        <span onClick={() => onFilter(1)}>Active</span>
        <span onClick={() => onFilter(2)}>Completed</span>
      </div>
    </>
  )
}

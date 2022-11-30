import React from 'react'
import style from './lists.module.css';
import List from './List';

export default function Lists({list, darkMode, onRemove, onCheckd, filter}) {

  if(filter === 0) {
    return (
      <ul className={darkMode ? style.lists : style.lightLists}>
        {list?.map((item) => (
          <List item={item} key={item.id} style={style} onRemove={onRemove} onCheckd={onCheckd} darkMode={darkMode}/>
        ))}
      </ul>
    )
  }

  if(filter === 1) {
    return (
      <ul className={darkMode ? style.lists : style.lightLists}>
        {list?.filter((item) => item.done === false).map((item) => (
          <List item={item} key={item.id} style={style} onRemove={onRemove} onCheckd={onCheckd} darkMode={darkMode}/>
        ))}
      </ul>
    )
  }

  if(filter === 2) {
    return (
      <ul className={darkMode ? style.lists : style.lightLists}>
        {list?.filter((item) => item.done === true).map((item) => (
          <List item={item} key={item.id} style={style} onRemove={onRemove} onCheckd={onCheckd} darkMode={darkMode}/>
        ))}
      </ul>
    )
  }
}

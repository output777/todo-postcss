import React from 'react'
import {BsFillTrashFill} from 'react-icons/bs'

export default function List({item, style, onRemove, onCheckd}) {

  const onChange = (id) => {
    onCheckd(id);
  }

  return (
    <li className={style.list}>
      <div>
        <input type="checkbox" id={item.id} checked={item.done} onChange={() => onChange(item.id)}/>
        <label htmlFor={item.id} className={item.done ? style.checked: ''}>{item.content}</label>
      </div>
      <div>
        <BsFillTrashFill onClick={() => onRemove(item.id)}/>
      </div>
    </li>
  )
}

import React from 'react'
import style from './input.module.css';

export default function Input({text, inputRef,onChangeText, onClickAddText}) {

  const onSubmit = (e) => {
    e.preventDefault();
  }

  return (
      <form className={style.form} onSubmit={onSubmit}>
        <input className={style.input} type="text" value={text.content} ref={inputRef} onChange={onChangeText} />
        <button className={style.button} onClick={onClickAddText}>Add</button>
      </form>
  )
}

import React, {useState} from 'react';
import {Item} from '../../App';
import s from './Select.module.css'

type SelectPropsType = {
    name: string,
    itemValue: number,
    items: Array<Item>,
    changeItem: (itemID: number) => void
}

export function Select(props: SelectPropsType) {

    const [mode, setMode] = useState(false)

    function openMode() {
        setMode(true)
    }
    function changeItem(itemID: number) {
        props.changeItem(itemID)
        setMode(!mode)
    }

    return (
        <div className={s.wrapper}>
            <span className={s.name}><b>{props.name}</b></span>
            <div className={s.first} onClick={openMode}>{!mode && props.items.map(i => i.id === props.itemValue ? i.title : '')}</div>
            <div className={s.ul}>{mode && props.items.map(i => <li key={i.id} className={s.li} onClick={() => changeItem(i.id)}>{i.title}</li>)}</div>
        </div>
    )
}

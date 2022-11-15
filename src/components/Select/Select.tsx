import React, {useState, KeyboardEvent, useEffect} from 'react';
import {Item} from '../../App';
import s from './Select.module.css'

type SelectPropsType = {
    itemValue: number,
    items: Array<Item>,
    changeItem: (itemID: number) => void
}

export function Select(props: SelectPropsType) {

    const [mode, setMode] = useState(false)
    const [hoverItem, setHoverItem] = useState(props.itemValue)

    useEffect(() => {
        setHoverItem(props.itemValue)
    }, [props.itemValue])

    function onChangeMode() {
        setMode(!mode)
    }
    function onChangeItem(itemID: number) {
        props.changeItem(itemID)
        setMode(!mode)
    }
    function onChooseItemMouse(itemID: number) {
        setHoverItem(itemID)
    }
    function onChooseItemArrow(e: KeyboardEvent<HTMLDivElement>) {
        if(e.code === 'ArrowUp' && hoverItem > 1) {
            props.changeItem(hoverItem-1)
        }
        if(e.code === 'ArrowDown' && hoverItem < props.items.length) {
            props.changeItem(hoverItem+1)
        }
        if(e.code === 'Enter') {
            props.changeItem(hoverItem)
            setMode(!mode)
        }
        if(e.code === 'Escape') {
            setMode(!mode)
        }
    }

    return (
        <div className={s.wrapper} tabIndex={3} onKeyDown={onChooseItemArrow}>
            <div className={mode ? s.firstGrey : s.first} onClick={onChangeMode}>{props.items.map(i => i.id === props.itemValue ? i.title : '')}</div>
            <div className={s.ul} onClick={onChangeMode}>
                {mode && props.items.map(i =>
                <div
                    key={i.id}
                    onMouseEnter={() => onChooseItemMouse(i.id)}
                    className={hoverItem === i.id ? s.liHover : s.li}
                    onClick={() => onChangeItem(i.id)}>{i.title}
                </div>)}
            </div>
        </div>
    )
}

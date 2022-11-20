import React, {useState, KeyboardEvent} from 'react';
import s from './Select.module.css'
import {City} from '../../App'

type SelectPropsType = {
    idCity: number,
    setIdCity: (itemID: number) => void
    cities: Array<City>
    selectNumber: number
}

function Select(props: SelectPropsType) {
    console.log('Select №' + props.selectNumber)

    const [mode, setMode] = useState(false)
    const [hoverItem, setHoverItem] = useState(props.idCity)

    function onChangeMode() {
        setMode(!mode)
    }
    function onChangeItem(itemID: number) {
        props.setIdCity(itemID)
        setMode(!mode)
    }
    function onChooseItemMouse(itemID: number) {
        setHoverItem(itemID)
    }
    function onChooseItemArrow(e: KeyboardEvent<HTMLDivElement>) {
        if(e.code === 'ArrowUp' && hoverItem && hoverItem > 1) {
            props.setIdCity(hoverItem-1)
        }
        if(e.code === 'ArrowDown' && hoverItem && hoverItem < props.cities.length) {
            props.setIdCity(hoverItem+1)
        }
        if(e.code === 'Enter' && hoverItem) {
            props.setIdCity(hoverItem)
            setMode(!mode)
        }
        if(e.code === 'Escape') {
            setMode(!mode)
        }
    }

    return (
        <div className={s.wrapper} tabIndex={3} onKeyDown={onChooseItemArrow}>
            {props.idCity === 0 && <div className={mode ? s.firstGrey : s.first} onClick={onChangeMode}>Choose city</div>}
            <div className={mode ? s.firstGrey : s.first} onClick={onChangeMode}>{props.cities.map(i => i.id === props.idCity ? i.city : '')}</div>
            <div className={s.ul} onClick={onChangeMode}>
                {mode && props.cities.map(i =>
                    <div
                        key={i.id}
                        onMouseEnter={() => onChooseItemMouse(i.id)}
                        className={hoverItem === i.id ? s.liHover : s.li}
                        onClick={() => onChangeItem(i.id)}>{i.city}
                    </div>
                )}
            </div>
        </div>
    )
}

export const MemoSelect = React.memo(Select)
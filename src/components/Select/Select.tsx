import React, {useState, KeyboardEvent, useEffect} from 'react';
import s from './Select.module.css'

type SelectPropsType = {
    itemValue: number,
    changeItemValue: (itemID: number) => void
}
type Item = {
    id: number,
    title: string
}
type Items = Array<Item>

function Select(props: SelectPropsType) {
    console.log('select')

    const items:Items = [
        {id: 1, title: 'HTML'},
        {id: 2, title: 'CSS'},
        {id: 3, title: 'JS'},
        {id: 4, title: 'React'},
    ]

    const [mode, setMode] = useState(false)
    const [hoverItem, setHoverItem] = useState(props.itemValue)

    useEffect(() => {
        setHoverItem(props.itemValue)
    }, [props.itemValue])

    function onChangeMode() {
        setMode(!mode)
    }
    function onChangeItem(itemID: number) {
        props.changeItemValue(itemID)
        setMode(!mode)
    }
    function onChooseItemMouse(itemID: number) {
        setHoverItem(itemID)
    }
    function onChooseItemArrow(e: KeyboardEvent<HTMLDivElement>) {
        if(e.code === 'ArrowUp' && hoverItem > 1) {
            props.changeItemValue(hoverItem-1)
        }
        if(e.code === 'ArrowDown' && hoverItem < items.length) {
            props.changeItemValue(hoverItem+1)
        }
        if(e.code === 'Enter') {
            props.changeItemValue(hoverItem)
            setMode(!mode)
        }
        if(e.code === 'Escape') {
            setMode(!mode)
        }
    }

    return (
        <div className={s.wrapper} tabIndex={3} onKeyDown={onChooseItemArrow}>
            <div className={mode ? s.firstGrey : s.first} onClick={onChangeMode}>{items.map(i => i.id === props.itemValue ? i.title : '')}</div>
            <div className={s.ul} onClick={onChangeMode}>
                {mode && items.map(i =>
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

export const MemoSelect = React.memo(Select)
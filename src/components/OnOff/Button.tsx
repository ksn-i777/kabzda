import React from 'react';

type ButtonPropsType = {
    name: string,
    className: string,
    callback: () => void
}

export function Button(props: ButtonPropsType) {
    return (
        <button className={props.className} onClick={props.callback}>{props.name}</button>
    )
}
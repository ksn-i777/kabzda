import React from 'react';
import s from './OnOff.module.css';
import {Button} from './Button';
import {StatusOnOff} from '../../App';

type OnOffPropsType = {
    status: StatusOnOff,
    changeStatus: (value: StatusOnOff) => void,
}

export function OnOff(props: OnOffPropsType) {

    return (
        <div className={s.block}>
            <div>Push on buttons</div>            
            <Button
                name={'On'}
                className={props.status === 'on' ? s.on : ''}
                callback={() => props.changeStatus('on')}
            />
            <Button
                name={'Off'}
                className={props.status === 'off' ? s.off : ''}
                callback={() => props.changeStatus('off')}
            />
            <Button
                name={'Reset'}
                className={''}
                callback={() => props.changeStatus('reset')}
            />
            <span
                className={props.status === 'on' ? `${s.span} ${s.spanOn} ` : props.status === 'off' ? `${s.span} ${s.spanOff}` : s.span}>
            </span>
        </div>
    )
}
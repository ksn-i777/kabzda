import React, { useState } from 'react';
import s from './OnOff.module.css';
import {Button} from './Button';

export function OnOff() {

    type StatusType = 'on' | 'off' | 'reset';

    let [status, setStatus] = useState<StatusType>('reset')

    function changeStatus (value: StatusType) {
        setStatus(value)
    }
   
    return (
        <div className={s.block}>
            <div>Push on buttons</div>            
            <Button
                name={'On'}
                className={status === 'on' ? s.on : ''}
                callback={() => changeStatus('on')}
            />
            <Button
                name={'Off'}
                className={status === 'off' ? s.off : ''}
                callback={() => changeStatus('off')}
            />
            <Button
                name={'Reset'}
                className={''}
                callback={() => changeStatus('reset')}
            />
            <span
                className={status === 'on' ? `${s.span} ${s.spanOn} ` : status === 'off' ? `${s.span} ${s.spanOff}` : s.span}>
            </span>
        </div>
    )
}
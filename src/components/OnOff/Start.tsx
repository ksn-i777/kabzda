import s from './OnOff.module.css';
import {OnOffStatusType} from '../../App';

type StartPropsType = {
    changeSwitch: (value: OnOffStatusType) => void,
}

export function Start(props: StartPropsType) {
    return (
        <div>
            <button className={s.button} onClick={() => {props.changeSwitch('on')}}>On</button>
            <button className={s.button} onClick={() => {props.changeSwitch('off')}}>Off</button>
            <span className={s.istart}></span>
        </div>
    )
}
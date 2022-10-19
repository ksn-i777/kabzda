import s from './OnOff.module.css';
import {OnOffStatusType} from '../../App';

type OnPropsType = {
    changeSwitch: (value: OnOffStatusType) => void,
}

export function On(props: OnPropsType) {
    return (
        <div>
            <button className={`${s.button} ${s.on}`}>On</button>
            <button className={s.button} onClick={() => {props.changeSwitch('off')}}>Off</button>
            <span className={s.ion}></span>
        </div>
    )
}
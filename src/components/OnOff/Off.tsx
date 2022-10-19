import s from './OnOff.module.css';
import {OnOffStatusType} from '../../App';

type OffPropsType = {
    changeSwitch: (value: OnOffStatusType) => void,
}

export function Off(props: OffPropsType) {
    return (
        <div>
            <button className={s.button} onClick={() => {props.changeSwitch('on')}}>On</button>
            <button className={`${s.button} ${s.off}`}>Off</button>
            <span className={s.ioff}></span>
        </div>
    )
}

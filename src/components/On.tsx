import s from './OnOff.module.css';

export function On() {
    return (
        <div className={s.block}>
            <button className={s.on}>On</button>
            <button>Off</button>
            <span className={s.ion}></span>
        </div>
    )
}
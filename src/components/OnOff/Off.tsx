import s from './OnOff.module.css';

export function Off() {
    return (
        <div className={s.block}>
            <button>On</button>
            <button className={s.off}>Off</button>
            <span className={s.ioff}></span>
        </div>
    )
}

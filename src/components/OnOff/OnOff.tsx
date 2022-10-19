import s from './OnOff.module.css';
import {Start} from './Start';
import {On} from './On';
import {Off} from './Off';
import {OnOffStatusType} from '../../App';

type OnOffPropsType = {
    switch: OnOffStatusType,
    changeSwitch: (value: OnOffStatusType) => void,
}

export function OnOff(props: OnOffPropsType) {
    return (
        <div className={s.block}>
            <div>Push the buttons</div>
            {props.switch === 'start' && <Start changeSwitch={props.changeSwitch}/>}
            {props.switch === 'on' && <On changeSwitch={props.changeSwitch}/>}
            {props.switch === 'off' && <Off changeSwitch={props.changeSwitch}/>}
        </div>
    )
}
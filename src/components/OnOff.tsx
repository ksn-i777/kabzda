import s from './OnOff.module.css'
import {On} from './On';
import {Off} from './Off';

type OnOffPropsType = {
    switch: boolean,
};

export function OnOff(props: OnOffPropsType) {
    return (
        <div>
            {props.switch && <On/>}
            {!props.switch && <Off/>}
        </div>
    )
}
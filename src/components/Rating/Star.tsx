import React, {Dispatch, SetStateAction} from 'react';
import {RatingValueType} from '../../App';

type StarPropsType = {
    selected: boolean,
    changeRatingValue: () => void
    /*changeRatingValue: (value: RatingValueType) => void,
    value: RatingValueType,*/
}

export function Star(props: StarPropsType) {
    return (
        <span
            style={{cursor: 'pointer'}}
            onClick={props.changeRatingValue}
        >
            {props.selected ? <b>star </b> : 'star '}
        </span>
    )
}
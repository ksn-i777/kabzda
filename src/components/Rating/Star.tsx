import React from 'react';

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
import React, {Dispatch, SetStateAction} from 'react';
import {Star} from './Star';
import {RatingValueType} from '../../App';

type RatingPropsType = {
    ratingValue: RatingValueType,
    changeRatingValue: (value: RatingValueType) => void,
}

export function Rating(props: RatingPropsType) {
    return (
        <div>
            <Star selected={props.ratingValue > 0} changeRatingValue={() => props.changeRatingValue(1)}/>
            <Star selected={props.ratingValue > 1} changeRatingValue={() => props.changeRatingValue(2)}/>
            <Star selected={props.ratingValue > 2} changeRatingValue={() => props.changeRatingValue(3)}/>
            <Star selected={props.ratingValue > 3} changeRatingValue={() => props.changeRatingValue(4)}/>
            <Star selected={props.ratingValue > 4} changeRatingValue={() => props.changeRatingValue(5)}/>
            {/*<Star selected={props.ratingValue > 0} changeRatingValue={props.changeRatingValue} value={1}/>
            <Star selected={props.ratingValue > 1} changeRatingValue={props.changeRatingValue} value={2}/>
            <Star selected={props.ratingValue > 2} changeRatingValue={props.changeRatingValue} value={3}/>
            <Star selected={props.ratingValue > 3} changeRatingValue={props.changeRatingValue} value={4}/>
            <Star selected={props.ratingValue > 4} changeRatingValue={props.changeRatingValue} value={5}/>*/}
        </div>
    )
}


import React, { useState } from "react";
import {UncontrolledStar} from './UncontrolledStar';

export function UncontrolledRating() {

    type RatingType = 0 | 1 | 2 | 3 | 4 | 5;

    let [rating, setRating] = useState<RatingType>(0)

    return (
        <div>
            <UncontrolledStar changeRating={() => setRating(1)} selected={rating > 0}/>
            <UncontrolledStar changeRating={() => setRating(2)} selected={rating > 1}/>
            <UncontrolledStar changeRating={() => setRating(3)} selected={rating > 2}/>
            <UncontrolledStar changeRating={() => setRating(4)} selected={rating > 3}/>
            <UncontrolledStar changeRating={() => setRating(5)} selected={rating > 4}/>
        </div>
    )
}


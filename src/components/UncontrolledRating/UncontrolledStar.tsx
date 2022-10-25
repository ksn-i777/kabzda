import React from "react";

type UncontrolledStarPropsType = {
    selected: boolean,
    changeRating: () => void
}

export function UncontrolledStar(props: UncontrolledStarPropsType) {
    return (
        <div style={{display: 'inline-block', cursor: 'pointer'}} onClick={props.changeRating}>
            {props.selected
                ? <><span style={{marginTop: '30px', marginRight: '10px', fontSize: '30px', color: 'black'}}>star</span></>
                : <><span style={{marginTop: '30px', marginRight: '10px', fontSize: '30px', color: 'grey', opacity: '0.5'}}>star</span></>
            }
        </div>
    )
}
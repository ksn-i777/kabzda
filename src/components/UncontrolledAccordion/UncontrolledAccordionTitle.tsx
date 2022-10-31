import React from "react";

type UncontrolledAccordionTitlePropsType = {
    title: string,
    changeDeploy: () => void,
}

export function UncontrolledAccordionTitle(props: UncontrolledAccordionTitlePropsType) {
    return (
        <h3
            style={{display: 'inline-block', cursor: 'pointer', marginTop: '30px', marginLeft: '30px'}}
            onClick={props.changeDeploy}>{props.title}
        </h3>
    )
}
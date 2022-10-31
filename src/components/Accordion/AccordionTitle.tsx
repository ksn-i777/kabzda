import React from "react";

type AccordionTitlePropsType = {
    title: string,
    changeDeploy: () => void,
    /*deploy: boolean*/
}

export function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3
            onClick={props.changeDeploy}
            /*onClick={() => props.changeDeploy(!props.deploy)}*/
            style={{display: 'inline-block', cursor: 'pointer', marginTop: '30px', marginLeft: '30px'}}
        >
            {props.title}
        </h3>
    )
}
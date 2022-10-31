import React from "react";
import {AccordionTitle} from './AccordionTitle';
import {AccordionBody} from './AccordionBody';

type AccordionPropsType = {
    title: string,
    deploy: boolean,
    changeDeploy: (value: boolean) => void
}

export function Accordion(props: AccordionPropsType) {
    return (
        <div>
            <AccordionTitle title={props.title} changeDeploy={() => props.changeDeploy(!props.deploy)}/>
            {props.deploy && <AccordionBody/>}
        </div>
    )
}


import React from "react";
import {AccordionTitle} from './AccordionTitle';
import {AccordionBody} from './AccordionBody';
import {Item} from '../../App';

type AccordionPropsType = {
    title: string,
    items: Array<Item>
    deploy: boolean,
    changeDeploy: (value: boolean) => void
    clickBodyItem: (title: string) => void
}

export function Accordion(props: AccordionPropsType) {
    return (
        <div>
            <AccordionTitle title={props.title} changeDeploy={() => props.changeDeploy(!props.deploy)}/>
            {props.deploy && <AccordionBody items={props.items} clickBodyItem={props.clickBodyItem}/>}
        </div>
    )
}


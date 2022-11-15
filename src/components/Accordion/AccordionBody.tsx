import React from "react";
import {Item} from './Accordion';

type AccordionBodyPropsType = {
    items: Array<Item>,
    clickBodyItem: (title: string) => void,
}

export function AccordionBody(props: AccordionBodyPropsType) {
    return (
        <ul>
            {props.items.map(i => <li key={i.id} style={{cursor: 'pointer'}} onClick={() => props.clickBodyItem(i.title)}>{i.title}</li>)}
        </ul>
    )
}


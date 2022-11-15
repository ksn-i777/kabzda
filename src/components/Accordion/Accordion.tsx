import React from "react";
import {AccordionTitle} from './AccordionTitle';
import {AccordionBody} from './AccordionBody';

type AccordionPropsType = {
    title: string,
    deploy: boolean,
    changeDeploy: (value: boolean) => void,
}

export type Item = {
    id: number,
    title: string
}
export type Items = Array<Item>

function Accordion(props: AccordionPropsType) {
    console.log('acc')

    const items:Items = [
        {id: 1, title: 'HTML'},
        {id: 2, title: 'CSS'},
        {id: 3, title: 'JS'},
        {id: 4, title: 'React'},
    ]

    function clickBodyItem(title: string) {
        alert(`${title} here`)
    }

    return (
        <div>
            <AccordionTitle title={props.title} changeDeploy={() => props.changeDeploy(!props.deploy)}/>
            {props.deploy && <AccordionBody items={items} clickBodyItem={clickBodyItem}/>}
        </div>
    )
}

export const MemoAccordion = React.memo(Accordion)
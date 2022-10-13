import React from "react";

type AccordionTitlePropsType = {
    title: string,
}

export function AccordionTitle(props: AccordionTitlePropsType) {
    return <div>{props.title}</div>
}
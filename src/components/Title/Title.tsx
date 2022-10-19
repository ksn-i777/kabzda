import React from "react";

type TitlePropsType = {
    title: string,
}

export function Title(props: TitlePropsType) {
    return <h2>{props.title}</h2>
}
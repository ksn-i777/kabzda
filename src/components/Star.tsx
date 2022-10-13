import React from "react";

type StarPropsType = {
    selected: boolean,
}

export function Star(props: StarPropsType) {
    if (props.selected) {
        return <><b><span>star </span></b></>
    } else {
        return <><span>star </span></>
    }

}
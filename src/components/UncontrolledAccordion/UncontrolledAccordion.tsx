import React, { useState } from "react";
import {UncontrolledAccordionTitle} from './UncontrolledAccordionTitle';
import {UncontrolledAccordionBody} from './UncontrolledAccordionBody';

type UncontrolledAccordionPropsType = {
    title: string,
}

function UncontrolledAccordion(props: UncontrolledAccordionPropsType) {
    console.log('UNCacc')

    let [deploy, setDeploy] = useState(true)
    
    function changeDeploy () {
        setDeploy(!deploy)
    }

    return (
        <div>
            <UncontrolledAccordionTitle title={props.title} changeDeploy={changeDeploy}/>
            {deploy && <UncontrolledAccordionBody/>}
        </div>
    )
}

export const MemoUncontrolledAccordion = React.memo(UncontrolledAccordion)
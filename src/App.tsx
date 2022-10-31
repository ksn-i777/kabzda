import React, {useState} from 'react';
import './App.css';
import {Title} from "./components/Title/Title";
import {Accordion} from "./components/Accordion/Accordion";
import {UncontrolledAccordion} from './components/UncontrolledAccordion/UncontrolledAccordion';
import {Rating} from "./components/Rating/Rating";
import {UncontrolledRating} from './components/UncontrolledRating/UncontrolledRating'
import {OnOff} from './components/OnOff/OnOff';
import {UncontrolledOnOff} from './components/UncontrolledOnOff/UncontrolledOnOff';

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5;
export type StatusOnOff = 'on' | 'off' | 'reset';

function App() {

    const [ratingValue, setRatingValue] = useState<RatingValueType>(0)

    const [deploy, setDeploy] = useState<boolean>(false)

    const [status, setStatus] = useState<StatusOnOff>('reset')

    return (
        <div className="App">
            <Title title={"This APP component"}/>

            <Accordion title={"Menu"} deploy={deploy} changeDeploy={setDeploy}/>
            <UncontrolledAccordion title={"Menu"}/>

            <Rating ratingValue={ratingValue} changeRatingValue={setRatingValue}/>
            <UncontrolledRating/>

            <OnOff status={status} changeStatus={setStatus}/>
            <UncontrolledOnOff/>
        </div>
    );
}

export default App
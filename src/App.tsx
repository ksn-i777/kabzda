import React, {useState} from 'react';
import './App.css';
import {MemoAccordion} from './components/Accordion/Accordion';
import {MemoUncontrolledAccordion} from './components/UncontrolledAccordion/UncontrolledAccordion';
import {MemoRating} from "./components/Rating/Rating";
import {MemoUncontrolledRating} from './components/UncontrolledRating/UncontrolledRating'
import {MemoOnOff} from './components/OnOff/OnOff';
import {MemoUncontrolledOnOff} from './components/UncontrolledOnOff/UncontrolledOnOff';
import {MemoSelect} from './components/Select/Select';

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5;
export type StatusOnOff = 'on' | 'off' | 'reset';

function App() {
    console.log('app')

    const [deploy, setDeploy] = useState<boolean>(false) //MemoAccordion

    const [ratingValue, setRatingValue] = useState<RatingValueType>(0) //MemoRating

    const [status, setStatus] = useState<StatusOnOff>('reset') //MemoOnOff

    const [itemValue, setItemValue] = useState<number>(1) //MemoSelect

    return (
        <div className="App">
            <MemoAccordion title={"Disciplines"} deploy={deploy} changeDeploy={setDeploy}/>
            <MemoUncontrolledAccordion title={"Menu"}/>

            <MemoRating ratingValue={ratingValue} changeRatingValue={setRatingValue}/>
            <MemoUncontrolledRating/>

            <MemoOnOff status={status} changeStatus={setStatus}/>
            <MemoUncontrolledOnOff/>

            <MemoSelect itemValue={itemValue} changeItemValue={setItemValue}/>
        </div>
    );
}

export default App
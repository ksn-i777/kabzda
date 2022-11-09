import React, {useState} from 'react';
import './App.css';
import {Title} from "./components/Title/Title";
import {Accordion} from "./components/Accordion/Accordion";
import {UncontrolledAccordion} from './components/UncontrolledAccordion/UncontrolledAccordion';
import {Rating} from "./components/Rating/Rating";
import {UncontrolledRating} from './components/UncontrolledRating/UncontrolledRating'
import {OnOff} from './components/OnOff/OnOff';
import {UncontrolledOnOff} from './components/UncontrolledOnOff/UncontrolledOnOff';
import {Select} from './components/Select/Select';
import {Simulate} from 'react-dom/test-utils';
import change = Simulate.change;

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5;
export type StatusOnOff = 'on' | 'off' | 'reset';
export type Item = {
    id: number,
    title: string
}
export type Items = Array<Item>

function App() {

    const [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    const [deploy, setDeploy] = useState<boolean>(false)
    const [status, setStatus] = useState<StatusOnOff>('reset')
    const [itemValue, setItemValue] = useState<number>(1)

    const items:Items = [
        {id: 1, title: 'HTML'},
        {id: 2, title: 'CSS'},
        {id: 3, title: 'JS'},
        {id: 4, title: 'React'},
    ]

    function clickBodyItem(title: string) {
        alert(`${title} here`)
    }

    function changeItem(itemID: number) {
        setItemValue(itemID)
    }

    return (
        <div className="App">
            <Title title={"This APP component"}/>

            <Accordion title={"Disciplines"} items={items} deploy={deploy} changeDeploy={setDeploy} clickBodyItem={clickBodyItem}/>
            <UncontrolledAccordion title={"Menu"}/>

            <Rating ratingValue={ratingValue} changeRatingValue={setRatingValue}/>
            <UncontrolledRating/>

            <OnOff status={status} changeStatus={setStatus}/>
            <UncontrolledOnOff/>

            <Select name={'Choose discipline:'} itemValue={itemValue} items={items} changeItem={changeItem}/>
        </div>
    );
}

export default App
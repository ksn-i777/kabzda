import React, { useState } from 'react';
import './App.css';
import {Title} from "./components/Title/Title";
import {Rating} from "./components/Rating/Rating";
import {Accordion} from "./components/Accordion/Accordion";
import {OnOff} from './components/OnOff/OnOff';

export type OnOffStatusType = 'start' | 'on' | 'off';

function App() {

    let [status, setStatus] = useState<OnOffStatusType>('start')

    function useChangeStatus (value: OnOffStatusType) {
        setStatus(value)
    }

    return (
        <div className="App">
            <Title title={"This APP component"}/>
            <Title title={"My Friends"}/>
            <Accordion title={"Menu"} deployed={false}/>
            <Accordion title={"Users"} deployed={true}/>
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
            <OnOff switch={status} changeSwitch={useChangeStatus}/>
        </div>
    );
}

export default App
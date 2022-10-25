import React from 'react';
import './App.css';
import {Title} from "./components/Title/Title";
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import {OnOff} from './components/OnOff/OnOff';
import {UncontrolledAccordion} from './components/UncontrolledAccordion/UncontrolledAccordion';
import {UncontrolledRating} from './components/UncontrolledRating/UncontrolledRating'

export type OnOffStatusType = 'start' | 'on' | 'off';

function App() {

    return (
        <div className="App">
            <Title title={"This APP component"}/>
            <Accordion title={"Menu"} deployed={true}/>
            <Rating value={3}/>
            <OnOff/>
            <OnOff/>
            <UncontrolledAccordion title={"Menu"}/>
            <UncontrolledAccordion title={"Users"}/>
            <UncontrolledRating/>
            <UncontrolledRating/>
            <UncontrolledRating/>
        </div>
    );
}

export default App
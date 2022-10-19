import React from 'react';
import './App.css';
import {Title} from "./components/Title";
import {Rating} from "./components/Rating";
import {Accordion} from "./components/Accordion";
import {OnOff} from './components/OnOff';

function App() {

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
            <OnOff switch={true}/>
        </div>
    );
}

export default App
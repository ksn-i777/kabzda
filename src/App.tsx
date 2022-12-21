import React, {useEffect, useMemo, useState} from 'react';
import './App.css';
//import {MemoAccordion} from './components/Accordion/Accordion';
//import {MemoUncontrolledAccordion} from './components/UncontrolledAccordion/UncontrolledAccordion';
//import {MemoRating} from "./components/Rating/Rating";
//import {MemoUncontrolledRating} from './components/UncontrolledRating/UncontrolledRating'
//import {MemoOnOff} from './components/OnOff/OnOff';
//import {MemoUncontrolledOnOff} from './components/UncontrolledOnOff/UncontrolledOnOff';
//import {MemoSelect} from './components/Select/Select';
import {DigitalClock} from './components/Clock/DigitalClock';
import {AnalogClock} from './components/Clock/AnalogClock';

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5; //MemoRating
export type StatusOnOff = 'on' | 'off' | 'reset'; //MemoOnOff

export type City = {
    id: number
    city: string
    country: string
    population: number
}
type Cities = Array<City>


function App() {

    //const [deploy, setDeploy] = useState<boolean>(false) //MemoAccordion
    //const [ratingValue, setRatingValue] = useState<RatingValueType>(0) //MemoRating
    //const [status, setStatus] = useState<StatusOnOff>('reset') //MemoOnOff

    //const [idCity, setIdCity] = useState<number>(0) //MemoSelect
    //const [idCity2, setIdCity2] = useState<number>(0) //MemoSelect
    //const [idCity3, setIdCity3] = useState<number>(0) //MemoSelect

    /*const cities:Cities = [
        {id: 1, city: 'Minsk', country: "Belarus", population: 5},
        {id: 2, city: 'Mogilev', country: "Belarus", population: 3},
        {id: 3, city: 'Grodno', country: "Belarus", population: 2},
        {id: 4, city: 'Moscow', country: "Russia", population: 5},
        {id: 5, city: 'Peter', country: "Russia", population: 6},
        {id: 6, city: 'Rostov', country: "Russia", population: 2},
        {id: 7, city: 'Kiev', country: "Ukrain", population: 7},
        {id: 8, city: 'Lvov', country: "Ukrain", population: 5},
        {id: 9, city: 'Mir', country: "Ukrain", population: 4},
    ]

    const citiesB = useMemo(() => {
        return cities.filter(s => s.country === 'Belarus')
    }, [])
    const citiesM = useMemo(() => {
        return cities.filter(s => s.city[0] === 'M')
    }, [])
    const cities5 = useMemo(() => {
        return cities.filter(s => s.population < 5)
    }, [])*/

    return (
        <div className="App">
            {/* <MemoAccordion title={"Disciplines"} deploy={deploy} changeDeploy={setDeploy}/>
            <MemoUncontrolledAccordion title={"Menu"}/>

            <MemoRating ratingValue={ratingValue} changeRatingValue={setRatingValue}/>
            <MemoUncontrolledRating/>

            <MemoOnOff status={status} changeStatus={setStatus}/>
            <MemoUncontrolledOnOff/> */}

            {/*<MemoSelect idCity={idCity} setIdCity={setIdCity} cities={citiesB} selectNumber={1}/>
            <MemoSelect idCity={idCity2} setIdCity={setIdCity2} cities={citiesM} selectNumber={2}/>
            <MemoSelect idCity={idCity3} setIdCity={setIdCity3} cities={cities5} selectNumber={3}/>*/}

            <DigitalClock/>
            <AnalogClock/>
        </div>
    );
}

export default App
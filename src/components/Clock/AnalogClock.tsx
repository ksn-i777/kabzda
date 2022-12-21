import React, {useEffect, useState} from 'react';
import s from './AnalogClock.module.css'

export function AnalogClock() {

    const [date, setDate] = useState(new Date())

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDate(new Date())
        }, 1000)
        return () => {
            clearInterval(intervalId)
        }
    }, [])

    function hoursToDegree(num: number) {
        return num === 0 ? -90 : -90 + num*30
    }
    function minToDegree(num: number) {
        return num === 0 ? -90 : -90 + num*6
    }
    function secToDegree(num: number) {
        return num === 0 ? -90 : -90 + num*6
    }

    const hoursStyle:any = {
        position: 'absolute',
        width: '150px',
        height: '3px',
        background: 'linear-gradient(to right, transparent 50%, black 50%)',
        transform: `rotateZ(${hoursToDegree(date.getHours())}deg)`,
    }
    const minutesStyle:any = {
        position: 'absolute',
        width: '200px',
        height: '2px',
        background: 'linear-gradient(to right, transparent 50%, black 50%)',
        transform: `rotateZ(${minToDegree(date.getMinutes())}deg)`,
    }
    const secondStyle:any = {
        position: 'absolute',
        width: '250px',
        height: '1px',
        background: 'linear-gradient(to right, transparent 50%, red 50%)',
        transform: `rotateZ(${secToDegree(date.getSeconds())}deg)`,
    }

    return (
        <div className={s.wrapper}>
            <span className={`${s.span} ${s.oneSeven}`}></span>
            <span className={`${s.span} ${s.twoEight}`}></span>
            <span className={`${s.span} ${s.threeNine}`}></span>
            <span className={`${s.span} ${s.fourTen}`}></span>
            <span className={`${s.span} ${s.fiveEleven}`}></span>
            <span className={`${s.span} ${s.sixTwelve}`}></span>
            <span className={s.miniWrapper}>
                <span className={s.time}>
                    <span style={hoursStyle}></span>
                    <span style={minutesStyle}></span>
                    <span style={secondStyle}></span>
                </span>
            </span>

        </div>
    );
}
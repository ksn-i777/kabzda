import React, {useEffect, useState} from 'react';

export function Clock() {

    const [date, setDate] = useState(new Date())

    function addZero(num: number) {
        return num < 10 ? '0' + num : num
    }

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDate(new Date())
        }, 1000)
        return () => {
            clearInterval(intervalId)
        }
    }, [])

    return (
        <div>
            {addZero(date.getHours()) + ':' + addZero(date.getMinutes()) + ':' + addZero(date.getSeconds())}
        </div>
    );
}
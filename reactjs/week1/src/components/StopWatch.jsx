import { useState, useRef } from 'react';
import React from 'react';

function StopWatch() {
    const intervalRef = useRef(null)
    const inputRef = useRef(null)

    const [time, setTime] = useState(0)
    const [lapName, setLapName] = useState("")
    const [isRunning, setIsRunning] = useState(false)
    const [laps, setLaps] = useState([])

    const start = () => {
        intervalRef.current = setInterval(() => {
            setTime((time) => time + 10)
        }, 10);

        setIsRunning(true)
    }

    const pause = () => {
        clearInterval(intervalRef.current)
        intervalRef.current = null;
        setIsRunning(false)
    }

    const reset = () => {
        pause()
        setTime(0)
        setLaps([])
    }

    const addLap = () => {
        inputRef.current.focus()
        
        setLaps([...laps, {name: lapName, time}])
        setLapName("")
    }

    return (
        <div>
            <h2>{time}</h2>

            <button onClick={start} disabled={isRunning}>
                Start</button>
            <button onClick={pause} disabled={!isRunning}>
                Pause</button>
            <button onClick={reset}>
                Reset</button>

            <div>
                <input 
                ref={inputRef}
                value={lapName}
                onChange={(e) => setLapName(e.target.value)}
                placeholder="Lap name"
                />
                <button onClick={addLap}>
                    Add lap</button>

                <ul>
                    {laps.map((lap, index) => (
                        <li key={index}>
                            {lap.name} - {lap.time}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default StopWatch



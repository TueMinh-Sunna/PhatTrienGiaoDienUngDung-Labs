import React from 'react'
import { useState, useEffect } from 'react'

function DigitalClock() {
    const [time, setTime] = useState(new Date());

    const hours = time.getHours()
    const minutes = time.getMinutes()
    const seconds = time.getSeconds()

    useEffect(
        () => {
            const intervalId = setInterval(() => {
                setTime(new Date())
            }, 1000);
            
            return () => {
                clearInterval(intervalId)
            }
        }
        , [])

  return (
    <div>
        <p>
            {hours}:{minutes}:{seconds}
        </p>
    </div>
  )
}

export default DigitalClock
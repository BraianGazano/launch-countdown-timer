import { useState, useEffect } from "react";

const CountDownTimer = ({daysHoursMinSecs}) => {
   
    const {days= 0, hours = 0, minutes = 0, seconds = 60 } = daysHoursMinSecs;
    const [[dys, hrs, mins, secs], setTime] = useState([days, hours, minutes, seconds]);

    const tick = () => {
   
        if (dys===0 && hrs === 0 && mins === 0 && secs === 0) 
            reset()
        else if (hrs === 0 && mins===0 && secs === 0) {
            setTime([dys -1,23 ,59, 59]);
        } else if (mins === 0 && secs === 0) {
            setTime([dys ,hrs - 1, 59, 59]);
        } else if (secs === 0) {
            setTime([dys ,hrs, mins - 1, 59]);
        } else {
            setTime([dys,hrs, mins, secs - 1]);
        }
    };
    const reset = () => setTime([parseInt(hours), parseInt(minutes), parseInt(seconds)]);
    
    useEffect(() => {
        const timerId = setInterval(() => tick(), 1000);
        return () => clearInterval(timerId);
    });

    
    return (
        <>  
            <div>
            <p>{`${dys.toString().padStart(2,'0')}`}</p>
            <span>Days</span>
            </div>
            <div>
            <p>{`${hrs.toString().padStart(2, '0')}`}</p>
            <span>Hours</span>

            </div>
            <div>
            <p>{`${mins.toString().padStart(2, '0')}`}</p>
            <span>Minutes</span>

            </div>
            <div>
            <p>{`${secs.toString().padStart(2, '0')}`}</p>
            <span>Seconds</span>

            </div>
   
        </>
    );
}

export default CountDownTimer;
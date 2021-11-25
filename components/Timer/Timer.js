import { TimerStyled } from "./styles/TimerStyled";
import CountDownTimer from "./CountDownTimer";

const Timer = () => {
    const daysHoursMinSecs = {days:99, hours:23, minutes: 59, seconds: 59}
    return (
        <TimerStyled>
            <CountDownTimer daysHoursMinSecs={daysHoursMinSecs}></CountDownTimer>
        </TimerStyled>
      );
}
 
export default Timer;
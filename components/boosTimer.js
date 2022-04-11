import {CountdownCircleTimer} from "react-countdown-circle-timer";
import React, {useState} from "react";
import PlayAlertSound from "@/pages/secret-peak/components/Sound";

export default function BoosTimer({time, bossNumber, bossColor}) {

    let [stateCounter, setStateCounter] = useState(false);
    let [alertSoundState, changeAlertSoundPlaying] = useState(false);
    let [completeChronometer, changeCompleteChronometer] = useState(false);

    let toggleStateCounter = ()=>{ setStateCounter(!stateCounter) }

    const setStateSound = (remainingTime)=>{
        if (remainingTime === 15 && alertSoundState === false) {
            changeAlertSoundPlaying(true);
            PlayAlertSound();
        }else if(remainingTime !== 15){
            changeAlertSoundPlaying(false);
        }
        if(completeChronometer && remainingTime === (time-1)){
            setStateCounter(false);
        }
    }

    const secondsToTime = (seconds)=>{
        let minutes = Math.floor(seconds / 60);
        let seconds2 = seconds - minutes * 60;
        return `${minutes}:${seconds2}`;
    }

    return (
        <>
            <div onClick={toggleStateCounter}>
                <CountdownCircleTimer
                    strokeWidth={5}
                    trailColor={'gray'}
                    isPlaying = {stateCounter}
                    size = {56}
                    initialRemainingTime={time}
                    duration={time}
                    colors={['#004777', '#F7B801', '#A30000', '#A30000']}
                    colorsTime={[(time), 5, 2, 0]}
                    onComplete={()=>{
                        PlayAlertSound(bossNumber);
                        changeCompleteChronometer(true);
                        return { shouldRepeat: true}
                    }}
                    onUpdate={(remainingTime)=>{
                        setStateSound(remainingTime);
                    }}
                >
                    {({remainingTime}) => {
                        return <div className="text-danger">{secondsToTime(remainingTime)}</div>;
                    }}
                </CountdownCircleTimer>
            </div>
        </>
    )
}

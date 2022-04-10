import {CountdownCircleTimer} from "react-countdown-circle-timer";
import React, {useState} from "react";
import PlayAlertSound from "@/pages/secret-peak/components/Sound";

export default function BoosTimer({time, bossNumber, bossColor}) {

    let isPlaying = useState(false);
    let [stateCounter, changeStateConunter] = [...isPlaying];
    let toggleStateCounter = ()=>{ changeStateConunter(!stateCounter) }

    let alertSoundIsPlaying = useState(false);
    let [alertSoundState, changeAlertSoundPlaying] = [...alertSoundIsPlaying];

    const setStateSound = (remainingTime)=>{
        if (remainingTime === 15 && alertSoundState === false) {
            changeAlertSoundPlaying(true);
            PlayAlertSound();
        }else if(remainingTime !== 15){
            changeAlertSoundPlaying(false);
        }
    }

    const seconsToTime = (seconds)=>{
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
                    duration={time}
                    colors={['#004777', '#F7B801', '#A30000', '#A30000']}
                    colorsTime={[(time), 5, 2, 0]}
                    onComplete={()=>{
                        PlayAlertSound(bossNumber);
                        return { shouldRepeat: true}
                    }}
                >
                    {({remainingTime}) => {
                        setStateSound(remainingTime);
                        return <div className="text-danger">{seconsToTime(remainingTime)}</div>;
                    }}
                </CountdownCircleTimer>
            </div>
        </>
    )
}

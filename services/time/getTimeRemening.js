import {isMoment} from "moment";

// time remaining format (hh:mm:ss)
export default function getTimeRemening(timeGoal, timeNow) {
    if (!isMoment(timeGoal) || !isMoment(timeNow)) {
        throw new Error("timeGoal and timeNow must be moment objects");
    }

    const timeRemaining = timeGoal.diff(timeNow);
    const timeRemainingHours = Math.floor(timeRemaining / (1000 * 60 * 60));
    const timeRemainingMinutes = Math.floor((timeRemaining / (1000 * 60)) % 60);
    const timeRemainingSeconds = Math.floor((timeRemaining / 1000) % 60);

    return {hours: timeRemainingHours, minutes: timeRemainingMinutes, seconds: timeRemainingSeconds};
}

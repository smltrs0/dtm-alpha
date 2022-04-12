import {isMoment} from "moment";
import moment from "moment";

// time remaining format (hh:mm:ss)
export default function getTimeRemaining(timeGoal, timeNow) {
    timeGoal = isMoment(timeGoal) ? timeGoal : moment(timeGoal, 'YYYY-MM-DD HH:mm:ss');
    timeNow = isMoment(timeNow) ? timeNow : moment(timeNow, 'YYYY-MM-DD HH:mm:ss');

    const timeRemaining = timeGoal.diff(timeNow);
    const timeRemainingHours = Math.floor(timeRemaining / (1000 * 60 * 60));
    const timeRemainingMinutes = Math.floor((timeRemaining / (1000 * 60)) % 60);
    const timeRemainingSeconds = Math.floor((timeRemaining / 1000) % 60);

    return {hours: timeRemainingHours, minutes: timeRemainingMinutes, seconds: timeRemainingSeconds};
}

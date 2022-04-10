import moment from "moment/moment";

export default function HourDiff(startTime, endTime) {
    let start = moment(startTime, 'hh:mm A'); // '08:45 am'
    let end = moment(endTime, 'hh:mm A'); // '08:45 am'
    let duration = start.diff(end);
    return moment.duration(duration, 'milliseconds')
}


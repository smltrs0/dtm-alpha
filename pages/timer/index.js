import {Header, Layout} from "@/components";
import getTimeRemaining from "@/services/time/getTimeRemaining";
import moment from "moment";
import CountDownTimer from "@/components/CountDownTimer";
import getTimeZone from "@/pages/timer/components/getTimeZone";
import {useEffect, useState} from "react";
const dateTomeNow = new moment();
const is_night = dateTomeNow.hour() > 12 ;

// to testing
const hoursMinSecs = {hours:1, minutes: 20, seconds: 40}

var date = String(dateTomeNow.format('YYYY-MM-DD'));
var veinte_de_la_noche = "20:00";

var jefeLaberintoTemprano = moment(date).startOf(veinte_de_la_noche);


export default function Timer(){
    const [date_time, setDate_time] = useState({});
    const [DateTimeJustNow, setDateTimeJustNow] = useState(dateTomeNow);

    useEffect(() => {
        getTimeZone().then(data => {
            setDate_time(data);
            setDateTimeJustNow(moment(date.date_time))
        });
    }, []);
    return <>
        <Layout>
            <Header/>
            <div>
                <h1>Timer</h1>
                <table className="text-center table">
                    <thead>
                        <tr>
                            <th colSpan="100%">World bosses</th>
                        </tr>
                        <tr className="text-center">
                            <th>10:00</th>
                            <th>12:00</th>
                            <th>20:00</th>
                            <th>22:00</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <CountDownTimer hoursMinSecs={getTimeRemaining(dateTomeNow.format('YYYY-MM-DD')+' 10:00:00', DateTimeJustNow)}/>
                            </td>
                            <td>
                                <CountDownTimer hoursMinSecs={getTimeRemaining(dateTomeNow.format('YYYY-MM-DD')+' 12:00:00', DateTimeJustNow)}/>
                            </td>
                            <td>
                                <CountDownTimer hoursMinSecs={getTimeRemaining(dateTomeNow.format('YYYY-MM-DD')+' 20:00:00', DateTimeJustNow)}/>
                            </td>
                            <td>
                                <CountDownTimer hoursMinSecs={getTimeRemaining(dateTomeNow.format('YYYY-MM-DD')+' 22:00:00', DateTimeJustNow)}/>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div>
                <p>Time Zone : {date_time.timezone}</p>
                <p>Date, time, hours synchronized with the server : {date_time.time_24}</p>
            </div>
        </Layout>
    </>
}




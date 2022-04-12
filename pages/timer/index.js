import {Header, Layout} from "@/components";
import getTimeRemening from "@/services/time/getTimeRemening";
import moment from "moment";
import CountDownTimer from "@/components/CountDownTimer";
import getTimeZone from "@/pages/timer/components/getTimeZone";
import {useState} from "react";
const dateTomeNow = new moment();
const is_night = dateTomeNow.hour() > 12 ;

// to testing
const hoursMinSecs = {hours:1, minutes: 20, seconds: 40}

var date = String(dateTomeNow.format('YYYY-MM-DD'));
var respawnLaberintMorning = "18:00";

var jefeLaberintoTemprano = moment(date).startOf(respawnLaberintMorning);


export default function Timer(){
    const [date_time, setDate_time] = useState({});
    // getTimeZone().then(data => {
    //     setDate_time(data);
    // });
    return <>
        <Layout>
            <Header/>
            <div>
                <h1>Timer</h1>
                    <CountDownTimer hoursMinSecs={hoursMinSecs}/>
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
                                <CountDownTimer hoursMinSecs={{hours:10, minutes: 0, seconds: 0}}/>
                            </td>
                            <td>
                                <CountDownTimer hoursMinSecs={{hours:12, minutes: 0, seconds: 0}}/>
                            </td>
                            <td>
                                <CountDownTimer hoursMinSecs={getTimeRemening(jefeLaberintoTemprano, dateTomeNow)}/>
                            </td>
                            <td>
                                <CountDownTimer hoursMinSecs={{hours:36, minutes: 0, seconds: 0}}/>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div>
                <p>Time Zone : {date_time.timezone}</p>
                <p>Time Zone Offset : {date_time.time_24}</p>
            </div>
        </Layout>
    </>
}




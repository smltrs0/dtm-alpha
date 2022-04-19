import { Header, Layout } from "@/components";
import getTimeRemaining from "@/services/time/getTimeRemaining";
import moment from "moment";
import CountDownTimer from "@/components/CountDownTimer";
import getTimeZone from "@/pages/timer/components/getTimeZone";
import { useEffect, useState } from "react";
import Image from "next/image";
import placeholder from "@/public/placeholder.png";
import { createRef } from "react";


export default function Timer() {
    const dateTomeNow = new moment();
    const is_night = (dateTomeNow.hour() > 12);
    var date = String(dateTomeNow.format('YYYY-MM-DD'));
    // console.log(is_night);

    const [date_time, setDate_time] = useState({});
    const [DateTimeJustNow, setDateTimeJustNow] = useState(dateTomeNow);
    const server_selected = createRef();
    const [soundAlertState, setSoundAlertState] = useState(false);

    useEffect(() => {
        getTimeZone().then(data => {
            setDate_time(data);
            setDateTimeJustNow(moment(date.date_time))
        });
    }, []);

    function handrelTimeZone() {
        console.log('consult new server ',server_selected.current.value);
    }

    function handlerSoundAlert() {
        // console.log(e.target.checked);
        setSoundAlertState(!soundAlertState);
    }
    
    return <>
        <Layout>
            <Header />
            <div className="container mb-2">
                <div className="card card-static mt-5" style={{ backgroundColor: '#252836', borderRadius: '0.5em' }}>
                    <div className="text-center pt-3">
                        <h3>World bosses</h3>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-4">
                                <div className="form-group">
                                    <label>Server</label>
                                    <select ref={server_selected} onChange={handrelTimeZone}>
                                        <option value="">[select]</option>
                                        <option value="NA">NA</option>
                                        <option value="SA">SA</option>
                                        <option value="EU">EU</option>
                                        <option value="AS">AS</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-8">
                                <div className="form-group">
                                    <div className="row pl-4">
                                        <input className="col-sm-2" type="text" />
                                        <label className="col-sm-6 col-form-label" htmlFor="">Set time in minutes</label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="form-check form-switch">
                                    <input checked={soundAlertState} onChange={handlerSoundAlert} defaultChecked className="form-check-input" type="checkbox" role="switch"
                                        id="flexSwitchCheckDefault" />
                                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable audio alert</label>
                                </div>
                            </div>
                        </div>
                        {/*<!--Valley boost--->*/}
                        <table className="text-center text-white">
                            <tdead>
                                <tr>
                                    <td colSpan="100%">
                                        Valley bosses
                                        {
                                            is_night ?
                                                <CountDownTimer hoursMinSecs={getTimeRemaining(dateTomeNow.format('YYYY-MM-DD') + ' 24:00:00', DateTimeJustNow)} />
                                                :
                                                <CountDownTimer hoursMinSecs={getTimeRemaining(dateTomeNow.format('YYYY-MM-DD') + ' 12:00:00', DateTimeJustNow)} />
                                        }
                                    </td>
                                </tr>
                                <tr className="text-center">
                                    <td>
                                        <Image src={placeholder}></Image>
                                        <p>Bicheon valley (Linghtening Blade Revenant)</p> lvl 75
                                    </td>
                                    <td>
                                        <Image src={placeholder}></Image>
                                        <p>Snake valley (Demonic Phantom Dragon)</p> lvl 95
                                    </td>
                                    <td>
                                        <Image src={placeholder}></Image>
                                        <p>Redmoon valley (Sagittarion Phantomgeist)</p> lvl 125
                                    </td>
                                </tr>
                            </tdead>
                        </table>
                        {/*<!--Valley boost--->*/}
                        <hr />
                        {/*<!--Lavyryng boosess-->*/}
                        <table className="text-center text-white">
                                <tr>
                                    <td colSpan="100%">
                                        Lavyryng boosess
                                        {
                                            is_night ?
                                                <CountDownTimer hoursMinSecs={getTimeRemaining(dateTomeNow.format('YYYY-MM-DD') + ' 20:00:00', DateTimeJustNow)} />
                                                :
                                                <CountDownTimer hoursMinSecs={getTimeRemaining(dateTomeNow.format('YYYY-MM-DD') + ' 10:00:00', DateTimeJustNow)} />
                                        }
                                    </td>
                                </tr>
                                <tr className="text-center">
                                    <td>
                                        <Image src={placeholder}></Image>
                                        <p>Bicheon labyrintd (Bulwark Revenant)</p> lvl 60
                                    </td>
                                    <td>
                                        <Image src={placeholder}></Image>
                                        <p>Demon bull labyrin (Bull Fiend Paragod)</p> lvl 80
                                    </td>
                                    <td>
                                        <Image src={placeholder}></Image>
                                        <p>Snake pit labyrintd (Madsky Sagittarion)</p> lvl 90
                                    </td>
                                    <td>
                                        <Image src={placeholder}></Image>
                                        <p>Abandoned mine labyrintd (Blacksky Sagittarion)</p> lvl 105
                                    </td>
                                </tr>
                        </table>
                        <table>
                            <tr className="text-center">
                                <td>
                                    <Image src={placeholder}></Image>
                                    <p>Heaven´s way labyrintd (Shadowcaster Lord)</p> lvl 110
                                </td>
                                <td>
                                    <Image src={placeholder}></Image>
                                    <p>Redmoon labyrintd (Ice Demon Fiend CDR)</p> lvl 120
                                </td>
                                <td>
                                    <Image src={placeholder}></Image>
                                    <p>Phantasia labyrintd (Blood Cult Demon)</p> lvl 131
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
            <div className="card">
                <p>Time Zone : {date_time.timezone}</p>
                <p>Date, time, hours synchronized witd tde server : {date_time.time_24}</p>
            </div>
        </Layout>
    </>
}




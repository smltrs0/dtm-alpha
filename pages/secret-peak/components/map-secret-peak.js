import React from "react";
import Image from "next/image";
import secretPeak from './../../../public/secret-peak.png';
import BoosTimer from "@/components/boosTimer";
import {BosstData} from "@/pages/secret-peak/config/BosData";
import HourDiff from "@/utils/Times/HoursDiff";
import moment from "moment";

export default class MapSecretPeak extends React.Component{
    render() {

        let listBosses = BosstData.map((boss, index)=>{
            return <div style={boss.position} key={index}>
                {!['Boos 1', 'Boos 8'].includes(boss.name) &&
                    <BoosTimer
                    time={boss.time}
                    sound={boss.sound}
                    bossNumber={index+1}
                    bossColor={boss.color}
                />
                }
                {['Boos 1', 'Boos 8'].includes(boss.name) &&
                    <div className="boss-timer">
                        00:00:00
                    </div>
                }
                <label className="text-white text-center">{boss.name}</label>
            </div>
        })

        return (
            <div className="container">
                <div style={{position: "relative"}}>
                    <Image  alt={'secret peak map'} src={secretPeak}/>
                    {listBosses}
                </div>
            </div>
        );
    }
}

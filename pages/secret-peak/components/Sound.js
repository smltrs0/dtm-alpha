import UIfx from 'uifx';
import Boss1 from './../../../static/sounds/Boss 1 is about to spawn.mp3';
import Boss2 from './../../../static/sounds/Boss 2 is about to spawn.mp3';
import Boss3 from './../../../static/sounds/Boss 3 is about to spawn.mp3';
import Boss4 from './../../../static/sounds/Boss 4 is about to spawn.mp3';
import Boss5 from './../../../static/sounds/Boss 5 is about to spawn.mp3';
import Boss6 from './../../../static/sounds/Boss 6 is about to spawn.mp3';
import Boss7 from './../../../static/sounds/Boss 7 is about to spawn.mp3';
import Boss8 from './../../../static/sounds/Boss 8 is about to spawn.mp3';
import DefaultMessage from './../../../static/sounds/15 seconds to spawn a boss.mp3';

export default function PlayAlertSound(boosNumber = null) {
    let sound;
    switch (boosNumber) {
        case 1:
            sound = new UIfx(Boss1);
            break;
        case 2:
            sound = new UIfx(Boss2);
            break;
        case 3:
            sound = new UIfx(Boss3);
            break;
        case 4:
            sound = new UIfx(Boss4);
            break;
        case 5:
            sound = new UIfx(Boss5);
            break;
        case 6:
            sound = new UIfx(Boss6);
            break;
        case 7:
            sound = new UIfx(Boss7);
            break;
        case 8:
            sound = new UIfx(Boss8);
            break;
        default:
            // notification to 15 seg remaining
            console.log('15 seg remaining');
            sound = new UIfx(DefaultMessage);
            break;
    }
    sound.play();
}

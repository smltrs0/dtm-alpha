const timeGreenBosses = 1800;
const timeGoldBosses = 3600;
const ColorRandom =()=> '#'+Math.floor(Math.random()*16777215).toString(16);
export const BosstData = [
    {
        name: "Boos 1",
        time : 22,
        sound : "Boss 1 is about to spawn.mp3",
        color: ColorRandom(),
        position : {
            top: "70px",
            left: "664px",
            zIndex: "1",
            position: "absolute"
        }
    },
    {
        name: "Boos 2",
        time : timeGreenBosses,
        sound : "Boss 2 is about to spawn.mp3",
        color: ColorRandom(),
        position: {
            top: "141px",
            left: "451px",
            zIndex: "1",
            position: "absolute"
        }
    },
    {
        name: "Boos 3",
        time : timeGreenBosses,
        sound : "Boss 3 is about to spawn.mp3",
        color: ColorRandom(),
        position: {
            top: "187px",
            left: "296px",
            zIndex: "1",
            position: "absolute"
        }
    },
    {
        name: "Boos 4",
        time : 9,
        sound : "Boss 4 is about to spawn.mp3",
        color: ColorRandom(),
        position: {
            top: "174px",
            left: "674px",
            zIndex: "1",
            position: "absolute"
        }
    },
    {
        name: "Boos 5",
        time : timeGoldBosses,
        sound : "Boss 5 is about to spawn.mp3",
        color: ColorRandom(),
        position: {
            top: "321px",
            left: "288px",
            zIndex: "1",
            position: "absolute"
        }
    },
    {
        name: "Boos 6",
        time : timeGreenBosses,
        sound : "Boss 6 is about to spawn.mp3",
        color: ColorRandom(),
        position: {
            top: "389px",
            left: "655px",
            zIndex: "1",
            position: "absolute"
        }
    },
    {
        name: "Boos 7",
        time : timeGreenBosses,
        sound : "Boss 7 is about to spawn.mp3",
        color: ColorRandom(),
        position: {
            top: "305px",
            left: "350px",
            zIndex: "1",
            position: "absolute"
        }
    },
    {
        name: "Boos 8",
        time : 75,
        sound : "Boss 8 is about to spawn.mp3",
        color: ColorRandom(),
        position: {
            top: "413px",
            left: "306px",
            zIndex: "1",
            position: "absolute"
        }
    }]

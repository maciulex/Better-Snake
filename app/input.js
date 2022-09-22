var startButton = "Space";
var setInput = [null, null];

var playerControls = [
    (cords) => {return [cords[0] - 1, cords[1],  "left"]},//lewo
    (cords) => {return [cords[0] + 1, cords[1], "right"]},//prawo
    (cords) => {return [cords[0], cords[1]-1, "up"]},//gora
    (cords) => {return [cords[0], cords[1]+1, "down"]},//dol
];


var specialKeyWords = [
    ["debug", debug]
];

document.addEventListener("keydown", (e) => {
    if (e.code == "KeyF") debugger;
    if (setInput[0] !== null) {
        if (e.code = "Space") return;
        for (let i = 0; i < playerControlsRaw.length; i++) {
            for (let key in playerControlsRaw[i]) {
                if (key == e.code) return;
            }
        }
        let oldControl;
        let KeyInv;
        for (let key in playerControlsRaw[setInput[0]]) {
            if (playerControlsRaw[setInput[0]][key] == setInput[1]) {
                KeyInv = key+"O"
                oldControl = [key, playerControlsRaw[setInput[0]][key], playerControlsRaw[setInput[0]][KeyInv]];
                break;
            }
            counter++
        }
        console.log(oldControl);
        delete playerControlsRaw[setInput[0]][oldControl[0]];
        delete playerControlsRaw[setInput[0]][KeyInv];
        playerControlsRaw[setInput[0]][e.code] = oldControl[1];
        playerControlsRaw[setInput[0]][(e.code+"O")] = oldControl[2];
        setInput = [null, null];
        interfaces.initControlsInterFace();
        return;
    }
    for (let i = 0; i < config.playersNumber; i++) {
        if (playerControlsRaw[i][e.code] != undefined) {
            if (config.antyStupid && gameConductor.players[i].lastMoveCode == playerControlsRaw[i][e.code+"O"]) break;
            gameConductor.players[i].move = [playerControls[playerControlsRaw[i][e.code]], playerControlsRaw[i][e.code]];
        }
    }
    if (e.code == "Space") {
        if (!gameConductor.classReady || !config.classReady) return;
        if (gameConductor.gameStarted) return;
        gameConductor.gameStartInit();
    }
});
function setPlayerInput(player, which) {
    setInput = [player, which];
}

var debug = () => {

};


function playerControlsValid(amountOfPlayers) {
    if (amountOfPlayers <= playerControls.length) return true;
    else return false;
}


var playerControlsRaw = [
    {
        "KeyA": 0,
        "KeyD": 1,
        "KeyW": 2,
        "KeyS": 3,
        "KeyAO": 1,
        "KeyDO": 0,
        "KeySO": 2,
        "KeyWO": 3,
    },
    {
        "ArrowLeft" :  0,
        "ArrowRight":  1,
        "ArrowUp"   :  2,
        "ArrowDown" :  3,
        "ArrowLeftO" :  1,
        "ArrowRightO":  0,
        "ArrowDownO" :  2,
        "ArrowUpO"   :  3,
    },
    {
        "KeyF": 0,
        "KeyH": 1,
        "KeyT": 2,
        "KeyG": 3,
        "KeyFO": 1,
        "KeyHO": 0,
        "KeyGO": 2,
        "KeyTO": 3,
    },
    {
        "KeyJ": 0,
        "KeyL": 1,
        "KeyI": 2,
        "KeyK": 3,
        "KeyJO": 1,
        "KeyLO": 0,
        "KeyIO": 3,
        "KeyKO": 2,
    },
    {
        "Numpad1": 0,
        "Numpad3": 1,
        "Numpad5": 2,
        "Numpad2": 3,
        "Numpad1O": 1,
        "Numpad3O": 0,
        "Numpad5O": 3,
        "Numpad2O": 2,
    },
    {
        "Numpad7": 0,
        "Numpad9": 1,
        "Numpad8": 2,
        "Numpad4": 3,
        "Numpad7O": 1,
        "Numpad9O": 0,
        "Numpad8O": 3,
        "Numpad4O": 2,
    },
    {
        "KeyZ": 0,
        "KeyX": 1,
        "KeyC": 2,
        "KeyV": 3,
        "KeyZ": 1,
        "KeyX": 0,
        "KeyC": 3,
        "KeyV": 2,
    },
    {
        "KeyB": 0,
        "KeyN": 1,
        "KeyM": 2,
        "Comma": 3,
        "KeyB": 1,
        "KeyN": 0,
        "KeyM": 3,
        "Comma": 2,
    },
];
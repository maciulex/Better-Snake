var startButton = "Space";

var playerControls = [
    (cords) => {return [cords[0] - 1, cords[1]]},//lewo
    (cords) => {return [cords[0] + 1, cords[1]]},//prawo
    (cords) => {return [cords[0], cords[1]-1]},//gora
    (cords) => {return [cords[0], cords[1]+1]},//dol
];

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
        "ArrowUpO"   :  3,
        "ArrowDownO" :  2,
    }
];

var specialKeyWords = [
    ["debug", debug]
];

document.addEventListener("keydown", (e) => {
    console.log(e);
    for (let i = 0; i < config.playersNumber; i++) {
        if (playerControlsRaw[i][e.code] != undefined) {
            if (config.antyStupid && gameConductor.players[i].lastMoveCode == playerControlsRaw[i][e.code+"O"]) break;
            gameConductor.players[i].move = [playerControls[playerControlsRaw[i][e.code]], playerControlsRaw[i][e.code]];
        }
    }
    if (e.code == "Space") {
        if (!gameConductor.gameStarted) gameConductor.gameStartInit();
    }
});



var debug = () => {

};


function playerControlsValid(amountOfPlayers) {
    if (amountOfPlayers <= playerControls.length) return true;
    else return false;
}
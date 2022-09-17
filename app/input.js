var startButton = "Space";

var playerControls = [
    {
        "KeyA": (cords) => {return [cords[0] - 1, cords[1]]},
        "KeyD": (cords) => {return [cords[0] + 1, cords[1]]},
        "KeyW": (cords) => {return [cords[0], cords[1]-1]},
        "KeyS": (cords) => {return [cords[0], cords[1]+1]},
        "KeyAO": "KeyD",
        "KeyDO": "KeyA",
        "KeyWO": "KeyS",
        "KeySO": "KeyW",
    },
    {
        "ArrowLeft" : (cords) => {return [cords[0] - 1, cords[1]]},
        "ArrowRight": (cords) => {return [cords[0] + 1, cords[1]]},
        "ArrowUp"   : (cords) => {return [cords[0], cords[1]-1]},
        "ArrowDown" : (cords) => {return [cords[0], cords[1]+1]},
        "ArrowLeftO" : "ArrowRight",
        "ArrowRightO": "ArrowLeft",
        "ArrowUpO"   : "ArrowDown",
        "ArrowDownO" : "ArrowUp",
    }
]

var specialKeyWords = [
    ["debug", debug]
];

document.addEventListener("keydown", (e) => {
    for (let i = 0; i < config.playersNumber; i++) {
        if (playerControls[i][e.code] != undefined) {
            if (config.antyStupid && gameConductor.players[i].lastMoveCode == playerControls[i][e.code+"O"]) break;
            gameConductor.players[i].move = [playerControls[i][e.code], e.code];
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
var startButton = "Space";

var playerControls = [
    {
        "KeyA": (cords) => {return [cords[0] - 1, cords[1]]},
        "KeyD": (cords) => {return [cords[0] + 1, cords[1]]},
        "KeyW": (cords) => {return [cords[0], cords[1]-1]},
        "KeyS": (cords) => {return [cords[0], cords[1]+1]}
    },
    {
        "ArrowLeft": (cords) => {return [cords[0] - 1, cords[1]]},
        "ArrowRight": (cords) => {return [cords[0] + 1, cords[1]]},
        "ArrowUp": (cords) => {return [cords[0], cords[1]-1]},
        "ArrowDown": (cords) => {return [cords[0], cords[1]+1]}
    }
];

var specialKeyWords = [
    ["debug", debug]
];

document.addEventListener("keydown", (e) => {
    console.log(e);
    for (let i = 0; i < config.playerNumber; i++) {
        if (playerControls[i][e.code] !== undefined) {
            
        }
    }
});



var debug = () => {

};


function playerControlsValid(amountOfPlayers) {
    if (amountOfPlayers <= playerControls.length) return true;
    else return false;
}
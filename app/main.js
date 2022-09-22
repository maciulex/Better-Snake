var config;
var gameConductor;
var drawer;
drawer = new Drawer;
var interfaces;
var leaderBoard;
var ERROR = "";

var settingsHTML = {
    size: document.querySelector("#mapSizeSetting"),
    playersAmount: document.querySelector("#playerAmountSetting"),
    speed: document.querySelector("#playerBaseSpeedSetting"),
}

function init(width, height, playerNumber, playerDefaultSpeed) {
    config = new Config(width, height, playerNumber, playerDefaultSpeed);
    if (!config.classReady) {
        config.htmlPlaces.board.innerHTML = `<div class="error">${ERROR}</div>`;
        return false;
    }
    if (!playerControlsValid(config.playersNumber)) {
        config.htmlPlaces.board.innerHTML = `<div class="error">Not enough controls for players</div>`;
        return false;
    }
    generateBoard(config.width, config.height);
    gameConductor = new GameConductor();
    initialDrawPlayers();
}

function compareCordinates(cords1, cords2) {
    if (cords1[0] == cords2[0] && cords1[1] == cords2[1]) return true;
    return false;
}

function applySettings() {
    let size = parseInt(settingsHTML.size.value);
    let playersAmount = parseInt(settingsHTML.playersAmount.value);
    let playerDefaultSpeed = parseInt(settingsHTML.speed.value)
    console.log(playerDefaultSpeed);
    init(size,size, playersAmount, playerDefaultSpeed);
    if (leaderBoard != undefined) leaderBoard.initLeaderBoard();
}

applySettings();
leaderBoard = new LeaderBoard;
interfaces = new Interfaces;



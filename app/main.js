var config;
var gameConductor;
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

function applySettings() {
    let size = parseInt(settingsHTML.size.value);
    let playersAmount = parseInt(settingsHTML.playersAmount.value);
    let playerDefaultSpeed = parseInt(settingsHTML.speed.value)
    init(size,size, playersAmount, playerDefaultSpeed);
}

applySettings();
leaderBoard = new LeaderBoard;
interfaces = new Interfaces;
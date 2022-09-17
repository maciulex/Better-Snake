var config;
var gameConductor;
var ERROR = "";

function init(width, height, playerNumber) {
    config = new Config(width, height, playerNumber);
    if (!config.classReady) {
        config.htmlPlaces.board.innerHTML = `<div class="error">${ERROR}</div>`;
        return false;
    }
    if (!playerControlsValid(config.playersNumber)) {
        config.htmlPlaces.board.innerHTML = `<div class="error">Not enough controls for players</div>`;
        return false;
    }
    gameConductor = new GameConductor();
    generateBoard(config.width, config.height);
    initialDrawPlayers();
}

init(11, 11, 1);
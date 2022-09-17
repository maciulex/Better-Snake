var config;
var gameConductor;


function init(width, height, playerNumber) {
    config = new Config(width, height, playerNumber);
    gameConductor = new GameConductor();
    generateBoard(config.width, config.height);
}

init(10, 10, 1);
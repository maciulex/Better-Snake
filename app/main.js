var config;
var gameConductor;


function init(width, height, playerNumber) {
    config = new Config(width, height, playerNumber);
    gameConductor = new GameConductor();
    generateBoard(config.width, config.height);
    initialDrawPlayers();
}

init(11, 11, 1);
class GameConductor {
    players = [];
    intervals = [];

    gameStarted() {

    }

    constructor() {
        for (let i = 0; i < config.playersNumber; i++) {
            this.players.push(new Player(config.playersSpawns[i], config.playersStyle[i], config.playersDefaultMove[i]));
        }
    }

}
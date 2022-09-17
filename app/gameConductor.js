class GameConductor {
    gameStarted = false;

    players = [];
    intervals = [];

    gameStartInit() {
        this.gameStarted = true;
        for (let i = 0; i < config.playersNumber; i++) {
            this.intervals.push(
                setTimeout((i) => {
                    this.players[i].makeMove();
                    this.setNewTimeout(i);
                }, this.players[i].speed , i)
            );
        }
    }

    setNewTimeout(i) {
        this.intervals[i] = setTimeout((i) => {
                                this.players[i].makeMove();
                                this.setNewTimeout(i);
                            }, this.players[i].speed , i);
    }
    gameStarted() {

    }

    constructor() {
        for (let i = 0; i < config.playersNumber; i++) {
            this.players.push(new Player(config.playersSpawns[i], config.playersStyle[i], config.playerDefaultSpeed, config.playersDefaultMove[i]));
        }
    }

}
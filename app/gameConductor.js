class GameConductor {
    gameStarted = false;

    playersPlaying = [];
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

    playerLoose(id) {
        this.playersPlaying[id] = false;
        clearTimeout(this.intervals[id]);
    }

    constructor() {
        for (let i = 0; i < config.playersNumber; i++) {
            this.playersPlaying.push(true);
            this.players.push(new Player(i, config.playersSpawns[i], config.playersStyle[i], config.playerDefaultSpeed, config.playersDefaultMove[i]));
        }
    }

}
class GameConductor {
    gameStarted = false;

    playersPlaying = [];
    players = [];
    boardAccesibility = [];
    
    intervals = [];
    powerUpInterval;
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
                                if (this.players[i].loosed) return;
                                this.players[i].makeMove();
                                this.setNewTimeout(i);
                            }, this.players[i].speed , i);
    }

    playerLoose(id) {
        this.playersPlaying[id] = false;
        clearTimeout(this.intervals[id]);
        console.log(this.players[id], id);
        for (let i = 0; i < this.players[id].snake.length; i++) {
            this.clearBoardAccesybility(this.players[id].snake[i]);
        }
    }

    setBoardAccesybilityToPlayer(cords, id) {
        this.boardAccesibility[cords[0]][cords[1]] = id;
    }

    clearBoardAccesybility(cords) {
        this.boardAccesibility[cords[0]][cords[1]] = -1;
    }

    powerUp(id, which) {

    }

    getRandomMapCords() {
        let x = Math.floor(Math.random() * config.width);
        let y = Math.floor(Math.random() * config.height);
        return [x, y];
    }

    spawmAllwaysOnMapPowerUps() {

    }
    
    trySpawmNotAllwaysOnMapPowerUps() {

    }

    constructor() {
        for (let x = 0; x < config.width; x++) {
            this.boardAccesibility.push([]);
            for (let y = 0; y < config.height; y++) {
                this.boardAccesibility[x].push(-1);
            }
        }
        for (let i = 0; i < config.playersNumber; i++) {
            this.playersPlaying.push(true);
            this.setBoardAccesybilityToPlayer(config.playersSpawns[i], i)
            this.players.push(new Player(i, config.playersSpawns[i], config.playersStyle[i], config.playerDefaultSpeed, config.playersDefaultMove[i]));
        }
        if (config.powerUpsNotAllwaysOnMapActive) {
            this.powerUpInterval = setInterval(() => {this.trySpawmNotAllwaysOnMapPowerUps();}, config.powerUpsNotAllwaysOnMapSpawnTryTime);
        }
        if (config.powerUpsAllwaysOnMapActive) this.spawmAllwaysOnMapPowerUps();
    }

}
class GameConductor {
    classReady = false;
    gameStarted = false;

    playersPlaying = [];
    players = [];
    boardAccesibility = [];
    
    intervals = [];
    powerUpInterval;

    powerUpsAllwaysOnMap = [];

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
        for (let i = 0; i < this.players[id].snake.length; i++) {
            this.clearBoardAccesybility(this.players[id].snake[i]);
            if (config.pngRealism) drawer.photoUndrawOn(this.players[id].snake[i]);
            else drawer.undrawOn(this.players[id].snake[i]);
        }
        let game = false;
        for (let i = 0; i < this.playersPlaying.length; i++) {
            if (this.playersPlaying[i]) game = true;
        }
        if (!game) {
            this.gameOver();
        }
    }

    setBoardAccesybilityToPlayer(cords, id) {
        this.boardAccesibility[cords[0]][cords[1]] = id;
    }

    clearBoardAccesybility(cords) {
        this.boardAccesibility[cords[0]][cords[1]] = -1;
    }

    gameOver() {
        for (let i = 0; i < this.intervals.length;i++) {
            clearInterval(this.intervals[i]);
        }
        clearInterval(this.powerUpInterval);
        if (config.htmlPlaces.board.classList.contains("ranimation")) config.htmlPlaces.board.classList.remove("ranimation");
        config.htmlPlaces.board.style.animation = 'none';
        config.htmlPlaces.board.offsetHeight; /* trigger reflow */
        config.htmlPlaces.board.style.animation = null; 
        config.htmlPlaces.board.classList.add("animation");
        window.setTimeout(() => {
            config.htmlPlaces.board.innerHTML = `<div class="error">GAME OVER</div><br><button onclick="applySettings(11, 11, 1);">Restart</button>`;

        }, 2500);
    }

    powerUp(id, which) {
        let indexUp = -1;
        for (let i = 0; i < config.powerUpsAllwaysOnMap.length; i++) {
            if (config.powerUps[config.powerUpsAllwaysOnMap[i]].id == which) {
                this.powerUpsAllwaysOnMap[i] = false;
                this.spawmAllwaysOnMapPowerUps();
                indexUp = config.powerUpsAllwaysOnMap[i];
                break;
            }   
        }
        if (indexUp == -1) {
            for (let i = 0; i < config.powerUpsNotAllwaysOnMap.length; i++) {
                if (config.powerUps[config.powerUpsNotAllwaysOnMap[i]].id == which) {
                    indexUp = config.powerUpsNotAllwaysOnMap[i];
                    break;
                }   
            }
        }
        switch (indexUp) {
            case 0:
                let effect = config.powerUps[indexUp].effect(this.players[id].snake.length) - this.players[id].snake.length;
                for (let i = 0; i < effect; i++) {
                    this.players[id].addCell();
                }
                leaderBoard.addPlayerScore(id, 10)
                leaderBoard.updateRanks();
            break;
            case 1:

            break;
            case 2:

            break;
            case 3:

            break;
            case 4:

            break;
        }
    }

    getRandomMapCords() {
        let x = Math.floor(Math.random() * config.width);
        let y = Math.floor(Math.random() * config.height);
        return [x, y];
    }

    checkBoardAccesibility(cords) {
        return this.boardAccesibility[cords[0]][cords[1]];
    }

    spawmAllwaysOnMapPowerUps() {
        for (let i = 0; i < config.powerUpsAllwaysOnMap.length; i++) {
            if (this.powerUpsAllwaysOnMap[i]) continue;
            while (true) {
                let cords = this.getRandomMapCords();
                if (this.boardAccesibility[cords[0]][cords[1]] == -1) {
                    this.boardAccesibility[cords[0]][cords[1]] = config.powerUpsAllwaysOnMap[i].id;
                    let color = config.powerUps[config.powerUpsAllwaysOnMap[i]].style.color;
                    drawer.drawOn(cords, color);
                    this.powerUpsAllwaysOnMap[i] = true;
                    this.boardAccesibility[cords[0]][cords[1]] = config.powerUps[config.powerUpsAllwaysOnMap[i]].id;
                    break;
                }           
            }
        }
    }
    
    trySpawmNotAllwaysOnMapPowerUps() {
        let idOfPowerUp = config.powerUpsNotAllwaysOnMap[Math.floor(Math.random() * config.powerUpsNotAllwaysOnMap.length)];
        //console.log(idOfPowerUp);
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
        this.classReady = true;
    }

}
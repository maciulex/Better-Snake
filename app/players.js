class Player {
    id = 0;
    snake = [];
    style = {};
    speed = 1000;
    move;
    lastMoveCode;
    loosed = false;

    makeMove() {
        let lastCords = this.snake[this.snake.length-1];
        undrawOn(lastCords);
        this.snake.unshift(this.move[0](this.snake[0]));
        this.lastMoveCode = this.move[1];

        if (this.checkIfOutsideMap(this.snake[0])) return this.loose();
        
        let headPlace = this.checkWhatCrawlIn();
        if (headPlace != -1) {
            if (headPlace < 8) {
                return this.loose();
            }
            gameConductor.powerUp(this.id, headPlace);
        }

        if (this.snake.length > 1) this.snake.pop();
        drawOn(this.snake[0], this.style.color);

        if (lastCords[0] != this.snake[this.snake.length-1][0] && lastCords[1] != this.snake[this.snake.length-1][1]) gameConductor.clearBoardAccesybility(lastCords);
        gameConductor.setBoardAccesybilityToPlayer(this.snake[0], this.id);
    }
    checkWhatCrawlIn() {
        return -1;
    }

    drawFirstElement() {

    }

    addCell() {

    }

    loose() {
        this.loosed = true;
        gameConductor.playerLoose(this.id);
    }

    checkIfOutsideMap(cords) {
        if (cords[0] < 0 || cords[1] < 0) return true;
        if (cords[0] >= config.width || cords[1] >= config.height) return true;
        return false;
    }

    constructor (id, startPoint, style, speed, move) {
        this.id = id;
        this.snake.push(startPoint);
        this.style = style;
        this.speed = speed
        this.move  = move;
    }
}
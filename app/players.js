class Player {
    id = 0;
    snake = [];
    style = {};
    speed = 1000;
    move;
    lastMoveCode;
    loosed = false;

    makeMove() {
        if (this.loosed) return;
        let newCordinates = this.move[0](this.snake[0]);
        if (this.checkIfOutsideMap(newCordinates)) return this.loose();
        
        let headPlace = this.checkWhatCrawlIn(newCordinates);
        if (headPlace < 8 && headPlace != -1) return this.loose();
        
        this.snake.unshift(newCordinates);
        let lastCords = this.snake.pop();

        this.lastMoveCode = this.move[1];

        
        if (headPlace != -1) {
            gameConductor.powerUp(this.id, headPlace);
        }

        undrawOn(lastCords);
        drawOn(this.snake[0], this.style.color);
        drawOn(this.snake[this.snake.length-1], this.style.color);
        gameConductor.clearBoardAccesybility(lastCords);
        gameConductor.setBoardAccesybilityToPlayer(this.snake[0], this.id);
        gameConductor.setBoardAccesybilityToPlayer(this.snake[this.snake.length-1], this.id);

        // console.log(this.snake.length)
        // if (lastCords[0] != this.snake[this.snake.length-1][0] && lastCords[1] != this.snake[this.snake.length-1][1]) {
        // }
    }
    checkWhatCrawlIn(cords) {
        return gameConductor.checkBoardAccesibility(cords);
    }

    drawFirstElement() {

    }

    addCell() {
        this.snake.push(this.snake[this.snake.length-1]);
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
class Player {
    id = 0;
    snake = [];
    style = {};
    speed = 1000;
    move;
    lastMoveCode;

    makeMove() {
        undrawOn(this.snake[this.snake.length-1]);
        this.snake.unshift(this.move[0](this.snake[0]));
        this.lastMoveCode = this.move[1];

        if (this.checkIfOutsideMap(this.snake[0])) this.loose();


        if (this.snake.length > 1) this.snake.pop();
        drawOn(this.snake[0], this.style.color);
    }

    drawFirstElement() {

    }

    addCell() {

    }

    loose() {
        gameConductor.playerLoose();
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
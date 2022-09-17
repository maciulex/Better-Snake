class Player {
    snake = [];
    style = {};
    speed = 1000;
    move;
    lastMoveCode;

    makeMove() {
        undrawOn(this.snake[this.snake.length-1]);
        this.snake.unshift(this.move[0](this.snake[0]));
        this.lastMoveCode = this.move[1];
        if (this.snake.length > 1) this.snake.pop();
        drawOn(this.snake[0], this.style.color);
    }

    drawFirstElement() {

    }

    addCell() {

    }

    constructor (startPoint, style, speed, move) {
        this.snake.push(startPoint);
        this.style = style;
        this.speed = speed
        this.move  = move;
    }
}
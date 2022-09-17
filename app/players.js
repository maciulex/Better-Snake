class Player {
    snake = [];
    style = {};

    move;

    addCell() {

    }

    constructor (startPoint, style, move) {
        this.snake.push(startPoint);
        this.style = style;
        this.move  = move;
    }
}
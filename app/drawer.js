class Drawer {
    getHeadRotation(direction) {
        switch (direction[2]){
            case "left":
                return "rotate(270deg)";
            case "right":
                return "rotate(90deg)";
            case "up":
                return "rotate(0deg)";
            case "down":
                return "rotate(180deg)";
        }
    }

    photoUndrawOn(cords) {
        let element  = document.querySelector(`#x${cords[0]}y${cords[1]}`);

        element.style.backgroundImage = "";
        element.style.filter = "";
    }

    photoDrawOn(cords, color, direction, head = false, playerID) {
        let element  = document.querySelector(`#x${cords[0]}y${cords[1]}`);
        element.style.filter = config.playersStyle[playerID].filter;
        if (direction === undefined) return;
        if (head) {
            element.style.backgroundImage = "url('../snake/head.png')";
            element.style.transform = this.getHeadRotation(direction);
            return;
        } 
        if (direction[2] == undefined || direction[0][2] == direction[1][2]) {
            element.style.backgroundImage = "url('../snake/updownleftright.png')";
            element.style.transform = this.getHeadRotation(this.getHeadRotation(direction[0]));
            return
        }
        if (direction[0][2] != direction[1][2]) {
            let data = this.getTurnSnake(direction);
            if (data == null) return;

            element.style.backgroundImage = data[1];
            element.style.transform = data[0];
        }
    } 
    
    getStraightSnake(dir1, dir2) {

    }

    getTurnSnake(direction) {
        switch (direction[0][2]) {
            case "left":
                switch (direction[1][2]){
                    case "up":
                        return ["rotate(0deg)", "url('../snake/left.png')"];
                    case "down":
                        return ["rotate(180deg)", "url('../snake/right.png')"];
                }
            case "right":
                switch (direction[1][2]){
                    case "up":
                        return ["rotate(0deg)", "url('../snake/right.png')"];
                    case "down":
                        return ["rotate(180deg)", "url('../snake/left.png')"];
                }
            case "down":
                switch (direction[1][2]){
                    case "right":
                        return ["rotate(90deg)", "url('../snake/right.png')"];
                    case "left":
                        return ["rotate(270deg)", "url('../snake/left.png')"];
                }
            case "up":
                switch (direction[1][2]){
                    case "left":
                        return ["rotate(270deg)", "url('../snake/right.png')"];
                    case "right":
                        return ["rotate(90deg)", "url('../snake/left.png')"];
                }
        }
        return null;
    }

    drawOn(cords, color) {
        document.querySelector(`#x${cords[0]}y${cords[1]}`).style.backgroundColor = color;
    } 
    
    undrawOn(cords) {
        document.querySelector(`#x${cords[0]}y${cords[1]}`).style.backgroundColor = "";
    }
}
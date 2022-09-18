class Config {
    classReady = false;
    width  = 0;
    height = 0;

    playersNumber = 1;

    // if player click to move right when he come from right then this event will not be registred
    antyStupid = true;
    
    playerDefaultSpeed = 500;

    playersStyle = [
        {"color": "red"},
        {"color": "green"},
        {"color": "blue"},
        {"color": "purple"},

        {"color": "orange"},
        {"color": "pink"},
        {"color": "yellow"},
        {"color": "black"},
    ];

    playersDefaultMove = [
        [(cords) => {return [cords[0]+1, cords[1]]}, null],
        [(cords) => {return [cords[0]-1, cords[1]]}, null],
        [(cords) => {return [cords[0]-1, cords[1]]}, null],
        [(cords) => {return [cords[0]+1, cords[1]]}, null],

        (cords) => {return [cords[0], cords[1]+1],   null},
        (cords) => {return [cords[0], cords[1]-1],   null},
        (cords) => {return [cords[0]+1, cords[1]],   null},
        (cords) => {return [cords[0]-1, cords[1]],   null}
    ];

    playersSpawns = [];

    powerUps = [
        {
            id: 10,
            active: true,
            name: "speedup",
            displayName: "Przyśpieszenie",
            effect: (speed) => {
                return Math.ceil(speed + (speed * 0.3));
            }
        },
        {
            id: 11,
            active: true,
            name: "slowdown",
            displayName: "Zwolnienie",
            effect: (speed) => {
                return Math.ceil(speed - (speed * 0.3));
            }
        },
        {
            id: 12,
            active: true,
            name: "eater",
            displayName: "Odgryzacz",
            effect: null
        },
        {
            id: 13,
            active: true,
            name: "longer",
            displayName: "Powiększenie",
            effect: (size) => {
                return size + 1;
            }
        },
        {
            id: 14,
            active: true,
            name: "cannibal",
            displayName: "Kanibal",
            effect: (size) => {
                return Math.ceil(size - (size * 0.2));
            }
        }
    ];

    htmlPlaces = {
        board: document.querySelector("#BOARD")
    }

    constructor (width, height, playersAmount) {
        if (playersAmount < 1 || playersAmount > 8) {
            ERROR = "INVALID PLAYER NUMBER";
            return;
        }
        if (width < 1 || height < 1) {
            ERROR = "INVALID BOARD SIZE";
            return;
        }
        this.width = width;
        this.height = height;
        this.playersNumber = playersAmount;

        this.playersSpawns = [
            [1, 1],
            [this.width - 2, this.height - 2],
            [this.width - 2, 1],
            [1, this.height - 2],

            [Math.floor(this.width/2), 1],
            [Math.floor(this.width/2), this.height - 2],
            [1, Math.floor(this.height / 2)],
            [this.width - 2, Math.floor(this.height / 2)]
        ];

        this.classReady = true;
    }
}
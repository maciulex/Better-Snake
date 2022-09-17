class Config {
    classReady = false;
    width  = 0;
    height = 0;
    

    players = [];
    playersNumber = 1;
    
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
    playersSpawns = [];

    powerUps = [
        {
            active: true,
            name: "speedup",
            displayName: "Przyśpieszenie",
            effect: (speed) => {
                return Math.ceil(speed + (speed * 0.3));
            }
        },
        {
            active: true,
            name: "slowdown",
            displayName: "Zwolnienie",
            effect: (speed) => {
                return Math.ceil(speed - (speed * 0.3));
            }
        },
        {
            active: true,
            name: "eater",
            displayName: "Odgryzacz",
            effect: null
        },
        {
            active: true,
            name: "longer",
            displayName: "Powiększenie",
            effect: (size) => {
                return size + 1;
            }
        },
        {
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
            alert("INVALID PLAYER NUMBER");
            return;
        }
        if (width < 1 || height < 1) {
            alert("INVALID BOARD SIZE");
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

        for (let i = 0; i < playersAmount; i++) {
            this.players.push(new Player(this.playersSpawns[i]));
        }

        this.classReady = true;
    }
}
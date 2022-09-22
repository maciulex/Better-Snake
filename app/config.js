class Config {
    classReady = false;
    width  = 0;
    height = 0;
    maxplayerNumber = 8;
    playersNumber = 1;

    // if player click to move right when he come from right then this event will not be registred
    antyStupid = true;
    
    playerDefaultSpeed = 500;

    pngRealism = true;

    playerMainName = [
        "Czerwony",
        "Zielony",
        "Niebieski",
        "Fioletowy",

        "Pomarańczowy",
        "Różuwu",
        "Zółty",
        "Czarny"
    ];

    playersStyle = [
        {"color": "red",    "filter": "invert(22%) sepia(68%) saturate(7490%) hue-rotate(355deg) brightness(91%) contrast(123%)"},
        {"color": "green",  "filter": "invert(76%) sepia(47%) saturate(6752%) hue-rotate(80deg) brightness(112%) contrast(128%)"},
        {"color": "blue",   "filter": "invert(9%) sepia(99%) saturate(7047%) hue-rotate(247deg) brightness(90%) contrast(146%)"},
        {"color": "purple", "filter": "invert(67%) sepia(74%) saturate(7430%) hue-rotate(276deg) brightness(83%) contrast(85%)"},

        {"color": "orange", "filter": "invert(73%) sepia(23%) saturate(6518%) hue-rotate(359deg) brightness(101%) contrast(106%)"},
        {"color": "pink",   "filter": "invert(95%) sepia(24%) saturate(7400%) hue-rotate(230deg) brightness(111%) contrast(105%)"},
        {"color": "yellow", "filter": "invert(90%) sepia(91%) saturate(4803%) hue-rotate(358deg) brightness(104%) contrast(105%)"},
        {"color": "black",  "filter": ""},
    ];

    playersDefaultMove = [
        [(cords) => {return [cords[0]+1, cords[1], "right"]}, null],
        [(cords) => {return [cords[0]-1, cords[1], "left"]}, null],
        [(cords) => {return [cords[0]-1, cords[1], "left"]}, null],
        [(cords) => {return [cords[0]+1, cords[1], "right"]}, null],

        [(cords) => {return [cords[0], cords[1]+1, "up"]}, null],
        [(cords) => {return [cords[0], cords[1]-1, "down"]}, null],
        [(cords) => {return [cords[0]+1, cords[1], "right"]}, null],
        [(cords) => {return [cords[0]-1, cords[1], "left"]}, null]
    ];

    playersSpawns = [];

    powerUpsAllwaysOnMapActive = true;
    powerUpsAllwaysOnMap = [0];

    powerUpsNotAllwaysOnMapActive = true;
    powerUpsNotAllwaysOnMap = [1,2,3,4];
    powerUpsNotAllwaysOnMapSpawnTryTime = 3000;

    powerUps = [
        {
            id: 10,
            active: true,
            name: "longer",
            displayName: "Powiększenie",
            style: {color: "darkgreen"},
            effect: (size) => {
                return size + 1;
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
            name: "speedup",
            displayName: "Przyśpieszenie",
            effect: (speed) => {
                return Math.ceil(speed + (speed * 0.3));
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
        board: document.querySelector("#BOARD"),
        interfaces: {
            controls: document.querySelector(".mainControlsSet"),
            controlsMainWindow: document.querySelector(".userControlsInterface"),
            nicknames: document.querySelector(".mainNicknamesSet"),
            nicknamesMainWindow: document.querySelector(".userNicknameInterface"),
        },

        leaderBoard: {
            mainTable: document.querySelector(".Leaderboard"),
            mainTableRanks: document.querySelector(".leaderBoardRanks"),
        },
    }

    constructor (width, height, playersAmount, playerDefaultSpeed) {
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
        this.playerDefaultSpeed = playerDefaultSpeed;
    }
}
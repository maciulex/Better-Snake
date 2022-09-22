class LeaderBoard {
    playersNicknames = [];
    
    gameInProgressLiderboard = [];
    localRanks = [];
    globalGameLiderboard = [];


    addPlayerScore(id, score) {
        for (let i = 0; i < this.gameInProgressLiderboard.length; i++) {
            if (this.gameInProgressLiderboard[i][0] == id) return this.gameInProgressLiderboard[i][1] += score;
        }
    }

    setPlayerNickname(nickname, player) {
        this.playersNicknames[player] = nickname;
        this.updateRanks();
    }

    getPlayerNickname(id) {
        if (this.playersNicknames[id] === undefined) return null;
        return this.playersNicknames[id];
    }

    getSortedLocalRanks() {
        let sorted = false;
        while (!sorted) {
            sorted = true;

            for (let i = 0; i < this.localRanks.length - 1; i++) {
                if (this.gameInProgressLiderboard[this.localRanks[i]][1] < this.gameInProgressLiderboard[this.localRanks[i+1]][1]) {
                    let tmp = this.localRanks[i];
                    this.localRanks[i] = this.localRanks[i+1];
                    this.localRanks[i+1] = tmp;
                    sorted = false;
                }
            }

        }
    }

    updateRanks() {
        this.getSortedLocalRanks();
        for (let i = 0; i < config.playersNumber; i++) {
            let playerNickname = this.getPlayerNickname(this.localRanks[i]);

            if (playerNickname === null) playerNickname = config.playerMainName[this.localRanks[i]];
            document.querySelector(`.rank${i+1} td:nth-child(1)`).innerText = playerNickname;
            document.querySelector(`.rank${i+1} td:nth-child(2)`).innerText = this.gameInProgressLiderboard[this.localRanks[i]][1];
        }
    }

    initLeaderBoard() {
        this.gameInProgressLiderboard = [];
        this.localRanks = [];
        for (let i = 1; i < config.maxplayerNumber+1; i++) {
            document.querySelector(`.rank${i}`).setAttribute("style", "display:none");
        }
        for (let i = 1; i < config.playersNumber+1; i++) {
            this.localRanks.push(i-1);
            this.gameInProgressLiderboard[i-1] = [i-1, 10]
            document.querySelector(`.rank${i}`).setAttribute("style", "block");
        }

        this.updateRanks();
    }

    constructor() {
        config.htmlPlaces.leaderBoard.mainTableRanks.innerHTML = "";
        
        config.htmlPlaces.leaderBoard.mainTableRanks.innerHTML += `
            <tr>
                <th>Gracz:</th>
                <th>Wynik:</th>
            </tr>
        `; 
        for (let i = 0; i < config.maxplayerNumber+1; i++) {

            config.htmlPlaces.leaderBoard.mainTableRanks.innerHTML += `
                <tr class="rank${i}" style="display:none">
                    <td>Gracz:</td>
                    <td>Wynik:</td>
                </tr>
            `; 
        }
        this.initLeaderBoard();
    }
}
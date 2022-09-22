class LeaderBoard {
    playersNicknames = [];
    
    gameInProgressLiderboard = [];
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

    updateRanks() {
        for (let i = 0; i < config.playersNumber; i++) {
            let playerNickname = this.getPlayerNickname(i, true);

            if (playerNickname === null) playerNickname = config.playerMainName[i];

            document.querySelector(`.rank${i+1} td:nth-child(1)`).innerText = playerNickname;
            document.querySelector(`.rank${i+1} td:nth-child(2)`).innerText = this.gameInProgressLiderboard[i][1];
        }
    }

    initLeaderBoard() {

        for (let i = 1; i < config.maxplayerNumber+1; i++) {
            document.querySelector(`.rank${i}`).setAttribute("style", "display:none");
        }
        for (let i = 1; i < config.playersNumber+1; i++) {
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
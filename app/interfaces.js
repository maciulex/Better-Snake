class Interfaces {
    theme = "dark";
    initControlsInterFace() {
        config.htmlPlaces.interfaces.controls.innerHTML = "";
        for (let i = 0; i < 8; i++) {
            let controls = [];
            for (let keys in playerControlsRaw[i]){
                if (keys[keys.length-1] == "O" && keys[keys.length-2] != "y") continue;
                controls[playerControlsRaw[i][keys]] = keys; 
            }
            if (controls[0] == undefined) controls = ["Nie ustawiono","Nie ustawiono","Nie ustawiono","Nie ustawiono"];
            let nickname = leaderBoard.getPlayerNickname(i);
            if (nickname == null) nickname = "Nie ustawiono";

            config.htmlPlaces.interfaces.controls.innerHTML += `
                <table>
                    <tbody>
                        <tr>
                            <th colspan="3" style="color: ${config.playersStyle[i].color};">
                                ${config.playerMainName[i]}<br>
                                <span>${nickname}</span>
                            </th>
                        </tr>
                        <tr>
                            <td></td>
                            <td class="control" onclick="setPlayerInput(${i}, ${2})">${controls[2]}</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td class="control" onclick="setPlayerInput(${i}, ${0})">${controls[0]}</td>
                            <td class="control" onclick="setPlayerInput(${i}, ${3})">${controls[3]}</td>
                            <td class="control" onclick="setPlayerInput(${i}, ${1})">${controls[1]}</td>
                        </tr>
                    </tbody>
                </table>
            `;
        }
    }

    initNicknamesInterFace() {
        config.htmlPlaces.interfaces.nicknames.innerHTML = "";
        for (let i = 0; i < 8; i++) {
            let nickname = leaderBoard.getPlayerNickname(i);
            if (nickname == null) nickname = "Nie ustawiono";
            config.htmlPlaces.interfaces.nicknames.innerHTML += `
                <table>
                    <tbody>
                        <tr>
                            <th style="color: ${config.playersStyle[i].color};">
                                ${config.playerMainName[i]}<br>
                                <span>${nickname}</span>
                            </th>
                        </tr>
                        <tr>
                            <td class="nickname"><input type="text" id="setUserNick${i}"></td>
                            <td class="nickname"><button onclick='interfaces.setUserNickname(document.querySelector("#setUserNick${i}").value, ${i});'>Ustaw Nick</button></td>
                        </tr>
                    </tbody>
                </table>
            `;
        }
    }

    setUserNickname(value, player) {
        console.log(value, player);
        leaderBoard.setPlayerNickname(value, player);
        this.initNicknamesInterFace();
        this.initControlsInterFace();
    }

    showConrolsInterface(show) {
        if (show) return config.htmlPlaces.interfaces.controlsMainWindow.setAttribute("style", "display: block");
        config.htmlPlaces.interfaces.controlsMainWindow.setAttribute("style", "display: none");
        // if (show) return config.htmlPlaces.interfaces.controls.setAr = "display:block";
        // config.htmlPlaces.interfaces.controls.style = "display:none";
    }
    showNicknamesInterface(show) {
        if (show) return config.htmlPlaces.interfaces.nicknamesMainWindow.setAttribute("style", "display: block");
        config.htmlPlaces.interfaces.nicknamesMainWindow.setAttribute("style", "display: none");
        // if (show) return config.htmlPlaces.interfaces.controls.setAr = "display:block";
        // config.htmlPlaces.interfaces.controls.style = "display:none";
    }

    changeTheme() {
        let element = document.querySelector("body");
        switch (this.theme) {
            case "dark":
                this.theme = "light";
                element.classList.remove("dark");
                element.classList.add("light");
            break;
            case "light":
                this.theme = "dark";
                element.classList.remove("light");
                element.classList.add("dark");
            break;
        }
    }

    constructor() {
        this.initControlsInterFace();
        this.initNicknamesInterFace();
    }
}
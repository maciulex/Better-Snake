class Interfaces {
    initControlsInterFace() {
        config.htmlPlaces.interfaces.controls.innerHTML = "";
        for (let i = 0; i < 8; i++) {
            let controls = [];
            for (let keys in playerControlsRaw[i]){
                if (keys[keys.length-1] == "O" && keys[keys.length-2] != "y") continue;
                controls[playerControlsRaw[i][keys]] = keys; 
            }
            if (controls[0] == undefined) controls = ["Nie ustawiono","Nie ustawiono","Nie ustawiono","Nie ustawiono"];
            config.htmlPlaces.interfaces.controls.innerHTML += `
                <table>
                    <tbody>
                        <tr>
                            <th colspan="3" style="color: ${config.playersStyle[i].color};">
                                ${config.playerMainName[i]}<br>
                                <span>nie ustawiono</span>
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

    showConrolsInterface(show) {
        if (show) return config.htmlPlaces.interfaces.controlsMainWindow.setAttribute("style", "display: block");
        config.htmlPlaces.interfaces.controlsMainWindow.setAttribute("style", "display: none");
        // if (show) return config.htmlPlaces.interfaces.controls.setAr = "display:block";
        // config.htmlPlaces.interfaces.controls.style = "display:none";
    }

    constructor() {
        this.initControlsInterFace();
    }
}
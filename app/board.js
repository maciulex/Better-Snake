function generateBoard(x, y) {
    var result = `<table><tbody>`;

    for (let z = 0; z < y; z++) {
        result += "<tr>";
        for (let i = 0; i < x; i++) {
            result += `<td id="x${i}y${z}"></td>`;
        }
        result += "</tr>";
    }

    result += `</tbody></table>`;
    config.htmlPlaces.board.innerHTML = result;
}

function initialDrawPlayers() {
    for (let i = 0; i < config.playersNumber; i++) {
        let playerCords = gameConductor.players[i].snake;
        document.querySelector(`#x${playerCords[0][0]}y${playerCords[0][1]}`).style.backgroundColor = gameConductor.players[i].style.color;
    }
}
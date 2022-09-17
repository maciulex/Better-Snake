function generateBoard(x, y) {
    var result = `<table><tbody>`;

    for (; y > 0; y--) {
        result += "<tr>";
        for (let i = 0; i < x; i++) {
            result += "<td></td>";
        }
        result += "</tr>";
    }

    result += `</tbody></table>`;
    config.htmlPlaces.board.innerHTML = result;
}
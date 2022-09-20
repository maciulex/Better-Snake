class Interfaces {
    initControlsInterFace() {
        config.htmlPlaces.interfaces.controls.innerHTML = "";
        for (let i = 0; i < 8; i++) {
            config.htmlPlaces.interfaces.controls.innerHTML += `
                <table>
                    <tbody>
                        <tr>
                            <th colspan="3">Niebieski</th>
                        </tr>
                        <tr>
                            <td></td>
                            <td class="control">-</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td class="control">-</td>
                            <td class="control">-</td>
                            <td class="control">-</td>
                        </tr>
                    </tbody>
                </table>
            `;
        }
    }

    constructor() {
        this.initControlsInterFace();
    }
}
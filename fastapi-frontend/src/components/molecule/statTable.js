import StatBar from "../atom/statBar";

export default function StatTable (props){
    return (
        <table className={props.tableClass}>
            <tbody>
                <tr>
                    <th>HP</th>
                    <td className={props.tableDataClass}>{props.hp}</td>
                    <td className={props.tableDataClass} style={{width: "30vh"}}><StatBar barPersent={`${calculatePercentage(props.hp)}%`} color={"#FF0000"}/></td>
                    <td className={props.tableDataClass}>{Math.floor((props.hp * 2) + 111)}</td>
                    <td className={props.tableDataClass}>{Math.floor((props.hp * 2) + 204)}</td>
                </tr>
                <tr>
                    <th>Attack</th>
                    <td className={props.tableDataClass}>{props.atk}</td>
                    <td className={props.tableDataClass} style={{width: "30vh"}}><StatBar barPersent={`${calculatePercentage(props.atk)}%`} color={"#F08030"}/></td>
                    <td className={props.tableDataClass}>{Math.floor(((props.atk * 2) + 6) * 0.9)}</td>
                    <td className={props.tableDataClass}>{Math.floor(((props.atk * 2) + 99) * 1.1)}</td>
                </tr>
                <tr>
                    <th>Defense</th>
                    <td className={props.tableDataClass}>{props.def}</td>
                    <td className={props.tableDataClass} style={{width: "30vh"}}><StatBar barPersent={`${calculatePercentage(props.def)}%`} color={"#F8D030"}/></td>
                    <td className={props.tableDataClass}>{Math.floor(((props.def * 2) + 6) * 0.9)}</td>
                    <td className={props.tableDataClass}>{Math.floor(((props.def * 2) + 99) * 1.1)}</td>
                </tr>
                <tr>
                    <th>Sp. Atk</th>
                    <td className={props.tableDataClass}>{props.spa}</td>
                    <td className={props.tableDataClass} style={{width: "30vh"}}><StatBar barPersent={`${calculatePercentage(props.spa)}%`} color={"#6890F0"}/></td>
                    <td className={props.tableDataClass}>{Math.floor(((props.spa * 2) + 6) * 0.9)}</td>
                    <td className={props.tableDataClass}>{Math.floor(((props.spa * 2) + 99) * 1.1)}</td>
                </tr>
                <tr>
                    <th>Sp. Def</th>
                    <td className={props.tableDataClass}>{props.spd}</td>
                    <td className={props.tableDataClass} style={{width: "30vh"}}><StatBar barPersent={`${calculatePercentage(props.spd)}%`} color={"#78C850"}/></td>
                    <td className={props.tableDataClass}>{Math.floor(((props.spd * 2) + 6) * 0.9)}</td>
                    <td className={props.tableDataClass}>{Math.floor(((props.spd * 2) + 99) * 1.1)}</td>
                </tr>
                <tr>
                    <th>Speed</th>
                    <td className={props.tableDataClass}>{props.spe}</td>
                    <td className={props.tableDataClass} style={{width: "30vh"}}><StatBar barPersent={`${calculatePercentage(props.spe)}%`} color={"#F85888"}/></td>
                    <td className={props.tableDataClass}>{Math.floor(((props.spe * 2) + 6) * 0.9)}</td>
                    <td className={props.tableDataClass}>{Math.floor(((props.spe * 2) + 99) * 1.1)}</td>
                </tr>
            </tbody>
        </table>
    )
}

function calculatePercentage(baseStat, midpoint = 90, slope = 35) {
    const exponent = -(baseStat - midpoint) / slope;
    const percentage = 1 / (1 + Math.exp(exponent)) * 100;
    return percentage;
}
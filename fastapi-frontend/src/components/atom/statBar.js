export default function StatBar (props){
    return (
        <div>
            <div className="w3-container w3-center" style={{width: props.barPersent, height: "0.85rem", backgroundColor: props.color}}></div>
        </div>
    )
}
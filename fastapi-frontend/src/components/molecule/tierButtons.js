import Button from "../atom/button"

export default function SelectionBar(props) {
    const tierButtons = [];

    const allButtons = props.allTiers.map((tier, index) => (
        <div key={index} className="col">
            <Button 
                text={tier}
                clickHandler={props.clickHandler}
                className={props.className}
            />
        </div>
    ));

    tierButtons.push(
        <div key="allButtonsRow" className="row justify-content-between">
            {allButtons}
        </div>
    );

    return (
        <div className="container">
            {tierButtons}
        </div>
    );
}
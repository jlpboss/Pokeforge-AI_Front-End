import Button from "../atom/button"

export default function SelectionBar(props) {
    const tierButtons = [];

    for (let tierIndex = 0; tierIndex < props.allTiers.length; tierIndex += 6) {
        const buttonsInRow = [];
        for (let i = 0; i < 6 && tierIndex + i < props.allTiers.length; i++) {
            buttonsInRow.push(
                <div key={tierIndex + i} className="col">
                    <Button 
                    text={props.allTiers[tierIndex + i]}
                    clickHandler={props.clickHandler}
                    className={"custom-button"}
                    />
                </div>
            );
        }
        tierButtons.push(
            <div key={tierIndex} className="row justify-content-between">
                {buttonsInRow}
            </div>
        );
    }
    return (
        <div className="container">
            {tierButtons}
        </div>
    );
}
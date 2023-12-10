export default function Button(props){
        return (
            <>
                <input 
                type="button"
                id={props.text} 
                onClick={props.clickHandler}
                value={props.text}
                className={props.className}
                style={props.style}
                />
            </>
        )
    }
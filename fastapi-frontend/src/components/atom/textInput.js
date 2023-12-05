export default function TextInput(props){
    return (
        <>
          <label>{props.label}</label>
          <input type="text" value={props.value} onChange={props.handleInputChange} />
        </>
      )
}
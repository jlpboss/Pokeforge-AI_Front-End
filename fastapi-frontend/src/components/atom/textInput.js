export default function TextInput(props){
    return (
      <div className='container'>
        <div className='row justify-content-between'>
          <div className='col text-center'>
            <label className={props.textClassName}>{props.label}</label>
          </div>
        </div>
        <div className='row justify-content-between'>
          <div className='col text-center'>
            <input type="text" value={props.value} onChange={props.handleInputChange} className={props.className}/>
          </div>
        </div>
      </div>
      )
}
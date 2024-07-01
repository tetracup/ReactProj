import './App.css'

function FinalForm (props) {
 return (
     <>
        <div>
        <pre>
        {JSON.stringify(props.formInputs, null, 2)}
        </pre>
        </div>
        <button onClick = {props.stateChangeBtns}> Modify! </button>
     </>
    
 )
}

export default FinalForm; 
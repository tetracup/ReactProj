

function InputField ({text, _type = "text", formInputs, fID}) {

    fID = fID.split('.');

    formInputs[fID[0]] == null ? formInputs[fID[0]] = {} : null; 

    const handleChange = (e) => {
        formInputs[fID[0]][fID[1]] = e.target.value
    }

    return (
        <>
            <div className = "inputField" >
                <p> {text} </p> 
                {/*<input type = {_type} onChange = {handleChange} defaultValue = {formInputs[fID[0], fID[1]]}/> */}
                <input  type = {_type} onChange = {(e) => handleChange(e)} defaultValue = {formInputs[fID[0]][fID[1]]} />
            </div>
        </>
    )
}

export default InputField
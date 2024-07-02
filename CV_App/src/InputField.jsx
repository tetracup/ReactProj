

function InputField ({text, _type = "text", formInputs, fID, count, isMultiple = false}) {

    fID = fID.split('.');

    formInputs[fID[0]] == null ? formInputs[fID[0]] = {} : null; 
    if(isMultiple)
    {
        formInputs[fID[0]][fID[1]] == null ? formInputs[fID[0]][fID[1]] = {} : null; 
    }

    const handleChange = (e) => {
        formInputs[fID[0]][fID[1]] = e.target.value
    }
    
    const inputs = [];
    if(isMultiple){
        for (let i = 1; i <= count; i++) {
            inputs.push(
                <input  type = {_type} onChange = {(e) => handleChange(e)} defaultValue = {formInputs[fID[0]][fID[1]]} />
            );
        }
    }
    

    

    return (
        <>
            <div className = "inputField">
                <p> {text} </p> 
                {/*<input type = {_type} onChange = {handleChange} defaultValue = {formInputs[fID[0], fID[1]]}/> */}
                <input  type = {_type} onChange = {(e) => handleChange(e)} defaultValue = {formInputs[fID[0]][fID[1]]} />

                

            </div>
        </>
    )
}

export default InputField
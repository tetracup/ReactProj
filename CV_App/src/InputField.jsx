
function InputField ({text, _type, onChange, value}) {
    return(
        <>
            <div className = "inputField">
                <p> {text} </p> 
                <input type = {_type} onChange = {onChange} defaultValue = {value} />
                
            </div>
        </>
    )
}

InputField.defaultProps = {
    _type: "text"
}

export default InputField

function InputField ({text, _type}) {
    return(
        <>
            <div className = "inputField">
                <p> {text} </p> 
                <input type = {_type} />
                
            </div>
        </>
    )
}

InputField.defaultProps = {
    _type: "text"
}

export default InputField
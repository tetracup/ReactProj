
function InputField (props) {
    return(
        <>
            <div className = "inputField">
                <p> {props.text} </p> 
                <input type = "text" />
            </div>
        </>
    )
}

export default InputField
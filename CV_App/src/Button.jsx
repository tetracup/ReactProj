import './App.css'

function Button (props) {
    return (
        <button onClick = {props.clickFunc} className = "endBtns" type = "button" id = {props.text}> {props.text} </button>
    )
}

export default Button; 
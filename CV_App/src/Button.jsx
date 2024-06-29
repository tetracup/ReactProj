import './App.css'

function Button (props) {
    const handleClick = () => {
        return; 
    }
    return (
        <button onClick = {handleClick} className = "endBtns" type = "button" id = {props.text}> {props.text} </button>
    )
}

export default Button; 
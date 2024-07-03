import './App.css'
import {useState} from 'react'
import Button from './Button.jsx'


function MultipleInputField ({text, formInputs, fID}) {
    fID = fID.split('.')
    const [inputFieldsCount, setInputFieldsCount] = useState(localStorage.getItem(fID[0] + fID[1]) === null ? 1 : parseInt(window.localStorage.getItem(fID[0] + fID[1])))
    
    
    const handleAdd = () => {
        setInputFieldsCount(inputFieldsCount + 1)
    }

    const handleRemove = () => {
        setInputFieldsCount(inputFieldsCount - 1)
        delete formInputs[fID[0]][fID[1]][inputFieldsCount]
    }

    formInputs[fID[0]] == null ? formInputs[fID[0]] = {} : null; 
    formInputs[fID[0]][fID[1]] == null ? formInputs[fID[0]][fID[1]] = {} : null; 
    
    const handleChange = (e, ind) => {
        formInputs[fID[0]][fID[1]][ind] = e.target.value
    }

    const inputList = []

    for(let i = 1; i <= inputFieldsCount; i++){
        inputList.push(i)
    }

    window.localStorage.setItem(fID[0] + fID[1], inputFieldsCount)

    
    return (
        <div>
            {/* <InputField text = {text} formInputs = {formInputs} fID = {fID} count = {inputFieldsCount} isMultiple = {true}/> */}
            <div className = "inputField" >
                <p> {text} </p>
                {inputList.map((count) => (
                    <input style = {{marginBottom: "10px"}} key = {count} defaultValue = {formInputs[fID[0]][fID[1]][count]} onChange = {(e) => {handleChange(e, count)}}/>
                ))}
                <div>
                    <Button text = "Add" clickFunc = {handleAdd} />
                    {inputFieldsCount > 1 ? <Button text = "Remove" clickFunc = {handleRemove} /> : null}
                </div>
                
            </div>
            
        </div>
    )
}

export default MultipleInputField
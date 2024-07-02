import './App.css'
import {useState} from 'react'
import InputField from './InputField.jsx'
import Button from './Button.jsx'


function MultipleInputField ({text, formInputs, fID}) {
    const [inputFieldsCount, setInputFieldsCount] = useState(1)
    
    const handleAdd = () => {
        setInputFieldsCount(inputFieldsCount + 1)
    }
    return (
        <div>
            <InputField text = {text} formInputs = {formInputs} fID = {fID} count = {inputFieldsCount} isMultiple = {true}/>
            <Button text = "Add" clickFunc = {handleAdd} />
        </div>
    )
}

export default MultipleInputField
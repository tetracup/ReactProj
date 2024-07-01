
import './App.css'
import {useState} from "react"; 
import MainForm from "./MainForm.jsx"
import FinalForm from "./FinalForm.jsx"

function App() {

  const handleStateChange = (content) => {
    setBodyContent(content)
  }
  let formInputs = {firstName: "None"}
  var final = 
  <FinalForm formInputs = {formInputs} stateChangeBtns = {() => handleStateChange(main)}/>

  var main = 
  <MainForm formInputs = {formInputs} stateChangeBtns = {() => handleStateChange(final)} /> 

  const [bodyContent, setBodyContent] = useState(main)
  
  return (
    <>
      {bodyContent}
    </>
  )
}

export default App

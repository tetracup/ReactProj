
import './App.css'
import {useState} from "react"; 
import MainForm from "./MainForm.jsx"
import FinalForm from "./FinalForm.jsx"

function App() {

  let formInputs = {}

  const handleStateChange = (content) => {
    setBodyContent(content)
  }
  
  var final = 
  <FinalForm stateChangeBtns = {() => handleStateChange(main)} formInputs = {formInputs}/>

  var main = 
  <MainForm stateChangeBtns = {() => handleStateChange(final)} formInputs = {formInputs}/> 

  const [bodyContent, setBodyContent] = useState(main)
  
  return (
    <>
      {bodyContent}
    </>
  )
}

export default App

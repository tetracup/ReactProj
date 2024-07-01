
import './App.css'
import {useState} from "react"; 
import MainForm from "./MainForm.jsx"
import FinalForm from "./FinalForm.jsx"

function App() {

  const handleStateChange = (content) => {
    setBodyContent(content)
  }

  var final = 
  <FinalForm stateChangeBtns = {() => handleStateChange(main)}/>

  var main = 
  <MainForm stateChangeBtns = {() => handleStateChange(final)} /> 

  const [bodyContent, setBodyContent] = useState(main)
  
  return (
    <>
      {bodyContent}
    </>
  )
}

export default App

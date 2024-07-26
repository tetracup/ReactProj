import './Card.css'
import testSVG from './assets/react.svg'
import {useRef} from 'react'
function Card({canRemove}) {
  let counter = 0; 
  const inputRef = useRef(); 
  const handleIncrement = (increment) => {
    let newCounter = counter + increment; 
    newCounter = newCounter < 0 ? 0 : newCounter;
    inputRef.current.value = newCounter; 
    counter = newCounter; 
  }

  const handleReset = () => {
    counter = 0; 
    inputRef.current.value = counter; 
  }

  return (
    <div className = "card">
        <div className = "top">
            <img src = {testSVG} />
            <div className = "productInfo">
                Title <br />
                Price <br />
                Stock
            </div>
        </div>
        <div className = "bottom">
          <div className = "modifyBtns center">
            <button className = "modify minus center" onClick ={() => {handleIncrement(-1)}}>-</button>
            <input type = "number" defaultValue = {counter} onChange = {(e) => {counter = parseInt(e.target.value)}}ref = {inputRef}/>
            <button className = "modify center " onClick ={() => {handleIncrement(1)}}>+</button>
          </div>
          <button onClick = {handleReset}> Add </button>
          { canRemove && <button > Remove </button> } 
        </div>
    </div>
  )
}

export default Card

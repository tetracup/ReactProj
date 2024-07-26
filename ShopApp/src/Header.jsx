import './App.css'
import Basket from './Basket.jsx'
import testSVG from './assets/react.svg'

function Header() {
  return (
    <div className = "header">
      <img src = {testSVG} />  
      Header
      <Basket /> 
    </div>
  )
}

export default Header

import './App.css'
import testSVG from './assets/react.svg'
function Basket () {
     return (
        <button className = "basket">
            <img src = {testSVG}/>
        </button>
     )
}

export default Basket;
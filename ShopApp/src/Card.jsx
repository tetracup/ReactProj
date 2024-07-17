import './Card.css'
import testSVG from './assets/react.svg'

function Card() {

  return (
    <div className = "card">
        <div className = "top">
            <img src = {testSVG} />
            <div className = "productInfo">
                Title 
                Price 
                Stock
            </div>
        </div>
        <div className = "bottom">
          <div>
            <button className = "modify">-</button>
            <input type = "number" value = "0" min = "0" max = "99"/>
            <button className = "modify">+</button>
          </div>
          <button> Add </button>
        </div>
    </div>
  )
}

export default Card

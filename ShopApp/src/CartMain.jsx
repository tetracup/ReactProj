import './App.css'

import Card from './Card.jsx'

function CartMain({cardKeys}) {
  
  console.log(cardKeys)
  return (
    <div className = "mainContent">
      <Card />
      {cardKeys.map( 
        (id) => 
          (
            <Card key = {id}/>
          )
        )
      }
    </div>
  )
}

export default CartMain

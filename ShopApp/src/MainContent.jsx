import './App.css'

import Card from './Card.jsx'

function MainContent({cardKeys}) {
  
  console.log(cardKeys)
  return (
    <div className = "mainContent">
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

export default MainContent

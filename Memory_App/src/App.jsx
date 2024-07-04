
import './App.css'


function App() {

  const initialItems = Array.from(Array(10).keys())

  let curIndex = initialItems.length

  {/* Add randomiser for list*/}
  return (
    <>
      <div className = "main">
        <div className = "card">
          Item
        </div>
      </div>

      {/* Use when you make memory card
        {initialItems.map((entry) => (
          <div key = {entry}> 
            {entry} 
          </div>
        ))}
      */}
    </>
  )
}

export default App

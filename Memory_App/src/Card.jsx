import './App.css'


function Card({url}) {
  return (
    <>
        <div className = "card">
          <img src = {url}/>
        </div>
    </>
  )
}

export default Card
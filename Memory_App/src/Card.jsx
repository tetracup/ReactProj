import './App.css'


function Card({url, onClick}) {
  return (
    <>
        <div className = "card" onClick = {onClick}>
          <img src = {url}/>
        </div>
    </>
  )
}

export default Card
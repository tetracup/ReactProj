import './App.css'
import menu from './assets/menu.svg'
function NavBar () {
    return (
        <div className = "navbar">
            <p className = "title"> Alex Sokolov</p>
            <button> <img src = {menu} /> </button>
        </div>
    )
}

export default NavBar; 
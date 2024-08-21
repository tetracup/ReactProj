import './App.css'
import Data from './Data.json'
function HomeMain () {
    return (
        <div className = "homemain">
            <h1 className = "font">Title</h1>
            <p className = "post font"> {Data.blogpost} </p>
        </div>
    )
}

export default HomeMain; 
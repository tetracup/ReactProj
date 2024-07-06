
import './App.css'
import Card from './Card.jsx'

import {useEffect, useState}from 'react'

function App() {

  const [art, setArt] = useState([])
  const [search, setSearch] = useState("van gogh")
  useEffect(() => {
    {/* Sleeping Beauties: Reawakening Fashion to test less than 10 */}
      
    const fetchIDs = async () => {
      try
      {
        const response = await fetch('https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&isPublicDomain=true&q=' + search)
        const data = await response.json() 
        return(data.objectIDs)
      } catch(err) 
      {
        console.log(err)
      }
    }

    const loopImages = async (obj, images) => {
      try{
        let id = JSON.stringify(obj)
        const response = await fetch('https://collectionapi.metmuseum.org/public/collection/v1/objects/' + id)
        const data = await response.json() 
        if(data.isPublicDomain)
          images.push([id, data.primaryImage])
      } catch (err) {
        console.log(err)
      }
      
    }

    const fetchImages = async (IDs) => {
      try{
        let images = []
        let i = 0
        while(images.length != 10)
        {
          if(!IDs[i])
            break
          await loopImages(IDs[i], images)
          i++
        }
        
        setArt(images)
      } catch (err) {
        console.log(err.message);
      }
    }

    const fetchAll = async () => {
      const result = await fetchIDs();
      await fetchImages(result)
    }

    fetchAll() 
    
  }, [search]);
  let searchInput = ""
  const handleInput = (text) => {
    searchInput = text
  }
  const handleSearch = () => {
    setSearch(searchInput)
  }

  return (
    <>
    <div className = "all">
      <div className = "header">
        Search
        <input onChange = {(e) => {handleInput(e.target.value)}} type = "text"/>
        <button onClick = {handleSearch}>
          Search
        </button>
      </div>
      <div className = "main">
        
        {art.map((entry) => (
          <Card key =  {entry[0]} url = {entry[1]}/>
        ))}
      </div>
      <div className = "footer">
        Footer
      </div>
    </div>
    </>
  )
}

export default App

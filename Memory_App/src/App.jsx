
import './App.css'
import Card from './Card.jsx'

import {useEffect, useState}from 'react'

function App() {

  const [art, setArt] = useState({images: [], score: 0})
  const [search, setSearch] = useState("van gogh")
  let searchInput = ""
  let highscore = 0
  if(!localStorage.getItem('score'))
  {
    localStorage.setItem('score', 0)
  }
  else {
    highscore = localStorage.getItem('score')
  }
  console.log(art)
  useEffect(() => {
    {/* Sleeping Beauties: Reawakening Fashion to test less than 10 */}
      
    const fetchIDs = async () => {
      try
      {
        const response = await fetch('https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&q=' + search)
        const data = await response.json() 
        return(data.objectIDs)
      } catch(err) 
      {
        console.log(err)
      }
    }
    function checkURL(arr, url)
    {
      for (let i = 0; i < arr.length; i++) {
        if (arr[i][1] == url) {
            return true
        } 
      }
      return false
    }

    const loopImages = async (obj, images) => {
      try{
        let id = JSON.stringify(obj)
        const response = await fetch('https://collectionapi.metmuseum.org/public/collection/v1/objects/' + id)
        if (!response.ok) { // <-- check response OK here
          throw new Error('ID faulty');
        }
        const data = await response.json()
        const urlLink = data.primaryImage
        if(urlLink != "" && !checkURL(images, urlLink))
        {
          images.push([id, data.primaryImage, false])
        }
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
        const newArt = {...art, images: images, score: 0} 
        setArt(newArt)
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

  const handleInput = (text) => {
    searchInput = text
  }

  const handleSearch = () => {
    setSearch(searchInput)
  }

  const handleArtClick = (ky) => {
    let newScore = 0
    let indexes = Array.from(art.images.keys())
    let randomised = []
    for(let i = 0; i < art.images.length; i++)
    {
      let ind = Math.floor(Math.random() * indexes.length)  
      randomised.push(indexes[ind])
      indexes.splice(ind, 1)
    }

    let newImages = []

    for(let i = 0; i < randomised.length; i++)
    {
      let newItem = art.images[randomised[i]]
      if(newItem[0] == ky)
      {
        if(newItem[2] != true)
        {
          newScore = art.score + 1
          newItem[2] = true
          if(newScore > highscore)
            localStorage.setItem('score', newScore)
        }
      } 
      newImages.push(newItem)
    }
    const finalImages = newScore == 0 ? newImages.map((obj) => {
      let newObj = obj; 
      newObj[2] = false;
      return newObj
    }) : newImages

    
    const newArt = {...art, images: finalImages, score: newScore} 
    setArt(newArt)
  }

  return (
    <>
    <div className = "all">
      <div className = "header">
        <h1>Score: {art.score}, High Score: {localStorage.getItem('score')}</h1>
        <h1>Search</h1>
        <input onChange = {(e) => {handleInput(e.target.value)}} type = "text"/>
        <button onClick = {handleSearch}>
          Search
        </button>
      </div>
      <div className = "main">
        {art.images.map((entry) => (
          <Card key = {entry[0]} url = {entry[1]} onClick = {() => {handleArtClick(entry[0])}}/>
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

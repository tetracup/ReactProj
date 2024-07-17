
import './App.css'
import Header from './Header.jsx'
import MainContent from './MainContent.jsx'
import Container from './Container.jsx'
import {useState}from 'react'

function App() {
  let cardCount = 20
  let cardKeys = Array.from(Array(cardCount).keys());

  return (
    <Container>
      <Header cardKeys = {cardKeys}/>
      <MainContent cartdKeys = {cardKeys}/>
    </Container>
  )
}

export default App

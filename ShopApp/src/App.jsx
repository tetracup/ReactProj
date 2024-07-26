
import './App.css'
import Header from './Header.jsx'
import MainContent from './MainContent.jsx'
import Container from './Container.jsx'

function App() {
  let cardCount = 20
  let cardKeys = Array.from(Array(cardCount).keys());

  return (
    <Container>
      <Header cardCount = {cardCount}/>
      <MainContent cardKeys = {cardKeys}/>
    </Container>
  )
}

export default App

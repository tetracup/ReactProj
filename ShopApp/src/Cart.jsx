
import './App.css'
import Header from './Header.jsx'
import CartMain from './CartMain.jsx'
import Container from './Container.jsx'

function Cart(props) {

    let cardCount = props.cardCount != null ? props.cardCount : 20;

    let cardKeys = Array.from(Array(cardCount).keys());

    return (
        <Container>
            Hello! 
            
            {/* 
            <Header cardCount = {cardCount}/>
            <CartMain cardKeys = {cardKeys}/>
            */}
        </Container>
    )
}

export default Cart;

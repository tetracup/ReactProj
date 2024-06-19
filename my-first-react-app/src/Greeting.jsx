import "./Greeting.css"
import { v4 as uuid } from 'uuid'
function Boo()
{
    return <img style={{borderRadius : 50}} width = "500" src="chic.png"></img>;
}

export function ListTest()
{
    const furniture = ["Chair", "Table", "Stool", "Wardrobe"]; 
    const furnitureList = furniture.map( (object) => <li key = {object}>{object}Object</li>);
    return (
        <div>
            <h1> Kinds of furniture </h1>
            <ul>
                {furnitureList}
            </ul>
        </div>
    );
}

/* Setup structure of element */ 
function ListItem(props)
{
    return <li> {props.fruit}</li>
}

/* Setup structure of list*/

function List(props)
{
    return (
        <ul>
            {props.fruits.map((fruit) => {
                return fruit.startsWith("B") && <ListItem key = {fruit} fruit = {fruit} /> 
            })}
        </ul>
    );
}

function Button({text,color,fontSize}) {
    const buttonStyle = {
        color: color, 
        fontSize: fontSize + 'px'
    };

    const handleButtonClick = () => {
        window.location.href = "https://www.google.com/search?q=" + text;
    };


    return (
        <li>
            <button onClick = {handleButtonClick} style = {buttonStyle}>{text}</button>
        </li>
    )
        
}

Button.defaultProps = {
    text: "Click Me!",
    color: "blue",
    fontSize: 12
}



function ButtonList(props)
{
    return (
        <ul>
            {props.buttonTexts.map((textObj) => {
                return <Button key = {textObj.id} text = {textObj.text} /> 
            })}
        </ul>
    );
}

export function ListTest2()
{
    const fruits = ["Orange", "Raspberry", "Strawberry", "Banana"]; 
    return (
        <>
            <div>
                <h1>Fruits: </h1>
                <List fruits = {fruits} />
            </div>
        </>
    );
}


export function ListTest3()
{
    const buttonTexts = [
        { text: "Orange", id: uuid() },
        { text: "Raspberry", id: uuid() },
        { text: "Strawberry", id: uuid() },
      ];
    return (
        <>
            <div>
                <h1> Fruit Buttons: </h1>
                <ButtonList buttonTexts = {buttonTexts} />
            </div>
        </>
    );
}

export default Boo;
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
                return <ListItem key = {fruit} fruit = {fruit} /> 
            })}
        </ul>
    );
}

export function ListTest2()
{
    const fruits = ["Orange", "Raspberry", "Strawberry", "Banana"]; 
    return (
        <div>
            <h1>Fruits: </h1>
            <List fruits = {fruits} />
        </div>
    );
}

export default Boo;
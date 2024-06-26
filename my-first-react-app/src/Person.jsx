import {useState} from 'react'

function Person () {
    const [person, setPerson] = useState({firstName: 'FirstName', lastName: 'LastName', age: 39}); 

    const handleIncreaseAge = () => {
        const newPerson = { ...person, age: person.age + 1};
        setPerson(newPerson); 
    }

    const handleFirstNameUpdate = (txt) => {
        const newPerson = {...person, firstName: txt};
        setPerson(newPerson);
    }

    const handleLastNameUpdate = (txt) => {
        const newPerson = {...person, lastName: txt};
        setPerson(newPerson);
    }

    return ( 
        <>
            <input onChange = {e => handleFirstNameUpdate(e.target.value)}/> 
            <input onChange = {e => handleLastNameUpdate(e.target.value)}/> 
            <h1> {person.firstName} {person.lastName} </h1>
            <h2> {person.age} </h2>
            <button onClick = {handleIncreaseAge}> Increase Age </button>
        </>
    );
}

export default Person;
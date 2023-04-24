import './App.css';
import Clicker from '../Clicker/Clicker'
import {useState} from 'react';  //example of object destructuring - short cut to get it instead: below
// long version below:
// import React from 'react';
// const useState = React.useState;


function App() {
    // if a variable is shown on the DOM, it should live in state

    // pattern for useState:
    const [myStateVariable, setMyStateVariable] = useState('initial value'); // array destructuring 
    //long version:
    //let whatUseStateReturns = useState(false);
    //let myThing = what UseStateReturns[0];
    //let setMyThing = whatUseStateReturns[1];

    //“State” is all the “data” you need to track In your app.

    const [name, setName] = useState('Luke');
    //long version
    // let name = 'Luke';
    // setName = function that allows us to update the name or change the state variable

    // const [count, setCount] = useState(0);

    //this App.jsx is a parent and can be pased to child components
    const [firstNameUsed, setFirstNameUsed] = useState('Luke');
    
    return (
        <div className="App">
            <Clicker name='Luke'/>
            <Clicker name='Andrew'/>
            <Clicker name='Liz'/>
            <Clicker name='Vang'/>
            {/* below is in Clicker function in Clicker.jsx */}
            {/* <p>Hello! My name is {name}.</p>
            <button onClick={() => setCount(count +1)}>
                Click me!
            </button>
            <p>I've clicked the button {count} times.</p> */}
        </div>
    );
}

export default App;

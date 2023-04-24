import {useState} from 'react';

function Clicker(props){
    //props will be an object with property 'name'
    const [count, setCount] = useState(0);
    
    return(
        <>
            <p>Hello! My name is {props.name}.</p>
                <button onClick={() => setCount(count +1)}>
                  Click me!
                </button>
            <p>I've clicked the button {count} times.</p>
        </>
    )
}

export default Clicker;
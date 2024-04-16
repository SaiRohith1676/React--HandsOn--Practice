import React, { useState } from 'react'

import './Pr1.css'

function Practice1() {

    const [counter, setCounter] = useState(0)



    return(
        <div className='App'>  
            <h1>{counter}</h1>
            <div className='button-wrapper'>
            <button onClick={()=> {setCounter(counter+1)}}> +   </button>
            <button onClick= {() => {setCounter(counter -1)}}> -</button>
            </div>
        </div>
    )
}

export default Practice1
import React, { useState } from 'react'

function ThemeC() {

    const [theming,setTheming] = useState(false)

    const theme = {
        darkTheme : {
            backgroundColor : 'black',
            color : 'white',
            padding :'20px'

        },
        lightTheme : {
            backgroundColor : 'white',
            color : 'black',
            padding :'20px'
        }
    }

  return (
    <div style={theming ? theme.darkTheme : theme.lightTheme}>
        <label> {theming ? "Enable light Theme" : "Enable Dark theme"} </label>
        <input type='checkbox' onChange={() => setTheming(prevState => !prevState) }></input>

        
            <h1>Hello world this is rohith</h1>
            <p>Hello world this is chitti</p>
            
    </div>
  )
}

export default ThemeC
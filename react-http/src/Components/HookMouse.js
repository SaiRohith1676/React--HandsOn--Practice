import React, { useEffect, useState } from 'react'

function HookMouse() {

    const [X,setX] = useState(0)
    const [Y,setY] = useState(0)

    const logOnMouse = e => {
        console.log("Mouse Event");
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(() => {
        console.log("effect called");
        window.addEventListener('mousemove',logOnMouse)

        return() => {
            console.log("Component unmounting");
             window.removeEventListener('mousemove',logOnMouse)
        }
    },[])

  return (
    <div>
        Hooks  X -{X}    Y -{Y}
    </div>
  )
}

export default HookMouse
import React, { useState } from 'react'

function HookCounter3() {

 

  const [name,setName] = useState({firstName:'',lastName:''})
  return (
    <form>
        <input type='text' value={name.firstName} onChange={e => setName({...name,firstName: e.target.value})}></input>
        <input type='text' value={name.lastName} onChange={e => setName({...name,lastName: e.target.value})}></input>
        <h2>FirstName is - {name.firstName}</h2>
        <h2>Lastname is - {name.lastName}</h2>
    </form>
  )
}

export default HookCounter3
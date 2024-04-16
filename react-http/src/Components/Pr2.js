import React from 'react'

function Pr2() {

    const list = ['1','2','3','4','5']
    return(
        <div>
            {list.map((val) => {
                return(
                    <div> {val}   </div>
                )
            })}
        </div>
    )
}

export default Pr2
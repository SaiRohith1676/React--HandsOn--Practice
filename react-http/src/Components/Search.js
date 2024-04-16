import React, { useState } from 'react'
import './Style.css'
//import SearchIcon from '@mui/icons-material/Search';



function Search({placeholder,data}) {

  const [search,setSearch] = useState([])
  return (
    <div className='search'>
        <div className='searchInput'>
            <input type='text' placeholder={placeholder} onChange={event => {
              setSearch(event.target.value)
            }}></input>
            <div className='searchIcon'></div>
        </div>
        
        {search.length !=0 && (
        <div className='dataResult'>
          {
            data.filter((value) => {
              if(search === ''){
                return value
              }else if(value.title.toLowerCase().includes(search.toLowerCase()))
              return value
            })
          .map((value,key) => {
              return(<a 
              className='dataItem' 
              href={value.link} target="_blank">
              <p>{value.title}</p>
              </a>)
          })}
        </div>
      )}
    </div>
  )
}

export default Search
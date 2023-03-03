import React from 'react'
import Location from './Location'
import Search from './Search'

const Header = ({handleLocation, location}) => {

  return (
    <header className="App-header">
        <Location location = {location}/>
        <Search handleLocation = {handleLocation}/>
        <button>Dark</button>
    </header>
  )
}

export default Header
import React from 'react'
import AutoComplete from 'react-google-autocomplete'


const Search = ({handleLocation}) => {
  return (
    <AutoComplete
      apiKey="AIzaSyAA5pw_CsGkRkyVCsDunENSdGvNvm5FyRs"
      onPlaceSelected={(place) => handleLocation(place)}
      placeholder = "Search City.."
      className='search-bar'
    />
    // <input type="text" placeholder='Search City..' className='search-bar' />
  )
}

export default Search
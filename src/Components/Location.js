import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

const Location = ({ location }) => {
  return ( 
    <div> 
      <FontAwesomeIcon icon={faLocationDot} className='location-icon'/> 
      { location }
    </div>
  )
}

Location.defaultProps = {
  location: 'Surrey, BC'
}


export default Location
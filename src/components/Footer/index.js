import React from 'react'
import config from '../../../config'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container'>
      <div className='content has-text-left'>
        <p>
          <b>Address</b>: <br/>
            2 St Clair Avenue West,16th Floor <br/> Toronto,ON M4V 1L5 <br/>
            email: <b>contact@datatechinc.ca</b>
          </p>
        </div>
        <div className='content has-text-centered'>
          
          <p>
            {config.copyright}
          </p>
          
        </div>
      </div>
    </footer>
  )
}

export default Footer

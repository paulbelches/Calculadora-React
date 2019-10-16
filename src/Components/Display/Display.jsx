import React from 'react'

const Display = ({ text }) => {
  const bodyStyle = {
    display: 'flex',
    width: '492px',
    height: '175px',
    backgroundColor: '#e9eaea',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  }
  const letterStyle = {
    margin: '0px',
    marginRight: '20px',
    fontSize: '84px',
    fontFamily: 'Roboto Condensed,sans-serif',
  }
  return (
    <div style={bodyStyle} id="Display">
      <h5 style={letterStyle}>{text}</h5>
    </div>
  )
}

export default Display

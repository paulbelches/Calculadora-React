import React from 'react'

export default class Display extends React.Component {
    constructor(props) {
      super(props)
      
    }
    render() {
        const bodyStyle = {
            display: 'flex',
            width: '492px',
            height: '175px',
            backgroundColor: '#e9eaea',
            justifyContent: 'flex-end',
            alignItems: 'flex-end'
          }
          const letterStyle = {
            margin: '0px',
            marginLeft: '10px', 
            fontSize: '84px',
            fontFamily: 'Roboto Condensed,sans-serif'
        }
          return (
            <div style={bodyStyle}>
                <h5 style={letterStyle}>{this.props.text}</h5>
            </div>
          )
    }
  }

import React from 'react'

export default class Button extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        color: this.props.color
      } 
  }
    mouseEnter() {
        this.setState({color:'#ebebeb'})
    }        
    mouseLeave() {
        this.setState({color:'#fafafa'})
    }

  render() {
    const bodyStyle ={
        backgroundColor: this.state.color,
        width: '120px',
        height: '100px',
        border: '2px solid #ebebeb',
        display:'flex',
        justifyContent: 'center',
        alignItems: 'center'
    } 
    const letterStyle = {
        margin: '0px',
        fontSize: '34px',
        fontFamily: 'Roboto Condensed,sans-serif'
    }
    return (
      <div style={bodyStyle}  onMouseOver={this.mouseEnter.bind(this)} onMouseLeave={this.mouseLeave.bind(this)} onClick={this.props.click}>
          <h5 style={letterStyle}>{this.props.text}</h5>
      </div>    
    )
  }
}
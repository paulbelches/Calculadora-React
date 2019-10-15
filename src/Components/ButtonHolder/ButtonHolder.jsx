import React from 'react'
import Button from '../Button/Button.jsx'

export default class ButtonHolder extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const bodyStyle ={
        display: 'grid',
        gridTemplateColumns: '123px 123px 123px 123px',
        gridTemplateRows: '104px 104px 104px 104px 104px'
    } 
    return (
      <div style={bodyStyle}>
          <Button text={'CE'} color={'#fafafa'} click={this.props.clickOp.bind(this,'CE')}></Button>
          <Button text={'C'} color={'#fafafa'} click={this.props.clickOp.bind(this,'C')}></Button>
          <Button text={'<-'} color={'#fafafa'} click={this.props.clickOp.bind(this,'<-')}></Button>
          <Button text={'/'} color={'#fafafa'} click={this.props.clickOp.bind(this,'/')}></Button>
          <Button text={'7'} color={'#fafafa'} click={this.props.click.bind(this,'7')}></Button>
          <Button text={'8'} color={'#fafafa'} click={this.props.click.bind(this,'8')}></Button>
          <Button text={'9'} color={'#fafafa'} click={this.props.click.bind(this,'9')}></Button>
          <Button text={'X'} color={'#fafafa'} click={this.props.clickOp.bind(this,'*')}></Button>
          <Button text={'4'} color={'#fafafa'} click={this.props.click.bind(this,'4')}></Button>
          <Button text={'5'} color={'#fafafa'} click={this.props.click.bind(this,'5')}></Button>
          <Button text={'6'} color={'#fafafa'} click={this.props.click.bind(this,'6')}></Button>
          <Button text={'-'} color={'#fafafa'} click={this.props.clickOp.bind(this,'-')}></Button>
          <Button text={'1'} color={'#fafafa'} click={this.props.click.bind(this,'1')}></Button>
          <Button text={'2'} color={'#fafafa'} click={this.props.click.bind(this,'2')}></Button>
          <Button text={'3'} color={'#fafafa'} click={this.props.click.bind(this,'3')}></Button>
          <Button text={'+'} color={'#fafafa'} click={this.props.clickOp.bind(this,'+')}></Button>
          <Button text={'+/-'} color={'#fafafa'} click={this.props.clickOp.bind(this,'+/-')}></Button>
          <Button text={'0'} color={'#fafafa'} click={this.props.click.bind(this,'0')}></Button>
          <Button text={'.'} color={'#fafafa'} click={this.props.clickOp.bind(this,'.')}></Button>
          <Button text={'='} color={'#fafafa'} click={this.props.clickOp.bind(this,'=')}></Button>
      </div>    
    )
  }
}
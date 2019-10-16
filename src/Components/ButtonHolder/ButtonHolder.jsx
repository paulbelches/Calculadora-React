import React from 'react'
import Button from '../Button/Button.jsx'

export default class ButtonHolder extends React.Component {
  clickOp(v) {
    const { clickOp } = this.props
    return clickOp.bind(this, v)
  }

  click(v) {
    const { click } = this.props
    return click.bind(this, v)
  }

  render() {
    const bodyStyle = {
      display: 'grid',
      gridTemplateColumns: '123px 123px 123px 123px',
      gridTemplateRows: '104px 104px 104px 104px 104px',
    }
    return (
      <div style={bodyStyle}>
        <Button id="bCE" text="CE" color="#fafafa" click={this.clickOp('CE')} />
        <Button id="bC" text="C" color="#fafafa" click={this.clickOp('C')} />
        <Button id="bB" text="<-" color="#fafafa" click={this.clickOp('<-')} />
        <Button id="bD" text="/" color="#fafafa" click={this.clickOp('/')} />
        <Button id="b7" text="7" color="#fafafa" click={this.click('7')} />
        <Button id="b8" text="8" color="#fafafa" click={this.click('8')} />
        <Button id="b9" text="9" color="#fafafa" click={this.click('9')} />
        <Button id="bX" text="X" color="#fafafa" click={this.clickOp('*')} />
        <Button id="b4" text="4" color="#fafafa" click={this.click('4')} />
        <Button id="b5" text="5" color="#fafafa" click={this.click('5')} />
        <Button id="b6" text="6" color="#fafafa" click={this.click('6')} />
        <Button id="bR" text="-" color="#fafafa" click={this.clickOp('-')} />
        <Button id="b1" text="1" color="#fafafa" click={this.click('1')} />
        <Button id="b2" text="2" color="#fafafa" click={this.click('2')} />
        <Button id="b3" text="3" color="#fafafa" click={this.click('3')} />
        <Button id="bS" text="+" color="#fafafa" click={this.clickOp('+')} />
        <Button id="bSi" text="+/-" color="#fafafa" click={this.clickOp('+/-')} />
        <Button id="b0" text="0" color="#fafafa" click={this.click('0')} />
        <Button id="bP" text="." color="#fafafa" click={this.clickOp('.')} />
        <Button id="bE" text="=" color="#fafafa" click={this.clickOp('=')} />
      </div>
    )
  }
}

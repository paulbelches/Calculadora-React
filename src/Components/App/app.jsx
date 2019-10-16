import React from 'react'
import ButtonHolder from '../ButtonHolder/ButtonHolder.jsx'
import Display from '../Display/Display.jsx'


export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: '0',
      n1: null,
      n2: null,
      op: null,
      lastOp: null,
      remove: false,
      change: false,
    }
  }

  check(v) {
    if (parseFloat(v) < 0 || parseFloat(v) > 999999999) {
      this.clear()
      return 'Error'
    }
    if (String(v).length > 9) {
      return v.substring(0, 9)
    }
    return v
  }

  clear() {
    this.state.n1 = null
    this.state.n2 = null
    this.state.op = null
    this.state.lastOp = null
    this.state.remove = true
  }

  add(v) {
    let { text } = this.state
    const { lastOp, remove } = this.state
    if (lastOp === '=') {
      this.clear()
    }
    if (text === '0' || remove || lastOp === '=') {
      text = ''
    }
    if (text.length < 9) {
      text += v
      this.setState({ text, remove: false, change: true })
    }
  }

  op(v) {
    const {
      text, lastOp, op, n1, n2, change,
    } = this.state
    if (v === 'CE') {
      const t = '0'
      this.setState({ text: t })
    } else
    if (v === 'C') {
      const t = '0'
      this.setState({
        text: t,
        n1: null,
        n2: null,
        op: null,
        lastOp: null,
      })
    } else
    if (v === '<-') {
      let t = text
      if (t.length > 0) {
        if (t.includes('-') && t.length === 2) {
          t = t.substring(0, t.length - 2)
        } else {
          t = t.substring(0, t.length - 1)
        }
        if (t === '') {
          t = '0'
        }
        this.setState({ text: t })
      }
    } else
    if (v === '.') {
      let t = text
      if (t.length < 9) {
        if (!t.includes('.')) {
          t = `${t}.`
          this.setState({ text: t })
        }
      }
    } else
    if (v === '+/-') {
      let t = text
      if (t.includes('-')) {
        t = t.substring(1, t.length)
      } else
      if (t.length < 9 && t !== '0') {
        t = `-${t}`
      }
      this.setState({ text: t })
    } else
    if (v === '=') {
      if (change && n1 !== null && text !== 'Error') {
        if (lastOp !== '=') {
          const num2 = parseFloat(text)
          switch (op) {
            case '+':
              this.setState({ n2: num2, text: this.check(String(n1 + num2)), lastOp: '=' })
              break
            case '-':
              this.setState({ n2: num2, text: this.check(String(n1 - num2)), lastOp: '=' })
              break
            case '/':
              this.setState({ n2: num2, text: this.check(String(n1 / num2)), lastOp: '=' })
              break
            case '*':
              this.setState({ n2: num2, text: this.check(String(n1 * num2)), lastOp: '=' })
              break
            default: break
          }
          this.check()
        } else if (lastOp === '=') {
          const num1 = parseFloat(text)
          switch (op) {
            case '+':
              this.setState({ n1: num1, text: this.check(String(num1 + n2)), lastOp: '=' })
              break
            case '-':
              this.setState({ n1: num1, text: this.check(String(num1 - n2)), lastOp: '=' })
              break
            case '/':
              this.setState({ n1: num1, text: this.check(String(num1 / n2)), lastOp: '=' })
              break
            case '*':
              this.setState({ n1: num1, text: this.check(String(num1 * n2)), lastOp: '=' })
              break
            default: break
          }
        }
      }
    } else if (change && text !== 'Error') {
      const t = text
      if (lastOp === '=' || lastOp === null) {
        this.setState({
          n1: parseFloat(t), op: v, lastOp: v, remove: true, change: false,
        })
      } else if (lastOp !== null && lastOp !== '=') {
        const num2 = parseFloat(t)
        switch (lastOp) {
          case '+':
            this.setState({
              n1: n1 + num2,
              op: v,
              n2: num2,
              text: this.check(String(n1 + num2)),
              lastOp: v,
              remove: true,
              change: false,
            })
            break
          case '-':
            this.setState({
              n1: n1 - num2,
              op: v,
              n2: num2,
              text: this.check(String(n1 - num2)),
              lastOp: v,
              remove: true,
              change: false,
            })
            break
          case '/':
            this.setState({
              n1: n1 / num2,
              op: v,
              n2: num2,
              text: this.check(String(n1 / num2)),
              lastOp: v,
              remove: true,
              change: false,
            })
            break
          case '*':
            this.setState({
              n1: n1 * num2,
              op: v,
              n2: num2,
              text: this.check(String(n1 * num2)),
              lastOp: v,
              remove: true,
              change: false,
            })
            break
          default: break
        }
      }
    }
  }

  Op() {
    return this.op.bind(this)
  }

  Add() {
    return this.add.bind(this)
  }

  render() {
    const bodyStyle = {
      display: 'flex',
      flexDirection: 'column',
    }

    const { text } = this.state

    return (
      <div style={bodyStyle}>
        <Display text={text} />
        <ButtonHolder click={this.Add()} clickOp={this.Op()} />
      </div>
    )
  }
}

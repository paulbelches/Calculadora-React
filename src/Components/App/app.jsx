import React from 'react'
import ButtonHolder from '../ButtonHolder/ButtonHolder.jsx'
import Display from '../Display/Display.jsx'
import { parse } from '@babel/core'

export default class App extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        text: "0",
        n1:null,
        n2:null,
        op:null,
        lastOp:null,
        delete: false,
        switch: false
      } 
      
    }
    check(v) {
        if (parseFloat(v) < 0 || parseFloat(v) > 999999999){
            this.clear()
            return 'Error'
        } else {
            return v
        }

    }
    clear() {
        this.state.n1 = null 
        this.state.n2 = null
        this.state.op = null
        this.state.lastOp = null
        this.state.delete = true
    }
    add(v) {
        let t = this.state.text
        if (this.state.lastOp === "="){
            this.clear()
        }

        if (t === '0' || this.state.delete || this.state.lastOp === "=") {
            t = ""
        }

        if (t.length<9){
            t = t + v
            this.setState({text:t,delete: false, switch: true})
        }
    }
    op(v) {
        if (v === 'CE'){
            let t = "0"
            this.setState({text:t})
        } else
        if (v === 'C'){
            let t = "0"
            this.setState({
                text:t,
                n1: null,
                n2: null,
                op: null,
                lastOp: null
            })
        } else
        if (v === '<-'){
            let t = this.state.text
            if (t.length>0){
                if (t.includes('-') && t.length === 2){
                    t = t.substring(0, t.length-2)   
                } else {
                    t = t.substring(0, t.length-1) }
                if (t === '' ){
                    t = '0'
                }
                this.setState({text:t})
            }
        } else
        if (v === '.'){
            let t = this.state.text
            if (t.length<9){
                if (!t.includes('.')){
                    t = t + '.'
                    this.setState({text:t})
                }
            }
        } else
        if (v === '+/-'){
            let t = this.state.text
            if (t.includes('-')){
                t = t.substring(1, t.length)   
            } else 
            if (t.length<9 && t !== '0'){
                    t = '-' + t
            }
            this.setState({text:t})
        } else
        if (v === '='){
            if (this.state.switch && this.state.n1 !== null && this.state.text !== 'Error'){
                if (this.state.lastOp !== "="){
                    let n2 = parseFloat(this.state.text)
                    switch(this.state.op){
                        case '+':
                            this.setState({n2: n2, text: this.check(String(this.state.n1 + n2)), lastOp: "="})
                        break
                        case '-':
                            this.setState({n2: n2, text: this.check(String(this.state.n1 - n2)), lastOp: "="})
                        break
                        case '/':
                            this.setState({n2: n2, text: this.check(String(this.state.n1 / n2)), lastOp: "="})
                        break
                        case '*':
                            this.setState({n2: n2, text: this.check(String(this.state.n1 * n2)), lastOp: "="})
                        break
                    }
                    this.check()
                }  else if (this.state.lastOp === "=") {
                    let n1 = parseFloat(this.state.text)
                    console.log(n1,this.state.n2)
                    switch(this.state.op){
                        case '+':
                            this.setState({n1: n1, text: this.check(String(n1 + this.state.n2)), lastOp: "="})
                        break
                        case '-':
                            this.setState({n1: n1, text: this.check(String(n1 - this.state.n2)), lastOp: "="})
                        break
                        case '/':
                            this.setState({n1: n1, text: this.check(String(n1 / this.state.n2)), lastOp: "="})
                        break
                        case '*':
                            this.setState({n1: n1, text: this.check(String(n1 * this.state.n2)), lastOp: "="})
                        break
                    }
                }
                
            }
        }
        else {
            if (this.state.switch && this.state.text !== 'Error'){
                let t = this.state.text
                if (this.state.lastOp === "=" || this.state.lastOp === null){
                    this.setState({n1: parseFloat(t), op: v, lastOp: v, delete: true,switch: false})
                } else if (this.state.lastOp !== null && this.state.lastOp !== "=") {
                    let n2 = parseFloat(t)
                    switch(this.state.lastOp){
                        case '+':
                            this.setState({n1: this.state.n1 + n2, op: v, n2: n2, text: this.check(String(this.state.n1 + n2)), lastOp: "+", delete: true, switch: false})
                        break
                        case '-':
                            this.setState({n1: this.state.n1 - n2, op: v, n2: n2, text: this.check(String(this.state.n1 - n2)), lastOp: "-", delete: true, switch: false})
                        break
                        case '/':
                            this.setState({n1: this.state.n1 / n2, op: v, n2: n2, text: this.check(String(this.state.n1 / n2)), lastOp: "/", delete: true, switch: false})
                        break
                        case '*':
                            this.setState({n1: this.state.n1 * n2, op: v, n2: n2, text: this.check(String(this.state.n1 * n2)), lastOp: "*", delete: true, switch: false})
                        break
                    }
                }
            }
        }
        
    }
    render() {
        const bodyStyle = {
            display: 'flex',
            flexDirection: 'column'
          }
          return (
            <div style={bodyStyle}>
              <Display text={this.state.text}></Display>
              <ButtonHolder click={this.add.bind(this)} clickOp={this.op.bind(this)}/>
            </div>
          )
    }
  }

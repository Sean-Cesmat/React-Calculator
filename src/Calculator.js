import React, { Component } from 'react';
import './Calculator.css';

class Calculator extends Component {
  constructor(props) {
    super(props)
    this.state = {
      num1: 0,
      num2: 0,
      total: 0,
      opperator: "add"
    }
    this.handleChange = this.handleChange.bind(this)
    this.selectChange = this.selectChange.bind(this)
  }

  updateTotal() {
    let opperatorType;
    if (this.state.opperator === "add") {
      this.setState({
        total: this.state.num1 + this.state.num2
      })
    } else if(this.state.opperator === "subtract") {
      this.setState({
        total: this.state.num1 - this.state.num2
      })
    } else if (this.state.opperator === "multiply") {
      this.setState({
        total: this.state.num1 * this.state.num2
      })
    } else if (this.state.opperator === "divide") {
      this.setState({
        total: this.state.num1 / this.state.num2
      })
    }


  }

  handleChange(e) {
    let updateState = {}
    updateState[e.target.id] = parseInt(e.target.value)
    this.setState(updateState, this.updateTotal)
  }

  selectChange(e) {
    let updateOppState = {}
    updateOppState[e.target.id] = e.target.value
    this.setState(updateOppState, this.updateTotal)
  }



  render() {
    return (
      <div className="container">
        <h1>Add with React!</h1>

        <div className="add">
          <input type="number" id="num1" value={this.state.num1} onChange={ (e) => this.handleChange(e)} />
          <select name="opperator" id="opperator" onChange={ (e) => this.selectChange(e)}>
            <option value="add" defaultValue>+</option>
            <option value="subtract">-</option>
            <option value="multiply">*</option>
            <option value="divide">/</option>
          </select>
          <input type="number" id="num2" value={this.state.num2} onChange={ (e) => this.handleChange(e)} />
          <span>=</span>
          <h3 id="total">{this.state.total}</h3>
        </div>
      </div>
    )
  }
}


export default Calculator;

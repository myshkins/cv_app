import React, { Component } from "react";

class InputField extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange = (e) => {
    this.props.handleChange(e)
  }

  render() {
    const { name } = this.props
    const { userInput } = this.state

    return (
      <div className="input-field">
        <label htmlFor={name}>{name}</label>
        <input>
        </input>
      </div>
    )
  }
}

export default InputField
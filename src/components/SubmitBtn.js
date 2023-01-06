import React, { Component } from "react";

class SubmitBtn extends Component {
  constructor(props) {
    super(props)

    this.state = {
      userInput: { text: '' },
    }
  }

  handleChange = (e) => {
    this.setState({
      userInput: {
        text: e.target.value,
      }
    })
  }

  render() {
    const { fieldName } = this.props
    const { userInput } = this.state

    return (
      <div className="input-field">
        <label htmlFor={fieldName}>{fieldName}</label>
        <input
          onChange={this.handleChange}
          type="text"
          value={userInput.text}
          id={fieldName}></input>
      </div>
    )
  }
}

export default SubmitBtn
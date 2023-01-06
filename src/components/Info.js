import React, { Component } from "react";
import InputField from "./InputField";

class Info extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    this.props.handleChange(e)
  }

  render() {
    const { name, email, location } = this.props
    return (
      <div className="entry-info">
        <h4>Enter Info</h4>
        <form onSubmit={this.onSubmitBtn}>
          <div class="info-input">
            <label htmlFor="name">name</label>
            <input
              value={name}
              id="name"
              onChange={this.handleChange}>
            </input>
          </div>
          <div class="info-input">
            <label htmlFor="email">email</label>
            <input
              value={email}
              id="email"
              onChange={this.handleChange}>
            </input>
          </div>
          <div class="info-input">
            <label htmlFor="location">location</label>
            <input
              value={location}
              id="location"
              onChange={this.handleChange}>
            </input>
          </div>
        </form>

      </div>
    )
  }
}

export default Info  
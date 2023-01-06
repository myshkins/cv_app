import React, { Component } from "react";
import Info from "./Info";
import Education from "./Education";
import Work from "./Work"

class EntryForms extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {this.props.handleChange(e)}

  render() {
    return (
      <div className="entry-container">
        <h2>Enter Data</h2>
        <Info handleChange={this.handleChange}/>
        <Work />
        <Education />
      </div>
    )
  }
}

export default EntryForms
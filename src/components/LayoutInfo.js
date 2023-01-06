import React, { Component } from "react";

class LayoutInfo extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this) 
  }

  handleChange = (e) => {
    this.props.handleChange(e)
  }

  render() {
    const data = this.props.data

    return (
      <div className="layout-info">
        <h4>Basic Info:</h4>
        <p>Name: {data.name}</p>
        <p>Email: {data.email} </p>
        <p>Location: {data.location}</p>
      </div>
    )
  }
}

export default LayoutInfo
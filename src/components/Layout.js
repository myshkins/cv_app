import React, { Component } from "react";
import LayoutEducation from "./LayoutEducation";
import LayoutInfo from "./LayoutInfo";
import LayoutWork from "./LayoutWork";

class Layout extends Component {
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
      <div className="layout">
        <h2>Layout</h2>
        <LayoutInfo data={data} handleChange={this.handleChange}/>
        <LayoutWork  data={data} />
        <LayoutEducation data={data} />
      </div>
    )
  }
}

export default Layout
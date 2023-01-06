import './App.css';
import React, { Component } from 'react';
import EntryForms from './components/EntryForms';
import Layout from './components/Layout';

class App extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      data: {
        name: '',
        email: '',
        location: '',
        work: [],
        education: [],
    }}

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    const fieldName = e.target.id
    const value = e.target.value
    this.setState((prevState) => {
      let data = Object.assign({}, prevState.data)
      data[fieldName] = value
      return {data}
    })
  }

  

  render() {
    const data = this.state.data

    return (
      <div className='app'>
        <EntryForms
          data={data}
          handleChange={this.handleChange}/>
        <Layout
          data={data}
          handleChange={this.handleChange} />
      </div>
    )
  }
}

export default App;

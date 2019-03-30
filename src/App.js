import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './List.js'

class App extends Component {
  state = {
    term: '',
    items: []
  };

  onChange = (event) => {
    this.setState({term: event.target.value});
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.setState({
      term: '',
      items: [...this.state.items, this.state.term]
    })
  }


  render() {
    return (
      <div className="App">
        <h1> My To-Do List </h1>
        <form className="form" onSubmit={this.onSubmit}>
          <input value={this.state.term} onChange={this.onChange} />
          <button> Submit </button>
        </form>
        <List items={this.state.items} />
      </div>
    );
  }
}

export default App;

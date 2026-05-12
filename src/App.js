import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      category: 'general',
      searchQuery: ''
    }
  }

  setCategory = (category) => {
    this.setState({
      category: category,
      searchQuery: ''
    })
  }

  setSearchQuery = (query) => {
    this.setState({
      searchQuery: query
    })
  }

  render() {
    return (
      <div>
        <Navbar setCategory={this.setCategory} setSearchQuery={this.setSearchQuery}/>
        <News key={this.state.category + this.state.searchQuery} pageSize={6} category={this.state.category} searchQuery={this.state.searchQuery}/>
      </div>
    )
  }
}

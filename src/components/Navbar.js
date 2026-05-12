import React, { Component } from 'react'

export class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      text: ''
    }
  }

  handleSearch = (e) => {
    e.preventDefault();
    if(this.state.text) {
        this.props.setSearchQuery(this.state.text);
    }
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
        <div className="container-fluid">
            <a className="navbar-brand" href="/" onClick={(e) => { e.preventDefault(); this.props.setCategory('general'); }}>Newsapp</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <a className="nav-link" href="/" onClick={(e) => { e.preventDefault(); this.props.setCategory('general'); }}>Home</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="/" onClick={(e) => { e.preventDefault(); this.props.setCategory('business'); }}>Business</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="/" onClick={(e) => { e.preventDefault(); this.props.setCategory('entertainment'); }}>Entertainment</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="/" onClick={(e) => { e.preventDefault(); this.props.setCategory('health'); }}>Health</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="/" onClick={(e) => { e.preventDefault(); this.props.setCategory('science'); }}>Science</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="/" onClick={(e) => { e.preventDefault(); this.props.setCategory('sports'); }}>Sports</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="/" onClick={(e) => { e.preventDefault(); this.props.setCategory('technology'); }}>Technology</a>
                </li>
            </ul>
            <form className="d-flex" onSubmit={this.handleSearch}>
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={this.state.text} onChange={(e) => this.setState({text: e.target.value})} />
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
            </div>
        </div>
        </nav>
      </div>
    )
  }
}

export default Navbar

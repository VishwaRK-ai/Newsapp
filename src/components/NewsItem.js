import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title, description, imageURL, newsURL, author, date, source} = this.props;
    return (
      <div className="my-3">
        <div className="card shadow-sm" style={{width: "100%"}}>
            <div style={{display: 'flex', justifyContent: 'flex-end', position: 'absolute', right: '0'}}>
                <span className="badge rounded-pill bg-danger"> {source} </span>
            </div>
            <img src={imageURL} className="card-img-top" alt="News"/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}..</p>
                <p className="card-text"><small className="text-muted">By {author ?author :"Unknown"} on {new Date(date).toGMTString()}</small></p>
                <a href={newsURL} className="btn btn-sm btn-primary shadow-sm" target="_blank" rel="noreferrer">Read More</a>
            </div>
        </div>
      </div>
    )
  }
}

export default NewsItem

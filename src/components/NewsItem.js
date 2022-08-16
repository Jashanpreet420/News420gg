import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title , description, imageUrl, newsUrl}= this.props;
    return (
      <div>
        <div className="card border border-dark border-opacity-75" style={{width: "18rem"}}>
          <img src={imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{title}...</h5>
              <p className="card-text ">{description}...</p>
              <a href={newsUrl} target="_blank" className="btn btn-dark text-light">Read more...</a>
            </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
//https://newsapi.org/v2/top-headlines?country=in&apiKey=f8dca4cfa95c47d6b2289d3fbdd37736
// f8dca4cfa95c47d6b2289d3fbdd37736
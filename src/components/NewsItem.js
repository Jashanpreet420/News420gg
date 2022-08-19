import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title , description, imageUrl, newsUrl, author, publishedAt , source }= this.props;
    return (
      <div className='my-4'>
        <div className="card border border-dark border-opacity-75 my-3 mx-2 mh-40 "  >
        <div style={{display: 'flex', justifyContent: 'flex-end' ,position: 'absolute', right:0}}>
      <span className=" badge rounded-pill bg-danger" >
    {source}
  </span> </div>
          <img src={imageUrl} className="card-img-top " alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text ">{description}...</p>
              <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-dark text-light">Read more...</a>
              <p className="card-text m-2"><small className="text-muted"><strong>&rarr; {author}</strong> on <i>{publishedAt}</i></small></p>
            </div>
        </div>
      </div>
    )
  }
}

export default NewsItem

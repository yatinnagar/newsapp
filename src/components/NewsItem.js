
import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
      let  {title,description,imageUrl,newsUrl,source,author,date} = this.props;
        return (
            <div>
                <div className="card">
            <img src={imageUrl} className="card-img-top" alt="..."/>
        <div className="card-body">
      
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text"><small className="text-primary">By {author}  On { new Date(date).toGMTString()} </small></p>
                    <span className="badge rounded-pill bg-danger">{source}</span>
                   <br></br>
                    <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-primary my-2">Read More</a>
        </div>
</div>
            </div>
        )
    }
}

export default NewsItem

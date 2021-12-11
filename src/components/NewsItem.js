
import React from 'react'

const NewsItem=(props)=>{
    
      let  {title,description,imageUrl,newsUrl,source,author,date} = props;
        return (
            <div>
                <div className="card">
            <img src={imageUrl} className="card-img-top" alt="..."/>
        <div className="card-body" style={  {  backgroundColor: '#c5aeff',color: '#292a2d'}}>
      
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

export default NewsItem

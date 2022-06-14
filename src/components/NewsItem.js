
import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea ,Button,CardActions} from '@mui/material';
const NewsItem=(props)=>{
   
    
      let  {title,description,imageUrl,newsUrl,source,author,date,Dmode} = props;
      const NewTab=()=> {
        window.open(newsUrl
          );
    }
        return (
        //     <div>
        //         <div className="card">
        //     <img src={imageUrl} className="card-img-top" alt="..."/>
        // <div className="card-body" style={  {  backgroundColor:  Dmode?"#383531":'white',color: Dmode?'#dddbe0':"black"}}>
      
        //             <h5 className="card-title">{title}</h5>
        //             <p className="card-text">{description}</p>
        //             <p className="card-text"><small className="text-primary">By {author}  On { new Date(date).toGMTString()} </small></p>
        //             <span className="badge rounded-pill bg-danger">{source}</span>
        //            <br></br>
        //             <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-primary my-2">Read More</a>
        // </div> 
        // </div>
        <>
         <Card  style={{backgroundColor:   Dmode?"#202124":'white'  , color: Dmode?'#dddbe0':"black" }}>
      <CardActionArea onClick={NewTab} >
        <CardMedia
          component="img"
         
          image={imageUrl}
          
        />
        <CardContent >
          <Typography gutterBottom variant="h5" component="div" fontSize="8">
           {title}
          </Typography>
          <Typography variant="body2" color="text.secondary" style={{backgroundColor:   Dmode?"#202124":'white'  , color: Dmode?'#dddbe0':"black" }}>
            {description}
            <br></br>
            <span className="badge rounded-pill bg-danger">{source}</span>
          </Typography>
          <Typography variant="body2" color="text.white" bg-Color="secondary">
          By {author}  On { new Date(date).toGMTString()}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button onClick={NewTab} size="medium" color="secondary">
         Read More
        </Button>
      </CardActions>
    </Card> 

            </>
        )
    
}

export default NewsItem

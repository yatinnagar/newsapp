import React, {useEffect,useState} from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import NewsMateLogo from './NewsMateLogo.png'
import InfiniteScroll from "react-infinite-scroll-component";


const News=(props)=> {
    
    const [articles, setArticles] = useState([])
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(true)
    const [totalresults, setTotalResults] = useState(0)
    // document.title=`${props.category==="general"?"Top Headlines":props.category.charAt(0).toUpperCase() + props.category.slice(1)} - NewsMate`;
    
    
    const updateNews=async()=>{
        props.setProgress(0);
     
       const url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${ page}&pageSize=${props.pageSize}`;
       props.setProgress(20);
       setLoading(true)
        let data=await fetch(url);
        props.setProgress(35);
        let parsedData=await data.json();
        props.setProgress(70);
        setArticles(parsedData.articles);
        setTotalResults(parsedData.totalResults)
       setLoading(false)
        console.log(parsedData);
        props.setProgress(100);
    }
   const fetchMoreData = async () => {
     
       const url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${ page+1}&pageSize=${props.pageSize}`;
      setPage(page+1)
      
       let data=await fetch(url);
       let parsedData=await data.json();
       setArticles(articles.concat(parsedData.articles) )
       setTotalResults(parsedData.totalResults)
       console.log(parsedData);

      };
      useEffect(() => {
        updateNews();
      }, [])
   
    
        return (
            <>
            <InfiniteScroll
            dataLength={articles.length}
            next={fetchMoreData}
            hasMore={ articles.length!== totalresults}
            loader={<Spinner/>}
          >
         <div className="container" style={{    marginTop: "65px"}}>
               <h1 className="text-center my-3" >NewsMate - {props.category==="general"?"Top Headlines":props.category.charAt(0).toUpperCase() + props.category.slice(1)} </h1>
         {  loading &&  <Spinner/>}
               <div className="row">
               { articles.map((element)=>{
                   return <div className="col-md-4" key={element.url}>
                   <NewsItem title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage? element.urlToImage :{NewsMateLogo}} newsUrl={element.url} source={element.source.name} author={element.author?element.author:"Unknown"}date={element.publishedAt}/>
               </div>
               })}
                        
                        </div>
                </div>
                 
          </InfiniteScroll>
             {/* {! loading &&<div className="container d-flex justify-content-between">
             <button disabled={ page<=1} type="button" className="btn btn-primary" onClick={this.handlePrevClick}> &larr; Previous</button>
             <button disabled={1} type="button" className="btn btn-primary">Page No. <span className="badge bg-secondary">{ page}</span></button>
             <button disabled={ page +1 > Math.ceil( totalResults/props.pageSize)} type="button" className="btn btn-primary" onClick={this.handleNextClick}>Next &rarr; </button>
             </div>} */}
         </>
        )
    
}
News.defaultProps={
    country : "in",
    pageSize: 9
}
News.propsTypes={
country : PropTypes.string,
    pageSize: PropTypes.number
}
export default News

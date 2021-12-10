import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import NewsMateLogo from './NewsMateLogo.png'
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
    
    static defaultProps={
            country : "in",
            pageSize: 9
    }
    static propsTypes={
        country : PropTypes.string,
            pageSize: PropTypes.number
    }
    constructor(props){
        super(props);
        
        this.state ={
              articles :[],
              page:1,
              loading : true,
              totalResults:0
          }
          document.title=`${this.props.category==="general"?"Top Headlines":this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1)} - NewsMate`;

    }
    async updateNews(){
       const url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=f72fa2317a614f74806207a4b3c72612&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({loading :true});
        let data=await fetch(url);
        let parsedData=await data.json();
        this.setState({articles:parsedData.articles ,totalResults:parsedData.totalResults, loading : false})
        console.log(parsedData);
    }
    fetchMoreData = async () => {
       this.setState({page:this.state.page+1})
       const url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=f72fa2317a614f74806207a4b3c72612&page=${this.state.page}&pageSize=${this.props.pageSize}`;
      
       let data=await fetch(url);
       let parsedData=await data.json();
       this.setState({articles:this.state.articles.concat(parsedData.articles) ,totalResults:parsedData.totalResults})
       console.log(parsedData);

      };
    async componentDidMount(){
        // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=f72fa2317a614f74806207a4b3c72612&page=1&pageSize=${this.props.pageSize}`;
        // this.setState({loading :true});
        // let data=await fetch(url);
        // let parsedData=await data.json();
        // this.setState({articles:parsedData.articles ,totalResults:parsedData.totalResults, loading : false})
        // console.log(parsedData);
        this.updateNews();
    }
    handlePrevClick = async()=>{
       
        // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=f72fa2317a614f74806207a4b3c72612&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
        // this.setState({loading :true});
        // let data=await fetch(url);
        // let parsedData=await data.json();
        this.setState({
            // articles:parsedData.articles,
            page : this.state.page-1
            // loading : false,
            // totalResults:parsedData.totalResults
        })
        this.updateNews();
    }
    handleNextClick = async()=>{
        // if(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize))
        // {}
        // else
        // {
        //     let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=f72fa2317a614f74806207a4b3c72612&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
        // this.setState({loading :true});
        //     let data=await fetch(url);
        // let parsedData=await data.json();
        this.setState({
            // articles:parsedData.articles,
            page : this.state.page+1
            // loading : false,
            // totalResults:parsedData.totalResults
        })
        this.updateNews();
    // }
    }
    render() {
        return (
            <>
            <InfiniteScroll
            dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            hasMore={this.state.articles.length!==this.state.totalResults}
            loader={<Spinner/>}
          >
         <div className="container">
               <h1 className="text-center my-3">NewsMate - {this.props.category==="general"?"Top Headlines":this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1)} </h1>
         { this.state.loading &&  <Spinner/>}
               <div className="row">
               {this.state.articles.map((element)=>{
                   return <div className="col-md-4" key={element.url}>
                   <NewsItem title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage? element.urlToImage :{NewsMateLogo}} newsUrl={element.url} source={element.source.name} author={element.author?element.author:"Unknown"}date={element.publishedAt}/>
               </div>
               })}
                        
                        </div>
                </div>
                 
          </InfiniteScroll>
             {/* {!this.state.loading &&<div className="container d-flex justify-content-between">
             <button disabled={this.state.page<=1} type="button" className="btn btn-primary" onClick={this.handlePrevClick}> &larr; Previous</button>
             <button disabled={1} type="button" className="btn btn-primary">Page No. <span className="badge bg-secondary">{this.state.page}</span></button>
             <button disabled={this.state.page +1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-primary" onClick={this.handleNextClick}>Next &rarr; </button>
             </div>} */}
         </>
        )
    }
}

export default News

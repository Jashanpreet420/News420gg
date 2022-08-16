import React, { Component } from 'react'
import NewsItem from './NewsItem'
export class News extends Component {
  
  constructor(){
    super();
    this.state={
      articles: [],
      loading : false,
      page: 1
    }
  }
  async componentDidMount(){
    let url =`https://newsapi.org/v2/top-headlines?country=in&apiKey=f8dca4cfa95c47d6b2289d3fbdd37736&page=1`;
    let data=await fetch(url);
    let parsedData= await data.json()
    this.setState({
      articles: parsedData.articles, totalResults: parsedData.totalResults
    })

  }
  prevClick = async ()=>{
    console.log("Prev click dbaya");
    let url =`https://newsapi.org/v2/top-headlines?country=in&apiKey=f8dca4cfa95c47d6b2289d3fbdd37736&page=${this.state.page - 1}&pageSize=20`;
    let data=await fetch(url);
    let parsedData= await data.json()
    this.setState({
      page : this.state.page - 1,
      articles: parsedData.articles
    })

  }
   nextClick= async()=>{
    console.log("Next click dbaya");
    if(this.state.page +1 > Math.ceil(this.state.totalResults/20)){}
    else{
    let url =`https://newsapi.org/v2/top-headlines?country=in&apiKey=f8dca4cfa95c47d6b2289d3fbdd37736&page=${this.state.page +1}&pageSize=20`;
    let data=await fetch(url);
    let parsedData= await data.json()
    this.setState({
      page : this.state.page +1,
      articles: parsedData.articles
    })
  }
  }
  
  
    
  
  render() {
    
    return (
      <div className='container my-3'>
      <h1>Top Headlines</h1>
      <div className='row'>
      {this.state.articles.map((element)=>{
          return<div className='col-md-4' key={element.url}>
            <NewsItem  title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,90):""} imageUrl={element.urlToImage?element.urlToImage:"https://images.hindustantimes.com/tech/img/2022/08/15/1600x900/FaEPb2RXEAAfJsZ_1660565143942_1660565163038_1660565163038.jpg"} newsUrl={element.url }/>
      </div>
      })}
      </div>
      
      
      <div className='container d-flex justify-content-between'>
  <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.prevClick} >&larr; Previous</button>
  
  <button type="button" className="btn btn-dark" onClick={this.nextClick} >Next &rarr;</button>
</div>
      </div>

    )
  }
}

export default News
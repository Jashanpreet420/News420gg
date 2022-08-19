import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from 'react-infinite-scroll-component';
export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 9,
    category: "general",
  };
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };
  capitalise =(string)=>{
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults :0
    };
    document.title= this.capitalise(this.props.category) + ' - newsOP.in'    //for tab headline to be dynamic
  }
  async updateNews(){
    this.props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.props.setProgress(40);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      
      loading: false
    });
    this.props.setProgress(100);

  }

  async componentDidMount() {
    
    this.updateNews();
   
  }
  fetchMoreData=async()=>{
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });

    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
      loading : false,
      page: this.state.page+1
    });
} 
 // prevClick = async () => {
  //   console.log("Prev click dbaya");
   
  //   this.setState({page: this.state.page - 1 })
  //   this.updateNews();
  // };

  // nextClick = async () => {
  //   console.log("Next click dbaya");
    
  //   this.setState({page: this.state.page + 1 })
  //   this.updateNews();
  // };

  render() {
    return (
      <>
        <h1 className=" d-flex justify-content-center my-4 ">Top Headlines - {this.capitalise(this.props.category)}.in</h1>
        {/* dynamic heading    */}

        {this.state.loading && <Spinner />}
        <InfiniteScroll
          dataLength={this.state.articles.length} //This is important field to render the next data
          next={this.fetchMoreData}
          hasMore={this.state.articles.length!==this.state.totalResults}
          loader={<Spinner/>} >
            <div className="container">
              <div className="row">
                {this.state.articles.map((element) => {
                    return <div className="col-md-4" key={element.url}>
                        <NewsItem
                          title={element.title ? element.title : ""}
                          description={
                            element.description
                              ? element.description.slice(0, 90)
                              : ""
                          }
                          imageUrl={
                            element.urlToImage
                              ? element.urlToImage
                              : "https://images.hindustantimes.com/tech/img/2022/08/15/1600x900/FaEPb2RXEAAfJsZ_1660565143942_1660565163038_1660565163038.jpg"
                          }
                          newsUrl={element.url}
                          source ={element.source.name?element.source.name:""}
                          author={element.author?element.author:"unknown"}
                          publishedAt={element.publishedAt?element.publishedAt.slice(0,10):""}
                        />
                      </div>
                      
                    
                  })}
              </div>
            </div>
        </InfiniteScroll>
        
      </>
    );
  }
}

export default News;


/*{ <div className="container d-flex justify-content-between">    for next prev buttons
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.prevClick}
          >
            &larr; Previous
          </button>

          <button
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
            type="button"
            className="btn btn-dark"
            onClick={this.nextClick}
          >
            Next &rarr;
          </button>
        </div> }*/
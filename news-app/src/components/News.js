import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import InfiniteScroll from 'react-infinite-scroll-component';

class News extends Component {
  constructor(props) {
    super();
    this.state = {
      articles: [],
      loading: true,
      page : 1
    };
    document.title = 'News Parrot | '+ (props.category.charAt(0).toUpperCase() + props.category.slice(1));
  }
  updateNews = async () => {
    this.props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&pageSize=${this.props.pageSize}&page=${this.state.page}&q=${this.props.searchQuery}`;
    this.setState({loading : true});
    this.props.setProgress(30);
    let data = await fetch(url);
    let parsedData = await data.json();
    this.props.setProgress(70);
    this.setState({articles : parsedData.articles , totalArticles : parsedData.totalResults, loading : false});
    this.props.setProgress(100);
  }
  async componentDidMount(){
      this.updateNews();
  }
  fetchMoreData = async () => {
    await this.setState({page : this.state.page + 1, loading : true});
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&pageSize=${this.props.pageSize}&page=${this.state.page}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({articles : this.state.articles.concat(parsedData.articles), loading : false});
  }
  render() {
    return (
      <>
        <div className="container" style={{marginTop: '75px'}}>
          <h1 className="text-center" style={{margin : '35px auto', background:'#212529', color:'white', borderRadius:'10px'}}>News Parrot Top {this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1)} Headlines</h1>
        </div>
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalArticles}
          loader= {<Spinner />}
        >
        <div className="container">
          <div className="row">
          {this.state.articles.map((article) => {
            return (
              <div className="col-md-4" key={article.publishedAt}>
                <NewsItem
                  title={article.title}
                  desc={article.description}
                  imgUrl={article.urlToImage}
                  newsUrl={article.url}
                  author={article.author}
                  date={article.publishedAt}
                  source={article.source}
                />
              </div>
            );
          })}
        </div>
        </div>
        </InfiniteScroll>
      </>
    );
  }
}

export default News;

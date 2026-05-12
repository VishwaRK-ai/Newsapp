import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import InfiniteScroll from 'react-infinite-scroll-component'

export class News extends Component {
    
    constructor(){
        super();
        this.state={
            articles: [],
            loading: true,
            page: 1,
            totalResults: 0
        }
    }

    async updateNews() {
        this.setState({ loading: true });
        let url = `https://gnews.io/api/v4/top-headlines?category=${this.props.category}&apikey=030bcb2b107b1cf446bc3ba6a7c22b44&page=${this.state.page}&max=${this.props.pageSize}`
        if (this.props.searchQuery) {
            url = `https://gnews.io/api/v4/search?q=${this.props.searchQuery}&apikey=030bcb2b107b1cf446bc3ba6a7c22b44&page=${this.state.page}&max=${this.props.pageSize}`
        }
        let data = await fetch(url);
        let parsedData = await data.json();
        if (parsedData.articles){
            this.setState({
                articles: parsedData.articles,
                totalResults: parsedData.totalArticles,
                loading: false
            })
        }
        else{
            this.setState({ loading: false })
        }
    }

    async componentDidMount(){
        this.updateNews();
    }

    fetchMoreData = async () => {
        this.setState({
            page: this.state.page + 1
        }, async () => {
            let url = `https://gnews.io/api/v4/top-headlines?category=${this.props.category}&apikey=030bcb2b107b1cf446bc3ba6a7c22b44&page=${this.state.page}&max=${this.props.pageSize}`
            if (this.props.searchQuery) {
                url = `https://gnews.io/api/v4/search?q=${this.props.searchQuery}&apikey=030bcb2b107b1cf446bc3ba6a7c22b44&page=${this.state.page}&max=${this.props.pageSize}`
            }
            let data = await fetch(url);
            let parsedData = await data.json();
            if (parsedData.articles) {
                this.setState({
                    articles: this.state.articles.concat(parsedData.articles)
                })
            }
        });
    }

  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center" style={{ margin: '35px 0px' }}>Newsapp - Top {this.props.searchQuery ? `Results for "${this.props.searchQuery}"` : `${this.props.category} headlines`}</h1>
        {this.state.loading && <Spinner/>}
        
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner />}
        >
            <div className="container">
            <div className="row">
                {this.state.articles.map((element, index)=>{
                return(
                    <div className="col-md-4" key={index} >
                        <NewsItem 
                          title={element.title?element.title.slice(0,40):""} 
                          description={element.description?element.description.slice(0,89):""} 
                          imageURL={element.image?element.image:"https://www.presentation-company.com/blog/how-to-avoid-the-stock-photo-cliche/https://www.presentation-company.com/wp-content/uploads/2022/01/shutterstock_61231831.jpg"} 
                          newsURL={element.url} 
                          author={element.source.name} 
                          date={element.publishedAt} 
                          source={element.source.name} 
                        />
                    </div>
                )
                })}
            </div>
            </div>
        </InfiniteScroll>
      </div>
    )
  }
}

export default News

import React, { Component } from "react";

class NewsItem extends Component {
  render() {
    let { title, desc, imgUrl, newsUrl, author, date, source } = this.props;
    return (
      <div className="card"  style={{margin : '25px auto'}}>
        <div style={{display : 'flex',justifyContent:'flex-end',position : 'absolute', right:'0'}}>
              <span className="badge rounded-pill bg-danger">{source.name}</span>
        </div>
        <img
          src={
            imgUrl !== null
              ? imgUrl
              : "https://images.livemint.com/img/2021/09/01/600x338/stock-kItE--621x414@LiveMint_1630461565761.jpg"
          }
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">
            {title !== null ? title : "Title Missing."}
          </h5>
          <p className="card-text">
            {desc !== null
              ? desc.slice(0, 100) + "..."
              : "Description Is Missing."}
          </p>
          <div className="container d-flex justify-content-between">
            <p className="card-text">
              <small className="text-muted">
                Author : {author ? author : "Unknown"}
              </small>
            </p>
            <p className="card-text">
              <small className="text-muted">
                Date : {new Date(date).toDateString()}
              </small>
            </p>
          </div>
          <div className="text-center">
            <a
              href={newsUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-dark btn-sm"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;

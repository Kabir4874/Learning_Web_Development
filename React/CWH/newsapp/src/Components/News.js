import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {



  constructor(){ 
    super();
    console.log("Hello I am a constructor");
    this.state={

    }
   }



  render() {
    return (
      <div className="container my-3">
        <h2>NewsMonkey- Top Headlines</h2>
        <div className="row mt-5">
          <div className="col-md-4">
            <NewsItem title="My Title" description="MyDesc" imageUrl="https://i.ytimg.com/vi/uKvNfnwzXMA/maxresdefault.jpg" />
          </div>
          <div className="col-md-4">
            <NewsItem />
          </div>
          <div className="col-md-4">
            <NewsItem />
          </div>
        </div>
      </div>
    );
  }
}

export default News;

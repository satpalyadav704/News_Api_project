
import React, { Component } from 'react'
import pic from "./images/no image.jpg"

export default class NewsItem extends Component {
  render() {
    return (
      <>
       <div className="card col-sm-12 col-md-6 col-lg-4 col-xl-3 col-xxl-2">
  <img src={this.props.image?this.props.image:pic} className="card-img-top" height="150px"alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{this.props.title}</h5>
    <p className="card-text">{this.props.dec}</p>
    <a href={this.props.link} class="btn btn-primary">और पढ़ें</a>
  </div>
</div>

      </>
    )
  }
}


import React, { Component } from 'react'
import axios from 'axios'
import NewsItem from './NewsItem'

export default class News extends Component {
    constructor(){
        super()
        this.state={
            list:null
        }
    }
    getData=async()=>{
        var res= await axios.get ('https://newsapi.org/v2/everything?q=technology&language=hi&apiKey=4508c8135217480b8cc399d69fade36c')
    //console.log(res.data.articles);
    this.setState({list:res.data.articles})
    }
    componentDidMount(){
this.getData()
    }
    getSnapshotBeforeUpdate(prevprops,prevState){
        if(prevprops.category!==this.props.category){
            this.getData()
        }
    }
render() {
    return (
      <div className='container-fluid'>
        {this.state.list?<div className='row'>
            {this.state.list.map((item)=>{
                return(<NewsItem title={item.title} dec={item.description}
                link={item.url} image={item.urlToImage}
                />
                )
            })}
        </div>:<p>No data</p>}</div>
    )
  }
}
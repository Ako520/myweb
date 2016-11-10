import React, { PropTypes } from 'react'
import OneCard from '../Component/Card.js'
import axios from 'axios'
// import {getCardData} from '../utils/getData.js'
import isEmpty from 'lodash/fp/isEmpty';

class Blog extends React.Component {
  constructor(){
    super();
    this.state={
      data:[],
      wait:false
    }
  }
  componentDidMount() {
    // getCardData().then( (res) =>{
    //   this.setState({
    //     data:res,
    //     wait:false
    //   });
    // } )
    if (this.context.router.isActive("/frontblog")) {
      this.setState({
        showlist:true
      });
    }
    axios.get('http://localhost:3000/frontArticles?${Math.random()}').then(res => {
      this.setState({
        data:res.data.datas
      });
    });
  }
  render () {
    let cards=this.state.data.map((item,i) => {
      return (
        <OneCard {...item} key={i} />
      )
    })
    return (
      <div style={{width:"100%",marginTop:"20px"}}>
        {isEmpty(this.props.params.url) ? (this.state.wait ? "请稍等" : cards ) : ""}
        {this.props.children}
      </div>
    )
  }
}
Blog.contextTypes={
  router: React.PropTypes.object
}
export default Blog;

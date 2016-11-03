import React, { PropTypes } from 'react'
import axios from 'axios'
import {browserHistory} from 'react-router'
import marked from 'marked'
import highlight from 'highlight.js'
import '../styles/markdown.css'
import isEmpty from 'lodash/fp/isEmpty';
import toString from 'lodash/fp/toString.js';
import EditForm from '../Component/EditForm.js';




class EditBack extends React.Component {
  constructor(){
    super();
    this.state={
      data:{}
    }
  }
  pushDatas(data){
    console.log(data);
    axios.put(`http://localhost:3000/backArticles/${this.props.params.url}`, data)
    .then(function (response) {
      console.log(response);
      browserHistory.push('/')
    })
    .catch(function (error){
      console.log(error);
    })
  }
  componentWillMount() {
    axios.get(`http://localhost:3000/backArticles/${this.props.params.url}`).then(res => {
      this.setState({
        data:res.data
      });
    });
  }
  handleTitleChange(e){
    this.setState({
      title:e.target.value
    });
  }
  handleSubtitleChange(e){
    this.setState({
      subtitle:e.target.value
    });
  }
  handleContentChange(e){
    this.setState({
      content:e.target.value
    });
  }
  render () {
    let styles={
      all:{
        paddingTop:"5vh",
        display:'flex',
        width:"100%"

      },
      left:{
        paddingLeft:'30px',
        paddingRight:'30px',
        flexBasis:"50%",
        border:"1px red solid",
      },
      right:{
        paddingLeft:'30px',
        paddingRight:'30px',
        flexBasis:"50%",
        border:"1px blue solid",
      },
      button:{
        margin:"12"
      },
      block: {
        maxWidth: 250,
      },
      checkbox: {
        marginBottom: 16,
      },
      fullwidth:{
        marginBottom:"40px"
      },
      text:{
        width:"80%"
      }
    }
    marked.setOptions({
      highlight: function (code) {
        return highlight.highlightAuto(code).value;
      }
    });
    return(
      <div style={styles.all}>
        <div style={styles.left}>
          {
            !isEmpty(this.state.data) ? <EditForm data={this.state.data} pushDatas={this.pushDatas.bind(this)}/> :
              ""
          }

        </div>
        <div style={styles.right}>
          {this.state.wait ? "请等一哈": <div dangerouslySetInnerHTML={{__html:marked(toString(this.state.data.content))}} />}
        </div>
      </div>
    )
  }
}

export default EditBack;

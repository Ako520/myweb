import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
} from 'react-router-dom'
import avatar from '../images/avatar.jpg'
import Drawer from 'material-ui/Drawer';
import IconButton from 'material-ui/IconButton';
import RaisedButton from 'material-ui/RaisedButton';
import MenuItem from 'material-ui/MenuItem';
import './LeftNav.scss';

// import { Redirect, BrowserRouter as Router, Route,IndexRoute, browserHistory } from 'react-router-dom'
import App from '../App.js'
import Home from '../Home/Home.js'
import Apps from '../Apps/Apps.js'
import Counter from '../Apps/Counter.js'
import BlogHistory from '../BlogHistory/BlogHistory.js'
import Work from '../Work/Work.js'
import AddFrontArticle from '../AddArticle/AddFrontArticle.js'
import AddBackArticle from '../AddArticle/AddBackArticle.js'
import FrontBlog from '../Blog/FrontBlog.js'
import EditFront from '../Edit/EditFront.js'
import EditBack from '../Edit/EditBack.js'
import BackBlog from '../Blog/BackBlog.js'
import Article from '../Article/Article.js'
import NotFoundPage from '../NotFoundPage/NotFoundPage.js'
import About from './About.js'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class LeftNav extends React.Component {
  constructor(){
    super();
    this.state={
      open:false
    }
  }
  handleToggle(){
    console.log(this.state.open);
    this.setState({
      open: !this.state.open
    })
  }
  handleClose(){
    this.setState({
      open:!this.state.open
    });
  }
  render () {
    let styles={
      name:{
        padding:"20px",
        color:"black",
        fontSize:"2.6rem"
      },
      avatar:{
        margin:"0 auto",
        width:"150px",
        height:"150px",
        background: `url(${avatar}) no-repeat`,
        backgroundPosition:"0% 100%",
        backgroundSize:"110%"
      },
      list:{
        margin:'20px 0 20px 0',
        padding:'10px'
      },
      iconWrap:{
        position:"absolute",
        top:"20px",
        left:"20px",
        zIndex:"10"
      },
      iconStyle:{
        position:"abosolute",
        width: "120",
        height: "120",
        padding: "30",
      },
      iconSize: {
        width: "70",
        height: "70",
      },
      a:{
        textDecoration:"none"
      }
    };
    return(
        <Drawer open={true}>
          <div className="list">
            <MenuItem>前端博客</MenuItem>
            <MenuItem>博客更新</MenuItem>
            <MenuItem>动漫专栏</MenuItem>
            <MenuItem>简历</MenuItem>
            <MenuItem>404君</MenuItem>
            <Redirect from='*' to='/404' />
          </div>
        </Drawer>
    )
  }
}

export default LeftNav;

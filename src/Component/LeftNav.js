import React from 'react'
import {
  Link,
} from 'react-router-dom'
import avatar from '../images/avatar.jpg'
import Drawer from 'material-ui/Drawer';
import IconButton from 'material-ui/IconButton';
import RaisedButton from 'material-ui/RaisedButton';
import MenuItem from 'material-ui/MenuItem';
import './LeftNav.css';

// import { Redirect, BrowserRouter as Router, Route,IndexRoute, browserHistory } from 'react-router-dom'
import App from '../App.js'
import Home from '../Home/Home.js'
import Apps from '../Apps/Apps.js'
import Counter from '../Apps/Counter.js'
import BlogHistory from '../BlogHistory/BlogHistory.js'
import Work from '../Work/Work.js'
import AddFrontArticle from '../AddArticle/AddFrontArticle.js'
import AddBackArticle from '../AddArticle/AddBackArticle.js'
import FrontBlog from '../pages/frontBlog/FrontBlog.js'
import EditFront from '../Edit/EditFront.js'
import EditBack from '../Edit/EditBack.js'
import BackBlog from '../Blog/BackBlog.js'
import Article from '../Article/Article.js'
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
            <MenuItem><Link to='frontblog'>前端博客</Link></MenuItem>
            <MenuItem><Link to='bloghistory'>博客更新</Link></MenuItem>
            <MenuItem><Link to='anime'>动漫专栏</Link></MenuItem>
            <MenuItem><Link to='brief'>简历</Link></MenuItem>
            <MenuItem><Link to='404'>404君</Link></MenuItem>
          </div>
        </Drawer>
    )
  }
}

export default LeftNav;

import React, { PropTypes } from 'react'
import {Link,IndexLink} from "react-router"
import avatar from '../images/avatar.jpg'
import Drawer from 'material-ui/Drawer';
import IconButton from 'material-ui/IconButton';
import MenuItem from 'material-ui/MenuItem';
import Menu from 'material-ui/svg-icons/navigation/menu.js';
import './LeftNav.scss';
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
      }
    };
    return(
      <div>
        <Drawer open={true}>
          <IndexLink to='/' style={{textDecoration:"none"}} >
            <h2 style={styles.name}>Ako酱</h2>
          </IndexLink>
          <IndexLink to='/'>
            <div style={styles.avatar}></div>
          </IndexLink>
          <div className="list">
          <Link to="/frontblog" activeClassName='activeRoute'><MenuItem onTouchTap={this.handleClose.bind(this)}>前端开发</MenuItem>
          </Link>
          <Link to="/backblog" activeClassName='activeRoute'>
            <MenuItem onTouchTap={this.handleClose.bind(this)}>后端开发</MenuItem>
          </Link>
          <Link to="/bloghistory" activeClassName='activeRoute'>
            <MenuItem onTouchTap={this.handleClose.bind(this)}>博客更新</MenuItem>
          </Link>
          <Link to="/blog" activeClassName='activeRoute'>
            <MenuItem onTouchTap={this.handleClose.bind(this)} >动漫</MenuItem>
          </Link>
          <Link to="/blog" activeClassName='activeRoute'>
            <MenuItem onTouchTap={this.handleClose.bind(this)}>设计</MenuItem>
          </Link>
          <Link to="/blog" activeClassName='activeRoute'>
            <MenuItem onTouchTap={this.handleClose.bind(this)}>专题</MenuItem>
          </Link>
          <Link to="/blog" activeClassName='activeRoute'>
            <MenuItem onTouchTap={this.handleClose.bind(this)}>简历</MenuItem>
          </Link>
          <Link to="/404" activeClassName='activeRoute'>
            <MenuItem onTouchTap={this.handleClose.bind(this)}>粗问题了404</MenuItem>
          </Link>
        </div>
  </Drawer>
</div>
)
}
}

export default LeftNav;

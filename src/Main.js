import React from 'react';
import NavHeader from './Component/NavHeader.js';
import Footer from './Component/Footer.js';
import LeftNav from './Component/LeftNav.js';
import IconButton from 'material-ui/IconButton';
import ActionHome from 'material-ui/svg-icons/action/home';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';


import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import baseTheme from '../node_modules/material-ui/styles/baseThemes/lightBaseTheme.js';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
injectTapEventPlugin();


class Main extends React.Component {
  getChildContext() {
    return {muiTheme: getMuiTheme(baseTheme)};
  }
  constructor(){
    super();
    this.state={
      small:false,
      leftNav:false,
      open:false,
      title:"home"
    }
  }
  checkWidth(){
    this.setState({
      small:window.innerWidth>760 ? false : true
    });
  }
  componentDidMount() {
    this.checkWidth();
    window.onresize=this.checkWidth.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setTitle();
  }
  componentWillMount() {
    this.setTitle();
  }
  setTitle(){
    console.log(this.context.router);
    this.setState({
      title:this.context.router.isActive('/', true) ? 'HOME' :
        this.context.router.isActive('/blog')? 'BLOG' :
        this.context.router.isActive('/work')? 'WORK' :
        this.context.router.isActive('/about')? 'ABOUT' : 'ITEM'
    });
  }
  render () {
    return(
      <div className="content-wrap">
        {this.state.small ? <NavHeader title={this.state.title} /> : <LeftNav title={this.state.title}  toggle={this.state.open} />}
        <content className="content-main">
          { React.cloneElement(this.props.children,this.props) }
        </content>
        {this.state.small ? <Footer /> : "" }
      </div>
    )
  }
}
Main.contextTypes={
  router:React.PropTypes.object.isRequired
}
Main.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired,
};
export default Main;

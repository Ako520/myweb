import React from 'react';
import NavHeader from './Component/NavHeader.js';
import Footer from './Component/Footer.js';
import LeftNav from './Component/LeftNav.js';
import FrontBlog from './pages/frontBlog/FrontBlog.js';
import NotFound404 from './pages/404/404.js';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom'

import injectTapEventPlugin from 'react-tap-event-plugin';
import baseTheme from '../node_modules/material-ui/styles/baseThemes/lightBaseTheme.js';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

injectTapEventPlugin();


class App extends React.Component {

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

  render () {
    return(
        <MuiThemeProvider>
          <Router>
            <div className="content-wrap">
                <LeftNav/>
                <div className="content-main">
                  <Switch>
                    <Route path="/frontblog" component={FrontBlog}/>
                    <Route component={NotFound404}/>
                  </Switch>
                </div>
            </div>
          </Router>
        </MuiThemeProvider>
    )
  }
}

export default App;

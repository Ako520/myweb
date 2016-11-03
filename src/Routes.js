import { render } from 'react-dom'
import { Redirect,Router, Route,IndexRoute, browserHistory } from 'react-router'
import App from './App.js'
import Home from './Home/Home.js'
import BlogHistory from './BlogHistory/BlogHistory.js'
import Work from './Work/Work.js'
import AddFrontArticle from './AddArticle/AddFrontArticle.js'
import AddBackArticle from './AddArticle/AddBackArticle.js'
import FrontBlog from './Blog/FrontBlog.js'
import EditFront from './Edit/EditFront.js'
import EditBack from './Edit/EditBack.js'
import BackBlog from './Blog/BackBlog.js'
import Article from './Article/Article.js'
import NotFoundPage from './NotFoundPage/NotFoundPage.js'
import React, { PropTypes } from 'react'


class Routes extends React.Component {
  render () {
    return(
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Home} />
          <Route path="/bloghistory" component={BlogHistory}/>
          <Route path="/frontblog" component={FrontBlog} />
          <Route path="/frontblog/:url" component={Article}/>
          <Route path="/frontblog/:url/edit" component={EditFront} />
          <Route path="/backblog" component={BackBlog}/>
          <Route path="/backblog/:url" component={Article}/>
          <Route path="/backblog/:url/edit" component={EditBack}/>
          <Route path="/work" component={Work}/>
          <Route path="/frontadd" component={AddFrontArticle}/>
          <Route path="/backadd" component={AddBackArticle}/>
          <Route path='/404' component={NotFoundPage}/>
          {/* 其他重定向到 404 */}
          <Redirect from='*' to='/404' />
        </Route>
      </Router>
    )
  }
}

export default Routes;

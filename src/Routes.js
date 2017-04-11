// import { render } from 'react-dom'
// import { Redirect, BrowserRouter as Router, Route,IndexRoute, browserHistory } from 'react-router-dom'
// import App from './App.js'
// import Home from './Home/Home.js'
// import Apps from './Apps/Apps.js'
// import Counter from './Apps/Counter.js'
// import BlogHistory from './BlogHistory/BlogHistory.js'
// import Work from './Work/Work.js'
// import AddFrontArticle from './AddArticle/AddFrontArticle.js'
// import AddBackArticle from './AddArticle/AddBackArticle.js'
// import FrontBlog from './Blog/FrontBlog.js'
// import EditFront from './Edit/EditFront.js'
// import EditBack from './Edit/EditBack.js'
// import BackBlog from './Blog/BackBlog.js'
// import Article from './Article/Article.js'
// import NotFoundPage from './NotFoundPage/NotFoundPage.js'
// import React from 'react'
//
// class Routes extends React.Component {
//   render () {
//     return(
//         <div>111
//       <Router>
//           <Route path="/" component={App}>
//             {/*<IndexRoute component={Home} />*/}
//             <Route path="/bloghistory" component={BlogHistory}/>
//             <Route  path="frontblog" component={FrontBlog}>
//               <Route path=":url" component={Article}/>
//             </Route>
//             <Route path="/frontblog/:url/edit" component={EditFront} />
//             <Route path="/backblog" component={BackBlog}>
//               <Route path=":url" component={Article}/>
//             </Route>
//             <Route path="/backblog/:url/edit" component={EditBack}/>
//             <Route path="/work" component={Work}/>
//             <Route path="/apps" component={Apps}>
//               <Route path="2" component={Counter}/>
//             </Route>
//             <Route path="/apps/1" component={Counter}/>
//             <Route path="/frontadd" component={AddFrontArticle}/>
//             <Route path="/backadd" component={AddBackArticle}/>
//             <Route path='/404' component={NotFoundPage}/>
//             {/* 其他重定向到 404 */}
//             <Redirect from='*' to='/404' />
//           </Route>
//       </Router>
//         </div>
//     )
//   }
// }
//
// export default Routes;

import React, { PropTypes } from 'react'
import Point from "./Point.js"
import "./404.css"
let points = new Array();
class NotFoundPage extends React.Component {
  constructor(){
    super();
    this.state=({
      points:[]
    })
  }
  pointHistory(num,add){
    // if(add){
    //   points.push(num);
    //   this.setState({
    //     points:points
    //   });
    //   for (var i = 0; i < points.length; i++) {
    //     console.log(points[i]-1);
    //   }
    // }
    // else{
    //   for (var i = 0; i < points.length; i++) {
    //     if (points[i]==num) {
    //       points.splice(i,1);
    //       this.setState({
    //         points:points
    //       });
    //       return false
    //     }
    //   }
    // }
  }
  render () {
    let divpikaqiu = new Array();
    for (var i = 0; i < 1920; i++) {
      divpikaqiu.push(<Point key={`pikaqiu${i}`}chuan={this.pointHistory.bind(this)} num={i}/>);
    }
    let div404 = new Array();
    for (var i = 0; i < 1920; i++) {
      div404.push(<Point key={`404-${i}`} chuan={this.pointHistory.bind(this)} num={i}/>);
    }
    return(
      <div className="canvas">
        <div className="gopikaqiu">
          {divpikaqiu}
        </div>
        <div className="go404">
          {div404}
        </div>
      </div>
    )
  }
}

export default NotFoundPage;

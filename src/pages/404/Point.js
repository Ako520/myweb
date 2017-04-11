import React, { PropTypes } from 'react'

class Point extends React.Component {
  constructor(){
    super();
    this.state={
      yellow:true
    }
  }
  handleClick(){
    this.setState({
      yellow:!this.state.yellow
    });
    this.props.chuan(this.props.num,this.state.yellow);
  }
  render () {
    return(
      <div onClick={this.handleClick.bind(this)} className="pixel" style={{background:this.state.yellow ? "" : "#231816"}} >
      </div>
    )
  }
}

export default Point;

import React, { PropTypes } from 'react'
import {hashHistory} from 'react-router'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

class OneCard extends React.Component {

  jump(x){
    hashHistory.push(`/view/${x}`)
  }
  render () {
    let styles={
      all:{
        width:"80%",
        maxWidth:"1200px",
        boxShadow:"0 1px 6px rgba(0, 0, 0, 0.12), 0 1px 4px rgba(0, 0, 0, 0.24)",
        bordrRadius:"20px",
        margin:"0 auto 30px",
        paddingBottom:"40PX"
      },
      index:{
        textAlign:"center",
        height:"100px",
        background:"rgba(112, 163, 255,0.9)",
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center"
      },
      span:{width:"60px",
        padding:"0 20px",
        height:"60px",
        lineHeight:"60px",
        borderRadius: "50%",
        border:"3px solid #fff",
        fontSize:"30px"
      },
      title:{
        padding:"0 20px",
      },
      content:{
        padding:"0 20px",
      },
      btn:{
        margin:"0 20px",
        display:"block",
        width:"70px",
        height:"30px",
        lineHeight:"30px",
        textAlign:"center",
        border:"1px solid rgb(194, 29, 59)",
        borderRadius:"10px"
      }
    }
    return(
      <Card style={styles.all}>
        <CardTitle title={this.props.title } subtitle="Card subtitle" />
        <CardText>
          {this.props.content}
        </CardText>
        <CardActions>
          <FlatButton label="阅读全文" backgroundColor="#a4c639" hoverColor="#8AA62F" />
        </CardActions>
      </Card>
    )
  }
}

export default OneCard;

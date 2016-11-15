import React, { PropTypes } from 'react'
import {browserHistory} from 'react-router'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

class OneCard extends React.Component {
  constructor(){
    super();
    this.state={
      howlong:""
    }
  }
  componentDidMount() {
    console.log(this.props.createTime);
    let createTime = this.props.createTime;
    // let par = /(.+)T(.+)\./;
    let par = /(\d+)-(\d+)-(\d+)T(\d+)/;
    let arr = createTime.match(par);

    // let createTime = this.props.createTime;
    // let mongth =[null,31,28,31,30,31,30,31,31,30,31,30,31]
    // let par = /(\d+)-(\d+)-(\d+)T(\d+)/;
    // let arr = createTime.match(par);
    // let creatYear = arr[1];
    // let creatMonth = arr[2];
    // let creatDay = arr[3];
    // let creatHour = arr[4];

    var minute = 1000 * 60;
  	var hour = minute * 60;
  	var day = hour * 24;
  	var halfamonth = day * 15;
  	var month = day * 30;
  	var now = new Date().getTime();
    var dateTimeStamp = new Date(arr[1],arr[2]-1,arr[3],arr[4],0,0).getTime();
    var diffValue = now - dateTimeStamp;
  	if(diffValue < 0){return;}
  	var monthC =diffValue/month;
  	var weekC =diffValue/(7*day);
  	var dayC =diffValue/day;
  	var hourC =diffValue/hour;
  	var minC =diffValue/minute;
    if(monthC>=1){
  		this.setState({
  		  howlong:`${parseInt(monthC)}月前`
  		});
  	}
  	else if(dayC>=1){
  		this.setState({
  		  howlong:`${parseInt(dayC)}天前`
  		});
  	}
  	else if(hourC>=1){
  		this.setState({
  		  howlong:`${parseInt(hourC)}小时前`
  		});
  	}
  	else if(minC>=1){
  		this.setState({
  		  howlong:`${parseInt(minC)}分钟前`
  		});
  	}
    else
  	this.setState({
  	  howlong:"刚刚"
  	});
    // let curTime = new Date();
    // let curYear = curTime.getFullYear();
    // let curMonth = curTime.getMonth()+1;
    // let curDay = curTime.getDate();
    // let curHour = curTime.getHours();
    // if (Math.abs(curYear - creatYear) > 0 && curMonth - creatMonth >0) {
    //   this.setState({
    //     howlong:`${curYear - creatYear}年前`
    //   });
    // }
    // else if (Math.abs(curMonth - creatMonth) > 0 && curDay - creatDay >0) {
    //     this.setState({
    //       howlong:`${curMonth - creatMonth}月前`
    //     });
    // }
    // else if (Math.abs(curDay - creatDay) > 0) {
    //   if (curDay - creatDay > 0 ) {
    //     this.setState({
    //       howlong:`${curDay - creatDay}天前`
    //     });
    //   }
    //   else {
    //     if (creatMonth == 2 && creatYear % 4 == 0) {
    //       if (creatYear % 400 != 0 && creatYear % 100 == 0  ) {
    //         this.setState({
    //           howlong:`${curDay+28-creatDay}天前`
    //         });
    //       }
    //       else {
    //         this.setState({
    //           howlong:`${curDay+29-creatDay}天前`
    //         });
    //       }
    //     }
    //     else {
    //       this.setState({
    //         howlong:`${curDay+mongth[creatMonth]-creatDay}天前`
    //       });
    //     }
    //   }
    // }
    // else if (curHour > creatHour) {
    //   this.setState({
    //     howlong:`${curHour - creatHour}小时前`
    //   });
    // }
    // else if(curHour = creatHour) {
    //   this.setState({
    //     howlong: "刚刚"
    //   });
    // }


  }
  handJump(){
    if (this.context.router.isActive('/frontblog')) {
      let id = this.props._id;
      browserHistory.push(`/frontblog/${id}`)
    }
    else{
      let id = this.props._id;
      browserHistory.push(`/backblog/${id}`)
    }
  }
  render () {
    let styles={
      all:{
        width:"80%",
        maxWidth:"900px",
        boxShadow:"0 1px 6px rgba(0, 0, 0, 0.12), 0 1px 4px rgba(0, 0, 0, 0.24)",
        bordrRadius:"20px",
        margin:"0 2rem 30px",
        paddingBottom:"10px"
      }
    }
    return(
      <Card style={styles.all} onTouchTap={this.handJump.bind(this)}>
        <CardTitle title={this.props.title}  subtitle={this.state.howlong}/>
        <CardText>
          <div dangerouslySetInnerHTML={{__html:this.props.subtitle}}/>
        </CardText>
        <CardActions>
          <FlatButton  label="阅读全文" backgroundColor="#a4c639" hoverColor="#8AA62F" />
        </CardActions>
      </Card>
    )
  }
}
OneCard.contextTypes={
  router: React.PropTypes.object
}
export default OneCard;

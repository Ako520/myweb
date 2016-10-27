[{__v
:
0,
_id
:
"5809a58ec0d05e0fda8028bc",
content
:
"## 显示在react的jsx中无法正常显示的代码(例如换行等)↵昨天在弄自己的博客时候,遇到一个问题。从服务器获取的数据中存在`<br/>`---也就是换行，但是!数据并没有**换行**而是直接显示出来了。怒！这和我想要的效果不一样啊(╯‵□′)╯︵┻━┻↵↵```javascript↵let content="我要换行<br />我要换行"↵//jsx语法↵render () {↵  return(↵    <div>↵      {content}  ↵    </div>↵  )↵}↵```↵将代码放在react中页面显示的是↵↵![让我换行1](http://odp3ysykq.bkt.clouddn.com/%E6%98%BE%E7%A4%BA%E5%9C%A8react%E7%9A%84jsx%E4%B8%AD%E6%97%A0%E6%B3%95%E6%AD%A3%E5%B8%B8%E6%98%BE%E7%A4%BA%E7%9A%84%E4%BB%A3%E7%A0%811.png)↵↵我们想让代码在页面中显示的样子是↵↵![让我换行2](http://odp3ysykq.bkt.clouddn.com/%E6%98%BE%E7%A4%BA%E5%9C%A8react%E7%9A%84jsx%E4%B8%AD%E6%97%A0%E6%B3%95%E6%AD%A3%E5%B8%B8%E6%98%BE%E7%A4%BA%E7%9A%84%E4%BB%A3%E7%A0%812.png)↵↵↵要想解决这种问题就要这样改一下代码↵```javascript↵let content="我要换行<br />我要换行"↵//jsx语法↵render () {↵  return(↵    <div dangerouslySetInnerHTML={{__html:content}}>↵    </div>↵  )↵}↵```↵官方文档介绍了[Dangerously Set innerHTML](https://facebook.github.io/react/tips/dangerously-set-inner-html.html),↵然而看完并没懂啊,这是因为我们不清楚什么是**cross-site scripting (XSS)**攻击↵↵了解更多可以参考[cross-site scripting (XSS)攻击简介](http://www.cnblogs.com/loveis715/archive/2012/07/13/2506846.html)↵↵react之所以不直接读取你的html代码，是为了避免安全问题，如果有人提交了有攻击性的代码到你的数据库里(例如评论)，当数据库读出来数据显示到页面的时候，所有浏览了这个页面的人都可能会被盗取重要的信息。",
createTime
:
"2016-10-21T05:20:14.651Z",
subtitle
:
"昨天在弄自己的博客时候,遇到一个问题。从服务器获取的数据中存在&ltbr />---也就是换行，但是!数据并没有换行而是直接显示出来了。怒！这和我想要的效果不一样啊(╯‵□′)╯︵┻━┻",
title
:
"显示在react的jsx中无法正常显示的代码(例如换行等)"},{
  __v
:
0,
_id
:
"580863b23c1a752c5fb3f8e8",
content
:
"## 今天玩啥捏---利用canvas做的随机小游戏",
createTime
:
"2016-10-20T06:26:58.224Z",
subtitle
:
"自从HTML5画布(Canvas)功能面世后，各种利用canvas和JavaScript的酷炫动画效果就层出不穷。那么绚丽的页面效果以及游戏动画效果的原理是怎样的?<br /><br />游戏地址 : https://ako520.github.io/randomselect/",
title
:
"今天玩啥捏---利用canvas做的随机小游戏"
}]

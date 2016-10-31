import React, { PropTypes } from 'react'
import bg from "../images/404_04.jpg"
class NotFoundPage extends React.Component {
  render () {
    return(
      <div style={{flexGrow:"1",height:"100vh",background:`url(${bg}) no-repeat center`,backgroundSize:"cover",overflow:"hidden"}}>

      </div>
    )
  }
}

export default NotFoundPage;

import React, { PropTypes } from 'react'
import Counter from './Counter.js'
import {Link} from 'react-router'

class Apps extends React.Component {
  render () {
    // const { increment, incrementIfOdd, incrementAsync, decrement, counter } = this.props;
          // <Counter increment={increment} incrementIfOdd={incrementIfOdd} incrementAsync={incrementAsync} decrement={decrement} counter={counter}/>
    return(
      <div style={{paddingLeft:"2rem",paddingTop:"3rem"}}>
        <ul>
            <li><Link to="/items/1">1</Link></li>
            <li><Link to="/items/2">2</Link></li>
            <li><Link to="/items/3">3</Link></li>
            <li><Link to="/items/4">4</Link></li>
        </ul>
      </div>
    )
  }
}

export default Apps;

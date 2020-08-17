import React from 'react'
import ProgressBar from './ProgressBar.jsx'

const DisplayProgressBar = (props) => {
  return (
    <div>
    <div className="header-progress-bar">
    <div className="star-name"> 5 star</div>
    <ProgressBar percentage={props.percentage} />
    <div className="star-percentage">92%</div>
  </div>
  <div className="header-progress-bar">
    <div className="star-name"> 4 star</div>
    <ProgressBar percentage={props.percentage} />
    <div className="star-percentage">92%</div>
  </div>
  <div className="header-progress-bar">
    <div className="star-name"> 3 star</div>
    <ProgressBar percentage={props.percentage} />
    <div className="star-percentage">92%</div>
  </div>
  <div className="header-progress-bar">
    <div className="star-name"> 2 star</div>
    <ProgressBar percentage={props.percentage} />
    <div className="star-percentage">92%</div>
  </div>
  <div className="header-progress-bar">
    <div className="star-name"> 1 star</div>
    <ProgressBar percentage={props.percentage} />
    <div className="star-percentage">92%</div>
  </div>

    </div>

  )
}

  export default DisplayProgressBar;
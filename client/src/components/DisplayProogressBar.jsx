import React from 'react'
import ProgressBar from './ProgressBar.jsx'

const DisplayProgressBar = (props) => {
  console.log("This is all the stars", props.percentage[0])
  // const per = props.percentage[0];
  // console.log("This is 3 stars", per)
  return (
    <div>
      {props.percentage.map( (item, idx) => (
  <div key={idx}>
    <div className="header-progress-bar">
    <div className="star-name"> 5 star</div>
    <ProgressBar percentage={item.five * 5  / item.total_stars * 100} />
    <div className="star-percentage">{Math.round( item.five * 5 / item.total_stars * 100) }%</div>
  </div>
  <div className="header-progress-bar">
    <div className="star-name"> 4 star</div>
    <ProgressBar percentage={item.four * 4 / item.total_stars * 100} />
    <div className="star-percentage">{Math.round( item.four * 4 / item.total_stars * 100) }%</div>
  </div>
  <div className="header-progress-bar">
    <div className="star-name"> 3 star</div>
    <ProgressBar percentage={item.three * 3 / item.total_stars * 100} />
    <div className="star-percentage">{Math.round( item.three * 3 / item.total_stars * 100) }%</div>
  </div>
  <div className="header-progress-bar">
    <div className="star-name"> 2 star</div>
    <ProgressBar percentage={item.two * 2 / item.total_stars * 100} />
    <div className="star-percentage">{Math.round( item.two * 2 / item.total_stars * 100) }%</div>
  </div>
  <div className="header-progress-bar">
    <div className="star-name"> 1 star</div>
    <ProgressBar percentage={item.one / item.total_stars * 100} />
    <div className="star-percentage">{Math.round( item.one / item.total_stars * 100) }%</div>
  </div>

    </div>
      ))}
    </div>



  )
}

  export default DisplayProgressBar;
import React from 'react'
import StarRatingComponent from 'react-star-rating-component';

const RatingSummary = (props) => {
  return (

    <div>
      {props.percentage.map( (item, idx) => (
      <div className="header-star-rating" key={idx}>
        <div className="star-average">{Math.round((item.total_stars / (item.total_reviews*5)) *50) /10 }</div>
        <StarRatingComponent
        className="header-stars"
            name="rate1"
            starCount={5}
            value={Math.round((item.total_stars / (item.total_reviews*5)) *5)}
            starDimension="80px"
          />
      <div className="total-stars">
        {item.total_stars} star ratings
      </div>
      </div>
      ))}
    </div>

  )
}

  export default RatingSummary;
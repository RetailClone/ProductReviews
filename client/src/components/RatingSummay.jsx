import React from 'react'
import StarRatingComponent from 'react-star-rating-component';

const RatingSummary = (props) => {
  return (
    <div className="header-star-rating">
      <div className="star-average">4.9</div>
      <StarRatingComponent
      className="header-stars"
          name="rate1"
          starCount={5}
          value={4}
          starDimension="80px"
        />
     <div className="total-stars">
      21 star ratings
     </div>
    </div>
  )
}

  export default RatingSummary;
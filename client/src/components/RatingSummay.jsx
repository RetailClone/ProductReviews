import React from 'react'
// import StarRatings from 'react-star-ratings';
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
          {/* <StarRatings
          rating={Math.round((item.total_stars / (item.total_reviews*5)) *5)}
          numberOfStars={5}
          name='rate1'
          starDimension="24px"
          starSpacing="0px"
          starRatedColor= "rgb(255, 180, 0)"
          starHoverColor= "rgb(255, 180, 0)"
        /> */}
      <div className="total-stars">
        {item.total_stars} star ratings
      </div>
      </div>
      ))}
    </div>
  )
}

  export default RatingSummary;
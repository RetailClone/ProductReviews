import React from 'react';
import Reviews from './Reviews.jsx'
import moment from 'moment';
import '../styles/styles.css'
import StarRatingComponent from 'react-star-rating-component';

class ReviewList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
      <ul>
        {this.props.reviewTitle.map((item, idx) => (
          <div className="list" key={idx}>
            <div>
              <h4 className="title">
                {item.review_title}
              </h4>
            </div>
       <div className="star">
       <StarRatingComponent
          name="rating"
          starCount={5}
          value={item.rating}
        />
       </div>
        <div className="timebox">
          <span>{item.customer_name}</span>
          <span> - </span>
          <span>{moment(item.date).calendar()}</span>
        </div>
          <div className="itemReview">
            {item.review}
          </div>
          </div>
        ))}
      </ul>
      </div>
    )
  }

}

export default ReviewList;
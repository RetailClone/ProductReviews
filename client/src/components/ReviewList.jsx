import React from 'react';
import Reviews from './Reviews.jsx'
import moment from 'moment';
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
          <div key={idx}>
          <h4>
            {item.review_title}
          </h4>
       <div>
       <StarRatingComponent
          name="rating"
          starCount={5}
          value={item.rating}
        />
       </div>
        <div>{moment(item.date).calendar()}</div>
          <div>
            <h5>{item.customer_name}</h5>
          </div>
          <div>
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